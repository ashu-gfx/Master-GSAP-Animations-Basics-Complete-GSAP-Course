var initialPath = `M 10 100 Q 550 100 990 100`
var finalPath = `M 10 100 Q 550 100 990 100`
var svg = document.querySelector('#path')

var string = document.querySelector('.string')

string.addEventListener('mouseenter', function (dets) {
  console.log('entered')
})



string.addEventListener('mousemove', function (dets) {
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
  // const newPathData = initialPath
  // svg.setAttribute('d', newPathData)
  // this js code is also working if we dont want to use gsap code we can use this also

  gsap.to('svg path', {
    attr: { d: initialPath},
    duration:0.2,
    ease: "power3.out"
  })
})

string.addEventListener('mouseleave', function () {
  gsap.to("svg path",{
    attr:{d: finalPath},
    duration:2,
    ease: "elastic.out(1,0.1)"
  })
})
