
(function ($) {
    "use strict";






    if ($('.magic-cursor').length > 0) {

        const cursor = document.querySelector('.magic-cursor');
        const hoverTargets = document.querySelectorAll('.hover-target');
        let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
    
        document.addEventListener('mousemove', function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });
    
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1; // Adjust the 0.1 value to control the smoothness
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
    
        animateCursor();
    
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
            });
    
            target.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
            });
        });
    }

    /////////////////////////////////////////////////////
    // // 20. Register GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 21. Config GSAP
    gsap.config({
        nullTargetWarn: false,
    });
    // /////////////////////////////////////////////////////

    
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: true,
          rotationX: 180,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, chars" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "chars" })
      tl.from(itemSplitted.chars, { duration: 0.4, duration: 0.8, opacity: 0, x: 50, stagger: { amount: 0.9 }, });
    });

    // function textAnimate(sliderElement) {
    //     const textsToAnimate = sliderElement.querySelectorAll(".title-anim");
    //     textsToAnimate.forEach(textToAnimate => {
    //         const animate = new SplitType(textToAnimate, { types: 'words , chars' });
    //         gsap.from(animate.chars, {
    //             opacity: 0,
    //             x: 100,
    //             duration: 1.1,
    //             stagger: { amount: 0.9 },
    //             scrollTrigger: {
    //                 trigger: textToAnimate,
    //                 start: "top 95%",
    //                 markers: true,
    //             }
    //         });
    //     })
    // };

    // textAnimate(document);

})(jQuery);

