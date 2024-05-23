import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'; // Import the required components from Recharts


const PieComponent  = () => {
    const data = [
        { name: 'series A', value: 10 },
        { name: 'series B', value: 15 },
        { name: 'series C', value: 20 },
      ];
      
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; // Define colors for the pie chart

  return (
   <>
   <section>
    <div className="container">
        <div className="row">
            <h4>Top MBBS Colleges in Nepal with NIRF Ranking 2023

</h4>
        <PieChart width={400} height={200}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        </div>
    </div>
 
   </section>
  
   
   </>
  )
}

export default PieComponent