// import { Link } from "react-router-dom"
// import {BsSearch} from 'react-icons/bs'
// const Navbar = () => {
//     const user=false
// return(
// <div className="bg-gray-200 ">
// <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
// <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">TrendPulse</Link></h1>
// <div className="flex items-center justify-center space-x-2 ">
//  <p><BsSearch/></p>
//  <input className="px-2 outline-none " placeholder="Search a post" type="text"/>
// </div>
// <div className="flex items-center justify-center space-x-2 md:space-x-4">
//      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
//      {user? <h3>Profiles</h3>:<h3><Link to="/register">Register</Link></h3>}
// </div>
// </div>
// </div>
// )
// }
// export default Navbar


import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
    const [menu,setMenu]=useState(false)

    const showMenu=()=>{
      setMenu(!menu)
    }

  const user = false; // Assuming this is for demonstration purpose

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gray-200">
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">TrendPulse</Link></h1>
        <div className="flex items-center justify-center space-x-2">
      <div className="flex items-center">
        <BsSearch className="mr-2 text-sm" />
        <input className="px-2 py-1 text-sm outline-none" placeholder="Search a post" type="text" />
      </div>
         </div>
        <div className="items-center justify-center hidden space-x-2 md:flex md:space-x-4">
          {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
          {user ? <h3>Profiles</h3> : <h3><Link to="/register">Register</Link></h3>}
        </div>
        <div onClick={showMenu} className="text-lg md:hidden">
             <p><FaBars /></p>
             {menu && <Menu/>}
        </div>
      </div>
      {/* 2nd nav sec */}
      <div></div>
      <div className="flex items-center justify-between px-14 md:px-[200px] py-1 bg-orange-200">
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">NEWS</Link></h1>
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">|</Link></h1>
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">OTT</Link></h1>
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">|</Link></h1>
        <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">THEATRE</Link></h1>
        {/* <div className="items-center justify-center hidden space-x-2 md:flex md:space-x-4">
          {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
          {user ? <h3>Profiles</h3> : <h3><Link to="/register">Register</Link></h3>}
        </div>
        <div onClick={showMenu} className="text-lg md:hidden">
             <p><FaBars /></p>
             {menu && <Menu/>}
        </div> */}
      </div>
    </div>
    
  );
}

export default Navbar;






// // import { Link, useLocation, useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"
// import {BsSearch} from 'react-icons/bs'
// import {FaBars} from 'react-icons/fa'
// import { useContext, useState } from "react"
// // import Menu from "./Menu"
// import { UserContext } from "../context/UserContext"



// const Navbar = () => {
  

    
//   return (
//     <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//     <h1 className="text-lg font-extrabold md:text-xl"><Link to="/">TrendPulse</Link></h1>
//     {/* {path==="/" && <div className="flex items-center justify-center space-x-0">
//     <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
//     <input onChange={(e)=>setPrompt(e.target.value)} className="px-3 outline-none " placeholder="Search a post" type="text"/>
    
//     </div>} */}
//     {/* <div className="items-center justify-center hidden space-x-2 md:flex md:space-x-4">
//       {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
//       {user? <div onClick={showMenu}>
//         <p className="relative cursor-pointer"><FaBars/></p>
//         {menu && <Menu/>}
//       </div>:<h3><Link to="/register">Register</Link></h3>}
//     </div> */}
//     {/* <div onClick={showMenu} className="text-lg md:hidden">
//       <p className="relative cursor-pointer"><FaBars/></p>
//       {menu && <Menu/>}
//     </div> */}

//     </div>
//   )
// }

// export default Navbar 