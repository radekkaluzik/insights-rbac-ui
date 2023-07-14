import React, { useState, useEffect, useContext, useRef, Suspense } from 'react';
import { useIntl } from 'react-intl';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { cellWidth, compoundExpand, nowrap, sortable } from '@patternfly/react-table';
import { Button, Stack, StackItem } from '@patternfly/react-core';
import { useScreenSize, isSmallScreen } from '@redhat-cloud-services/frontend-components/useScreenSize';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import Section from '@redhat-cloud-services/frontend-components/Section';
import { createRows } from './role-table-helpers';
import { getBackRoute, mappedProps, removeQueryParams } from '../../helpers/shared/helpers';
import { fetchRolesWithPolicies } from '../../redux/actions/role-actions';
import { TopToolbar, TopToolbarTitle } from '../../presentational-components/shared/top-toolbar';
import { TableToolbarView } from '../../presentational-components/shared/table-toolbar-view';
import PermissionsContext from '../../utilities/permissions-context';
import {
  syncDefaultPaginationWithUrl,
  applyPaginationToUrl,
  isPaginationPresentInUrl,
  defaultAdminSettings,
  defaultSettings,
} from '../../helpers/shared/pagination';
import { syncDefaultFiltersWithUrl, applyFiltersToUrl, areFiltersPresentInUrl } from '../../helpers/shared/filters';
import RoleRowWrapper from './role-row-wrapper';
import AppLink, { mergeToBasename } from '../../presentational-components/shared/AppLink';
import messages from '../../Messages';
import paths from '../../utilities/pathnames';
import './roles.scss';

