import React from 'react';
import './PopularPizzas.css'

const PopularPizzas = () => (
  <div className = 'PopularPizzasContainer'>
    <div className = 'previousButton'>
      <button></button>
    </div>
    <div className = 'pupularPizzasInfoContainer'>
      <div className = 'popularPizzasTitle'>
        <h2>Peri-Peri</h2>
      </div>
      <div className = 'polularPizzasPrice'>
        <p>$18 - $37</p>
      </div>
      <div className = 'popularPizzasInfo'>
        <p>Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce</p>
      </div>
      <div>
        <button className = 'popularPizzasInfoButton'>
          ORDER NOW
        </button>
      </div>
    </div>
    <div className = 'popularPizzasImage'>
    </div>
    <div className = 'nextButton'>
      <button></button>
    </div>
  </div>
);

export default PopularPizzas;