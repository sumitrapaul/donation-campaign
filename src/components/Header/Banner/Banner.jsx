/* eslint-disable react/prop-types */

const Banner = ({searchItem,setSearchItem,filterItems}) => {
   
        return (
        <div className="">
   <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Kh3wVQj/banner.jpg)'}}>
  <div className="hero-overlay bg-white bg-opacity-90"></div>
  <div className="hero-content text-center text-black">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold">I Grow By Helping People In Need</h1>
      <div className="flex items-center">
    <div className="join">
      <input onChange={(e) => setSearchItem(e.target.value)} className="input input-bordered join-item w-[350px]" placeholder="Search here...." value={searchItem}/>
    </div>
  
  <div>
    <button onClick={filterItems} className="btn join-item bg-red-600 text-white">Search</button>
  </div>
</div>
    </div>
 
  </div>
</div>
  </div>
    );
};

export default Banner;