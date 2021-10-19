import {  useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
const axios = require('axios').default;

export const App = () => {
   const [post, setPost] = useState<{id: number, Country: string, TotalConfirmed: number}[]>([]);
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then((res) => {
            console.log(res.data)}).catch((error) => {
                console.log(error)
            });
    }, []);
  return (
      <>
      <div className="container">
        <div className="header">
            <div className='header__title'>
            <img className='header__title-logo' src={logo} alt="covid_symbol"/>
          <p className='header__title-text'>STATISTIC</p>
            </div>
            <div className='header__search'>
          <input className='search' type="text" placeholder={'Search....'}/>
                <img className='loop' src="https://clipart-best.com/img/loupe/loupe-clip-art-6.png" alt='loop'/>
            </div>
        </div>
        <div className="table__head">
            <div className="table__icon">
                <p className='table__icon-text'>№</p>
            </div>
            <div className="table__country">
                <p className='table__country-text'>Country</p>
            </div>
            <div className="table__total">
                <p className='table__total-text'>Total confirmed</p>
            </div>
        </div>
        <div className="table__body">
            <ul>
                <li></li>
            </ul>
        </div>
          </div>
      </>
  );
}

