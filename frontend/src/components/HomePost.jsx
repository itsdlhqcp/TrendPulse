

const HomePost = () => {
  return (
    <div className="flex w-full p-2 mt-8 space-x-3 bg-gray-200 rounded-lg">
       {/* left */}
       <div className="w-[34%] h-[230px] flex justify-center items-center">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbnTZs4YLKIt3eAelwShiBMkZtyWELWz1Dg&usqp-CAU" alt="" className="object-cover w-full h-full"/>
       </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
        <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">#L360 shoot starts next month..., Release plans for ONAM 2024...! 👏💥</h1>
        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
            <p>@DLHQ.DEV</p>
            <div className="flex space-x-2">
                <p>16/06/2023</p>
                <p>16:45</p>
            </div>
        </div>
        <p className="text-sm md:text-lg">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
        </div>

    </div>
  )
}

export default HomePost



// /* eslint-disable react/prop-types */
// import {IF} from '../url'


// const HomePosts = ({post}) => {
//   return (
//     <div className="flex w-full mt-8 space-x-4">
//     {/* left */}
//     <div className="w-[35%] h-[200px] flex justify-center items-center">
//     <img src={IF+post.photo} alt="" className="object-cover w-full h-full"/>
//     </div>
//     {/* right */}
//     <div className="flex flex-col w-[65%]">
//       <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">
//       {post.title}
//       </h1>
//       <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
//        <p>@{post.username}</p>
//        <div className="flex space-x-2 text-sm">
//        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//        <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//        </div>
//       </div>
//       <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>
//     </div>

//     </div>
//   )
// }

// export default HomePosts