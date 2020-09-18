import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Line, Bar } from 'react-chartjs-2';
const baseAPI = 'https://api.coindesk.com/v1/bpi';

const App = () => {
   const [BPIChart, setBPIChart] = useState({});
   const [BPIBar, setBPIBar] = useState({});
   const [BPIData, setBPIData] = useState({});

   const chart = () => {
      // console.log(BPIData);
      setBPIChart({
         labels: ['9/2', '9/3', '9/4', '9/5', '9/6'],
         datasets: [{
            label: 'BPI from 2020/09/02 - 2020/09/06',
            backgroundColor: '#ffe2e2',
            data: BPIData,
            borderWidth: 4
         }]
      });
      setBPIBar({
         labels: ['8/24', '8/25', '8/26', '8/27', '8/28'],
         datasets: [{
            label: 'BPI from 2020/08/24 - 2020/08/28',
            backgroundColor: '#ffbb91',
            data: BPIData,
            borderWidth: 4
         }],
         options: {
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'BPI'
                }
              }]
            }
          }
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
      <BigWrapper>
         <h1>Cryptocurrency BTC</h1>
         <h4>Powered by CoinDesk</h4>
         <GeneralDiv>
            <Line data={BPIChart} options={{
               responsive: true
            }}/>
            <Bar data={BPIBar} options={{
               responsive: true,
               scales: {
                  yAxes: [{
                     scaleLabel: {
                     display: true,
                     labelString: 'Bitcoin Price Index (BPI)'
                     }
                  }]
               }
            }}/>
         </GeneralDiv>
      </BigWrapper>
   )
}

const BigWrapper = styled.div`
   text-align: center;
   font-family: arial;
   margin-top: 30px;
`;
const GeneralDiv = styled.div`
   text-align: center;
   display: flex;
   font-family: arial;
   height: 500px;
   width: 750px;
   margin-top: 40px;
`;

ReactDOM.render(<App/>, document.getElementById('app'));