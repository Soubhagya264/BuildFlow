import BlurPage from '@/components/global/blur-page';
import { getMedia } from '@/lib/queries';
import React from 'react';
import MediaComponent from '@/components/media'

type Props = {
    params: { subaccountId: string }
}
const Mediapage = async ({ params }: Props) => {
    const data = await getMedia(params.subaccountId)
    return (
        <BlurPage>
        <MediaComponent
          data={data}
          subaccountId={params.subaccountId}
        />
      </BlurPage>
    );
}

export default Mediapage;
