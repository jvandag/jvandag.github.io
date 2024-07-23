import config from '../assets/particles.json'
import 'particles.js'
import '../css/index.css';

config.particles.move.speed = parseFloat((window.outerHeight / 385).toFixed(2))
console.log(config.particles.move.speed)
particlesJS("particles-js", config);
