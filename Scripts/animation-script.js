'use strict';

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

/*------------------------------*/
/* PARTICLE ANIMATION */
/*------------------------------*/

{
  const particleConfig = {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#282828',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.2,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ccc',
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  particlesJS('particles-js', particleConfig);
}

/*------------------------------*/
/* TYPEWRITER ANIMATION */
/*------------------------------*/

{
  const typingBox = document.querySelector('.typewriter-text h1 pre.content');
  const cursor = document.querySelector('span.cursor');
  const texts = [
    'while( ! ( succeed = try() )',
    'Life is too short to remove USB safely.',
    'Java is to JavaScript what car is to Carpet.',
    "!false\nit's funny because it's true",
    '2b || !2b\nThat is the question!',
  ];
  let letterCount = 0;
  let index = 0;
  let currentText = '';
  let chunk = '';
  const typingSpeed = 70;
  const eraseDelay = 2000;
  const eraseSpeed = 20;

  const type = () => {
    if (index === texts.length) {
      index = 0;
    }
    currentText = texts[index];
    chunk = currentText.slice(0, letterCount++);
    if (chunk.includes('\n')) {
      chunk.replace('\n', '<br/>');
    }
    typingBox.innerHTML = chunk;
    if (letterCount > currentText.length) {
      cursor.classList.remove('typing');
      setTimeout(erase, eraseDelay);
    } else {
      cursor.classList.add('typing');
      setTimeout(type, typingSpeed);
    }
  };

  const erase = () => {
    chunk = currentText.slice(0, letterCount--);
    typingBox.textContent = chunk;
    if (letterCount < 0) {
      cursor.classList.remove('typing');
      letterCount = 0;
      index++;
      setTimeout(type, 1000);
    } else {
      cursor.classList.add('typing');
      setTimeout(erase, eraseSpeed);
    }
  };

  type();
}

/*------------------------------*/
/* MOUSE MOVE PARALLAX*/
/*------------------------------*/

{
  const particleContainer = document.querySelector('#particles-js');
  const speed = 5;
  const parallax = (e) => {
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    particleContainer.style.transform = `translate(${x}px,${y}px)`;
  };
  document.addEventListener('mousemove', parallax);
}

/*------------------------------*/
/* INPUT ANIMATION*/
/*------------------------------*/
{
  const input = document.querySelector('input[name="newsletter"]');
  input.addEventListener('focus', (e) => {
    const parent = e.target.parentNode;
    parent.classList.add('focus');
  });

  input.addEventListener('blur', (e) => {
    const parent = e.target.parentNode;
    if (e.target.value !== '') return;
    parent.classList.remove('focus');
  });

  const form = document.querySelector('form.newsletter-box');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputContainer = form.querySelector('.input-container');
    const button = form.querySelector('button');
    const msg = form.querySelector('.msg');
    inputContainer.classList.add('hide');
    input.value = '';
    button.classList.add('hide');
    setTimeout(() => {
      msg.classList.remove('hide');
    }, 100);
  });
}
