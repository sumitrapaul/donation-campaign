/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DataCard = ({card}) => {
  const {id,picture, title, category, category_bg, card_bg, text_button_bg, description, price} = card;

 const handleDonate=()=>{
  console.log('dtjg')
 }
 const titleBg={
  backgroundColor:category_bg
  }
  return (
    <div className="flex items-center justify-center w-[400px] lg:w-[1000px] mx-auto">
      <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
        <div className="m-0 overflow-hidden rounded-none text-gray-700 shadow-none">
          <img className="w-[400px] h-[200px] lg:w-[1000px] lg:h-[400px]"
          src={picture} 
          alt="ui/ux review check" 
          />
         <div className="">
         <button style={titleBg} className="btn absolute ml-6 mt-6 text-white" type="button">Donate {price}</button>
        
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
    </div>
  );
};

export default DataCard;
