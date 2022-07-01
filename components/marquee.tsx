
interface Marquee {
  count: number
}

const Marquee = ({ count }:Marquee) => {
  return (
    <div>
      Marquee: { count }
    </div>
  )
}

export { Marquee }
