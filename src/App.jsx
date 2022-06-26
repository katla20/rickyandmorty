import { useEffect } from 'react';

function app(){

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data);
    }
    fetchData()
      
  },[])
  return(
    <h1>holaa</h1>
  )
}
export default app
