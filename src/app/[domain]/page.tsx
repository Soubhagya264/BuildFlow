import { getDomainContent } from '@/lib/queries'
import React from 'react'
import { notFound, redirect } from "next/navigation";
import { db } from '@/lib/db';
import EditorProvider from '@/providers/editor/editor-provider';
import FunnelEditor from '@/app/(main)/subaccount/[subaccountId]/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor';
const page = async ({ params }: { params: { domain: string } }) => {
  const domain_data = await getDomainContent(params.domain.slice(0, -1))
  if (!domain_data) notFound();
  const pageData = domain_data.FunnelPages.find((page) => !page.pathName);
  if (!pageData) notFound();
  await db.funnelPage.update({
    where: {
      id: pageData.id,
    },
    data: {
      visits: {
        increment: 1
      }
    }
  })

  return (
    <EditorProvider
      subaccountId={domain_data.subAccountId}
      pageDetails={pageData}
      funnelId={domain_data.id}
    >
      <FunnelEditor
        funnelPageId={pageData.id}
        liveMode
      />
    </EditorProvider>
  )
}

export default page
