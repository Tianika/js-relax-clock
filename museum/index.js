const progress = document.querySelector('.progress')

progress.addEventListener('input', function () {
  const value = this.value
  this.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})
