import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div>
    <div className = 'aboutUsBackground'>
      <div className = 'feature'>
        <p className = 'featureTitle'>
          We are pizza makers, and our mission is to make 
          cool pizza which feeds all your senses.
        </p>
        <div className = 'featureParagraph'>
          <p>We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud of that. </p>
          &nbsp;
          <p>It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family. </p>
          &nbsp;
          <p>And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.</p>
        </div>
      </div>
      <div className = 'featureContent'>
        <div className = 'featureContentContainer'>
          <div className = 'divImage1'></div>
          <div>
            <h2>We’re Careful</h2>
          </div>
          <div>
            <p>The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a  designated kit, and every pizza is freshly baked on designated parchment paper in our ovens.</p>
          </div>
        </div>
        <div className = 'featureContentContainer'>
          <div className = 'divImage2'></div>
          <div>
            <h2>We’re Certified</h2>
          </div>
          <div>
            <p>Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), 
                and we take specific caution when making these pizzas.</p>
          </div>
        </div>
        <div className = 'featureContentContainer'>
          <div className = 'divImage3'></div>
          <div>
            <h2>You’re Creative</h2>
          </div>
          <div>
            <p>For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option.
                The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;