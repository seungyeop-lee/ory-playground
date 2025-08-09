import { headers } from 'next/headers';
import { LoginFlow } from '@ory/client-fetch';
import { redirect } from 'next/navigation';
import { KRATOS_API_URL } from '@/utils/config';
import { kratos } from '@/utils/kratos';
import Login from '@/app/login/Login';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allCookies = (await headers()).get('cookie') || '';
  const { flow: flowId } = await searchParams;

  let flowData: LoginFlow | undefined = undefined;

  if (!flowId) {
    redirect(`${KRATOS_API_URL}/self-service/login/browser`);
  } else {
    try {
      const data = await kratos.getLoginFlow(
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

  return <>{flowData && <Login flowData={flowData} />}</>;
}
