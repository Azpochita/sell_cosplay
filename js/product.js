const propImages = document.querySelectorAll(".prop-images img"); // selecting all image thumbs
const propImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

propImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        propImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        propImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})

