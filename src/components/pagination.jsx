import React from 'react';

const Pagination = ({ imgsPerPage, totalImgs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImgs / imgsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href={'/' + number} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;