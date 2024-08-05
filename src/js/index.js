import config from '../assets/particles.json'
import 'particles.js'
import '../css/index.css';


function parseUA() {
    var u = navigator.userAgent;
    var u2 = navigator.userAgent.toLowerCase();
    return { 
        trident: u.indexOf('Trident') > -1, 
        presto: u.indexOf('Presto') > -1, 
        webKit: u.indexOf('AppleWebKit') > -1, 
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
        iPhone: u.indexOf('iPhone') > -1, 
        iPad: u.indexOf('iPad') > -1, 
        webApp: u.indexOf('Safari') == -1, 
        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: u2.match(/MicroMessenger/i) == "micromessenger",
        ali: u.indexOf('AliApp') > -1,
    };
}
var ua = parseUA();
var metaTag=document.createElement('meta');
metaTag.name = "viewport"
if (ua.mobile && window.screen.width < 720) {
    metaTag.content = "width=720, initial-scale=1.0"
}
else {
    metaTag.content = "width=device-width, initial-scale=1.0"
}

document.getElementsByTagName('head')[0].appendChild(metaTag);

const createBionicText = () => {
    let textElems = document.getElementsByClassName("bionicText");
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
    if (contentBG) {
         contentBG.style.backgroundImage = `linear-gradient(transparent ${offset-1}px, rgba(205, 205, 226, 0.75) calc(${offset}px + 3.5rem), rgba(205, 205, 226, 0.75) calc(100% - 3.5rem ), transparent calc(100% - 0.5rem))`
    }
    
    if (navigator.userAgent.indexOf('AppleWebKit') === -1) {
        //not webkit based
        //remove text clip color if not webkitbased
        let content = document.getElementById("contentContainer")
        if (content) {
            content.style.backgroundImage = 'none'
            content.style.background = 'none'
            content.style.color = 'black'
        }
    }
    
}

adjustContentCSS();
createBionicText();

config.particles.move.speed = parseFloat((window.outerHeight / 385).toFixed(2))
particlesJS("particles-js", config);
