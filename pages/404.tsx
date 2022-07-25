import { getLayoutData } from 'scripts'
import styles from 'styles/pages/notfound.module.scss'
import { Layout, CustomHead as Head } from 'components'
import type { notfoundPage } from 'types/pages'
import { notfound } from 'scripts/seo'

function NotFound(props:notfoundPage) {
  return (
    <Layout { ...props }>
      <Head {...notfound} />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h1>Page Not Found 🤬</h1>
          <h4>uh oh! where da page gone?</h4>
        </div>
      </div>
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

export default NotFound