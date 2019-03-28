import React from 'react';
import './Slider.css';
import logo from '../../assets/Logo.png'


const Slider = () => (
  <div className = 'container'>
    <div className = 'sliderContainer'>
      <div>
        <p className ='title'>Get it while it's hot!</p>
      </div>
      <div className = 'paragraph'>
        <p>We create custom, personal pizzas with quality ingredients in only five minutes.</p>
      </div>
      <div className = 'orderButton'>
        <button>ORDER ONLINE</button>
      </div>
    </div>
    <div className = 'menubar'>
      <button className = 'menu'></button>
      <button className = 'logo'>
        <img src={logo} className='logoImage' alt=""/>
      </button>
      <button className = 'cart'></button>
    </div>
  </div>
);

export default Slider;