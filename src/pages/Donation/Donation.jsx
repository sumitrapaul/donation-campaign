import { useEffect, useState } from "react";
// import DataCard from "../CardDetails/DataCard";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donations,setDonations]=useState([])
    const [noFound,setNoFound]=useState(false)
  

    const [isShow,setIsShow]=useState(false)
   
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

    const handleDeteleDonation=()=>{
        localStorage.clear()
        setDonations([])
        setNoFound('Not found!!')
    }
    return (
        <div>
           {
            noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : 
            <div> {donations.length > 0 && (
                <div>
                    <button onClick={handleDeteleDonation} className="px-5 rounded-lg m-4 py-3 bg-green-700 text-white block mx-auto">Delete Donation</button>
                  
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    isShow ? donations.map((card) => <DonationCard key={card.id} card={card}></DonationCard>) : 
                    donations.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                    
                }
            </div>
          {
            donations.length > 4 &&
                <button onClick={() => setIsShow(!isShow)} className="px-5 rounded-lg m-4 py-3 bg-green-700 text-white block mx-auto">
                {isShow ? "See Less" : "See All"}
                </button>
            
          }
            </div>

           }
          
        </div>
    );
};

export default Donation;