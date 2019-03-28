import React from 'react';
import Slider from '../Slider';
import AboutUs from '../AboutUs';
import PopularPizzas from '../PopularPizzas';
import BuildOwnPizza from '../BulidOwnPizza/BuildOwnPizza';


const Home = () => (
  <React.Fragment>
    <Slider />
    <AboutUs />
    <PopularPizzas />
    <BuildOwnPizza />
  </React.Fragment>
);

export default Home;