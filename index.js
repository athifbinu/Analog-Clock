setInterval(setClock,1000)

const hourRHand=document.querySelector('[data-hour-hand]')
const minutHand=document.querySelector('[data-minut-hand]')
const secondHand=document.querySelector('[data-second-hand]');

function setClock() {
  const curentdate=new Date();
  const secondRatio=curentdate.getSeconds() /60
const minutRatio=(secondRatio+curentdate.getMinutes()) / 60
const hourRatio=(minutRatio+curentdate.getHours()) / 12

setRotation(secondHand,secondRatio)
setRotation(minutHand,minutRatio)
setRotation(hourRHand,hourRatio)

}
function setRotation(element,rotationRatio) {
  element.style.setProperty('--rotation',rotationRatio * 360)
 
}

setClock();

