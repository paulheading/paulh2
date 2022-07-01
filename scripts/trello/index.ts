import axios from 'axios'
import { list } from 'scripts/trello/variables'
import { removeHero, makeHtml, cardType, prepLabels, readmore, trelloCards, trelloAttachments, trelloActions, trelloList } from 'scripts/trello/helpers'
import type { attachmentData, trelloSvg, trelloCard } from 'types/scripts'

const { pages, projects, roles, education } = list;

async function getTrelloList(target?: string) {
  const { data } = await axios.get(trelloList(target), { headers: { Accept: 'application/json' } });
  const { name, id } = data;
  return { name, id };
}

const getTrelloAttachments = async (target: string | null) => {
  if (target) {
    const { data }: attachmentData = await axios.get(trelloAttachments(target));
    return data.map(({ id, name, url }) => {
      return { id, name, url }
    });    
  }
}

const getTrelloActions = async (target: string | null) => {
  if (target) {
    const { data } = await axios.get(trelloActions(target));
    return data;    
  }
}

const getTrelloSvgs = (target:trelloSvg[]) => {
  if (target && target.length) { 
    const svg = target.filter(({ data }) => {
      const { text } = data;
      if (text && text.startsWith("`<svg")) {
        return true;
      }      
    });
    if (svg.length) {
      return svg[0].data.text.slice(1,-1);
    }
  }
  return null;
};

async function getTrelloCards(target?:string) {
  const { data } = await axios.get(trelloCards(target), { headers: { Accept: 'application/json' } });
  const type = cardType(target);

  const result = data.map(async ({ desc, name, start, due, dueComplete, id, labels }:trelloCard) => {
    const attachments = await getTrelloAttachments(id);
    const actions = await getTrelloActions(id);
    const more = readmore(attachments);
    
    return {
      svg: type === "projects" ? getTrelloSvgs(actions) : null,
      marquee: removeHero(name),
      attachments,
      actions,
      more,
      desc: makeHtml(desc),
      name,
      start,
      due,
      dueComplete,
      id,
      labels: prepLabels(labels)
    };
  });

  return await Promise.all(result);
}

async function getTrelloData() {
  return {
    pages: {
      cards: await getTrelloCards(pages)
    },
    projects: {
      cards: await getTrelloCards(projects)
    },
    roles: {
      cards: await getTrelloCards(roles)
    },
    education: {
      cards: await getTrelloCards(education)
    },
  }
}

export default getTrelloData;

