import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { Page2 } from './page2';

function App() {
  const [text,setText]=useState("");
  const [enteredNameIsValid , setEnteredNameIsValid] = useState(true);
  const navigate = useNavigate();
   const [oldSearch,setOldSearch] =useState([]);

   function getsaveData(){
     let data = JSON.parse(localStorage.getItem('newArr'));
     console.log(data);
     return data ? data: [];
   }
    useEffect(() => {
         setOldSearch(getsaveData())
    }, []);
  //  const  id = text;
  //  function goToPage2(){
  //   navigate("")
  //  }
  function handleSubmit(e){
     e.preventDefault();

     if(validIn(e.target[0].value) === false){
      setEnteredNameIsValid(false);
      return;
     }
     setEnteredNameIsValid(true);
     const newArr = [...oldSearch,e.target[0].value];
     console.log("hello");
     console.log(newArr);
     localStorage.setItem('newArr',JSON.stringify(newArr));
     setOldSearch(newArr);
     setText(e.target[0].value);
     console.log(e.target[0].value);

     navigate('Page2',{state:{data:text}})
    };
    
    // if(oldSearch===" "){
    //   oldSearch.map(item=> console.log(item));
    // }
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
    <div className='flex justify-center items-center h-screen w-full bg-gradient-to-b from-red-400 to-red-500'>
    <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
     <form onSubmit={handleSubmit}>
      <h1 className='text-4xl black text-center font-semibold '>Login</h1>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} className="bg-slate-200 border text-base px-2 py-1 mt-5 focus:outline-none focus:ring-0 focus:border-gray-600 " placeholder='Enter Username...'></input>
      <div>{!enteredNameIsValid && <p className="">Name must not be empty or not contain any spaces.</p>}</div>
      
      <div className='' >
        {oldSearch.length >0 ? (
          <ul>
            {oldSearch.map((search)=><li>{search}</li>)}
          </ul>
        ):(<p>No previous value</p>)}
      </div>

      <div className='mt-5'>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700
       text-white  py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold ml-4 border-2"> submit</button>
      </div>
     </form>
    </div>




    </div>
  )
}
// function OldSearches() {
//   return (
//     <div className='mt-5'>
//       <h2>Recent searches</h2>
//       <ul>
//         <li>Sarch 1</li>
//         <li>Sarch 1</li>
//         <li>Sarch 1</li><li>Sarch 1</li>
//         <li>Sarch 1</li>
//       </ul>
//     </div>
//   );
// }
// function OldSearches() {
//   const [searches, setSearches] = useState([]);

//   useEffect(() => {
//     const searchesFromLocalStorage = localStorage.getItem('searches');
//     if (searchesFromLocalStorage) {
//       setSearches(JSON.parse(searchesFromLocalStorage));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('searches', JSON.stringify(searches));
//   }, [searches]);

//   return (
//     <div className="mt-5">
//       <h2>Recent searches</h2>
//       <ul>
//         {searches.map((search, index) => (
//           <li key={index}>{search}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


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
