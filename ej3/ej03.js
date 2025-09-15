/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {

  const segA = document.querySelector('#seg-a')
  const segB = document.querySelector('#seg-b')
  const segC = document.querySelector('#seg-c')
  const segD = document.querySelector('#seg-d')
  const segE = document.querySelector('#seg-e')
  const segF = document.querySelector('#seg-f')
  const segG = document.querySelector('#seg-g')

  segA.classList.remove('red')
  segB.classList.remove('red')
  segC.classList.remove('red')
  segD.classList.remove('red')
  segE.classList.remove('red')
  segF.classList.remove('red')
  segG.classList.remove('red')


  const randomDigit = Math.floor(Math.random() * 10)


  toggle(randomDigit);


}



function toggle(randomDigit) {

  const segA = document.querySelector('#seg-a')
  const segB = document.querySelector('#seg-b')
  const segC = document.querySelector('#seg-c')
  const segD = document.querySelector('#seg-d')
  const segE = document.querySelector('#seg-e')
  const segF = document.querySelector('#seg-f')
  const segG = document.querySelector('#seg-g')


  switch (randomDigit) {
    case 0:
      segA.classList.toggle('red')
      segB.classList.toggle('red')
      segC.classList.toggle('red')
      segD.classList.toggle('red')
      segE.classList.toggle('red')
      segF.classList.toggle('red')
      break

    case 1:
      segB.classList.toggle('red')
      segC.classList.toggle('red')
      break
    case 2:
      segB.classList.toggle('red')
      segA.classList.toggle('red')
      segG.classList.toggle('red')
      segE.classList.toggle('red')
      segD.classList.toggle('red')
      break
    case 3:
      segB.classList.toggle('red')
      segG.classList.toggle('red')
      segA.classList.toggle('red')
      segC.classList.toggle('red')
      segD.classList.toggle('red')
      break
    case 4:
      segC.classList.toggle('red')
      segG.classList.toggle('red')
      segF.classList.toggle('red')
      segB.classList.toggle('red')
      break
    case 5:
      segC.classList.toggle('red')
      segG.classList.toggle('red')
      segF.classList.toggle('red')
      segA.classList.toggle('red')
      segD.classList.toggle('red')
      break
    case 6:
      segC.classList.toggle('red')
      segG.classList.toggle('red')
      segF.classList.toggle('red')
      segA.classList.toggle('red')
      segD.classList.toggle('red')
      segE.classList.toggle('red')
      break
    case 7:
      segB.classList.toggle('red')
      segC.classList.toggle('red')
      segA.classList.toggle('red')
      break
    case 8:
      segA.classList.toggle('red')
      segB.classList.toggle('red')
      segC.classList.toggle('red')
      segD.classList.toggle('red')
      segE.classList.toggle('red')
      segF.classList.toggle('red')
      segG.classList.toggle('red')
      break
    case 9:
      segA.classList.toggle('red')
      segB.classList.toggle('red')
      segC.classList.toggle('red')
      segF.classList.toggle('red')
      segG.classList.toggle('red')
      break
  }


}
