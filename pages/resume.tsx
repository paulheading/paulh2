import { useEffect } from 'react'
import { getMediumData, getTrelloData, getGemData, getNpmData, getTreehouseData, getSpotifyData } from 'scripts'
import type { Resume } from 'types/pages'

function Resume({ medium, trello, gem, npm, treehouse, spotify }:Resume) {

  useEffect(() => {
    console.log("medium: ", medium);
    console.log("trello: ", trello);
    console.log("gem: ", gem);
    console.log("npm: ", npm);
    console.log("treehouse: ", treehouse);
    // console.log("spotify: ", spotify);
  },[medium,trello,gem,npm,treehouse,spotify]);

  return (
    <div>
      { medium.items.map(({ title }, index) => <div key={index}>{ title }</div>) }
      { trello.map(({ name }, index) => <div key={index}>{ name }</div>) }
    </div>
  )
}

export async function getStaticProps() {
  return { 
    props: {
      medium: await getMediumData(),
      trello: await getTrelloData('roles'),
      gem: await getGemData(),
      npm: await getNpmData(),
      treehouse: getTreehouseData(),
      // spotify: await getSpotifyData(),
    }
  }
}

export default Resume