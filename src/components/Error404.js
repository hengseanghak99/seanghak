import React from "react";
import { useSpring, animated,config, to } from "@react-spring/web";
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture';
import styles from './styles.module.css'

const Error404 = () => {
  // direction calculates pointer direction
  // memo is like a cache, it contains the values that you return inside "set"
  // this way we can inject the springs current coordinates on the initial event and
  // add movement to it for convenience
  const [{ pos }, api] = useSpring(() => ({ pos: [150,10] }))
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }))
  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      })

      if (dist(xy, previous) > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) })
    },
    { initial: () => pos.get() }
  )

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
      <animated.div
      className={styles.rocket}
      {...bind()}
      style={{
        transform: to(
          [pos, angle],
          // @ts-ignore
          ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
        ),
      }}
    />
        <h1 className="text-9xl font-extrabold text-stone-400">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-stone-400">Forbidden</h2>
        <p className="mt-2 text-lg text-gray-500">
          Oops! It looks like you've ventured into the wrong place.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-5 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Back to my Portfolio
        </a>
      </div>
    </div>
  );
};

export default Error404;
