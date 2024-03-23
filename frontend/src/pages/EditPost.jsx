import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {ImCross} from 'react-icons/im'


const EditPost = () => {

    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])

     const deleteCategory=(i)=>{
        let updatedCats=[...cats]
         updatedCats.splice(i)
         setCats(updatedCats)
     }

     const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
        
     }

    
  return (
    <div>
        <Navbar />
        <div className="px-6 md:px-[200px] mt-8">
        <h1 className='mt-8 text-xl font-bold md:text-2xl'>Update the post</h1>
            <form className="flex flex-col w-full mt-4 space-y-4 md:space-y-8">
                <input type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
                <input type="file"  className='px-4'/>
                <div className="flex flex-col">
                <div className="flex flex-col items-center space-x-4 md:space-x-8">
                <input value={cat} onChange={(e)=>setCat(e.target.value)}  className='px-4 py-2 outline-none' placeholder='Enter post category' type="text"/>
                  <div onClick={addCategory} className='px-4 py-2 font-semibold text-white bg-black cursor-pointer'>Add</div>  
                </div>
                    {/* categories */}
                    
                <div className="flex px-4 mt-3">
                    {cats?.map((c,i)=>(
                         <div key={i} className="flex items-center justify-center px-2 py-1 mr-4 space-x-2 bg-gray-200 rounded-md">
                         <p>{c}</p>
                         <p onClick={()=>deleteCategory(i)} className="p-1 text-sm text-white bg-black rounded-full cursor-pointer"><ImCross/></p>
                     </div>
                    ))}
               

                {/* <div className="flex items-center justify-center px-2 py-1 mr-4 space-x-2 bg-gray-200 rounded-md">
                    <p>Tech</p>
                    <p className="p-1 text-sm text-white bg-black rounded-full cursor-pointer"><ImCross/></p>
                </div> */}
                </div>
                </div>   
                <textarea rows={15} cols={30} className="px-4 py-2 outline-none" placeholder='Enter post description'/>
                <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default EditPost