/**
 * Azure OAuth helper for Koder CLI
 */
import { request } from 'gaxios';

export async function getAzureAccessToken(): Promise<string> {
  if (process.env.AZURE_ACCESS_TOKEN) {
    return process.env.AZURE_ACCESS_TOKEN;
  }
  throw new Error(
    'Azure OAuth flow not implemented. Set AZURE_ACCESS_TOKEN environment variable.',
  );
}

export class AzureAuthClient {
  constructor(private token: string) {}

  async request<T>(opts: any): Promise<{ data: T }> {
    const headers = {
      ...(opts.headers || {}),
      Authorization: `Bearer ${this.token}`,
    };
    return request<T>({ ...opts, headers });
  }
}
