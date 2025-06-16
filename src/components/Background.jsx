import { supportedWaapiEasing } from "framer-motion"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export default function EdgeParticles() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Engine loaded", engine)
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container)
  }, [])

  const options = {
    background: { color: { value: "#000000" } },
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      color: { value: ["#ffffff", "#000000"] },
      links: { enable: false },
      move: {
        enable: true,
        speed: 0.2,
        random: true,
        outModes: { default: "bounce" }
      },
      number: {
        value: 200,
        density: { enable: true, area: 800 },
      },
      opacity: { 
        value: 1,
        animation: {
          enable: true,
          startValue: "random",
          count: 1,
          speed: 0.4,
          sync: false
        }
      },
      shape: { type: "square" },
      size: { 
        value: { min: 3, max: 7 },
        animation: {
          enable: false
        }
      },
    },
    detectRetina: true,
  }

  return (
    <>
      <Particles
        id="leftPixels"
        init={particlesInit}
        className="absolute top-0 left-0 h-full w-[100vw] z-0"
        options={{
          ...options,
          particles: {
            ...options,
            move: {
              ...options.particles.move,
              direction: "right"
            }
          }
        }}
      />

      <Particles
        id="rightPixels"
        init={particlesInit}
        className="absolute top-0 right-0 h-full w-[30vw] z-0"
        options={options}
      />
    </>
  )
}
