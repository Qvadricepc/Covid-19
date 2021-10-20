import React, { useState, useEffect, useCallback } from 'react';
//import VirtualList from 'react-tiny-virtual-list';
import 'react-virtualized/styles.css';
import logo from './logo.png';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import './App.css';
import { AxiosError, AxiosResponse } from 'axios';
import { TSummaryRes } from './types';
const axios = require('axios').default;

export const App: React.FC = () => {
  const [post, setPost] = useState<TSummaryRes>();
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((res: AxiosResponse<TSummaryRes>) => {
        setPost(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, []);

  const enterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  console.log(setSearch);

  const lineRenderer = useCallback(
    ({ index, isScrolling, isVisible, key, style }) => {
      const country = post!.Countries[index];

      return (
        <div
          className="table__render"
          key={key}
          style={style}
          onClick={() => {
            console.log('Country pick');
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
    [post]
  );
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header__title">
            <img className="header__title-logo" src={logo} alt="covid_symbol" />
            <p className="header__title-text">STATISTIC</p>
          </div>
          <div className="header__search">
            <input className="search" type="text" placeholder={'Search....'} onChange={enterText} />
            <img
              className="loop"
              src="https://clipart-best.com/img/loupe/loupe-clip-art-6.png"
              alt="loop"
            />
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
                        rowCount={post?.Countries.length || 0}
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
            itemCount={post?.Countries?.length || 0}
            itemSize={50} // Also supports variable heights (array or function getter)
            renderItem={({ index, style }) => {
              const country = post!.Countries[index];
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

          {/*{post?.Countries?.map((country, i) => {
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
