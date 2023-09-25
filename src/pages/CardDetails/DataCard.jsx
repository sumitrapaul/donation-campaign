/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DataCard = ({card}) => {
  const {id,picture, title, category, category_bg, card_bg, text_button_bg, description, price} = card;
 console.log(card)

 const titleBg={
  backgroundColor:category_bg
  }
  return (
    <div className="flex ml-36 items-center justify-center max-w-[1000px]">
      <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
        <div className="m-0 overflow-hidden rounded-none text-gray-700 shadow-none">
          <img className="w-[1000px] h-[400px]"
          src={picture} 
          alt="ui/ux review check" 
          />
           <div className="-mt-20">
      <button style={titleBg}
      className="middle none center ml-6 mb-6 rounded-lg py-3 px-6 text-lg font-bold uppercase text-white shadow-md transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
      data-ripple-light="true"
      type="button"
      >
     Donate {price}
    </button>
    <div className="relative -mt-24 opacity-25 bg-black h-24">

    </div>
  </div>
        </div>
        <div className="p-6">
          <h4 className="block text-3xl font-bold leading-snug tracking-normal antialiased">
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
