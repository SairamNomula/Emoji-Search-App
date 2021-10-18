import React,{useEffect, useState} from 'react'
import EmojiData from './emojidata.json'
const App = () => {
  const [search,setSearch] = useState('')
  const [data,setData] = useState([]);

  useEffect(()=>{
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
    setData(newData);
},[search])

  return (
    <div>
      <center>
        <h1>Emoji Search App</h1>
        <h4>by Sairam Nomula</h4>
        <input size="30" type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>

        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copied!")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
      </center>
      
    </div>
  );
}

export default App;