import { useEffect, useState } from "react";
import DataCard from "../CardDetails/DataCard";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations,setDonations]=useState([])
    const [noFound,setNoFound]=useState("")
    useEffect(()=>{
        const donateCards=JSON.parse(localStorage.getItem('donation'))
       if(donateCards){
        setDonations(donateCards)
       }
       else{
        setNoFound('Not found!!')
       }
    },[])
    console.log(donations)
    return (
        <div>
           {
            noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
            <div className="grid grid-cols-2">
                {
                    donations.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            </div>

           }
        </div>
    );
};

export default Donation;