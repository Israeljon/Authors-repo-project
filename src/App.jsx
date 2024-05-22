import React, { useEffect, useState } from 'react';
import Authors from './Authors';
import Card from './Card';
import Loading from './Loading';
import Title from './Title';

const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [authors, setAuthors] = useState ([])
  const [currentauthors, setCurrentAuthors] = useState ([])
  const [isLoading, setIsLoading] = useState (true)



  const fetchAuthors = async () => {
    setIsLoading(true);

    const response = await fetch(url);
    const newAuthors = await response.json();
    setAuthors(newAuthors);

    setIsLoading(false);
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  
  return(
    <section className='container'>
      <Title />
      {/* <BtnContainer authors = {authors}  currentauthors = {currentauthors} /> */}
      <Authors authors = {authors} currentauthors = {currentauthors} setCurrentAuthors = {setCurrentAuthors} />
      <Card currentAuthorId={currentauthors}/>
      
    </section>
  )
};
export default App;





