import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
// import TriNav from "../components/TriNav"



const Home = () => {
  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-2 md:px-[200px]"> 
        <br/>
        <br/>
        <br/>
        <HomePost/>
        <HomePost/>
        <HomePost/>
        <HomePost/>
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Home