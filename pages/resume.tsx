import { useEffect } from 'react'
import { getMediumData, getTrelloData, getGemData, getNpmData, getTreehouseData } from 'scripts'
import type { Resume } from 'types/pages'

function Resume({ medium, trello, gem, npm, treehouse }:Resume) {

  useEffect(() => {
    console.log("medium: ", medium);
    console.log("trello: ", trello);
    console.log("gem: ", gem);
    console.log("npm: ", npm);
    console.log("treehouse: ", treehouse);
  },[medium,trello,gem,npm,treehouse]);

  return (
    <div>
      { medium.items.map(({ title }, index) => <div key={index}>{ title }</div>) }
      { trello.projects.cards.map(({ name }, index) => <div key={index}>{ name }</div>) }
    </div>
  )
}

export async function getStaticProps() {
  return { 
    props: {
      medium: await getMediumData(),
      trello: await getTrelloData(),
      gem: await getGemData(),
      npm: await getNpmData(),
      treehouse: getTreehouseData(),
    }
  }
}

export default Resume