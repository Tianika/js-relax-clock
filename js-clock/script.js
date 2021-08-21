const BACKGROUNDS = [
  'byron-johnson-ec2SZSGPwJA-unsplash',
  'de-jesus-benitez-kEgJVDkQkbU-unsplash',
  'frank-mckenna-4V8JxijgZ_c-unsplash',
  'nelson-santos-jr-PuaIPFH3FHg-unsplash',
  'mike-aunzo-yYSnv8meSMY-unsplash',
  'dave-hoefler-D-FI-GHZeVc-unsplash',
  'akk-U3wLZLmsVG8-unsplash',
  'eric-scherrer-Xuv4SC-ld4M-unsplash',
  'anders-jilden-uwbajDCODj4-unsplash',
  'simon-marsault-5oow5G6BCGY-unsplash',
  'anton-darius-xYIuqpHD2oQ-unsplash',
]
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const leftBtn = document.querySelector('.arrow-left')
const rightBtn = document.querySelector('.arrow-right')
const timeStr = document.querySelector('.digital-time')
const dateStr = document.querySelector('.digital-date')

let bgIndex = Math.round(Math.random() * BACKGROUNDS.length)

let timerId = setTimeout(function show() {
  getTime()
  setTimeout(show, 1000)
}, 1000 - new Date().getMilliseconds())

leftBtn.addEventListener('click', () => change('left'))
rightBtn.addEventListener('click', () => change('right'))

getTime()
changeBackground(bgIndex)

function analogTime() {
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
}

function getTime() {
  let now = new Date()
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let time = now.toLocaleTimeString()
  let date = now.toLocaleDateString('en-GB', options)

  showTime(time, date)
}

function showTime(time, date) {
  timeStr.textContent = `${time}`
  dateStr.textContent = `${date}`
}

function change(direction) {
  if (direction === 'left') {
    if (bgIndex > 0) {
      bgIndex--
    } else {
      bgIndex = BACKGROUNDS.length - 1
    }
  }
  if (direction === 'right') {
    if (bgIndex < BACKGROUNDS.length - 1) {
      bgIndex++
    } else {
      bgIndex = 0
    }
  }

  changeBackground(bgIndex)
}

function changeBackground(bgIndex) {
  document.body.style.backgroundImage = `url(/img/${BACKGROUNDS[bgIndex]}.jpg)`
}
