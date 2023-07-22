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