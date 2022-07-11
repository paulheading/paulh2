import { getLayoutData, getTrelloData } from 'scripts'
import styles from 'styles/pages/about.module.scss'
import { Layout, CustomHead as Head } from 'components'
import type { About as AboutType } from 'types/pages'
import { about } from 'scripts/seo'
import parse from 'html-react-parser'

function About(props:AboutType) {
  const { pages } = props;
  const page = pages.filter(page => page.name === 'About')[0];
  
  return (
    <Layout { ...props }>
      <Head {...about} />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h1>{ page.name }</h1>
          { parse(page.desc) }
        </div>
      </div>
    </Layout>    
  )
}

export async function getStaticProps() {  
  return { 
    props: {
      ...await getLayoutData(),
      pages: await getTrelloData('pages'),
    }
  }
}

export default About