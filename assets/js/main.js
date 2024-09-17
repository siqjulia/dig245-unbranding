
/* javascript */

let moderation = document.querySelector(".moderation");
let main = document.querySelector("main");

moderation.addEventListener("mouseover", function () {
    this.src = "assets/img/insanetweets.png"
    main.style.transition = '1s'
    main.style.opacity = 1;
}) 

moderation.addEventListener("mouseout", function () {
    this.src = "assets/img/xmoderationpolicy.png"
    });