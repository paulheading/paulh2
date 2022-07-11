import styles from 'styles/components/resume/row.module.scss'
import type { resumeSkills } from 'types/components'
import { Badge } from 'components'

function SkillsRow({ skills }:resumeSkills) { 
  return (
    <div className={styles.row}>
      <div className={styles.title_row}>
        <h3>Skills</h3>
      </div>
      <div className={styles.skills}>
        { skills.map(({ title, score }, index) => <Badge key={'score' + index} color="purple" className={styles.badge}>{ title } { score }</Badge>) }
      </div>
    </div>
  );
}

export { SkillsRow }