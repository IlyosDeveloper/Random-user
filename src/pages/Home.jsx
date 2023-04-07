import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import Users from "./Users";

function Home() {
  const [show, setShow] = useState(true);
  const url = "https://randomuser.me/api/?results=9";
  const { data, error, isPending, searchData, deleteData, refreshData } =
    useFetch(url);

  if (isPending) {
    return (
      <div className='overlay'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='middle'>
        <form className='form'>
          <input
            onChange={(e) => searchData(e.target.value)}
            className='form__input'
            type='search'
            name='user-search'
            placeholder='Live search users'
            aria-label='search'
            autoComplete='off'
          />
          {
            <button
              onClick={() => {
                refreshData(data);
                setShow(true);
              }}
              className='form__button'>
              <span className='form__button-inner'>
                <span>🔄</span>
                <span>Refresh</span>
              </span>
            </button>
          }
          {show && (
            <button
              onClick={() => {
                setShow(false);
              }}
              className='clear__button form__button'>
              <span className='form__button-inner'>
                <span>❎</span>
                <span>Clear</span>
              </span>
            </button>
          )}
        </form>
        {show && <Users data={data} deleteData={deleteData} />}
      </div>
      <div className='footer'>
        <div className='container'>
          <p>
            <span>by </span>
            <Link to={"https://github.com/IlyosDeveloper"}>
              Ilyos Axmad Ali
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
