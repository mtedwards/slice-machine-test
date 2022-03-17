import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices/index'

export default function Homepage({ page }) {
  console.log({page})
  return (
    <div>
      <h1>{page.uid}</h1>
      <h1>{page.data.title}</h1>
      <SliceZone
        slices={page.data.slices}
        components={components}
      />
    </div>

  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: { page },
  }
}