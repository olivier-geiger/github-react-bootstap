import React from 'react'

import ReposResults from './ReposResults';

function Repos( {repos}) {
  return (
    <div>
      {
        repos.map(repo => 
          <ReposResults 
            key={repo.id}
            {...repo}
          />
        )
      }
    </div>
  )
}

export default Repos;
