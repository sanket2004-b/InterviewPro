import "./index.css";

import {useUser} from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
 
  const {isSignedIn,isLoaded}=useUser();

  if(!isLoaded){
    return null;
  }

  return (
    <>
    <Routes>
       <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/"} />} />
    </Routes>
    </>
    
  )
}

export default App
