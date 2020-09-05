import React, { useState } from 'react';

import arrowAnimation from 'utils/animation/arrow';

import styles from 'styles/dropdown.module.css';

const Dropdown = ({ data, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('USER CONFIG');

  const handleToggleList = () => {
      arrowAnimation({
        target: '.arrow-top',
        isOpen 
      });
      setIsOpen(!isOpen);
  }

  const handleSelected = item => () => {
    setSelected(item);
    setValue(item);
  }

  return (
    <div className={styles['dropdown-row-outer']}>
      <div className={styles[`dropdown-wrapper${isOpen ? '-active' : ''}`]} onClick={handleToggleList}>
        <div className={styles['dropdown-header']}>
          <div className="dropdown-header-title">{selected}</div>
          <img className='arrow-top' src="/icon/arrow-bottom.png" />
        </div>
        { isOpen && (
          <ul className={styles['dropdown-list']}>
          {
            data.map((item, index) => <li key={item.id} className={styles[`dropdown-list-item`]} onClick={handleSelected(item)} >{item}</li>)
          }
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;