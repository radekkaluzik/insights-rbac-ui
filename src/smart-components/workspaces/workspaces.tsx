import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkspaces } from '../../redux/actions/workspaces-actions';
import messages from '../../Messages';
import { ContentHeader } from '@patternfly/react-component-groups';
import { PageSection } from '@patternfly/react-core';
import { DataView, DataViewTable, DataViewTh, DataViewTrTree, useDataViewSelection } from '@patternfly/react-data-view';
import { Workspace } from '../../redux/reducers/workspaces-reducer';
import { RBACStore } from '../../redux/store';

const Workspaces = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const selection = useDataViewSelection({ matchOption: (a, b) => a.id === b.id });

  const { isLoading, workspaces, error } = useSelector((state: RBACStore) => state.workspacesReducer);

  useEffect(() => {
    dispatch(fetchWorkspaces()); // Načtení dat při prvním renderu
  }, [dispatch]);

  const buildRows = (workspaces: Workspace[]): DataViewTrTree[] =>
    workspaces.map((workspace) => ({
      row: [workspace.name, workspace.description],
      id: workspace.id, // unique ID for each row
      ...(workspace.children
        ? {
            children: buildRows(workspace.children), // build rows for children
          }
        : {}),
    }));

  const rows: DataViewTrTree[] = buildRows(workspaces);

  const columns: DataViewTh[] = ['Name', 'Description'];

  return (
    <React.Fragment>
      <ContentHeader
        title={intl.formatMessage(messages.workspaces)}
        subtitle={intl.formatMessage(messages.workspacesSubtitle)}
        linkProps={{
          label: intl.formatMessage(messages.workspacesLearnMore),
          isExternal: true,
          // TODO: URL to be provided by UX later on
          href: '#',
        }}
      />
      <PageSection>
        {isLoading && <p>Handle Loading State Here...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
          <DataView selection={selection}>
            <DataViewTable isTreeTable aria-label="Repositories table" ouiaId={'ouiaId'} columns={columns} rows={rows} />
          </DataView>
        )}
      </PageSection>
    </React.Fragment>
  );
};

export default Workspaces;
