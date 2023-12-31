/* eslint-disable react/prop-types */

import Card from "./Card";


const Cards = ({cards}) => {
    // const getItems=useGetCards()
    // console.log(getItems)
    return (
        <div className="py-10 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default Cards;