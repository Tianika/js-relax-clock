const BACKGROUNDS = [
  'byron-johnson-ec2SZSGPwJA-unsplash',
  'de-jesus-benitez-kEgJVDkQkbU-unsplash',
  'carla-cervantes-0FxXZWxaWt0-unsplash',
  'frank-mckenna-4V8JxijgZ_c-unsplash',
  'jake-blucker-bYJz2UAIAGI-unsplash',
  'media-ueBIGLmiI5A-unsplash',
  'nelson-santos-jr-PuaIPFH3FHg-unsplash',
  'oc-gonzalez-xg8z_KhSorQ-unsplash',
  'simon-hajducki-QLL9CGveAO0-unsplash',
  'aleksandr-ledogorov-G-JJy-Yv_dA-unsplash',
  'mike-aunzo-yYSnv8meSMY-unsplash',
  'dave-hoefler-D-FI-GHZeVc-unsplash',
  'akk-U3wLZLmsVG8-unsplash',
  'eric-scherrer-Xuv4SC-ld4M-unsplash',
  'anders-jilden-uwbajDCODj4-unsplash',
  'simon-marsault-5oow5G6BCGY-unsplash',
  'anton-darius-xYIuqpHD2oQ-unsplash',
]

const leftBtn = document.querySelector('.arrow-left')
const rightBtn = document.querySelector('.arrow-right')

let bgIndex = Math.round(Math.random() * BACKGROUNDS.length)
changeBackground(bgIndex)

leftBtn.addEventListener('click', () => {
  change('left')
})

rightBtn.addEventListener('click', () => {
  change('right')
})

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
