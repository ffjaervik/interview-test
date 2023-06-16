import React from 'react'

export default function Score({xScore, oScore}) {
  return (
    <div className='players-info'>
        <p>
         X matches won: {xScore}
      </p>
      <p>
         O matches won: {oScore}
      </p>
    </div>
  )
}
