import React, { useState, useEffect, useCallback } from 'react';
//import VirtualList from 'react-tiny-virtual-list';
import 'react-virtualized/styles.css';
import logo from './logo.png';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import './App.css';
import axios, { AxiosError } from 'axios';
import { TCountry, TSummaryRes } from './types';
import { Modal } from './components/modal/modal';
import { CountryDetails } from './features/country-details';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const App: React.FC = () => {
  const [summary, setSummary] = useState<TSummaryRes>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [clickedIndex, setClickedIndex] = useState<number>();
  const [filteredCountries, setFilteredCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    axios
      .get<TSummaryRes>('https://api.covid19api.com/summary')
      .then((res) => {
        setSummary(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, []);

  const prepareFilterCountries = (countries: TCountry[], search: string): TCountry[] => {
    return countries.filter((country) => {
      if (!search) {
        return true;
      }
      if (
        country.Country.toLowerCase().includes(search.toLowerCase()) ||
        country.TotalConfirmed.toString().includes(search)
      ) {
        return true;
      }
    });
  };

  useEffect(() => {
    const prepared = prepareFilterCountries(summary?.Countries || [], search || '');
    setFilteredCountries(prepared);
  }, [summary, search]);

  const enterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const openModal = (index: number) => {
    setClickedIndex(index);
    setIsModalVisible(true);
  };

  const lineRenderer = useCallback(
    ({ index, isScrolling, isVisible, key, style }) => {
      const country = filteredCountries[index];

      return (
        <div
          className="table__render"
          key={key}
          style={style}
          onClick={() => {
            openModal(index);
          }}
        >
          <div className="table__render-icon">
            <p className="table__render-icon-text">{index + 1}</p>
          </div>
          <div className="table__render-country">
            <p className="table__render-country-text">{country.Country}</p>
          </div>
          <div className="table__render-total">
            <p className="table__render-total-text">{country.TotalConfirmed}</p>
          </div>
        </div>
      );
    },
    [filteredCountries]
  );

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      {clickedIndex !== undefined && (
        <Modal open={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <CountryDetails data={filteredCountries[clickedIndex]} />
        </Modal>
      )}
      <div className="container">
        <div className="header">
          <div className="header__title">
            <img className="header__title-logo" src={logo} alt="covid_symbol" />
            <p className="header__title-text">STATISTIC</p>
          </div>
          <div className="filter__buttons">
            <input type="checkbox" name="A-Z" />
            A-Z
            <input type="checkbox" name="Z-A" />
            Z-A
            <input type="checkbox" name="fromMaxToMin" />
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="header__search">
            <input
              className="search"
              type="text"
              placeholder={'Search....'}
              onChange={enterText}
              value={search}
            />
            <FontAwesomeIcon icon={faSearchPlus} />
          </div>
        </div>
        <div className="table__head">
          <div className="table__icon">
            <p className="table__icon-text">№</p>
          </div>
          <div className="table__country">
            <p className="table__country-text">Country</p>
          </div>
          <div className="table__total">
            <p className="table__total-text">Total confirmed</p>
          </div>
        </div>

        <div className="table__body">
          <WindowScroller scrollElement={window}>
            {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
              <div style={{ flex: '1 1 auto' }}>
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <div ref={registerChild}>
                      <List
                        // ref={(el) => {
                        //   window.listEl = el;
                        // }}
                        autoHeight
                        // className={styles.List}
                        height={height}
                        isScrolling={isScrolling}
                        onScroll={onChildScroll}
                        overscanRowCount={2}
                        rowCount={filteredCountries.length || 0}
                        rowHeight={60}
                        rowRenderer={lineRenderer}
                        //scrollToIndex={scrollToIndex}
                        scrollTop={scrollTop}
                        width={width}
                      />
                    </div>
                  )}
                </AutoSizer>
              </div>
            )}
          </WindowScroller>

          {/*<VirtualList
            width="100%"
            height={100}
            itemCount={summary?.Countries?.length || 0}
            itemSize={50} // Also supports variable heights (array or function getter)
            renderItem={({ index, style }) => {
              const country = summary!.Countries[index];
              return (
                <div className="table__head" key={index} style={style}>
                  <div className="table__icon">
                    <p className="table__icon-text">{index}</p>
                  </div>
                  <div className="table__country">
                    <p className="table__country-text">{country.Country}</p>
                  </div>
                  <div className="table__total">
                    <p className="table__total-text">{country.TotalConfirmed}</p>
                  </div>
                </div>
              );
            }}
          />*/}

          {/*{summary?.Countries?.map((country, i) => {
            return (
              <div key={country.ID} className="table__head">
                <div className="table__icon">
                  <p className="table__icon-text">{i}</p>
                </div>
                <div className="table__country">
                  <p className="table__country-text">{country.Country}</p>
                </div>
                <div className="table__total">
                  <p className="table__total-text">{country.TotalConfirmed}</p>
                </div>
              </div>
            );
          })}*/}
        </div>
      </div>
    </>
  );
};

export default App;
