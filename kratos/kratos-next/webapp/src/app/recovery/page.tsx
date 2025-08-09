import { headers } from 'next/headers';
import { RecoveryFlow } from '@ory/client-fetch';
import { redirect } from 'next/navigation';
import { KRATOS_API_URL } from '@/utils/config';
import { kratos } from '@/utils/kratos';
import Recovery from '@/app/recovery/Recovery';

export default async function RecoveryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allCookies = (await headers()).get('cookie') || '';
  const { flow: flowId } = await searchParams;

  let flowData: RecoveryFlow | undefined = undefined;

  if (!flowId) {
    redirect(`${KRATOS_API_URL}/self-service/recovery/browser`);
  } else {
    try {
      const data = await kratos.getRecoveryFlow(
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

  return <>{flowData && <Recovery flowData={flowData} />}</>;
}
