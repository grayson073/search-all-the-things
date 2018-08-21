import React, { Component } from 'react';
import Search from './search/Search';
import { Route, Link } from 'react-router-dom';
import styles from './Header.css';
import $ from 'jquery';
export default class Header extends Component {
  
  componentDidMount() {
    // Wrap every letter in a span
    $('.ml14 .letters').each(function(){
      /* eslint-disable-next-line */
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>'));
    /* eslint-disable-next-line */
  });
    /* eslint-disable-next-line */
    anime.timeline({ loop: false })
      .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        duration: 900
      }).add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: 'easeOutExpo',
        duration: 800,
        offset: '-=600',
        delay: function(el, i) {
          return 150 + 35 * i;
        }
      });
  }
  
  render() {

    return (
      <div className={styles.header}>
        
        <div>
          <h1 className="ml14">
            <span className="text-wrapper">
              <span className="letters">Market Watch</span>
              <span className="line"></span>
            </span>
          </h1>
      
          <Route component={Search}/>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/companies">Search</Link>
        </nav>

      </div>
    );
  }

}