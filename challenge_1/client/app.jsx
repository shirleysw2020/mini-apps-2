import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import db from '../data/db.json';
import axios from 'axios';

const url = 'http://localhost:3000/events';

const App = () => {

   const [value, setValue] = useState('');
   const [userInput, setUserInput] = useState('');

   const handleSubmit = () => {
      event.preventDefault();
      setUserInput(value);
      setValue('');
      // make get request to server
      axios.get(`${url}?q=${userInput}&_page=1&_limit=10`)
      .then((res) => {
         console.log(res.data, 'client got res');
      })
      .catch((err) => console.log(err,'failed to fetch data'));
   }

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   return (
      <div>
         <h2>Historical Events Search Engine</h2>
         <form onSubmit={handleSubmit}>
            <label>
               <input type="text" value={value} onChange={handleChange}></input>
               <input type="submit" value="Search" />
            </label>
         </form>
      </div>
   );
}

/* Full-text search
Add q

GET /posts?q=internet

-----
Paginate
Use _page and optionally _limit to paginate returned data.
In the Link header you'll get first, prev, next and last links.

GET /posts?_page=7
GET /posts?_page=7&_limit=20
10 items are returned by default
*/
export default App;