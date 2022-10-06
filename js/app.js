
// // text hover show img
// let links = document.querySelectorAll('.works-item');
// let linkImages = document.querySelectorAll('.hover-reveal__img');

// links.forEach(link, idx) => {
//   link.addEventListenter('mousemove', (e) => {
//     link.children[1].style.opacity = 1;
//     link.children[0].style.zindex=3;
//     link.children[1].style.transform = 'translate(${e.clientX - 300}px, -$(e.clientY/3}px)'
//   })
// }




// let works = document.querySelector('.works');
// let img = works.querySelector('.hover-img');

// document.body.onmousemove = (e) =>{
//   let x = e.clientX;
//   let y = e.clientY;
//   img.style.top = y + 'px'; 
//   img.style.left = x + 'px';
// }


// works.querySelectorAll('.works-item').forEach(worksitem =>{
//   worksitem.onmousemove = () =>{
//     img.src = worksitem.getAttribute('data-src');
//   } 
// });



const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-50%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}