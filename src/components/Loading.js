import React from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
function Loading() {
  return (
    <div className='spinner'>
      <CircleLoader
        color='green'
        size={200}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Loading
