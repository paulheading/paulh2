import { getLayoutData, getTrelloData, getTreehouseData, getMediumData } from 'scripts'
import styles from 'styles/pages/resume.module.scss'
import { Layout, CustomHead as Head } from 'components'
import type { Resume as ResumeType } from 'types/pages'
import { resume } from 'scripts/seo'
import { Row, NameRow, BioRow, SkillsRow } from 'components/resume/row'

function Resume(props:ResumeType) {
  const { pages, projects, roles, education, skills, articles } = props;
  const biography = pages.filter(page => page.name === 'Biography')[0];
  const projectsRow = { cards: projects, articles };
  const rolesRow = { cards: roles, articles };
  const educationRow = { cards: education, articles };

  return (
    <Layout { ...props }>
      <Head { ...resume } />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.page}>

            <NameRow />

            <BioRow { ...biography } />

            <Row title="Projects" { ...projectsRow } />
            
            <Row title="Roles" { ...rolesRow } />

            <SkillsRow skills={ skills } />

            <Row title="Education" { ...educationRow } />

          </div>
        </div>
      </div>
    </Layout>    
  )
}

export async function getStaticProps() {  
  return { 
    props: {
      ...await getLayoutData(),
      roles: await getTrelloData('roles'),
      education: await getTrelloData('education'),
      pages: await getTrelloData('pages'),
      articles: await getMediumData(),
      skills: getTreehouseData()
    }
  }
}

export default Resume