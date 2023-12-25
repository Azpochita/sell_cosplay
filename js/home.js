document.addEventListener('DOMContentLoaded', function() {
    const propContainers = [...document.querySelectorAll('.prop-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    propContainers.forEach((item, i) => {
        let containerDimenstions = item.getBoundingClientRect();
        let containerWidth = containerDimenstions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
    })
})
});