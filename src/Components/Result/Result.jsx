import React from 'react';
import './Result.style.scss'

const Result = () => {
  return (
    <div className="result">
      <h1 className="congratulations">Շնորհավորում եմ դուք հաջողությամբ կատարել եք ձեր գնումները</h1>
      <h2>Կարող եք վերադառնալ գլխավոր էջ</h2>
      <a href="/">

      <button className="go_home">վերադառնալ</button>
      </a>
    </div>
  );
};

export default Result;
