import axios from 'axios'
import { playlist } from 'scripts/spotify/variables'
import { pathPlaylist, getToken } from 'scripts/spotify/helpers'

interface source {
  track: {
    name: string
    artists: {
      external_urls: {
        spotify: string
      }
      name: string
    }[]
    album: {
      release_date: string
    }
    external_urls: {
      spotify: string
    }
  }  
}

interface output {
  artist: {
    url: string
    name: string
  }
  release_date: string
  url: string
  name: string
}

const prepTracks = (items:source[]):output[] => 
items.map(({ track }) => {
  const { name, artists, album, external_urls } = track;
  return {
    artist: {
      url: artists[0].external_urls.spotify,
      name: artists[0].name
    },
    release_date: album.release_date,
    url: external_urls.spotify,
    name
  }
})

const getPlaylist = async (target: string | undefined) => {
  const token = await getToken();
  const { data } = await axios.get(pathPlaylist(target), { headers: { Authorization: "Bearer " + token } });
  const { name, owner, description, external_urls, followers, images, tracks } = data;

  return {
    profile: `https://open.spotify.com/user/${owner.display_name}`,
    description,
    url: external_urls.spotify,
    followers: followers.total,
    image: images[0].url,
    name,
    owner: {
      name: owner.display_name,
      url: owner.external_urls.spotify
    },
    tracks: prepTracks(tracks.items)
  }
}

async function getSpotifyData() {
  return {
    _2020: await getPlaylist(playlist._2020)
  }
}

export default getSpotifyData;