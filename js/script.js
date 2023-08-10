/***Scroll***/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.nav_bar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav_bar a[href*=' + id +']').classList.add('active')
            });
        };
    });
}