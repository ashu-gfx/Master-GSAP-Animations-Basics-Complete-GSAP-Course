gsap.from('.page1 .box', {
  scale: 0,
  delay: 1,
  duration: 1,
  rotation: 360,
  repeat: -1,
  yoyo: true
})

gsap.from('.page3 .box', {
  scale: 0,
  duration: 1,
  rotation: 360,
  scrollTrigger: {
    trigger: '.page3 .box',
    scroller: 'body',
    // markers: true,
    start: 'top 60%',
    end: 'top 30%',
    scrub: 2,
    pin: true
  }
})

gsap.from('.page2 h1', {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: '.page2 h1',
    scroller: 'body',
    // markers: true,
    start: 'top 50%',
    scrub: true
  }
})

gsap.from('.page2 h2', {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: '.page2 h2',
    scroller: 'body',
    // markers: true,
    start: 'top 50%',
    scrub: 1
  }
})

gsap.to('.page5 h1', {
  transform: 'translateX(-60%)',
  scrollTrigger: {
    trigger: '.page5',
    start: 'top 0%',
    end: 'top -200%',
    scroller: 'body',
    markers: true,
    scrub:2,
    pin: true
  }
})
