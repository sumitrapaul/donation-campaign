/* eslint-disable react/prop-types */

import { VictoryPie} from 'victory-pie';

const PieChart = ({value}) => {
  
   const rem=(100-value).toFixed(2)
    
  return (
    <div>
      <VictoryPie
            data={[
              {x:`${value}%`,y:value},
              {x:`${rem}%`,y:rem},
            ]}
            colorScale={['#00C49F','#FF444A']}
            
      />
    </div>
  );
};

export default PieChart;