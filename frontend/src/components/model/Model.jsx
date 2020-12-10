import React from 'react';
import './Model.scss';
const Model = ({ click, children }) => {
  const findByname = (name) => {
    return children.map((child) => {
      if (child.key === name) {
        return child;
      }
    });
  };
  const closeModal = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('modal-close')) {
      return click();
    }
  };
  return (
    <div className='modal-mask modal-close' onClick={closeModal}>
      <div className='modal-wrapper'>
        <div className='modal-container'>
          <div className='modal-header'>{findByname('header')}</div>
          <div className='modal-body'>{findByname('body')}</div>
          <div className='modal-footer'>
            <div className='modal-close' onClick={closeModal}>
              Close
            </div>
            {findByname('footer')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
