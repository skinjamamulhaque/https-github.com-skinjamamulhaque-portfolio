// alert("This page is being developed by Sk Injamamul Haque, Best view on Desktop mode");

function locoScrollTriggerFn(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: "#main",
    // scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScrollTriggerFn();

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

// Swal.fire({
//   html: "Developed by <strong>Sk Injamamul Haque</strong>", 
//   icon: "info",
//   html: `
//     Being develop by <strong>Sk Injamamul Haque</strong>" <br>
//     Best view on Desktop mode
//   `,
//   showCloseButton: true, 
// });

var tl = gsap.timeline()

tl.from("#opener h3",{
  x:30,
  opacity:0,
  stagger:0.4,
  duration:1,
})
tl.to("#opener h3",{
  opacity:0,
  stagger:0.4,
  duration:1,
})

tl.to("#opener",{
  y:-200,
  // duration:1,
  opacity:0,
})
tl.to("#opener",{
  display: "none"
})


gsap.from(".nav_list .nav_link , .logo",{
  y:-120,
  duration:1,
  delay:1,
  stagger:0.2
} )

gsap.from(".Heading h2",{
  y:-90,
  duration:2,
  delay:0.5,
  opacity:0
})

gsap.from(".Heading .heading_para",{
  x:1200,
  duration:1.9,
  delay:0.5,
})

gsap.from(".section_container .profile_img",{
 x:30,
 duration:2,
 delay:1, 
 opacity:0,
})

gsap.from(".content_details h2, .about_para, .Readmore",{
  x:50,
  duration:2,
  delay:1, 
  opacity:0,
  stagger:0.5
 })

 gsap.from(".card_container .card",{
  x:1000,
  stagger:0.3,
  duration:0.8,
  scrollTrigger:{
    trigger:".card_container .card",
    scroller:"#main",
    // scrub:2,
    // markers:true,

  }
 })

 gsap.from(".content_details h3",{
  x:-500,
  stagger:0.5,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".content_details h3",
    scroller:"#main",
    // scrub:1,
  }
 })

 gsap.from(".content_box h3",{
  y:-50,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".content_box h3",
    scroller:"#main",
    // scrub:2,
  }
 })

 gsap.from(".card1 img",{
  scale:0,
  duration:2,
  scrollTrigger:{
    trigger:".card1 img",
    scroller:"#main",
    scrub:2,
  }
})






