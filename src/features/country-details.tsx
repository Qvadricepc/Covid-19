import React from 'react';
import { TCountry } from '../types';

interface CountryDetailsProps {
  data: TCountry;
}

export const CountryDetails: React.FC<CountryDetailsProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className="country__container">
        <div className="country__country-name">{data.Country}</div>
        <div className="country__table">
          <div className="country__table-icon">1</div>
          <div className="country__table-text">Total Confirmed</div>
          <div className="country__table-number">{data.TotalConfirmed}</div>
        </div>
        <div className="country__table">
          <div className="country__table-icon">1</div>
          <div className="country__table-text">Total Deaths</div>
          <div className="country__table-number">{data.TotalDeaths}</div>
        </div>
        <div className="country__table">
          <div className="country__table-icon">1</div>
          <div className="country__table-text">Total Recovered</div>
          <div className="country__table-number">{data.TotalRecovered}</div>
        </div>
      </div>
    </>
  );
};
