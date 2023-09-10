import React from 'react';

function Trending(props) {
  return (
    <div className='p-3 m-6'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 flex-shrink-0">
      <img className="w-full" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg" alt="Anime "/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Anime name</div>
        <p className="text-gray-700 text-base">
      {props.text}
        </p>
        <button className=' bg-green-500 text-white px-4 py-3 rounded-md'>Play Now</button>
  </div>
</div>
    </div>
  )
}

export default Trending