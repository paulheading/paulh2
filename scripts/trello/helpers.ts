import showdown from 'showdown'
import { api, list, user } from 'scripts/trello/variables'
import { readmore as readmoreType, prepLabel } from 'types/scripts'

const trello = (target: string) => `${api.base}${target}?key=${api.key}&token=${user.token}`;

const trelloCards = (target: string | undefined = list.hero) => trello(`list/${target}/cards/`);

const trelloList = (target: string | undefined = list.hero) => trello(`lists/${target}`);

const trelloAttachments = (target: string | undefined = list.hero) => trello(`cards/${target}/attachments`);

const trelloActions = (target: string | undefined = list.hero) => trello(`cards/${target}/actions`);

const readmore = (value:readmoreType[] | undefined) => {
  if (value === undefined) return null;
  const result = value.filter(({ name }) => name === "Read more")[0];
  return result !== undefined ? result : null;
}

const prepLabels = (target:prepLabel[]) => {
  if (!target) return null;
  return !target.length ? [{ name: 'Personal', color: 'grey' }] : target.map(({ name, color }) => ({ name, color }));
}

const shuffleArray = (array:[]) => array.sort(() => Math.random() - 0.5);

const removeHero = (name: string) => name && name.replace("Hero: ", "");

const makeHtml = (target: string) => new showdown.Converter().makeHtml(target);

const cardType = (target: string | undefined) => {
  const { pages, roles, projects, education } = list;
  switch (target) {
    case pages: return "pages";
    case roles: return "roles";
    case projects: return "projects";
    case education: return "education";
    default: return "hero";
  }
}

export {
  removeHero,
  makeHtml,
  cardType,
  readmore,
  prepLabels,
  shuffleArray,
  trello,
  trelloCards,
  trelloList,
  trelloAttachments,
  trelloActions
}