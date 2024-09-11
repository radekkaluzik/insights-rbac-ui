import { getWorkspacesApi } from '../shared/user-login';

const workspacesApi = getWorkspacesApi();

export async function getWorkspaces() {
  return await workspacesApi.listWorkspaces();
}
