
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu()  )

console.log('click', toggleMenu)

//GSAP

TweenMax.to('.menu', 5, {left:80})

// TweenMax.to('.menu', 6, 
//   {x:600,
//     rotation:360,
//     scale:.07
//   })

  //side nav

  //Open Drawer Button Transition
// class ButtonToggle {
//   constructor(element) {
//     this.element = element;

//     this.element.addEventListener("click", () => this.select());
//   }
//   select() {
//     // '\10761' Octal Literal
//     // https://unicode-table.com/en/2A09/
//     const close = String.fromCharCode(10761);
//     console.log(close);
//     const open = String.fromCharCode(9776);
//     let currentState = this.element.innerHTML;

//     console.log(currentState.charCodeAt(0));

//     String.fromCharCode(currentState);

//     if (currentState == open) {
//       this.element.innerHTML = close;
//     } else {
//       this.element.innerHTML = open;
//     }
//   }
// }

// const sideNavBtn = document.querySelector(".open-sidenav-btn");
// new ButtonToggle(sideNavBtn);

// // Open Drawer Expand Function
// class DrawerExpand {
//   constructor(element) {
//     this.element = element;
//     this.innerContainer = this.element.querySelector(".nav-wrapper");
//     this.activateBtn = document.querySelector(".open-sidenav-btn");
//     this.showing = false;
//     this.activateBtn.addEventListener("click", () => this.open());
//   }
//   open() {
//     this.showing = !this.showing;
//     var e = this.element;
//     //the browser won't report current width values properly if the element isn't displayed!
//     e.classList.add("show");
//     if (this.showing) {
//       this.innerContainer.style.width = "auto";
//       TweenMax.from(this.innerContainer, 1, { width: 0 });
//     } else {
//       TweenMax.to(this.innerContainer, 1, { width:0, onComplete:function() {
//         e.classList.remove("show");
//       }});
//     }
//   }
// }

// const sideMenu = document.querySelector(".side-nav-market");
// new DrawerExpand(sideMenu);
