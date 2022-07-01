import axios from 'axios'

async function getNpmData() {
  const { data } = await axios.get("https://api.npms.io/v2/package/barbican-reset", { headers: { Accept: "application/json" } });
  const { npm, metadata } = data.collected;
  const { name, links, version } = metadata;
  const { downloads } = npm;

  return {
    downloads: downloads[5].count,
    name,
    url: links.npm,
    version
  }
}

export default getNpmData;

