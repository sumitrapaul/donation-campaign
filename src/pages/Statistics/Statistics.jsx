
import PieChart from "./PieChart";

const Statistics = () => {
  const donationCards=JSON.parse(localStorage.getItem('donation')) || []
  
  const totalCards=12;
 
  const value=((donationCards.length)/totalCards)*100;
  return (
    <div className="w-[400px] mx-auto">
     
      <PieChart value={value}/>
    </div>
  );
};

export default Statistics;