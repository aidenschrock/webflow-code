"use strict";
addEventListener("DOMContentLoaded", (e) => {
    const openMenuButton = document.getElementById("open-menu-button");
    const closeMenuButton = document.getElementById("close-menu-button");
    if (openMenuButton && closeMenuButton) {
        openMenuButton.addEventListener("click", (e) => {
            console.log("opening");
            gsap.fromTo(".nav_mobile_menu", {
                x: "100%",
            }, {
                x: "0%",
                duration: 1,
            });
        });
        closeMenuButton.addEventListener("click", (e) => {
            console.log("closing");
            gsap.fromTo(".nav_mobile_menu", {
                x: "0%",
            }, {
                x: "100%",
                duration: 1,
            });
        });
    }
    // Hero Text Animation
    gsap.registerPlugin(SplitText);
    let split = SplitText.create(".hero_heading", {
        type: "words",
        wordsClass: "hero_word",
    });
    gsap.fromTo(".hero_word", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1, stagger: 0.2 });
    // Hero Hands Animation
    gsap.fromTo(".left_hand", { x: "-100%" }, { x: "0%", duration: 1 });
    gsap.fromTo(".right_hand", { x: "100%" }, { x: "0%", duration: 1 });
});