const Roles = () => {
  const { orgAdmin, userAccessAdministrator } = useContext(PermissionsContext);
  const [selectedRows, setSelectedRows] = useState([]);
  const intl = useIntl();
  const dispatch = useDispatch();
  const textFilterRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const screenSize = useScreenSize();
  const chrome = useChrome();

  const { roles, filters, pagination, isLoading } = useSelector(
    ({
      roleReducer: {
        roles: { data, filters, pagination },
        isLoading,
      },
    }) => ({
      roles: data,
      filters,
      pagination: {
        limit: pagination.limit ?? (orgAdmin ? defaultAdminSettings : defaultSettings).limit,
        offset: pagination.offset ?? (orgAdmin ? defaultAdminSettings : defaultSettings).offset,
        count: pagination.count,
        redirected: pagination.redirected,
      },
      isLoading,
    }),
    shallowEqual
  );

  const columns = [
    { title: intl.formatMessage(messages.name), key: 'display_name', transforms: [cellWidth(20), sortable] },
    { title: intl.formatMessage(messages.description) },
    { title: intl.formatMessage(messages.permissions), cellTransforms: [compoundExpand], transforms: [nowrap] },
    { title: intl.formatMessage(messages.groups), cellTransforms: [compoundExpand], transforms: [nowrap] },
    { title: intl.formatMessage(messages.lastModified), key: 'modified', transforms: [nowrap, sortable] },
  ];
  const fetchData = (options) => dispatch(fetchRolesWithPolicies({ ...options, usesMetaInURL: true, chrome }));

  const isSelectable = orgAdmin || userAccessAdministrator;
  const [filterValue, setFilterValue] = useState(filters.display_name || '');
  const [sortByState, setSortByState] = useState({ index: Number(isSelectable), direction: 'asc' });
  const [expanded, setExpanded] = useState({});
  const orderBy = `${sortByState?.direction === 'desc' ? '-' : ''}${columns[sortByState?.index - Number(isSelectable)].key}`;

  useEffect(() => {
    applyPaginationToUrl(location, navigate, pagination.limit, pagination.offset);
  }, [pagination.offset, pagination.limit, pagination.count, pagination.redirected]);

  useEffect(() => {
    const { limit, offset } = syncDefaultPaginationWithUrl(location, navigate, pagination);
    const { display_name } = syncDefaultFiltersWithUrl(location, navigate, ['display_name'], { display_name: filterValue });
    setFilterValue(display_name);
    chrome.appNavClick({ id: 'roles', secondaryNav: true });
    fetchData({ limit, offset, orderBy, filters: { display_name } });
  }, []);

  useEffect(() => {
    if (!location.pathname.includes('detail')) {
      isPaginationPresentInUrl(location) || applyPaginationToUrl(location, navigate, pagination.limit, pagination.offset);
      filterValue?.length > 0 &&
        !areFiltersPresentInUrl(location, ['display_name']) &&
        syncDefaultFiltersWithUrl(location, navigate, ['display_name'], { display_name: filterValue });
    } else {
      removeQueryParams(location, navigate);
    }
  }, [location.pathname]);

  const actionResolver = (row) =>
    row.compoundParent
      ? []
      : [
          {
            title: intl.formatMessage(messages.edit),
            onClick: (_event, _rowId, role) => navigate(mergeToBasename(paths['edit-role'].link.replace(':roleId', role.uuid))),
          },
          {
            title: intl.formatMessage(messages.delete),
            onClick: (_event, _rowId, role) => navigate(mergeToBasename(paths['remove-role'].link.replace(':roleId', role.uuid))),
          },
        ];

  const toolbarButtons = () =>
    orgAdmin || userAccessAdministrator
      ? [
          <AppLink to={paths['add-role'].link} key="add-role" className="rbac-m-hide-on-sm">
            <Button ouiaId="create-role-button" variant="primary" aria-label="Create role">
              {intl.formatMessage(messages.createRole)}
            </Button>
          </AppLink>,
          ...(isSmallScreen(screenSize)
            ? [
                {
                  label: intl.formatMessage(messages.createRole),
                  onClick: () => navigate(mergeToBasename(paths['add-role'].link)),
                },
              ]
            : []),
          {
            label: intl.formatMessage(messages.edit),
            props: {
              isDisabled: !(selectedRows.length === 1),
            },
            onClick: () => navigate(mergeToBasename(paths['edit-role'].link.replace(':roleId', selectedRows[0].uuid))),
          },
          {
            label: intl.formatMessage(messages.delete),
            props: {
              isDisabled: !selectedRows.length > 0,
            },
            onClick: () =>
              navigate(
                mergeToBasename(
                  paths['remove-role'].link.replace(
                    ':roleId',
                    selectedRows.map(({ uuid }) => uuid)
                  )
                )
              ),
          },
        ]
      : [];

  const setCheckedItems = (newSelection) => {
    setSelectedRows((rows) =>
      newSelection(rows)
        .filter(({ platform_default: isPlatformDefault, admin_default: isAdminDefault, system }) => !(isPlatformDefault || isAdminDefault || system))
        .map(({ uuid, name }) => ({ uuid, label: name }))
    );
  };

  const onExpand = (_event, _rowIndex, colIndex, isOpen, rowData) =>
    setExpanded({ ...expanded, [rowData.uuid]: isOpen ? -1 : colIndex + Number(!isSelectable) });

  const rows = createRows(roles, selectedRows, intl, expanded);

  return (
    <Stack className="rbac-c-roles">
      <StackItem>
        <TopToolbar>
          <TopToolbarTitle title={intl.formatMessage(messages.roles)} />
        </TopToolbar>
      </StackItem>
      <StackItem>
        <Section type="content" id="tab-roles">
          <TableToolbarView
            isSelectable={isSelectable}
            checkedRows={selectedRows}
            textFilterRef={textFilterRef}
            setCheckedItems={setCheckedItems}
            actionResolver={actionResolver}
            columns={columns}
            areActionsDisabled={({ system }) => !!system}
            rowWrapper={RoleRowWrapper}
            rows={rows}
            data={roles}
            filterValue={filterValue}
            fetchData={({ name, limit, offset, orderBy }) => {
              applyFiltersToUrl(location, navigate, { display_name: name });
              return fetchData(mappedProps({ limit, offset, orderBy, filters: { display_name: name } }));
            }}
            setFilterValue={({ name = '' }) => setFilterValue(name)}
            isExpandable
            onExpand={onExpand}
            isLoading={!isLoading && roles?.length === 0 && filterValue?.length === 0 ? true : isLoading}
            pagination={pagination}
            ouiaId="roles-table"
            titlePlural={intl.formatMessage(messages.roles).toLowerCase()}
            titleSingular={intl.formatMessage(messages.role).toLowerCase()}
            toolbarButtons={toolbarButtons}
            filterPlaceholder={intl.formatMessage(messages.name).toLowerCase()}
            tableId="roles"
            sortBy={sortByState}
            onSort={(e, index, direction) => {
              const orderBy = `${direction === 'desc' ? '-' : ''}${columns[index - Number(isSelectable)].key}`;
              setSortByState({ index, direction });
              fetchData(
                mappedProps({
                  limit: pagination.limit,
                  offset: 0,
                  orderBy,
                  filters: { display_name: filterValue },
                })
              );
            }}
          />
          <Suspense>
            <Outlet
              context={{
                // edit & remove role:
                cancelRoute: getBackRoute(paths.roles.link, pagination, filters),
                afterSubmit: () => {
                  fetchData({ ...pagination, offset: 0, filters: { display_name: filterValue } }, true);
                  setSelectedRows([]);
                },
                isLoading,
                // add role:
                pagination,
                filters: { display_name: filterValue },
              }}
            />
          </Suspense>
        </Section>
      </StackItem>
    </Stack>
  );
};

export default Roles;
