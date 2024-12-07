import React, { useEffect, useState } from 'react'
import Card from './Card'


const Newsapp = () => {

  const [search,setSearch]=useState('India');
  const [newsData,setNewsData]=useState(null);

  const API_KEY="df2affb88a52414189fe30e291b9f4ed"

  const getData = async() =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    let dt = jsonData.articles.slice(0,10)
    setNewsData(dt)
    
}

useEffect(()=>{
    getData()
},[])

const handleInput = (e) =>{
    console.log(e.target.value);
    setSearch(e.target.value)
    
}
const userInput = (event) =>{
    setSearch(event.target.value)
}

return (
<div>
    <nav>
        <div>
            <h1>Blinknewz</h1>
        </div>
        <ul style={{display:"flex", gap:"11px"}}>
            <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
            <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

        </ul>
        <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
    </nav>
    <div>
      <marquee>
      <p className='head'>Stay Updated with Blinknewz</p>
      </marquee>
        
    </div>
    <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
    </div>

    <div>
    {newsData?  <Card data={newsData}/> : null}
        
    </div>
</div>
)
}

export default Newsapp