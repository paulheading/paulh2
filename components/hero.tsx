
interface Hero {
  count: number
}

const Hero = ({ count }:Hero) => {
  return (
    <div>
      Hero: { count }
    </div>
  )
}

export { Hero }
