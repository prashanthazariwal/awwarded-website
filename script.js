function locomotiveanimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function navbaranimation() {
  gsap.to("#navpart1 svg", {
    transform: "translateY(-130%)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 0",
      end: "top 5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-130%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 0",
      end: "top 5%",

      scrub: true,
    },
  });
  gsap.to("#nav", {
    // transform:"translateY(-130%)",
    backgroundColor: "#f7f7f700",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 0",
      end: "top 5%",

      scrub: true,
    },
  });
}
function videocnanimation() {
  let videocon = document.querySelector("#video-container");
  let playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 80,
      top: dets.y - 80,
    });
  });
}
function lodinganimationh1() {
  var tl = gsap.timeline();
  tl.from("#page1 h1,#video-container", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.4,
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#courser", {
      top: dets.y,
      left: dets.x,
    });
  });

  document.querySelector("#child1").addEventListener("mouseenter", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#child1").addEventListener("mouseleave", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelector("#child2").addEventListener("mouseenter", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#child2").addEventListener("mouseleave", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelector("#child3").addEventListener("mouseenter", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#child3").addEventListener("mouseleave", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelector("#child4").addEventListener("mouseenter", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#child4").addEventListener("mouseleave", function () {
    gsap.to("#courser", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
}
function menuclose() {
  const menuClose = document.querySelector("#icons #menuIcon .ri-close-line");

  menuClose.addEventListener("click", function () {
    gsap.to("#navMenu", {
      top: "-120%",
      height: "0vh",
      duration: 0.5,
      delay: 0.2,
    });
    gsap.to("#links a , #navpart1 svg", {
      color: "black",
    });
    gsap.to("#icons #menuIcon .ri-menu-line", {
      display: "initial",
      delay: 0,
      duration: 0,
    });
    gsap.to("#icons #menuIcon .ri-close-line", {
      display: "none",
      delay: 0,
      duration: 0,
    });
  });
}
function menuOpen() {
    const menuIcon = document.querySelector(".ri-menu-line");
  
    menuIcon.addEventListener("click", function () {
      gsap.to("#navMenu", {
        top: "0%",
        height: "100vh",
        duration: 0.5,
        delay: 0.2,
      });
      gsap.to("#links a , #navpart1 svg", {
        color: "white",
      });
      gsap.to("#icons #menuIcon .ri-menu-line", {
        display: "none",
        delay: 0,
        duration: 0,
      });
      gsap.to("#icons #menuIcon .ri-close-line", {
        display: "initial",
      });
      gsap.from("#navMenu #right a", {
        y: "100%",
        delay: 1,
      });
      gsap.from("#navMenu #left", {
        y: "100%",
        delay: 1,
        duration: 0.9,
      });
    });
  }
  function openCartMenu(){
    const cartIcon = document.querySelector(".ri-shopping-cart-line")
    
    cartIcon.addEventListener("click", function(){
      gsap.to("#cartMenu", {
        top: "0%",
        height: "85vh",
        duration: 0.5,
        delay: 0.2,
      });
      gsap.to("#links a , #navpart1 svg", {
        color: "white",
      });
      gsap.to("#icons #cart .ri-shopping-cart-line", {
        display: "none",
        delay: 0,
        duration: 0,
      });
      gsap.to("#icons #cart .ri-close-line", {
        display: "initial",
      });
    })
  }
  function closeCartMenu (){
    const cartMenuCloseIcon = document.querySelector("#icons #cart .ri-close-line");
  
    cartMenuCloseIcon.addEventListener("click", function(){
      gsap.to("#cartMenu", {
        top: "-120%",
          height: "0vh",
          duration: 0.5,
          delay: 0.2,
      });
      gsap.to("#links a , #navpart1 svg", {
        color: "black",
      });
      gsap.to("#icons #cart .ri-shopping-cart-line", {
        display: "initial",
        delay: 0,
        duration: 0,
      });
      gsap.to("#icons #cart .ri-close-line", {
        display: "none",
        delay: 0,
        duration: 0,
      });
    })
  }
locomotiveanimation();
navbaranimation();
videocnanimation();
lodinganimationh1();
cursorAnimation();
menuclose();
menuOpen();
openCartMenu();
closeCartMenu();


// function lodinganimationh1(){
//     var tl=gsap.timeline();
//     gsap.from("#page1 h1",{
//         y:100,
//         opacity:0,
//         delay:0.5,
//         duration:0.5,
//         stagger:0.4
//     })

// gsap.from("#video-container",{
//     y:100,
//     opacity:0,
//     delay:0.5,
//     duration:0.5,
//     stagger:0.4
// })
// }
// lodinganimationh1();


// [[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]

// const details = document.querySelectorAll('.dets');
// console.log(details)

// const detailContainer = document.querySelector("#page2 .elem .dets .lowerDiv")

// details.forEach((det)=>{
//   det.addEventListener('mouseover', function(){
//     gsap.to(detailContainer,{
//        height: "200px",
//        duration: 0.2
//     })
//   })
// })
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// const footerLeft  = document.querySelector("#footer #upperDiv #left h2")
// console.log(footerLeftH2)

// gsap.from(footerLeftH2, {
//   x:-120,
//   duration :1,
//   scrollTrigger: {
//     trigger: '#footer',
//     markers : true,
//     start : "top 60%",
//     end : "top 30%",
//     ease: 'linear',
//   }
// })