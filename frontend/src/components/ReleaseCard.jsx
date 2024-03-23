const ReleaseCard = () => {
    return (
       
  <div className="relative flex w-full p-2 mt-5 space-x-3 bg-gray-200 rounded-lg">
  {/* Image Card */}
  <div className="relative w-full overflow-hidden rounded-lg">
    <img src="https://images.pexels.com/photos/739074/pexels-photo-739074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover w-full h-full" />
    {/* Transparent Widget */}
    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
      <p className="text-center">Launch date Date:-  09/02/2024</p>
     
    </div>
  </div>
</div>
    )
  }
  
  export default ReleaseCard


  