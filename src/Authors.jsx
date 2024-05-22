import React from "react";

const Authors = ({ authors, currentauthors, setCurrentAuthors }) => {
  return (
    <div className="authors-center">
      {authors.map((author) => {
        return (
          <button
            key={author.id}
            className= {author.id === currentauthors? "job-btn active-btn": "job-btn"}
            onClick={() => setCurrentAuthors(author.id)}
          >
            {author.username}
          </button>
        );
      })}
    </div>
  );
};

export default Authors;
