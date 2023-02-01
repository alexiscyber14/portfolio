const menu = document.getElementById('menu');
const open = document.getElementById('open-menu');
const shut = document.getElementById('close-menu');
const links = document.querySelectorAll('.navlink');
const logo = document.querySelector('.rotate');
shut.style.display = 'none';

open.addEventListener('click', () => {
  menu.style.left = '0%';
  shut.style.display = 'block';
  open.style.display = 'none';
  logo.style.display = 'none';
});

shut.addEventListener('click', () => {
  menu.style.left = '-100%';
  shut.style.display = 'none';
  logo.style.display = 'block';
  open.style.display = 'block';
});

links.forEach((btn) => {
  btn.addEventListener('click', () => {
    menu.style.left = '-100%';
    shut.style.display = 'none';
    logo.style.display = 'block';
    open.style.display = 'block';
  });
});
/* partner code start */


/* partner code ends */

const projeccts = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['javascript', 'css', 'html', 'Ruby', 'bootstrap'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site3.jpg',
    live: 'live version',
    source: 'source code',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',

    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['javascript', 'css', 'html', 'Ruby', 'bootstrap'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site4.jpg',
    live: 'live version',
    source: 'source code',
    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',
    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',

  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['javascript', 'css', 'html', 'Ruby', 'bootstrap'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site5.jfif',
    live: 'live version',
    source: 'source code',
    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',
    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',

  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['javascript', 'css', 'html', 'Ruby', 'bootstrap'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site6.avif',
    live: 'live version',
    source: 'source code',
    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',
    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',

  },
  {
    id: 5,
    title: 'five Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['javascript', 'css', 'html', 'Ruby', 'bootstrap'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site7.jpg',
    live: 'live version',
    source: 'source code',
    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',
    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',
  },
  {
    id: 6,
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['javascript', 'css', 'html', 'Ruby', 'bootstrap'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site8.png',
    live: 'live version',
    source: 'source code',
    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',
    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',

  },
  {
    id: 7,
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootsrap', 'ruby'],
    button: 'see project',
    featured_image: 'place.png',
    thumnail_one: 'site9.jpg',
    live: 'live version',
    source: 'source code',
    html: 'Html',
    bootstrap: 'Bootsrap',
    rub: 'Ruby',
    projectLink: 'https://github.com/alexiscyber14/portfolio',
    projectLive: 'https://alexiscyber14.github.io/portfolio/',

    projectLinkone: 'https://www.w3schools.com/html/',
    projectLinktwo: 'https://getbootstrap.com/',
    projectLinkthree: 'https://rubyonrails.org/',
  },

];

const container = document.getElementsByClassName('card-container')[0];

projeccts.forEach((project) => {
  const cards = document.createElement('div');
  cards.className = 'card';
  container.appendChild(cards);

  const cardContent = document.createElement('div');
  cards.appendChild(cardContent);
  cardContent.className = 'card-content';

  // create the modal and its content
  const popper = document.createElement('div');
  cardContent.appendChild(popper);
  popper.className = 'modal';
  popper.id = 'myModal';

  const modalContent = document.createElement('div');
  popper.appendChild(modalContent);
  modalContent.className = 'modal-content';

  const modalSpan = document.createElement('span');
  modalContent.appendChild(modalSpan);
  modalSpan.className = 'close';
  modalSpan.innerHTML = '&times;';

  const modalH = document.createElement('h4');
  modalContent.appendChild(modalH);
  const modalText = document.createTextNode(project.title);
  modalH.appendChild(modalText);
  modalH.className = 'rain';

  const modalLinkscontainer = document.createElement('div');
  modalLinkscontainer.className = 'mo-links';
  modalContent.appendChild(modalLinkscontainer);

  const topUl = document.createElement('ul');
  modalLinkscontainer.appendChild(topUl);

  const topLione = document.createElement('li');

  const toplitwo = document.createElement('li');
  const toplithree = document.createElement('li');
  const topAtagOne = document.createElement('a');
  const topAtagTwo = document.createElement('a');
  const topAtagThree = document.createElement('a');

  topUl.appendChild(topLione);
  topUl.appendChild(toplitwo);
  topUl.appendChild(toplithree);
  topLione.appendChild(topAtagOne);
  toplitwo.appendChild(topAtagTwo);
  toplithree.appendChild(topAtagThree);

  const topTagTextOne = document.createTextNode(project.html);
  const topTagTextTwo = document.createTextNode(project.bootstrap);
  const topTagTextThree = document.createTextNode(project.rub);

  topAtagOne.appendChild(topTagTextOne);
  topAtagTwo.appendChild(topTagTextTwo);
  topAtagThree.appendChild(topTagTextThree);

  topAtagOne.href = `${project.projectLinkone}`;
  topAtagTwo.href = `${project.projectLinktwo}`;
  topAtagThree.href = `${project.projectLinkthree}`;

  // modal images
  const imageParagraphContainer = document.createElement('div');
  imageParagraphContainer.className = 'para-image';
  modalContent.appendChild(imageParagraphContainer);

  const modeImage = document.createElement('div');
  modeImage.className = 'mo-image';
  imageParagraphContainer.appendChild(modeImage);
  const modalImageContainer = document.createElement('div');
  modalImageContainer.className = 'model-image-container';
  modeImage.appendChild(modalImageContainer);
  // give a class
  const mImage = document.createElement('img');
  modalImageContainer.appendChild(mImage);
  mImage.src = project.thumnail_one;
  mImage.id = 'featured';
  mImage.className = 'featured';

  // footer deatil
  const modlaDetail = document.createElement('div');
  modlaDetail.className = 'mo-detail';
  imageParagraphContainer.appendChild(modlaDetail);
  const modlaDetailP = document.createElement('p');
  modlaDetailP.className = 'pop-para';
  modlaDetail.appendChild(modlaDetailP);
  const modlaDetailPtext = document.createTextNode(project.description);
  modlaDetailP.appendChild(modlaDetailPtext);

  // fooetr below
  const modalFooterLinks = document.createElement('div');
  modalFooterLinks.className = 'mo-footer';
  const footerUl = document.createElement('ul');
  const footerLione = document.createElement('li');
  const footerlitwo = document.createElement('li');
  const footerAtagOne = document.createElement('a');
  const footerAtagTwo = document.createElement('a');

  modlaDetail.appendChild(modalFooterLinks);
  modalFooterLinks.appendChild(footerUl);
  footerUl.appendChild(footerLione);
  footerUl.appendChild(footerlitwo);
  footerLione.appendChild(footerAtagOne);
  footerlitwo.appendChild(footerAtagTwo);

  const footerTagTextOne = document.createTextNode(project.source);
  const footerTagTextTwo = document.createTextNode(project.live);
  footerAtagOne.appendChild(footerTagTextOne);
  footerAtagTwo.appendChild(footerTagTextTwo);
  footerAtagOne.href = `${project.projectLink}`;
  footerAtagTwo.href = `${project.projectLive}`;
  // end modal

  const headings = document.createElement('h3');
  cardContent.appendChild(headings);
  const headingText = document.createTextNode(project.title);
  headings.appendChild(headingText);

  const carddParagraph = document.createElement('p');
  cardContent.appendChild(carddParagraph);
  const cardParagraphContent = document.createTextNode(project.description);
  carddParagraph.appendChild(cardParagraphContent);

  const cardUl = document.createElement('ul');
  cardContent.appendChild(cardUl);

  const liOne = document.createElement('li');
  cardUl.appendChild(liOne);
  const atagOne = document.createElement('a');
  liOne.appendChild(atagOne);
  const liText = document.createTextNode(project.technologies[0]);
  atagOne.appendChild(liText);

  const liTwo = document.createElement('li');
  cardUl.appendChild(liTwo);
  const atagTwo = document.createElement('a');
  liTwo.appendChild(atagTwo);
  const liTexttwo = document.createTextNode(project.technologies[1]);
  atagTwo.appendChild(liTexttwo);

  const liThree = document.createElement('li');
  cardUl.appendChild(liThree);
  const atagThree = document.createElement('a');
  liThree.appendChild(atagThree);
  const liTextthree = document.createTextNode(project.technologies[2]);
  atagThree.appendChild(liTextthree);

  const cardButton = document.createElement('div');
  cardContent.appendChild(cardButton);
  cardButton.className = 'card-button';
  const SeeButton = document.createElement('button');
  cardButton.appendChild(SeeButton);
  SeeButton.className = 'c-button';
  SeeButton.id = 'myBtn';
  const buttonText = document.createTextNode(project.button);
  SeeButton.appendChild(buttonText);
});
const buttons = document.querySelectorAll('.c-button');

const modals = document.querySelectorAll('.modal');

const modalClose = document.querySelectorAll('.close');

const manalNav = function vera() {
  modals.forEach(() => {
  });
};

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manalNav(i);
    modals[i].style.display = 'block';
  });
});

modalClose.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manalNav(i);
    modals[i].style.display = 'none';
  });
});