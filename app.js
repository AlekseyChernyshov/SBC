const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.main__container')
const items = document.querySelectorAll('.about__item')
const controls = document.querySelectorAll('.about__button')
const inputName = document.getElementById('formName')
const inputEmail = document.getElementById('formEmail')



let activeSlideIndex = 0
let itemIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
// const viewport_widht = Math.max(document.documentElement.clientWidth,window.innerWidth || 0)
//   if(viewport_widht < 620 ) sidebar.style.top = `-${(slidesCount - 1) * 65}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

function show(index) {
  // items[itemIndex].classList.remove('active')
  items[index].classList.add('active')
  itemIndex = index
}

const controlClick = (event) => {
  if(event.target.classList.contains('prev')) {
    let index = itemIndex - 1

    if (index < 0) index = items.length - 1

    show(index)
  } else if(event.target.classList.contains('next')) {
    let index = itemIndex + 1

    if(index >= items.length) index = 0

    show(index)
  }
}

controls.forEach((e) => {
  e.addEventListener('click', controlClick)
})

 show(itemIndex)

 function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

const tel = document.getElementById('formTel')

tel.onchange = (event) => {

}

tel.addEventListener('focus', () => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(tel.value))
    // То вставляем знак плюса как значение
    tel.value = '+7';
});

const onChange = event => {
  const currentValue = event.target.value

  if (currentValue.test(/\d/)) {
    event.preventDefault()
  }
}

tel.addEventListener('change', onChange)

tel.addEventListener('keypress', event => {
  // Отменяем ввод не цифр
  if(!/\d/.test(event.key)) {
     event.preventDefault();
  }
});

const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  if(inputName.value.trim() == '') {
    return
  }

  const isEmail = emailTest(inputEmail);

  if (!isEmail) {
    return
  }

  if(tel.value.trim() == '+7') {
    alert('dsdsd')
  }
})
