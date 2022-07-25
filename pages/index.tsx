import { getLayoutData } from 'scripts'
// import styles from 'styles/pages/home.module.scss'
import type { homePage } from 'types/pages'
import { Layout, CustomHead as Head } from 'components'
import { home } from 'scripts/seo'

function Home(props:homePage) {  
  return (
    <Layout { ...props }>
      <Head {...home} />
    </Layout>    
  )
}

export async function getStaticProps() {  
  return { 
    props: {
      ...await getLayoutData()
    }
  }
}

export default Home
