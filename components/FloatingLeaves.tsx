'use client'

const leaves = [
  { src: '/image/t.webp', size: 140, x: '5%', y: '10%', rotate: -20 },
  { src: '/image/t.webp', size: 90, x: '85%', y: '15%', rotate: 25 },
  { src: '/image/t.webp', size: 140, x: '10%', y: '75%', rotate: 10 },
  { src: '/image/t.webp', size: 100, x: '75%', y: '70%', rotate: -30 },
  { src: '/image/t (3).webp', size: 80, x: '92%', y: '86%', rotate: 345 },
  { src: '/image/t.webp', size: 95, x: '60%', y: '40%', rotate: 18 },
]

export function FloatingLeaves() {
  return (
    <>
      {leaves.map((leaf, i) => (
        <img
          key={i}
          src={leaf.src}
          alt=""
          className="absolute pointer-events-none select-none 
            dark:brightness-75 dark:contrast-125"
          style={{
            width: `${leaf.size}px`,
            left: leaf.x,
            top: leaf.y,
            transform: `rotate(${leaf.rotate}deg)`
          }}
        />
      ))}
    </>
  )
}