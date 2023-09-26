
import PieChart from "./PieChart";

const Statistics = () => {
  const donationCards=JSON.parse(localStorage.getItem('donation')) || []
  
  const totalCards=12;
 
  const value=((donationCards.length / totalCards) * 100).toFixed(2);
  return (
    <div className="w-[400px] mx-auto">
     
      <PieChart value={value}/>
     <div className="flex gap-6">
     <div className="flex justify-center items-center gap-3">
        <div>Total Donation</div>
        <div style={{backgroundColor:'#FF444A'}} className="border h-3 w-16">
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div>Your Donation</div>
        <div style={{backgroundColor:'#00C49F'}} className="border h-3 w-16">
        </div>
      </div>
     </div>
    </div>
  );
};

export default Statistics;