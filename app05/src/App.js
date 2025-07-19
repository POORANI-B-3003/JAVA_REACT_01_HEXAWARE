import { useState } from "react";
import { MyContext } from "./MyContext";
import BCard from "./BCard";
 
const App=()=>
{
 
 
 
  let [age,SetName]=useState(21)
  let [name,setName]=useState("Ajay")
 
  return(<>
 
 
  <MyContext.Provider value={{age,name}}>
 
<BCard/>
 
  </MyContext.Provider>
 
 
 
 
 
 
  </>)
}
 
export default App;