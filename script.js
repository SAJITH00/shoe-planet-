const card1 = document.getElementById("card1");

card1.addEventListener("mouseenter", () => {
    gsap.to(card1, {
        duration: 0.5,
        scale: 1.2,
        rotation: 10,
        ease: "power2.out"
    });
});

card1.addEventListener("mouseleave", () => {
    gsap.to(card1, {
        duration: 0.5,
        scale: 1,
        rotation: 0,
        ease: "power2.out"
    });
});
const card2 = document.getElementById("card2");

card2.addEventListener("mouseenter", () => {
    gsap.to(card2, {
        duration: 0.5,
        scale: 1.2,
        rotation: 10,
        ease: "power2.out"
    });
});

card2.addEventListener("mouseleave", () => {
    gsap.to(card2, {
        duration: 0.5,
        scale: 1,
        rotation: 0,
        ease: "power2.out"
    });
});
const card3 = document.getElementById("card3");

card3.addEventListener("mouseenter", () => {
    gsap.to(card3, {
        duration: 0.5,
        scale: 1.2,
        rotation: 10,
        ease: "power2.out"
    });
});

card3.addEventListener("mouseleave", () => {
    gsap.to(card3, {
        duration: 0.5,
        scale: 1,
        rotation: 0,
        ease: "power2.out"
    });
});
const card4 = document.getElementById("card4");

card4.addEventListener("mouseenter", () => {
    gsap.to(card4, {
        duration: 0.5,
        scale: 1.2,
        rotation: 10,
        ease: "power2.out"
    });
});

card4.addEventListener("mouseleave", () => {
    gsap.to(card4, {
        duration: 0.5,
        scale: 1,
        rotation: 0,
        ease: "power2.out"
    });
});
// 
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carous-item');
const itemWidth = items[0].offsetWidth + 20; // Width of one item + margin
const totalWidth = itemWidth * items.length; // Total width of all items

// Duplicate items for infinite scrolling
carousel.innerHTML += carousel.innerHTML;

// GSAP animation for infinite scrolling
const animation = gsap.to(carousel, {
    x: -totalWidth, // Move the carousel to the left
    duration: 10, // Duration of one full cycle
    repeat: -1, // Infinite repeat
    ease: "none" // Linear animation
});

// Pause animation on mouse enter
carousel.addEventListener('mouseenter', () => {
    animation.pause();
});

// Resume animation on mouse leave
carousel.addEventListener('mouseleave', () => {
    animation.resume();
});

// ADD SECTION AREA SCRIPT
   const floatButtons = document.querySelectorAll(".float-btn");
   const cartArea = document.getElementById("cart-area");
   
   floatButtons.forEach((button) => {
       button.addEventListener("click", () => {
           const card = button.closest(".shoe-card");
           const shoeImage = card.querySelector("img");
   
           // Clone the image to float it
           const floatingImage = shoeImage.cloneNode(true);
           floatingImage.style.position = "fixed";
           floatingImage.style.top = `${shoeImage.getBoundingClientRect().top}px`;
           floatingImage.style.left = `${shoeImage.getBoundingClientRect().left}px`;
           floatingImage.style.width = `${shoeImage.offsetWidth}px`;
           floatingImage.style.height = `${shoeImage.offsetHeight}px`;
           floatingImage.style.zIndex = 1000;
           document.body.appendChild(floatingImage);
   
           // Animate the cloned image to the right and shrink it
           gsap.to(floatingImage, {
               duration: 1.5,
               top: 20 + (cartArea.children.length - 1) * 50, // Position dynamically
               left: `calc(100% - 60px)`,
               width: "40px",
               height: "40px",
               borderRadius: "50%",
               rotation: 360,
               ease: "power2.out",
               onComplete: () => {
                   // Remove the cloned image and add a small icon to the cart area
                   document.body.removeChild(floatingImage);
                   const cartIcon = document.createElement("img");
                   cartIcon.src = shoeImage.src;
                   cartIcon.classList.add("cart-icon");
                   cartArea.appendChild(cartIcon);
   
                   // Optional: Add a shake animation to the cart icon
                   gsap.to(cartIcon, {
                       duration: 0.2,
                       x: -10,
                       yoyo: true,
                       repeat: 1,
                       ease: "power1.inOut"
                   });
               }
           });
       });
   });