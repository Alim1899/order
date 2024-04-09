import React from 'react';
import classes from './References.module.css'
import ref1 from '../../../assets/refs/ref1.svg';
import ref2 from '../../../assets/refs/ref2.svg';
import ref3 from '../../../assets/refs/ref3.svg';
import ref4 from '../../../assets/refs/ref4.svg';
import ref5 from '../../../assets/refs/ref5.svg';


const References = () => {
  return (
    <div className={classes.main}>
       <div className={classes.header}>
          <div className={classes.gradient}></div>
          <h2 className={classes.headerText}>
          Referanslarımız
          </h2>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.refs}>
            <img className={classes.ref} src={ref1} alt='ref1'></img>
            <img className={classes.ref} src={ref5} alt='ref2'></img>
            <img className={classes.ref} src={ref4} alt='ref3'></img>
            <img className={classes.ref} src={ref3} alt='ref4'></img>
            <img className={classes.ref} src={ref2} alt='ref5'></img>

        </div>
    </div>
  )
}

export default References
