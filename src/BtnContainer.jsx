import React from 'react'

const BtnContainer = ({authors, currentauthors, setCurrentAuthors}) => {
  return (
    <div className='btn-container'>
        {authors.map((author, index) => {
       return(
        <button key={author.id} className="job-btn" onClick={()=> setCurrentAuthors (index) }>
            {author.username}
        </button>
       )
      })}
    </div>
  )
}

export default BtnContainer