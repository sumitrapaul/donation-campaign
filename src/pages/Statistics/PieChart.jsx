
import { VictoryPie} from 'victory-pie';



// const myData = [
//     {x: "Red", y: 90},
//     {x: "blue", y: 190},

// ];

const PieChart = ({value}) => {
  
   const rem=100-value
    
  return (
    <div>
      <VictoryPie
            data={[
              {x:'Don', y:value},
              {x:'Total',y:rem},
            ]}
            colorScale={['#00C49F','#FF444A']}
            
      />
    </div>
  );
};

export default PieChart;