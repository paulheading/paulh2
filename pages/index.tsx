import { getLayoutData } from 'scripts'
import styles from 'styles/pages/home.module.scss'
import type { Home as HomeType } from 'types/pages'
import { Layout, CustomHead as Head } from 'components'
import { home } from 'scripts/seo'

function Home(props:HomeType) {  
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
