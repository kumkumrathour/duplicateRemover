import { useState } from 'react'
import './App.css'
function App() {
  const [text,setText]=useState("");
  const [enteredNameIsValid , setEnteredNameIsValid] = useState(true);
  function handleSubmit(e){
     e.preventDefault();
     if(validIn(e.target[0].value) === false){
      setEnteredNameIsValid(false);
      return;
     }
     setEnteredNameIsValid(true);
     setText(e.target[0].value);
     console.log(e.target[0].value);
    };
    const validIn = (value)=> {
        let count = 0;
        for(let i in value){
            if(value[i]==" "){
                count++;
            }
        }
      if (value.trim() === "" || count>0) {
        return false;
      }
      return true;
    }


  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}className="bg-slate-200"></input>
      {!enteredNameIsValid && <p className="">Name must not be empty or not contain any spaces.</p>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 "> summit</button>
     </form>
     <h1>{text}</h1>
    </div>
  )
}
// function validIn(s) {
//   let count = 0;
//   for(let i in s){
//       if(s[i]==" "){
//           count++;
//       }
//   }
// if (s.trim() === "" || count>0) {
//   return false;
// }
// return true;
// }
// console.log(validIn("   "));
// console.log(validIn("kumkum"));
// console.log(validIn("kum  kum"))


export default App
