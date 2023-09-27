/* eslint-disable react/prop-types */

import { VictoryPie} from 'victory-pie';

const PieChart = ({value}) => {
  
  let rem=(100.00-value).toFixed(2)
  let rems = parseFloat(rem)

  let col=(100-(100-value)).toFixed(2)
  let cols=parseFloat(col)
    
  return (
    <div>
      <VictoryPie
            data={[
              {x:`${col}%`,y:cols},
              {x:`${rem}%`,y:rems},
            ]}
            colorScale={['#00C49F','#FF444A']}
            
            width={350}
            padding={70}
            
      />
    </div>
  );
};

export default PieChart;