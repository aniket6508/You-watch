import React from 'react'
import Trending from './Trending';
 function Anime(){
    const names=["1","2","3","4","5","6","7","8","9","10","11","12"];
    return(
    <div className='flex flex-wrap justify-center'>
         {
         names.map(name=>{
        return <Trending text={name}/>
      })}
    </div>
)

 }
 export default Anime;