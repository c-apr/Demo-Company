import React from 'react';
import "./Mainpage.css";
import Blog from './Blog';

function Mainpage() {
  return (
    <div className='mainpage'>
      <div className="top__options">
        <ul>
            <li id='all'>All</li>
            <li>Technology</li>
            <li>Education</li>
            <li>Lifestyle</li>
            <li>Healthcare</li>
            <li>Sport</li>
            <li>Food</li>
        </ul>
      </div>
      <div className="mainpage__row">
      <Blog
      image={require('../static/1073.png')}
      category="LIFESTYLE"
      title="Changing people's lifestyles for the better"/>
      <Blog
      image={require('../static/1075.png')}
      category="TECHNOLOGY"
      title="Simple Solutions for Complex Connections"/>
      <Blog
      image={require('../static/1077.png')}
      category="SPORT"
      title="All things are difficult before they are easy"/>
      <Blog
      image={require('../static/1079.png')}
      category="EDUCATION"
      title="How to Memorize everything you read?"/>
      </div>


      <div className="mainpage__row">
      <Blog
      image={require('../static/1073.png')}
      category="LIFESTYLE"
      title="Changing people's lifestyles for the better"/>
      <Blog
      image={require('../static/1075.png')}
      category="TECHNOLOGY"
      title="Simple Solutions for Complex Connections"/>
      <Blog
      image={require('../static/1077.png')}
      category="SPORT"
      title="All things are difficult before they are easy"/>
      <Blog
      image={require('../static/1079.png')}
      category="EDUCATION"
      title="How to Memorize everything you read?"/>
      </div>
     
    </div>
  )
}

export default Mainpage
