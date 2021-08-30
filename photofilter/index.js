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

const preset0 = {
  blur: '0px',
  brightness: '1.1',
  contrast: '1.2',
  grayscale: '0.7',
  invert: '0',
  saturate: '2',
  'hue-rotate': '150deg',
  sepia: '0.3',
}

const preset1 = {
  blur: '0px',
  brightness: '1.3',
  contrast: '1.5',
  grayscale: '0',
  invert: '0',
  saturate: '1.1',
  'hue-rotate': '0deg',
  sepia: '0.3',
}

const preset2 = {
  blur: '0px',
  brightness: '1.1',
  contrast: '1.2',
  grayscale: '1',
  invert: '0',
  saturate: '1.5',
  'hue-rotate': '0deg',
  sepia: '0',
}

const preset3 = {
  blur: '0px',
  brightness: '1.2',
  contrast: '1.1',
  grayscale: '0.3',
  invert: '0',
  saturate: '0.8',
  'hue-rotate': '0deg',
  sepia: '0.7',
}

const root = document.querySelector(':root')
const style = document.documentElement.style
const inputs = document.querySelectorAll('.controls input')
const background = document.querySelector('.background')
const reset = document.querySelector('.reset')
const photo = document.querySelector('.photo-main')
const presets = document.querySelectorAll('.presets-img')
const galleryBtns = document.querySelectorAll('.gallery-img')
const load = document.querySelector('.load')
const save = document.querySelector('.save')

function filterUpdate() {
  const suff = this.dataset.sizing || ''
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suff
  )
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
  let keys = Object.keys(DEFAULTVALUES)
  keys.forEach((key) => style.setProperty(`--${key}`, DEFAULTVALUES[key]))
}

function setPreset(arrName) {
  let key
  let arr
  switch (arrName) {
    case 'preset0':
      arr = preset0
      keys = Object.keys(preset0)
      break
    case 'preset1':
      arr = preset1
      keys = Object.keys(preset1)
      break
    case 'preset2':
      arr = preset2
      keys = Object.keys(preset2)
      break
    case 'preset3':
      arr = preset3
      keys = Object.keys(preset3)
      break
  }

  keys.forEach((key) => style.setProperty(`--${key}`, arr[key]))
}

function changePhoto() {
  let imgUrl = this.src
  photo.src = imgUrl
  presets.forEach((preset) => {
    preset.src = imgUrl
  })
}

function getNamePreset() {
  let presetName = this.dataset.name
  setPreset(presetName)
}

function saveFile() {}

function loadFile() {}

inputs.forEach((input) => input.addEventListener('change', filterUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', filterUpdate))
galleryBtns.forEach((button) => button.addEventListener('click', changePhoto))
presets.forEach((img) => img.addEventListener('click', getNamePreset))
background.addEventListener('change', checkBgColor)
reset.addEventListener('click', resetInputs)
save.addEventListener('click', saveFile)
load.addEventListener('click', loadFile)

console.log(`В фоторедакторе реализованы несколько фильтров, изменение цвета фона и рамки, 
размера рамки, изменение цвета текста в зависимости от светлоты фона.
Есть галерея фото. Главное фото меняется по клику на фото в галерее. 
Так же меняется фото пресета. При клике на пресет, настройки применяются к главному фото.
При клике на ресет фильтры сбрасываются с фото, но пока не доделан сброс значений ползунков и кнопки load и save`)
