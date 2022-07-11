import parse from 'html-react-parser'
import type { resumeDesc } from 'types/components'

function trimDesc(target: string) {
  const para = target.match(/<p>(.*?)<\/p>/g);

  if (!para) return parse(target)
  
  const array = para[0].slice(3, -4).split(" ");
  const words = array.filter((_, index) => index < 30).join(" ");
  const dots = words.slice(-1) === '.' ? '..' : '...';

  return parse(words + dots)
}

function Desc({ desc, className }:resumeDesc) {
  return <div className={className}>{ trimDesc(desc) }</div>
}

export { Desc }