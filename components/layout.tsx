import { useEffect, useState } from 'react'
import { Header, Hero, Marquee, Desktop } from 'components'
import type { Layout as LayoutType } from 'types/components'
import { useRouter } from 'next/router'

function Layout({ heroes, projects, gem, npm, children, className }:LayoutType) {
  const [count, setCount] = useState(0);
  const total = heroes.length - 1;
  const { route } = useRouter();
  const desktop = { heroes, projects, gem, npm };

  useEffect(() => {
    const timer = setInterval(() => setCount(count > 0 ? count - 1 : total), 4000);
    return () => clearInterval(timer);
  });

  return (
    <div className={className}>
      <Header />
      { route === '/' && <Hero hero={heroes[count]} /> }
      { children }
      <Marquee hero={heroes[count]} />
      <Desktop { ...desktop } />
    </div>
  )
}

export { Layout }
