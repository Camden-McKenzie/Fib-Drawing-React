import React, { useRef, useEffect } from 'react'
import Point from './point'
import DirectionGenerator from './DirectionGenerator'

const INITRAD = Math.PI / 2;
const ANGLE = Math.PI / Math.E / 2;
const SPEED = 10000;
const LEN = 4
const ZOOM = 0.01;
let frameCount = 0

const Canvas = props => {

  const canvasRef = useRef(null)

  let current = 1;
  let prev = 1;

  let gen = new DirectionGenerator(INITRAD)

  const draw = (ctx, pos) => {
    for (let j = 0; j < SPEED; j++) {
      gen.changeRad(gen.step += ANGLE)
      current = 1
      prev = 1

      for (let i = 0; i < LEN; i++) {

        const temp = current
        current = current + prev
        prev = temp
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
        pos.turn(gen.next(), current)
        ctx.lineTo(pos.x, pos.y)
        ctx.stroke()
      }
    }
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pos = new Point(canvas.width / 2, canvas.height / 2, ZOOM)


    let animationFrameId

    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, pos)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (<div>
    <canvas ref={canvasRef} {...props} />
  </div>)
}


export default Canvas