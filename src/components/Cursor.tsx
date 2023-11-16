import React, { useState, useEffect } from 'react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleCursorMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleCursorMove)

    return () => {
      document.removeEventListener('mousemove', handleCursorMove)
    }
  }, [])

  return (
    <div
      className="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}

export default Cursor
