const slide = document.querySelectorAll('.slide');
const btnAnt = document.getElementById('btn-ant');
const btnProx = document.getElementById('btn-prox');

let atualSlide = 0;

function escondeSlide(){
    slide.forEach(item => item.classList.remove('on'));
}

function mostrarSlide(){
    slide[atualSlide].classList.add('on');
}


function proxSlide() {
  escondeSlide()
  if(atualSlide === slide.length -1) {
    atualSlide = 0;
  } else {
    atualSlide++;
  }
  mostrarSlide()
}

function antSlide() {
  escondeSlide()
  if(atualSlide === 0) {
    atualSlide = slide.length -1
  } else {
    atualSlide--
  }
  mostrarSlide()
}

btnProx.addEventListener('click', proxSlide)
btnAnt.addEventListener('click', antSlide)