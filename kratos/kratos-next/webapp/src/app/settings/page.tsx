import { headers } from 'next/headers';
import { SettingsFlow } from '@ory/client-fetch';
import { redirect } from 'next/navigation';
import { KRATOS_API_URL } from '@/utils/config';
import { kratos } from '@/utils/kratos';
import Settings from '@/app/settings/Settigns';

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allCookies = (await headers()).get('cookie') || '';
  const { flow: flowId } = await searchParams;

  let flowData: SettingsFlow | undefined = undefined;

  if (!flowId) {
    redirect(`${KRATOS_API_URL}/self-service/settings/browser`);
  } else {
    try {
      const data = await kratos.getSettingsFlow(
        { id: String(flowId), cookie: allCookies },
        {
          cache: 'no-cache',
        },
      );
      flowData = data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return <>{flowData && <Settings flowData={flowData} />}</>;
}
