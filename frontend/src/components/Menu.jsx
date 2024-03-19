

const Menu = () => {
    const user=true
    return (
        <div className="bg-black w-[150px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-16 rounded-md p-4 space-y-3">
        {!user && <h3 className="text-sm text-white cursor-pointer hover:text-gray-500">Login</h3>}
        {!user &&<h3 className="text-sm text-white cursor-pointer hover:text-gray-500">Register</h3>}
        {user && <h3 className="text-sm text-white cursor-pointer hover:text-gray-500">Profile</h3>}
        {user &&<h3 className="text-sm text-white cursor-pointer hover:text-gray-500">Write</h3>}
        {user && <h3 className="text-sm text-white cursor-pointer hover:text-gray-500">My blogs</h3>}
        {user &&<h3 className="text-sm text-white cursor-pointer hover:text-gray-500">Logout</h3>}
        </div>
    )
}

export default Menu








// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"
// import axios from "axios"
// import { URL } from "../url"
// import { Link, useNavigate } from "react-router-dom"


// const Menu = () => {
// const {user}=useContext(UserContext)
// const {setUser}=useContext(UserContext)
// const navigate=useNavigate()

// const handleLogout=async()=>{
//   try{
//     const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
//     // console.log(res)
//     setUser(null)
//     navigate("/login")

//   }
//   catch(err){
//     console.log(err)
//   }
// }
//   return (
//     <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
//     {!user && <h3 className="text-sm text-white cursor-pointer hover:text-gray-500"><Link to="/login">Login</Link></h3>}
//     {!user &&<h3 className="text-sm text-white cursor-pointer hover:text-gray-500"><Link to="/register">Register</Link></h3>}
//     {user && <h3 className="text-sm text-white cursor-pointer hover:text-gray-500"><Link to={"/profile/"+user._id}>Profile</Link></h3>}
//     {user &&<h3 className="text-sm text-white cursor-pointer hover:text-gray-500"><Link to="/write">Write</Link></h3>}
//     {user && <h3 className="text-sm text-white cursor-pointer hover:text-gray-500"><Link to={"/myblogs/"+user._id}>My blogs</Link></h3>}
//     {user &&<h3 onClick={handleLogout} className="text-sm text-white cursor-pointer hover:text-gray-500">Logout</h3>}

//     </div>
//   )
// }

// export default Menu