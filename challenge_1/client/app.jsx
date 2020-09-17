import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import db from '../data/db.json';


const App = () => {

   const [value, setValue] = useState('');

   const handleSubmit = () => {
      event.preventDefault();
      alert('you submitted: ' + value);
      // make get request to server
      setValue('');
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
   )
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