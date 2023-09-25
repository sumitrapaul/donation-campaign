import { useState,useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DataCard from "./DataCard";


const CardDetails = () => {
   
    const [card, setCard] = useState([]);
    const { id } = useParams();
    const cards = useLoaderData();
  

    useEffect(() => {
        const findCard = cards.find(card => card.id == id);
        setCard(findCard);
      
      }, [id, cards]);
    return (
        <div className="max-w-[500px] h-[100px] lg:max-w-[1300px] mx-auto">
           <DataCard card={card}></DataCard> 
        </div>
    );
};

export default CardDetails;