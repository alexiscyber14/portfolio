const headerMenu =()=>{
  const menuBar = document.querySelector('.fa-bars');
  const menuUl = document.querySelector('.links')
  const closeMenu = document.querySelector('.fa-times')
  closeMenu.style.display='none';
  menuBar.addEventListener('click',function(){
      console.log("am here")
      menuUl.style.transition = 'left 0.5s ease';
      menuUl.style.left = '0%';
      menuBar.style.display='none';
      closeMenu.style.display='block'
  })
  closeMenu.addEventListener('click', function(){
      menuUl.style.transition = 'left 0.5s ease';
      menuUl.style.left = '-85%';
      closeMenu.style.display='none';
      menuBar.style.display='block';
  })
  }
headerMenu();


const quote =()=>{
    document.getElementById('quoteForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const serviceSelect = document.getElementById('serviceSelect');
        const selectedService = serviceSelect.value;
        const loading = document.getElementById('loading');
        loading.style.display = 'block';
        setTimeout(() => {
          const priceRanges = {
            service0:'select a service',
            service1: '$10,000 - $300,000',
            service2: '$500 - $100,000',
            service3: '$500 - $50,000',
            service4: '$1000 - $10,000',
            service5: '$100 - $200',
            service6: '$900 - $20,000',
            service7: '$4000 - $20,000',
            service8: '$500 - $5000',
            service9: '$0.00 - $200',
            service10: '$200 - $5000',
          };
          const quoteResult = document.getElementById('quoteResult');
          quoteResult.textContent = `${priceRanges[selectedService]}`;
          loading.style.display = 'none';
        }, 1000);
      });
  }
quote();

const reviews=()=>{
    const addTestimonialBtn = document.getElementById('addTestimonialBtn');
    const testimonialForm = document.getElementById('testimonialForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.querySelector('.slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    let intervalId = null; // Variable to hold the interval ID for auto-scrolling
    const autoScrollDelay = 5000; // 5000ms = 5 seconds (change as needed)
    testimonialForm.classList.toggle('hidden');
    addTestimonialBtn.addEventListener('click', function() {
      testimonialForm.classList.toggle('hidden');
    });
    
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateSliderPosition();
    });
    
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateSliderPosition();
    });
    
    function updateSliderPosition() {
      const position = -currentIndex * 100;
      slider.style.transform = `translateX(${position}%)`;
    }
    
    function updateTestimonials() {
      currentIndex = testimonials.length - 1;
      const sliderWidth = slider.clientWidth;
      const testimonialWidth = sliderWidth / testimonials.length;
      testimonials.forEach(testimonial => testimonial.style.width = `${testimonialWidth}px`);
      updateSliderPosition();
    }
    function startAutoScrolling() {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSliderPosition();
      }, autoScrollDelay);
    }
    function stopAutoScrolling() {
      clearInterval(intervalId);
      intervalId = null;
    }
    startAutoScrolling();
    slider.addEventListener('pointerdown', stopAutoScrolling);
    slider.addEventListener('pointerup', startAutoScrolling);
    slider.addEventListener('mouseleave', startAutoScrolling);
}
reviews();


function saveTestimonial() {
  const name = document.getElementById('name').value;
  const testimonialText = document.getElementById('testimonialText').value;
  const testimonialForm = document.getElementById('testimonialForm');
  const testimonialData = {
    name: name,
    testimonialText: testimonialText
  };
  console.log(JSON.stringify(testimonialData, null, 2));
  document.getElementById('name').value = '';
  document.getElementById('testimonialText').value = '';
  const message = document.getElementById('pop');
  message.innerHTML = 'review submited';
  setTimeout(() => {
    message.textContent = '';
    testimonialForm.classList.toggle('hidden');
  }, 3000);
}
