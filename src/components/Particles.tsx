import React from 'react'
import ReactParticles, { HoverMode } from 'react-particles-js'

export default function Particles() {
    return (
        <ReactParticles 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 7,
                color: "#faa8f5a1"
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: true,
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              },
              outMode: 'out'
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: HoverMode.repulse
              }
            }
          }
        }} />
    )
}
