/*

Author: James Lukin
'visualisetheblockchain'

*/


// animating section text to fade in on scroll 

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem, {
          y: 100,
          autoAlpha: 0
        }, {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        overwrite: "auto"
      });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem, {
          y: -100,
          autoAlpha: 0
        }, {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        overwrite: "auto"
      });
    }
  });
});

var tl = gsap.timeline();
tl.from(".splash", 1.8, {
  y: 100,
  ease: 'power4.out',
  delay: 0,
  skewY: 0,
  stagger: {
    amount: 0.2
  },
  opacity: 0
});


//animating splash page (first section) to fade in and float


const can = document.querySelector(".splash");
const second = document.querySelector('.smaller')

const randomX = random(1, 3);
const randomY = random(3, 5);
const randomDelay = random(0, 1);
const randomTime = random(1, 3);
const randomTime2 = random(4, 5);
const randomAngle = random(0, 1);

TweenLite.set(can, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

TweenLite.set(second, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(can, 1);
moveY(can, -1);
rotate(can, 0);

moveX(second, 5);
moveY(second, -5);
rotate(second, 2);

function rotate(target, direction) {

  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {

  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {

  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// animating second section img

gsap.to(".column", {
  scrollTrigger: {
    trigger: ".column",
    end: "bottom top",
    start: "top bottom",
    scrub: 3,
    markers: false
  },
  x: -100,

})

gsap.to(".columnTwo", {
  scrollTrigger: {
    trigger: ".columnTwo",
    end: "bottom top",
    start: "top bottom",
    scrub: 3,
    markers: false
  },
  y: 100,

})

gsap.to(".columnThree", {
  scrollTrigger: {
    trigger: ".columnThree",
    end: "bottom top",
    start: "top bottom",
    scrub: 3,
    markers: false
  },
  x: 100,

})



// consistent floating

// const floatTitle = document.querySelector(".title");
// const floatSec = document.querySelector('.smaller')

// const ranX = random(1, 3);
// const ranY = random(3, 5);
// const ranDel = random(0, 1);
// const ranTime = random(1, 3);
// const ranTimeTwo = random(4, 5);
// const ranAng = random(0, 1);

// TweenLite.set(floatTitle, {
//   x: ranX(-1),
//   y: ranY(1),
//   rotation: ranAng(-1)
// });

// TweenLite.set(floatSec, {
//   x: ranX(-1),
//   y: ranY(1),
//   rotation: ranAng(-1)
// });

// moveX(floatTitle, 1);
// moveY(floatTitle, -1);
// rotate(floatTitle, 0);

// moveX(floatSec, 5);
// moveY(floatSec, -5);
// rotate(floatSec, 2);

// function rotate(target, direction) {

//   TweenLite.to(target, randomTime2(), {
//     rotation: randomAngle(direction),
//     // delay: randomDelay(),
//     ease: Sine.easeInOut,
//     onComplete: rotate,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveX(target, direction) {

//   TweenLite.to(target, randomTime(), {
//     x: randomX(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveX,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveY(target, direction) {

//   TweenLite.to(target, randomTime(), {
//     y: randomY(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveY,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function random(min, max) {
//   const delta = max - min;
//   return (direction = 1) => (min + delta * Math.random()) * direction;
// }



// modal trigger

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});