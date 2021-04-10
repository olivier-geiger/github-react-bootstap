import React from 'react'

function Message ( {message} ) {
  return (
    <div className="alert alert-success mx-3" role="alert">
      Il y a {message} {message > 2 ? 'résultats' : 'résulat'}
    </div>
  )
}

export default Message; 
