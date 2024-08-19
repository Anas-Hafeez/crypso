
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [likes , setlikes]= useState(0);
 
  function inlikes(){
    setlikes(likes+1);
    console.log(likes);
   
  }
  return (
    <div>
  <Navbar></Navbar>
  <button onClick={inlikes} className="w-[150px] m1-5 bg-yellow-200">like</button>
  <h2>{likes}</h2>
  </div>
  );
  
   
  
}

export default App;
                             