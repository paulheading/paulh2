import type { resumeStatus } from 'types/components'

function Status({ dueComplete, due, start }:resumeStatus) {
  // https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
  const date = (target: string) => new Date(target).toLocaleDateString('en-gb',{ year: 'numeric', month: 'short' });
  return <span>{ dueComplete ? `Finished: ${date(due)}` : `Started: ${date(start)}` }</span>;
}

export { Status }