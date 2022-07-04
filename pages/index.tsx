import { getTrelloData, getGemData, getNpmData } from 'scripts'
import styles from 'styles/pages/home.module.scss'
import type { Home as HomeType } from 'types/pages'
import { Layout, CustomHead as Head } from 'components'
import { home } from 'scripts/seo'

function Home(props:HomeType) {  
  return (
    <Layout { ...props } className={styles.container}>
      <Head {...home} />
    </Layout>    
  )
}

export async function getStaticProps() {
  return { 
    props: {
      heroes: await getTrelloData('heroes'),
      projects: await getTrelloData('projects'),
      gem: await getGemData(),
      npm: await getNpmData(),
    }
  }
}

export default Home
