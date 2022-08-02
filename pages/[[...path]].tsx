import '../lib/makeswift/register-components'

import {
  Page as MakeswiftPage,
  type PageProps as MakeswiftPageProps,
} from '@makeswift/runtime/next'

export { getStaticPaths, getStaticProps } from '@makeswift/runtime/next'

export default function Page(props: MakeswiftPageProps) {
  return (
    <>
      This is some text so Lighthouse has some content to measure.
      <MakeswiftPage {...props} />
    </>
  )
}
