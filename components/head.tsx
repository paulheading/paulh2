import Head from 'next/head'
import type { Head as HeadType } from 'types/components'

function CustomHead({ title, keywords, desc }:HeadType) {
  return (
    <Head>
      <title>{ title ? title : "Paul Heading | Front End Dev | Portfolio" }</title>
      { keywords && <meta name="keywords" content={ keywords } /> }
      { desc && <meta name="description" content={ desc } /> }      
      <meta name="author" content="Paul Heading" />
    </Head>
  );
}

export {
  CustomHead
}