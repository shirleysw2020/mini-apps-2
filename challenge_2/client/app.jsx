import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
const baseAPI = 'https://api.coindesk.com/v1/bpi';

const App = () => {
   const [BPIChart, setBPIChart] = useState({});
   const [BPIData, setBPIData] = useState({});

   const chart = () => {
      console.log(BPIData);
      setBPIChart({
         labels: ['9/2', '9/3', '9/4', '9/5', '9/6'],
         datasets: [{
            label: 'BPI from 2020/09/02 - 2020/09/06',
            backgroundColor: 'rgb(255, 99, 132)',
            data: BPIData,
            borderWidth: 4
         }]
      });
   }

   useEffect(() => {
      const url = `${baseAPI}/historical/close.json?start=2020-09-01&end=2020-09-06`;
      axios.get(url)
      .then((res) => {
         setBPIData(Object.values(res.data.bpi));
      })
      .catch((err) => {console.log('failed fetching API')})
   }, []);

   // need second useEffect to watch change on BPIDate and invoke chart()
   useEffect(() => {
      if (BPIData.length > 0) {
         chart();
      }
   }, [BPIData]);

   return (
      <GeneralDiv>
         <h2>Cryptocurrency BTC</h2>
         <Line data={BPIChart} options={{
            responsive: true
         }}/>
      </GeneralDiv>
   )
}


// style={{height: '799px', width: '1639px'}}
// CoinDesk only provides data for its Bitcoin Price Index (BPI) and does not offer data for other currencies.
// However, you may choose to represent value of Bitcoin in USD.

const GeneralDiv = styled.div`
   text-align: center;
   font-family: arial;
   height: 500px;
   width: 750px;
`;

ReactDOM.render(<App/>, document.getElementById('app'));