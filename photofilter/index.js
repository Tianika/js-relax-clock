const DEFAULTVALUES = {
  blur: '0px',
  brightness: '1',
  contrast: '1',
  grayscale: '0',
  invert: '0',
  saturate: '1',
  'hue-rotate': '0deg',
  sepia: '0',
}

const root = document.querySelector(':root')
const inputs = document.querySelectorAll('.controls input')
const reset = document.querySelector('.reset')
const photo = document.querySelector('.photo-main')
const presets = document.querySelectorAll('.presets-img')
const galleryBtns = document.querySelectorAll('.gallery-img')
const load = document.querySelector('.load')
const save = document.querySelector('.save')

function filterUpdate() {
  const suff = this.dataset.sizing || ''
  root.style.setProperty(`--${this.name}`, this.value + suff)
  checkBgColor()
}

function checkBgColor() {
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
  photo.className = 'photo-main'
}

function changePhoto() {
  let imgUrl = this.src
  photo.src = imgUrl
  presets.forEach((preset) => {
    preset.src = imgUrl
  })
}

function setPreset() {
  let style = this.dataset.name
  resetInputs()
  photo.classList.add(style)
}

function saveFile() {}

function loadFile() {}

inputs.forEach((input) => input.addEventListener('change', filterUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', filterUpdate))
galleryBtns.forEach((button) => button.addEventListener('click', changePhoto))
presets.forEach((img) => img.addEventListener('click', setPreset))
reset.addEventListener('click', resetInputs)
save.addEventListener('click', saveFile)
load.addEventListener('click', loadFile)

//root.style.setProperty('--main-color', '#88d8b0');
