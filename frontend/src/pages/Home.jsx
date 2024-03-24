import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
import { URL } from "../url"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// import TriNav from "../components/TriNav"



const Home = () => {

  const {search}=useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)


// after all backend posts tests passed 
// frontend connection fetching done here
const fetchPosts=async()=>{
  try{
    const res=await axios.get(URL+"/api/posts/"+search)
    console.log(res.data)
    setPosts(res.data)
    if(res.data.length==0){
      setNoResults(true)
    }
    else{
      setNoResults(false)
    }
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  fetchPosts()
},[search])

  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-8 md:px-[200px] min-h-[80vh]"> 
        <br/>
        <br/>
        <br/>
        <br/>
        {!noResults?posts.map((post)=>(
          <HomePost key={post._id} post={post}/>
        )):<h3 className="mt-32 font-bold text-center ">No posts available!</h3>}
        {/* <HomePost/>
        <HomePost/>
        <HomePost/> */}
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Home


