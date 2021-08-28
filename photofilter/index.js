const inputs = document.querySelectorAll('.controls input')

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

inputs.forEach((input) => input.addEventListener('change', filterUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', filterUpdate))
