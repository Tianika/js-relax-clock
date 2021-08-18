const BACKGROUNDS = [
  'byron-johnson-ec2SZSGPwJA-unsplash',
  'de-jesus-benitez-kEgJVDkQkbU-unsplash',
  'carla-cervantes-0FxXZWxaWt0-unsplash',
  'frank-mckenna-4V8JxijgZ_c-unsplash',
  'jake-blucker-bYJz2UAIAGI-unsplash',
  'johannes-plenio-kfxBc2NQ18-unsplash',
  'media-ueBIGLmiI5A-unsplash',
  'nelson-santos-jr-PuaIPFH3FHg-unsplash',
  'oc-gonzalez-xg8z_KhSorQ-unsplash',
  'plenio-qkfxBc2NQ18-unsplash',
  'zoltan-tasi-8Ce-NRKCq4s-unsplash',
]

const leftBtn = document.querySelector('.arrow-left')
const rightBtn = document.querySelector('.arrow-right')

let bgIndex = 6

leftBtn.addEventListener('click', () => {
  console.log('left')
  change('left')
})

rightBtn.addEventListener('click', () => {
  console.log('right')
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
