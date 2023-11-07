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





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();








gsap.from("#nav h2",{
    y:-50,
    duration:1,
    opacity:0,
    delay:1,
})
gsap.from("#page1>#page1prt2",{
     y:100,
    duration:1,
    opacity:0,
    delay:1,
})
gsap.from("#page2>img",{
     y:100,
    duration:1,
    opacity:0,
    delay:1.5,
})

gsap.from("#page3 h4 ,#page3 h2",{
     y:100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h4,#page3 h2",
        scroller:"#main",
        scrub:3,
        start:"top 80%",
        end:"top 70%"
    }
    
})

gsap.from("#page3 .page3box",{
    y:200,
    opacity:0,
    stagger:0.2,

    scrollTrigger:{
        trigger:"#page3 .page3box",
        scroller:"#main",
        start:"top 90%",
        end:"top 80%",
        scrub:3,


    }
})
gsap.to("#page4 .imagecount1 ",{
   y:-20,
   x:20,
   scrollTrigger:{
    trigger:"#page4 .imagecount1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:3, 
   }
})
gsap.to("#page4 .imagecount2 ",{
   y:20,
   x:-20,
   scrollTrigger:{
    trigger:"#page4 .imagecount2",
        scroller:"#main",
        start:"top 80%",
        end:"top 70%",
        // markers:true,
        scrub:3, 
   }
})
gsap.from("#page4 h1",{
   x:100,
   duration:2,
   opacity:0.3,
   
   scrollTrigger:{
    trigger:"#page4 h1",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})
gsap.from("#page4 h5",{
   x:-100,
   duration:2,
   opacity:0.3,
   
   scrollTrigger:{
    trigger:"#page4 h5",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})

gsap.to("#page5 .imagecount1 ",{
   y:-20,
   x:20,
   duration:2,

   scrollTrigger:{
    trigger:"#page5 .imagecount1",
        scroller:"#main",
        // markers:true,
       start:"top 70%",
        end:"top 60%",
        scrub:3, 
   }
})
gsap.to("#page5 .imagecount2 ",{
   y:20,
   x:-20,
   duration:2,
   scrollTrigger:{
    trigger:"#page5 .imagecount2",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})
gsap.from("#page5 h1",{
   x:-100,
   duration:2,
   opacity:0.3,
   
   scrollTrigger:{
    trigger:"#page5 h1",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})
gsap.from("#page5 h5",{
   x:100,
   duration:2,
   opacity:0.3,
   
   scrollTrigger:{
    trigger:"#page5 h5",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})


gsap.to("#page6 .imagecount1 ",{
   y:-20,
   x:20,
   duration:2,
   scrollTrigger:{
    trigger:"#page6 .imagecount1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:3, 
   }
})
gsap.to("#page6 .imagecount2 ",{
   y:20,
   x:-20,
   duration:2,

   scrollTrigger:{
    trigger:"#page6 .imagecount2",
        scroller:"#main",
        start:"top 80%",
        end:"top 70%",
        // markers:true,
        scrub:3, 
   }
})
gsap.from("#page6 h1",{
   x:100,
   duration:2,
   opacity:0.3,
   
   scrollTrigger:{
    trigger:"#page6 h1",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})
gsap.from("#page6 h5",{
   x:-100,
   duration:2,
   opacity:0.3,
   
   scrollTrigger:{
    trigger:"#page6 h5",
        scroller:"#main",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:3, 
   }
})

gsap.from("#page7 h1",{
    x:-100,
    opacity:0.2,
    duration:2,

    scrollTrigger:{
        trigger:"#page7 h1",
        scroller:"#main",
        start:"top 80%",
        end:"top 70%",
        // markers:true,
        scrub:3,

    }
})
gsap.from("#page7 h5",{
    x:100,
    opacity:0.2,
    duration:2,
    
    scrollTrigger:{
        trigger:"#page7 h5",
        scroller:"#main",
        start:"top 80%",
        end:"top 70%",
        // markers:true,
        scrub:3,

    }
})
gsap.to("#page7 .first1",{
    y:400,
    scrollTrigger:{
        trigger:"#page7 .first1",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3,
        
    }
})
gsap.to("#page7 .first2",{
    y:-400,
    scrollTrigger:{
        trigger:"#page7 .first2",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3,  
    }
})


gsap.from("#page8 h4",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#page8 h4",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})
gsap.from("#page8 h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page8 h2",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})
gsap.from("#page8 .page8box",{
    y:100,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page8 .page8box",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})

gsap.from("#page9 .h4",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#page9 .h4",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})
gsap.from("#page9 .h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page9 .h2",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})

gsap.from("#page9 .page9box1",{
    x:400,
    opacity:0,
    duration:2,

    scrollTrigger:{
        trigger:"#page9 .page9box1",
        scroller:"#main",
         start:"top 70%",
        end:"top 60%",
        scrub:4, 

    }

})
gsap.from("#page9 .page9box2",{
    x:-400,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page9 .page9box2",
        scroller:"#main",
         start:"top 70%",
        end:"top 60%",
        scrub:4, 

    }

})
gsap.from("#page9 .page9box3",{
    scale:0.7,
    // opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page9 .page9box3",
        scroller:"#main",
         start:"top 70%",
        end:"top 60%",
        scrub:3, 

    }

})

gsap.from("#page10 .h4",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#page10 .h4",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})
gsap.from("#page10 .h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 .h2",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})

gsap.from("#page10 #plusbox",{
    y:100,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:"#page10 #plusbox",
        scroller:"#main",
         start:"top 80%",
        end:"top 70%",
        scrub:3, 

    }
})
