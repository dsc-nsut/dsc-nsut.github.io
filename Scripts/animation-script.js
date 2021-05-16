{
  // TOGGLING THE NAV BUTTON
  const mobile_nav_btn = document.querySelector('.mobile-nav-btn');
  const sideNav = document.querySelector('.side-nav');
  mobile_nav_btn.addEventListener('click', (e) => {
    mobile_nav_btn.classList.toggle('active');
    sideNav.classList.toggle('active');
  });

  // MAKING NAVBAR STICKY ON SCROLL

  const header = document.querySelector('header');
  const sectionOne = document.querySelector('section');
  const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px',
  };
  const sectionOneObserver = new IntersectionObserver(
    (entries, sectionOneObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      });
    },
    sectionOneOptions
  );
  sectionOneObserver.observe(sectionOne);
}
