function downloadCV(lang) {
    const file = lang === 'es' ? 'assets/V2_CV_2025_S.pdf' : 'assets/V1_CV_2025_E.pdf';
    window.open(file, '_blank');
  } 
  
  // Initialize particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "854ddc"},
      "shape": { "type": "circle" },
      "opacity": {
        "value": 0.3,
        "random": true
      },
      "size": {
        "value": 4,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 0.8,
        "direction": "none",
        "random": true,
        "straight": false,
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": false },
        "onclick": { "enable": false },
        "resize": true
      }
    },
    "retina_detect": true
  });

 