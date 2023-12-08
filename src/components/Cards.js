import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some work that I'm proud of!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='%PUBLIC_URL%images/invest.jpeg'
              text='USAA Personal Investment App Extension'
              label='UI/UX Design'
              path='/work'
            />
            <CardItem
              src='%PUBLIC_URL%images/walklocal.jpeg'
              text='Product Ideation for Women Walking Alone At Night'
              label='UI/UX Design'
              path='/work'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='%PUBLIC_URL%images/tup.jpg'
              text='Tupperware Brand Analysis and Marketing Campaign'
              label='UX Research'
              path='/work'
            />
            <CardItem
              src='%PUBLIC_URL%images/sga.jpeg'
              text='Meta Campaign for the SGA VP and President Elect'
              label='Graphic Design'
              path='/work'
            />
            <CardItem
              src='%PUBLIC_URL%images/penny2.jpeg'
              text='Style Guide for a Budget-Friendly Travel Agency'
              label='Visual Design'
              path='/work'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;