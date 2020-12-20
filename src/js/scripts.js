
import { default as anime } from '../../node_modules/animejs/lib/anime.es.js';

import Splitting from "splitting";

(function () {
    Splitting();
    
    anime({
        targets: '.gasoline-logo',
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 800
      });

      

      anime({
        targets: '.char',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      });

      anime({
        targets: '.first-poster',
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 400
      });
  })();