/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const Card = ({ card }) => {
  const {id,picture,title,category,category_bg,card_bg,text_button_bg,description,price,} = card || {};

  const titleStyle={
    color:category_bg
    }
    const textButton={
        backgroundColor:text_button_bg,
        
    }
    const titleButtonStyle={
      ...titleStyle,
      ...textButton
    }

    const cardStyle={
      backgroundColor:card_bg
    }
  return (
    <div>
    <Link to={`/cards/${id}`}>
    <div style={cardStyle} className="bg-white text-gray-700 shadow-md">
        <div className="m-0 overflow-hidden text-gray-700">
          <img
            className="w-full h-[300px] mx-auto"
            src={picture}
            alt="donation-campaign"
          />
        </div>
        <div className="p-6">
          <button style={titleButtonStyle}
            className="block rounded-lg py-3 px-6"
            type="button">
            {title}
          </button>
          <h3 style={titleStyle} className="mt-3 block text-xl font-normal text-gray-700">
            {category}
          </h3>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Card;
