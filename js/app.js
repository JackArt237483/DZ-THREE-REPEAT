const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
let currentSlider = 0 // переменная которая следит за слайдами
let intervalSlider // хранит активный индекс слайда который будет переключаться

const hiddenContent = () => {
  tabContent.forEach(item => {
    item.style.display =  "none" 
  })
  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active')
  })
}

const showContent = (i = 0) => {
  tabContent[i].style.display = "block"
   tabs[i].classList.add('tabheader__item_active')
   tabContent[i].classList.add('show')
}

const startSlider = () => { // функция которая начинает слайдер 
  intervalSlider = setInterval(() => {
     hiddenContent()// фукнция котоая котоая будет скрывать слайды
     currentSlider = (currentSlider + 1) % tabContent.length// переменная котоая будет на автомате менять активный слайдер и переходить к следующиму блогодоря %
     showContent(currentSlider) // внутри неё мы вызываем активный слайд который будет меняться 
  }, 1000);
}

hiddenContent()
showContent()
startSlider() 

tabsParent.addEventListener('click', (e)=> {
  const target = e.target

  if(target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if(target === item) {
        hiddenContent()
        showContent(i)
      }
    })
  }
})

const modal = document.querySelector(".modal")
const openModalButton = document.querySelector(".btn_white")
const modalClose = document.querySelector(".modal__close")
const modalContent = document.querySelector('.modal-content');

const openModal = () => {
  modal.classList.add('show')
  modal.classList.remove('hide')
  document.body.style.overflow = "hidden"
}

const boxModal = () => {
  modal.classList.remove('show')
  modal.classList.add('hide')
  document.body.style.overflow = ""
}


openModalButton.addEventListener("click", openModal)
modalClose.addEventListener('click', boxModal)

window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    openModal();
  }
});


modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; 
}
