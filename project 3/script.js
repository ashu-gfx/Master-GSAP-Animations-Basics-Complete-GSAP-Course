function breakText () {
  var h1 = document.querySelector('h1')
  var h1Text = h1.textContent

  var splittedText = h1Text.split('')
  var halfValue = Math.floor(splittedText.length / 2)

  console.log(halfValue)
  var clutter = ''

  splittedText.forEach(function (e, index) {
    if (index < halfValue) {
      clutter = clutter + `<span class="a">${e}</span>`
    } else {
      clutter = clutter + `<span class="b">${e}</span>`
    }

    //this code is also working
    // if (index < 4) {
    //   clutter = clutter + `<span class="a">${e}</span>`
    // } else {
    //   clutter = clutter + `<span class="b">${e}</span>`
    // }
  })

  h1.innerHTML = clutter
}

breakText()

gsap.from('h1 .a', {
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  repeat: -1,
  yoyo: true
})

gsap.from('h1 .b', {
  y: 50,
  opacity: 0,
  stagger: -0.15,
  duration: 1,
  repeat: -1,
  yoyo: true
})
