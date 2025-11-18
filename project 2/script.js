var tl = gsap.timeline()
var menu = document.querySelector('.nav i')
var menuCloseicon = document.querySelector('.full i')

tl.to('.full', {
  right: 0,
  duration: 0.8
})

tl.from('.full h4', {
  x: 150,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0
})

tl.from('.full i', {
  opacity: 0
})

tl.pause()

menu.addEventListener('click', function () {
  tl.play()
})

menuCloseicon.addEventListener('click', function () {
  tl.reverse()
})
