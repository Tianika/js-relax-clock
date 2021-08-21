const BACKGROUNDS = [
  'byron-johnson-ec2SZSGPwJA-unsplash',
  'de-jesus-benitez-kEgJVDkQkbU-unsplash',
  'irina-iriser-t1hVc9bqai0-unsplash',
  'frank-mckenna-4V8JxijgZ_c-unsplash',
  'irina-iriser-uPKgTRAflLY-unsplash',
  'nelson-santos-jr-PuaIPFH3FHg-unsplash',
  'mike-aunzo-yYSnv8meSMY-unsplash',
  'karl-jk-hedin-8Cj3qmU2QtI-unsplash',
  'dave-hoefler-D-FI-GHZeVc-unsplash',
  'luca-cavallin-PYlO9l71i3w-unsplash',
  'akk-U3wLZLmsVG8-unsplash',
  'eric-scherrer-Xuv4SC-ld4M-unsplash',
  'johannes-plenio-s0XDLfhyN34-unsplash',
  'anders-jilden-uwbajDCODj4-unsplash',
  'simon-marsault-5oow5G6BCGY-unsplash',
  'freestocks-EssPg6x5QeY-unsplash',
  'anton-darius-xYIuqpHD2oQ-unsplash',
]

const SOUNDS = [
  'les-ptitsyi-techet-reka-36679',
  'les-yujnaya-amerika-vecher-nasekomyie-blizko-38554',
  'more-slegka-volnuetsya',
  'priroda-noch-sverchki-36291',
  'priroda-noch-sverchki-techet-reka-37383',
  'reka-malenkaya-31368',
  'reka-techt-omyivaya-kamni-medlennoe-techenie-31243',
  'spokoynoe-more-i-kriki-chaek',
  'volnyi-pleschutsya-more-okean-pobereje-41080',
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
const hourHands = document.querySelector('.hours')
const minutesHands = document.querySelector('.minutes')
const secondHands = document.querySelector('.seconds')
const audio = document.querySelector('.audio')
const leftSound = document.querySelector('.sound-left')
const rightSound = document.querySelector('.sound-right')

let bgIndex = Math.round(Math.random() * BACKGROUNDS.length)

let timerId = setTimeout(function show() {
  setTime()
  analogClock()
  setTimeout(show, 1000)
}, 1000 - new Date().getMilliseconds())

leftBtn.addEventListener('click', () => change('left', BACKGROUNDS))
rightBtn.addEventListener('click', () => change('right', BACKGROUNDS))
leftSound.addEventListener('click', () => change('left', SOUNDS))
rightSound.addEventListener('click', () => change('right', SOUNDS))

changeBackground(bgIndex)
changeAudio(bgIndex)
setTime()

function setIndex(arr) {
  let bgIndex = Math.round(Math.random() * arr.length)
}

function analogClock() {
  let now = new Date()

  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  let hourDeg = hours * 30
  let minutesDeg = minutes * 6
  let secondsDeg = seconds * 6

  hourHands.style.transform = `rotate(${hourDeg}deg)`
  minutesHands.style.transform = `rotate(${minutesDeg}deg)`
  secondHands.style.transform = `rotate(${secondsDeg}deg)`
}

function setTimeClock() {}

function setTime() {
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

function change(direction, arr) {
  if (direction === 'left') {
    if (bgIndex > 0) {
      bgIndex--
    } else {
      bgIndex = arr.length - 1
    }
  }
  if (direction === 'right') {
    if (bgIndex < arr.length - 1) {
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

function changeAudio(bgIndex) {
  audio.style.src = `/mp3/${SOUNDS[bgIndex]}.mp3`
}
