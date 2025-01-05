import React from 'react'

function Container({ children, className = "" }) {
  return (
    <div className={`px-16 py-12 max-w-[1400px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container 