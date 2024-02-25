import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'


const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-black md:text-3xl">10 uses of AI in daily in this days of human lives</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@DLHQ.DEV</p>
            <div className="flex space-x-2">
                <p>16/06/2023</p>
                <p>16:45</p>
            </div>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbnTZs4YLKIt3eAelwShiBMkZtyWELWz1Dg&usqp-CAU" className="w-full mx-auto mt-8" alt=""/>
            <p className="mx-auto mt-8"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex items-center justify-center space-x-2">
                 <div className="px-3 py-1 bg-gray-300 rounded-lg">Tech</div>
                 <div className="px-3 py-1 bg-gray-300 rounded-lg">AI</div>
                 </div>
                 </div>
                 <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
                    {/* comment */}
                       <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg" >
                       <div className="flex items-center justify-between">
                         <h3 className="font-bold text-gray-600">@snehashish</h3>
                         <div className="flex items-center justify-center space-x-4">
                            <p className="text-sm text-gray-500">16/06/2023</p>
                            <p className="text-sm text-gray-500">16:45</p>
                            <div className="flex items-center justify-center space-x-2">
                                   <p><BiEdit/></p>
                                   <p><MdDelete/></p>
                             </div>
                         </div>
                         </div>
                         <p className="px-4 mt-2">Nice information</p>
                         </div>

                         <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg" >
                       <div className="flex items-center justify-between">
                         <h3 className="font-bold text-gray-600">@snehashish</h3>
                         <div className="flex items-center justify-center space-x-4">
                            <p className="text-sm text-gray-500">16/06/2023</p>
                            <p className="text-sm text-gray-500">16:45</p>
                            <div className="flex items-center justify-center space-x-2">
                                   <p><BiEdit/></p>
                                   <p><MdDelete/></p>
                             </div>
                         </div>
                         </div>
                         <p className="px-4 mt-2">Nice information</p>
                         </div>
                       </div>
                       {/* write a comment */}
                       <div className="flex flex-col mt-4 md:flex-row">
                         <input type="text" placeholder="write a comment" className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"/>
                         <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
                       </div>
            </div>
        <Footer/>
    </div>
  )
}

export default PostDetails










































// import { useNavigate, useParams } from "react-router-dom"
// import Comment from "../components/Comment"
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
// import {BiEdit} from 'react-icons/bi'
// import {MdDelete} from 'react-icons/md'
// import axios from "axios"
// import { URL,IF } from "../url"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../context/UserContext"
// import Loader from "../components/Loader"


// const PostDetails = () => {

//   const postId=useParams().id
//   const [post,setPost]=useState({})
//   const {user}=useContext(UserContext)
//   const [comments,setComments]=useState([])
//   const [comment,setComment]=useState("")
//   const [loader,setLoader]=useState(false)
//   const navigate=useNavigate()
  

//   const fetchPost=async()=>{
//     try{
//       const res= await axios.get(URL+"/api/posts/"+postId)
//       // console.log(res.data)
//       setPost(res.data)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

//   const handleDeletePost=async ()=>{

//     try{
//       const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
//       console.log(res.data)
//       navigate("/")

//     }
//     catch(err){
//       console.log(err)
//     }

//   }

//   useEffect(()=>{
//     fetchPost()

//   },[postId])

//   const fetchPostComments=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/comments/post/"+postId)
//       setComments(res.data)
//       setLoader(false)

//     }
//     catch(err){
//       setLoader(true)
//       console.log(err)
//     }
//   }

//   useEffect(()=>{
//     fetchPostComments()

//   },[postId])

//   const postComment=async(e)=>{
//     e.preventDefault()
//     try{
//       const res=await axios.post(URL+"/api/comments/create",
//       {comment:comment,author:user.username,postId:postId,userId:user._id},
//       {withCredentials:true})
      
//       // fetchPostComments()
//       // setComment("")
//       window.location.reload(true)

//     }
//     catch(err){
//          console.log(err)
//     }

//   }


  
//   return (
//     <div>
//         <Navbar/>
//         {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
//         <div className="flex items-center justify-between">
//          <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
//          {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
//             <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)} ><BiEdit/></p>
//             <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
//          </div>}
//         </div>
//         <div className="flex items-center justify-between mt-2 md:mt-4">
//         <p>@{post.username}</p>
//        <div className="flex space-x-2">
//        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//        <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//        </div>
//         </div>
//         <img src={IF+post.photo} className="w-full mx-auto mt-8" alt=""/>
//          <p className="mx-auto mt-8">{post.desc}</p>
//          <div className="flex items-center mt-8 space-x-4 font-semibold">
//           <p>Categories:</p>
//           <div className="flex items-center justify-center space-x-2">
//           {post.categories?.map((c,i)=>(
//             <>
//             <div key={i} className="px-3 py-1 bg-gray-300 rounded-lg">{c}</div>
//             </>
            
//           ))}
            
//           </div>
//          </div>
//          <div className="flex flex-col mt-4">
//          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
//          {comments?.map((c)=>(
//           <Comment key={c._id} c={c} post={post} />
//          ))}
           
//          </div>
//          {/* write a comment */}
//          <div className="flex flex-col w-full mt-4 md:flex-row">
//           <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
//           <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
//          </div>
//         </div>}
//         <Footer/>
//     </div>
//   )
// }

// export default PostDetails