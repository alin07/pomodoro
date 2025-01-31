import { useState } from 'react'
import './draggable.css'
const Draggable = (props: { children: any }) => {
  const {
    children
  } = props
  const [isDragging, setIsDragging] = useState(false)
  const [coords, setCoords] = useState<number[]>([])

  const onDrag = (e) => {
    e.stopPropagation()
    e.preventDefault()
    console.log(isDragging)
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x: number = e.clientX - rect.left
    const y: number = e.clientY - rect.top
    console.log(x, y)
    setCoords([x, y])

  }
  return (
    <div
      onMouseDown={(e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsDragging(true)
      }}
      onMouseMove={onDrag}
      onMouseUp={(e) => {
        setIsDragging(false)
        e.preventDefault()
        e.stopPropagation()
      }}
      onMouseLeave={(e) => {
        setIsDragging(false)
        e.preventDefault()
        e.preventDefault()
      }}
      className='draggable'
      style={{ top: coords[1], left: coords[0] }}
    >
      {children}
    </div>
  )
}
export default Draggable