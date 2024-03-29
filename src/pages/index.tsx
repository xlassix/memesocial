import { SWRConfig } from 'swr';
import { useSearchMeme } from '@/shared/hooks';
import { MemeView } from '@/components/memeView';

const LandingPage = ({ search }: any) => {
  const { isLoading, data } = useSearchMeme(search);
  return (
    <SWRConfig value={{}}>
      <MemeView isLoading={isLoading} data={data} />
    </SWRConfig>
  );
};

export default LandingPage;
