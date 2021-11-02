import React, { useState } from 'react';
import classes from './ContentNav.module.css';
import userAvt from '../../images/ContentNav/user.png';

function ContentNav(props: { getActiveTabs: Function }) {
  const [toggleTabs, setToggTabs] = useState(1);

  const handleToggleTabs = (index: number) => {
    setToggTabs(index);
    props.getActiveTabs(index);
  };

  return (
    <div className={classes.header}>
      <div className={classes.tabs}>
        <ul>
          <li className={toggleTabs === 1 ? classes.active : ''}>
            <p onClick={() => handleToggleTabs(1)}>Today</p>
          </li>
          <li className={toggleTabs === 2 ? classes.active : ''}>
            <p onClick={() => handleToggleTabs(2)}>Week</p>
          </li>
          <li className={toggleTabs === 3 ? classes.active : ''}>
            <p onClick={() => handleToggleTabs(3)}>Hour</p>
          </li>
        </ul>
      </div>
      <div className={classes.user}>
        <img src={userAvt} alt="user-img" />
      </div>
    </div>
  );
}

export default ContentNav;
