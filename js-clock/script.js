const BACKGROUNDS = [
  'byron-johnson-ec2SZSGPwJA-unsplash',
  'de-jesus-benitez-kEgJVDkQkbU-unsplash',
  'irina-iriser-t1hVc9bqai0-unsplash',
  'frank-mckenna-4V8JxijgZ_c-unsplash',
  'eberhard-grossgasteiger-J759OVAFLhI-unsplash',
  'irina-iriser-uPKgTRAflLY-unsplash',
  'nelson-santos-jr-PuaIPFH3FHg-unsplash',
  'mike-aunzo-yYSnv8meSMY-unsplash',
  'karl-jk-hedin-8Cj3qmU2QtI-unsplash',
  'dave-hoefler-D-FI-GHZeVc-unsplash',
  'ricardo-prosperi-axF8pcPd0pc-unsplash',
  'luca-cavallin-PYlO9l71i3w-unsplash',
  'akk-U3wLZLmsVG8-unsplash',
  'eric-scherrer-Xuv4SC-ld4M-unsplash',
  'johannes-plenio-s0XDLfhyN34-unsplash',
  'anders-jilden-uwbajDCODj4-unsplash',
  'matias-mateo-aWFXsSOxNLg-unsplash',
  'simon-marsault-5oow5G6BCGY-unsplash',
  'freestocks-EssPg6x5QeY-unsplash',
  'anton-darius-xYIuqpHD2oQ-unsplash',
]

const SOUNDS = [
  'gorenie-ognya-s-potreskivaniem-2-27551',
  'groza-i-prolivnoy-dojd',
  'krik-i-gogotanie-ptits-i-shum-voln',
  'les-ptitsyi-techet-reka-36679',
  'les-yujnaya-amerika-vecher-nasekomyie-blizko-38554',
  'more-slegka-volnuetsya',
  'ogon-v-kamine-loop-27524',
  'penie-ptits-v-parke-26166',
  'priroda-noch-sverchki-36291',
  'prolivnoy-dojd',
  'reka-techt-omyivaya-kamni-medlennoe-techenie-31243',
  'shum-voln-bereg-morya-31279',
  'volna-voln-katitsya-zvukovyie-effektyi-42809',
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

const QUOTES = [
  'A dream becomes a goal when action is taken toward its achievement',
  'In any business the most important thing is to start. Remember: no one has been able to succeed planning!',
  'Success does not consist in never making mistakes but in never making the same one a second time',
  'It does not matter how slowly you go so long as you do not stop',
  'The time for action is now. It’s never too late to do something.',
  'You miss 100% of the shots you don’t take',
  'Do not squander time – this is stuff life is made of',
  'Your life is not a problem to be solved but a gift to be opened',
  'Life is short. There is no time to leave important words unsaid',
  'We do not remember days, we remember moments',
  'Failure does not mean. I have disgraced. It does mean I have dared to try',
  'If you fall asleep now, you will dream. If you study now, you will live your dream',
  'A pessimist sees the difficulty in every opportunity. An optimist sees the opportunity in every difficulty',
  'Don’t let yesterday take up too much of today',
  'You don’t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens',
  'All our dreams can come true, if we have the courage to pursue them',
]

const leftBtn = document.querySelector('.arrow-left')
const rightBtn = document.querySelector('.arrow-right')
const timeStr = document.querySelector('.digital-time')
const dateStr = document.querySelector('.digital-date')
const hourHands = document.querySelector('.hours')
const minutesHands = document.querySelector('.minutes')
const secondHands = document.querySelector('.seconds')
const center = document.querySelector('.center')
const audio = document.querySelector('.audio')
const leftSound = document.querySelector('.back')
const rightSound = document.querySelector('.forward')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const volumeUp = document.querySelector('.volumeUp')
const volumeDown = document.querySelector('.volumeDown')
const quote = document.querySelector('.quotes')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

let bgIndex = Math.floor(Math.random() * BACKGROUNDS.length)
let soundIndex = Math.floor(Math.random() * SOUNDS.length)
let quoteIndex = Math.floor(Math.random() * QUOTES.length)

document.body.style.backgroundImage = `url(./img/${BACKGROUNDS[bgIndex]}.jpg)`
audio.src = `./mp3/${SOUNDS[soundIndex]}.mp3`
quote.textContent = `${QUOTES[quoteIndex]}`
setTime()

leftBtn.addEventListener('click', () =>
  changeBackground('left', BACKGROUNDS, bgIndex)
)
rightBtn.addEventListener('click', () =>
  changeBackground('right', BACKGROUNDS, bgIndex)
)
leftSound.addEventListener('click', () =>
  changeSound('left', SOUNDS, soundIndex)
)
rightSound.addEventListener('click', () =>
  changeSound('right', SOUNDS, soundIndex)
)
play.addEventListener('click', () => audio.play())
pause.addEventListener('click', () => audio.pause())
volumeDown.addEventListener('click', () => (audio.volume -= 0.1))
volumeUp.addEventListener('click', () => (audio.volume += 0.1))
previous.addEventListener('click', () =>
  changeQuote('left', QUOTES, quoteIndex)
)
next.addEventListener('click', () => changeQuote('right', QUOTES, quoteIndex))
quote.addEventListener(
  'click',
  () =>
    (quote.textContent = `${QUOTES[Math.floor(Math.random() * QUOTES.length)]}`)
)

let timerId = setTimeout(function show() {
  setTime()
  analogClock()
  setTimeout(show, 1000)
}, 1000 - new Date().getMilliseconds())

function analogClock() {
  let now = new Date()

  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  let hourDeg = hours * 30 + minutes / 2
  let minutesDeg = minutes * 6
  let secondsDeg = (seconds / 60) * 360

  hourHands.style.transform = `rotate(${hourDeg}deg)`
  minutesHands.style.transform = `rotate(${minutesDeg}deg)`
  secondHands.style.transform = `rotate(${secondsDeg}deg)`
  center.style.transform = `rotate(${secondsDeg}deg)`
}

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

function changeBackground(direction, arr, index) {
  bgIndex = change(direction, arr, index)
  document.body.style.backgroundImage = `url(./img/${BACKGROUNDS[bgIndex]}.jpg)`
}

function changeSound(direction, arr, index) {
  soundIndex = change(direction, arr, index)
  audio.src = `./mp3/${SOUNDS[soundIndex]}.mp3`
}

function changeQuote(direction, arr, index) {
  quoteIndex = change(direction, arr, index)
  quote.textContent = `${QUOTES[quoteIndex]}`
}

function change(direction, arr, index) {
  if (direction === 'left') {
    if (index > 0) {
      index--
    } else {
      index = arr.length - 1
    }
  }
  if (direction === 'right') {
    if (index < arr.length - 1) {
      index++
    } else {
      index = 0
    }
  }
  return index
}

console.log(`
Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение. - 10 баллов
Дополнить исходный проект обязательным дополнительным функционалом - 10 баллов ( точное время, полное название дня недели, число и название месяца, год )
Дополнить исходный проект дополнительным функционалом - 10 баллов(
-- возможность смены фона кнопками и рандомно при загрузке
-- добавлен фоновый звук с возможностью смены и управления
-- цитата с рандомной заменой кликом на нее и кнопки для смены цитаты вправо-влево при клике на кавычки)
`)
