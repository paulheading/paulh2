import { useState, useEffect } from 'react'
import { Hero, Marquee } from 'components'
import type { Layout as LayoutType } from 'types/components'

const Layout = ({ children }:LayoutType) => {
  const [count, setCount] = useState(0);
  const total = 4;

  useEffect(() => {
    const timer = setInterval(() => setCount(count > 0 ? count - 1 : total), 4000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Hero count={count} />
      { children }
      <Marquee count={count} />
    </div>
  )
}

export { Layout }
