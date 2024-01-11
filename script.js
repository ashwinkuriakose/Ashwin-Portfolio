function toggleMenu() {
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// GSAP TITLE

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});

// CUSTOM CURSOR

$(window).mousemove(function (event) {
  $(".cursor").css({
    left: event.pageX,
    top: event.pageY,
  });
});

$("p")
  .on("mouseenter", function () {
    $(".cursor").addClass("focus");
  })
  .on("mouseleave", function () {
    $(".cursor").removeClass("focus");
  });