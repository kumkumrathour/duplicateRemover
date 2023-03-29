import { useState } from 'react'
import './App.css'
function App() {
  const [text,setText]=useState("");
  function handleSubmit(e){
     e.preventDefault();
     setText(e.target[0].value);
    };
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <input type="text" className="bg-slate-200"></input>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 "> summit</button>
     </form>
     <h1>{text}</h1>
    </div>
  )
}

export default App
