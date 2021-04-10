import React from 'react'

function Form( {search, setSearch, doSubmit, errorEmpty, errorLength} ) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (search === '') {
      errorEmpty()
    }
    else if (search.length < 3) {
      errorLength()
    }
    else {
      doSubmit();
    }
  }

  return (
    <form className="m-3"
      onSubmit={handleSubmit}
    >
    <div className="form-group">
      <input className="form-control" 
        value={search}
        placeholder="search github repo..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </form>
  )
}

export default Form;
