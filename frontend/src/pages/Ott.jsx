import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OttCard from "../components/OttCard"
// import TriNav from "../components/TriNav"



const Ott = () => {
  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-2 md:px-[200px]"> 
        <br/>
        <br/>
        <br/>
        <h1>Ott World</h1>
        <OttCard/>
        <OttCard/>
        <OttCard/>
        <OttCard/>
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Ott