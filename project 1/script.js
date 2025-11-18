var main = document.querySelector('.main')
var cursor = document.querySelector('.cursor')
var img = document.querySelector('.image')
main.addEventListener('mousemove', function (dets) {
  gsap.to(cursor, {
    left: dets.x,
    top: dets.y,
    duration:1
  })
})

img.addEventListener('mouseenter', function () {
    cursor.innerHTML = "<h1>view more</h1>"
    // console.log("done")
    gsap.to(cursor,{
        scale:5,
    })
})

img.addEventListener('mousemove', function () {
    // console.log("done")
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:5,
    })
})


img.addEventListener('mouseleave', function () {
    // console.log("done")
     cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
    })
})

