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
  const body = document.querySelector('.body')
  const color = window.getComputedStyle(body).getPropertyValue('--background')
  const currColor = Number(`0x${color.substring(1, 7)}`)

  if (currColor < 8421504) {
    changeTextColor('#ffffff')
  } else {
    changeTextColor('#000000')
  }
}

function changeTextColor(color) {
  document.documentElement.style.setProperty(`--text`, color)
}

inputs.forEach((input) => input.addEventListener('change', filterUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', filterUpdate))
