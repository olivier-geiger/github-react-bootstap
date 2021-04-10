import React from 'react'

function ReposResults( {...repo}) {  
  return (
      <div className="card">
        <img src={repo.owner.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{repo.language}</h5>
          <p className="card-text">{repo.description}</p>
        <a href={repo.html_url} className="btn btn-primary">Lien</a>
        </div>
      </div>
  )
}

export default ReposResults;
