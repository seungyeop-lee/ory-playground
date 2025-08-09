import { headers } from 'next/headers';
import { kratos } from '@/utils/kratos';
import Dashboard from '@/app/dashboard/Dashboard';

export default async function DashboardPage() {
  const allCookies = (await headers()).get('cookie') || '';

  let logoutUrl: string | undefined = undefined;

  if (allCookies) {
    try {
      const data = await kratos.createBrowserLogoutFlow({ cookie: allCookies });
      logoutUrl = data.logout_url;
    } catch (error) {
      console.error('Error creating logout flow:', error);
      throw error;
    }
  }
  return <>{logoutUrl && <Dashboard logoutUrl={logoutUrl} />}</>;
}
