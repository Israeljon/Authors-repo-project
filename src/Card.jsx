import React, { useEffect, useState } from "react";
import Loading from './Loading';
const Card = ({ currentAuthorId }) => {
  const [author, setAuthor] = useState({});
  const [photo, setPhoto] = useState({});
  const [posts, setPosts] = useState({});
  const [isLoading, setIsLoading] = useState (true)

  const fetchAuthor = async (id) => {
    setIsLoading(true);
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const newAuthor = await response.json();
    setAuthor(newAuthor);

    setIsLoading(false);
  };
  const fetchPhoto = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const response = await fetch(url);
    const newPhoto = await response.json();
    setPhoto(newPhoto);
  };
  const fetchPosts = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const newPosts = await response.json();
    setPosts(newPosts);
  };

  useEffect(() => {
    fetchAuthor(currentAuthorId);
    fetchPhoto(currentAuthorId);
    fetchPosts(currentAuthorId);
  }, [currentAuthorId]);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="fixed">
       <img src={photo.url} alt="Author profile pics"  className="img"/>
       
      <div className="body-fixed">
        <h1 className="rapper">{posts.title}</h1>
        <p className="space">{posts.body}</p>
        <h3 className="third-element">created by :{author.username}</h3>
      </div>
    </div>
  );
};

export default Card;
