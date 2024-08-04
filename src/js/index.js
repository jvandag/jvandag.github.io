import config from '../assets/particles.json'
import 'particles.js'
import '../css/index.css';

const createBionicText = () => {
    let textElems = document.getElementsByClassName("bionicText");
    console.log(textElems)
    let i = 0;
    for (const textBlock of textElems) {
        let temp = textBlock.textContent.split(' ').map((word) => {
            let numBold = Math.ceil(word.length/2);
            return `<b>${word.slice(0,numBold)}</b>${word.slice(numBold)}`
        });
        temp = temp.join(' ')
        textElems[i].innerHTML = temp
        i++;
    }
}

const adjustContentCSS = () => {
    const navBar = document.getElementById("navBar");
    let offset = navBar.offsetHeight

    let container = document.getElementById("pageWrapper");
    //container.style.paddingTop = `${offset*0.9}px`;  
     

    let contentBG = document.getElementById("contentBGWrapper");
    contentBG.style.backgroundImage = `linear-gradient(transparent ${offset-1}px, rgba(205, 205, 226, 0.75) calc(${offset}px + 3.5rem), rgba(205, 205, 226, 0.75) calc(100% - 3.5rem ), transparent calc(100% - 0.5rem))`
    
    if (navigator.userAgent.indexOf('AppleWebKit') === -1) {
        //not webkit based
        //remove text clip color if not webkitbased
        let content = document.getElementById("contentContainer")
        content.style.backgroundImage = 'none'
        content.style.background = 'none'
        content.style.color = 'black'
        console.log("settingBG to none")

        navBar.style.backgroundColor = 'rgb(199, 199, 223)';
    }
    
}

adjustContentCSS();
createBionicText();


/*
check if browser is not webkit based
if not special js must be run for background-clip: text
*/
if (navigator.userAgent.indexOf('AppleWebKit') === -1) {
    //not webkit based
    
}

config.particles.move.speed = parseFloat((window.outerHeight / 385).toFixed(2))
console.log(config.particles.move.speed)
particlesJS("particles-js", config);
