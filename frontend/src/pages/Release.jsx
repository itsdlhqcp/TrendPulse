import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ReleaseCard from "../components/ReleaseCard"
// import TriNav from "../components/TriNav"



const Release = () => {
  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-2 md:px-[200px]"> 
        <br/>
        <br/>
        <br/>
        <ReleaseCard/>
        <ReleaseCard/>
        <ReleaseCard/>
        <ReleaseCard/>    
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Release