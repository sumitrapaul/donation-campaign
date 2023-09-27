import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable react/prop-types */
const DataCard = ({card}) => {
  const {id,picture, category, category_bg, description, price} = card;
//localstorage
 const handleDonate = (id) => {
  const addedDonateArray=[];
  const donateCards=JSON.parse(localStorage.getItem('donation'))

  //jokhon null thakbe
  if(!donateCards){
    addedDonateArray.push(card)
    localStorage.setItem('donation',JSON.stringify(addedDonateArray))
    toast('Successfully donation completed!!!')
  }
  else{
    const isExists=donateCards.find(card => card.id == id)
    if(!isExists){
      addedDonateArray.push(...donateCards,card)
      localStorage.setItem('donation',JSON.stringify(addedDonateArray))
      toast('Successfully donation completed!!!')
    }
    else{
      toast('Already added!!')
    }
  }
  
 }
 const titleBg={
  backgroundColor:category_bg
  }
  return (
    <div className="flex items-center justify-center w-[400px] lg:w-[1300px] mx-auto">
    <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
        <div className="m-0 overflow-hidden rounded-none text-gray-700 shadow-none">
          <img className="w-[400px] h-[200px] lg:w-[1300px] lg:h-[600px]"
          src={picture} 
          alt="ui/ux review check" 
          />
         <div>
         <button onClick={()=>handleDonate(id)} style={titleBg} className="btn z-10 absolute ml-6 mt-6 cursor-pointer hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] text-white">Donate {price}</button>
        
          <div className="relative -mt-24 opacity-30 bg-black h-24">

          </div>
         </div>
        </div>
        <div className="p-2 lg:p-6">
          <h4 className="block text-lg lg:text-3xl font-bold leading-snug tracking-normal antialiased">
            {category}
          </h4>
          <p className="mt-2 block text-lg leading-relaxed text-gray-500 antialiased">
            {description}
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default DataCard;
