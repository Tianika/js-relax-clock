const presets = {
  default: `blur(0px) brightness(1) contrast(1) grayscale(0) invert(0)
  saturate(1) hue-rotate(0deg) sepia(0)`,
}

const inputs = document.querySelectorAll('.controls input')
const reset = document.querySelector('.reset')
const photo = document.querySelector('.photo-main')
const galleryBtns = document.querySelectorAll('.gallery-img')

function filterUpdate() {
  const suff = this.dataset.sizing || ''
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suff
  )
  checkBgColor()
}

function checkBgColor() {
  const root = document.querySelector(':root')
  const color = getComputedStyle(root).getPropertyValue('--background')
  const currColor = Number(`0x${color.substring(1, 7)}`)

  if (currColor < 8421504) {
    changeColor('--text', '#ffffff')
    changeColor('--first-color', '#000000')
    changeColor('--second-color', '#ffffff')
  } else {
    changeColor('--text', '#000000')
    changeColor('--first-color', '#ffffff')
    changeColor('--second-color', '#000000')
  }
}

function changeColor(vari, color) {
  document.documentElement.style.setProperty(vari, color)
}

function resetInputs() {
  const reset = document.querySelector('.photo-main')
  reset.style.filter = presets['default']
}

function changePhoto() {
  photo.src = this.src
}

inputs.forEach((input) => input.addEventListener('change', filterUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', filterUpdate))
galleryBtns.forEach((button) => button.addEventListener('click', changePhoto))

//reset.addEventListener('click', resetInputs)
