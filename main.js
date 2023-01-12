document.addEventListener('DOMContentLoaded', () => {
    const about = document.querySelector('.about');
    const header = document.querySelector('.about-header');
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop;
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    }

    const headerFixed = () => {
      let scrollTop = window.scrollY;
      let aboutCenter = about.offsetHeight + about.offsetHeight / 4;

      if (scrollTop >= aboutCenter) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      };
    };

    headerFixed();
    window.addEventListener('scroll', () => {
      headerFixed();
      scrollAnimation();
    });
});