import React from "react";
import {useState} from "react";
import { useLocation } from "react-router-dom";
 export function Page2() {
  const location=useLocation()
  const str = location.state.data;
  const [chars, setChars] = useState(str.split(""));
//   function getfilter(index){
//     let arr = [];
//     for(let i =0;i<chars.length;i++){
//         if (chars[i]!=chars[index] || i == index)
//         arr.push(chars[i])
//     }
//     console.log(arr)
//     if(arr.length==chars.length){
//     console.log('no duplicates')
//         return arr
//     }
//     // str = arr
//     return arr;
// }

   function deleteHandler(char,index){
    // let newarr = getfilter(index)
    let newArr = chars.filter((c,i)=>c !==char || i===index)
    console.log(newArr);
    setChars(newArr);
  }
  return (
    <div className="flex flex-wrap justify-center">
      {chars.map((char, index) => (
        <div key={index} className="relative m-6 w-32 h-32 bg-orange-200 rounded-md shadow-md hover:shadow-lg" >
          <div className="absolute top-0 right-0 m-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600 hover:bg-red-500 text-white" onClick={()=>deleteHandler(char,index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="text-5xl font-bold">{char}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
// let arr = ["p","r","i","y","a","p"];
// let ans = filterFunction(arr);
// console.log(ans);
// function filterFunction(arr){
//     let val = [];
//     for(let i = 0 ; i<arr.length ;i++){
//     if(val.indexOf(arr[i])===-1){
//       val.push(arr[i]);
//     }
//     }
//     return val;
// }
