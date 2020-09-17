import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const SearchResult = ({res}) => {
  return (
    <div>
      {res.map((item) => {
        return (
          <div>
            <span>
              <h3>{item.category2} | {item.date}</h3>
            </span>
            <h4>{item.description}</h4>
          </div>
        )
      })}
  </div>
  )
}



export default SearchResult;