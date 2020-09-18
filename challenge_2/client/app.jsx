import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const App = () => {
   const [BPIChart, setBPIChart] = useState({});

   const chart = () => {
      setBPIChart({
         labels: ['9/7', '9/8', '9/9', '9/10', '9/11', '9/12'],
         datasets: [{
            label: 'BPI from 2020/09/07 - 2020/09/13',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [0, 15, 5, 10, 25, 13],
            borderWidth: 4
         }]
      });
   }

   useEffect(() => {
      chart();
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-09-07&end=2020-09-13';
      axios.get(url)
      .then((res) => {
         console.log(res.data);
         setHistoricalBPI(res.data.bpi);
      })
      .catch((err) => {console.log('failed fetching API')})
   },[]);

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
   width: 600px;
`;

ReactDOM.render(<App/>, document.getElementById('app'));