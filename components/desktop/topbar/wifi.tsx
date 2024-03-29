import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface desktopWifi {
  count: number
}

function Wifi({ count }:desktopWifi) {
  const wifi = useRef<null | SVGSVGElement>(null);
  useEffect(() => {
    if (!wifi.current) return;
    const tl = gsap.timeline();
    const target = wifi.current;
    const { children } = target;
    const low = children[0];
    const medium = children[1];
    const high = children[2];
    tl.set([low, medium, high], { opacity: 1 })
      .set([high, medium], { delay: 0.5, stagger: 0.5, opacity: 0.5 })
      .set([medium, high], { delay: 0.5, stagger: 0.5, opacity: 1 })
      .set(high, { delay: 0.5, opacity: 0.5 });
  }, [count]);
  return (
    <svg ref={wifi} xmlns="http://www.w3.org/2000/svg" fill="#072f23" viewBox="0 0 40 40" height="40" width="40">
      <path className="low" d="M15,28.3l5,5l5-5C22.2,25.6,17.8,25.6,15,28.3z" />
      <path className="medium" d="M8.3,21.7l3.3,3.3c4.6-4.6,12.1-4.6,16.7,0l3.3-3.3C25.2,15.2,14.8,15.2,8.3,21.7z" />
      <path className="high" d="M1.7,15L5,18.3c8.3-8.3,21.7-8.3,30,0l3.3-3.3C28.2,4.9,11.8,4.9,1.7,15z" />
    </svg>
  )
}

export { Wifi }
