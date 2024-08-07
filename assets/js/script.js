
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


    



})(jQuery);

