import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
import { URL } from "../url"
import { useEffect, useState } from "react"
// import TriNav from "../components/TriNav"



const Home = () => {

  const [posts,setPosts]=useState([])


// after all backend posts tests passed 
// frontend connection fetching done here
const fetchPosts=async()=>{
  try{
    const res=await axios.get(URL+"/api/posts/")
    console.log(res.data)
    setPosts(res.data)
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  fetchPosts()
},[])

  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-2 md:px-[200px]"> 
        <br/>
        <br/>
        <br/>
        <br/>
        {posts.map((post)=>(
          <HomePost key={post._id} post={post}/>
        ))}
        {/* <HomePost/>
        <HomePost/>
        <HomePost/> */}
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Home


