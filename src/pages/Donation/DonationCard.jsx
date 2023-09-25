/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const DonationCard = ({ card }) => {
  const {id,picture,title,category,category_bg,card_bg,text_button_bg,description,price} = card || {};

  const titleStyle = {
    color: category_bg,
  };

  const textButton = {
    backgroundColor: text_button_bg,
  };

  const viewDetailsBg = {
    backgroundColor: category_bg,
  };

  const titleButtonStyle = {
    ...titleStyle,
    ...textButton,
  };

  const cardStyle = {
    backgroundColor: card_bg,
  };
  return (
    <div>
      <div
        style={cardStyle}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <button
            style={titleButtonStyle}
            className="block rounded-lg py-3 px-6"
            type="button"
          >
            {title}
          </button>
          <h3 className="mt-3 block text-2xl font-bold text-black">
            {category}
          </h3>

          <h3
            style={titleStyle}
            className="mb-8 block font-bold text-base leading-relaxed antialiased"
          >
            {price}
          </h3>
          <div>
            <button
              style={viewDetailsBg}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
