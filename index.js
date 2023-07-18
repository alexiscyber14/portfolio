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