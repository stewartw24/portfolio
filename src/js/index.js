const menuComp = document.querySelector('ws-hex-menu');

const listItems = [
  {
    title: 'Home',
    ariaLabeledBy: 'simpleicons-angular-icon',
    url: '#home',
    colour: `var(--color-gen-3)`,
    svg: `<svg fill="white" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Home</title><path d="M8,11a1,1,0,0,1,1-1h6a1,1,0,0,1,0,2H9A1,1,0,0,1,8,11ZM21.832,9.555A1,1,0,0,1,21,10H20V21a1,1,0,0,1-.293.707,60.628,60.628,0,0,1-.318.214A.99.99,0,0,1,19,22H5a1,1,0,0,1-1-1V10H3a1.054,1.054,0,0,1-.829-.441l0,0a1,1,0,0,1,.278-1.387L6,5.8V3A1,1,0,0,1,8,3V4.465l3.445-2.3h0A1,1,0,0,1,12,2h0a1,1,0,0,1,.555.168l8.249,5.5.75.5A1,1,0,0,1,21.832,9.555ZM14,16H10v4h4Zm4-7.8-6-4-6,4V20H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v5h2Z"/></svg>`,
  },
  {
    title: 'About me',
    ariaLabeledBy: 'simpleicons-gulp-icon',
    url: '#about',
    colour: 'var(--color-green)',
    svg: `<svg fill="white" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>About me</title><path d="M19.536 9.146c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.505h2.35v1.15c.4-.463 1.302-1.26 2.71-1.26 1.247 0 2.096.526 2.477 1.59.524-.761 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.963v6.24h-2.353l.005-.007z"/></svg>`,
  },
  {
    title: 'Personal projects',
    ariaLabeledBy: 'personal projects',
    url: '#projects',
    colour: `var(--color-blue)`,
    svg: `<svg fill="white" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Personal Projects</title><path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"/></svg>`,
  },
  {
    title: 'experience',
    ariaLabeledBy: 'experience',
    url: '#experience',
    colour: `var(--color-purple-blue)`,
    svg: `<svg fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    width="800px" height="800px" viewBox="0 0 256 240" enable-background="new 0 0 256 240" xml:space="preserve"><title>Experience</title>
 <path d="M108.327,28.998c11.331,0,20.516,9.185,20.516,20.516s-9.185,20.516-20.516,20.516S87.81,60.845,87.81,49.514
   S96.996,28.998,108.327,28.998z M33.069,153.324l-0.189-0.189l0,0c-0.851-0.567-1.607-1.04-2.269-1.796l2.269,26L4.327,217.804
   c-4.065,5.862-2.647,13.804,3.025,17.869c5.862,4.065,13.804,2.647,17.869-3.025l30.822-44.436c1.607-2.269,2.647-5.295,2.269-8.32
   l-1.04-12.574L33.069,153.324z M117.876,237.942h122.341l-22.88-71.381c0,0-12.953,3.215-38.574,30.443
   c-0.567,0.567-1.229,1.229-1.796,1.796l-61.832-35.738c1.04-1.985,1.229-4.255,0.851-6.713L94.05,75.041
   c-1.796-7.942-8.887-13.993-17.207-13.993H35.905c-3.025,0-6.051,1.607-7.753,4.255L7.731,100.757
   c-2.647,4.255-1.04,9.738,3.215,12.196l22.88,13.142l-3.025,5.105c-3.687,6.051-1.607,13.804,4.633,17.207L86.77,178v46.894
   c0,7.091,5.673,12.764,12.764,12.764s12.764-5.673,12.764-12.764v-53.512l56.821,32.902c-11.724,6.713-25.149,7.942-34.698,13.614
   C122.697,224.895,117.876,237.942,117.876,237.942z M38.174,118.626l-15.033-8.698l0,0l17.869-30.822h20.044L38.174,118.626z
    M71.171,137.724l14.182-24.771l10.589,38.952L71.171,137.724z M203.459,2c-27.879,0-50.541,22.621-50.541,50.459
   c0,27.879,22.662,50.541,50.541,50.541S254,80.338,254,52.459C253.918,24.621,231.257,2,203.459,2z M203.459,93.014
   c-22.377,0-40.555-18.178-40.555-40.555s18.178-40.555,40.555-40.555s40.555,18.178,40.555,40.555
   C243.77,74.836,225.591,93.014,203.459,93.014z M228.648,42.596c-0.937-1.549-2.894-2.609-5.136-1.467l-17.893,7.989V27.963
   c0-1.141-0.408-2.16-1.141-2.935l-0.041-0.041c-0.734-0.652-1.59-0.937-2.609-0.937c-1.956,0-3.994,1.467-3.994,3.913v27.675
   c0,1.508,0.856,2.935,2.201,3.668c0.693,0.326,1.304,0.489,1.875,0.489c0.611,0,1.304-0.204,1.956-0.489l23.11-11.046
   c1.019-0.53,1.753-1.386,2.079-2.405C229.3,44.797,229.178,43.615,228.648,42.596L228.648,42.596z"/>
 </svg>`,
  },
  {
    title: 'contact',
    ariaLabeledBy: 'contact',
    url: '#contact',
    colour: `var(--color-pink-dark-2)`,
    svg: `<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><title>Contact</title>
    <g fill="white">
    <path d="M4 7.75A.75.75 0 014.75 7h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 014 7.75zM4.75 4.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"/>
    <path fill-rule="evenodd" d="M15 3.25A2.25 2.25 0 0012.75 1h-9.5A2.25 2.25 0 001 3.25v11a.75.75 0 001.26.55l2.801-2.6a.75.75 0 01.51-.2h7.179A2.25 2.25 0 0015 9.75v-6.5zm-2.25-.75a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H5.572a2.25 2.25 0 00-1.531.6L2.5 12.53V3.25a.75.75 0 01.75-.75h9.5z" clip-rule="evenodd"/>
    </g>
    </svg>`,
  },
  {
    title: 'feedback',
    ariaLabeledBy: 'feedback',
    url: '#feedback',
    colour: `var(--color-purple)`,
    svg: `<svg fill="white" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Feedback</title><path d="M22,1H15a2.44,2.44,0,0,0-2.41,2l-.92,5.05a2.44,2.44,0,0,0,.53,2,2.47,2.47,0,0,0,1.88.88H17l-.25.66A3.26,3.26,0,0,0,19.75,16a1,1,0,0,0,.92-.59l2.24-5.06A1,1,0,0,0,23,10V2A1,1,0,0,0,22,1ZM21,9.73l-1.83,4.13a1.33,1.33,0,0,1-.45-.4,1.23,1.23,0,0,1-.14-1.16l.38-1a1.68,1.68,0,0,0-.2-1.58A1.7,1.7,0,0,0,17.35,9H14.06a.46.46,0,0,1-.35-.16.5.5,0,0,1-.09-.37l.92-5A.44.44,0,0,1,15,3h6ZM9.94,13.05H7.05l.25-.66A3.26,3.26,0,0,0,4.25,8a1,1,0,0,0-.92.59L1.09,13.65a1,1,0,0,0-.09.4v8a1,1,0,0,0,1,1H9a2.44,2.44,0,0,0,2.41-2l.92-5a2.44,2.44,0,0,0-.53-2A2.47,2.47,0,0,0,9.94,13.05Zm-.48,7.58A.44.44,0,0,1,9,21H3V14.27l1.83-4.13a1.33,1.33,0,0,1,.45.4,1.23,1.23,0,0,1,.14,1.16l-.38,1a1.68,1.68,0,0,0,.2,1.58,1.7,1.7,0,0,0,1.41.74H9.94a.46.46,0,0,1,.35.16.5.5,0,0,1,.09.37Z"/></svg>`,
  },
];

//set the menu position
menuComp.menuLink = listItems;
menuComp.style.zIndex = '1000';
menuComp.style.animation = 'moveInBottomMenu 1.6s ease-out .75s';
if (window.screen.availWidth > 500) {
  menuComp.style.top = '40px';
  menuComp.style.left = '40px';
} else {
  menuComp.style.top = '10px';
  menuComp.style.left = '18px';
}

const loadTemplate = (templateId, hostElementId, insertAtStart) => {
  const templateElement = document.getElementById(templateId);
  const hostElement = document.getElementById(hostElementId);
  hostElement.innerHTML = '';
  const importedNode = document.importNode(templateElement.content, true);
  const element = importedNode.firstElementChild;

  const attach = (insertAtBeginning) => {
    hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      element,
    );
  };

  attach(insertAtStart);
};

loadTemplate('home', 'contentContainer', true);

const tileFinderEl = document.querySelector('ws-hex-menu');
tileFinderEl.addEventListener('wsTileSelected', (event) => {
  loadTemplate(`${event.detail.substring(1)}`, 'contentContainer', true);
  setSectionColours(event.detail.substring(1));
});

const defaultContent = homeTemplate.content.cloneNode(true);
const defaultContainer = document.getElementById('contentContainer');
defaultContainer.appendChild(defaultContent);

let content = document.querySelector('.content');
content.innerHTML = document.querySelector('.home').innerHTML;

const changeLogo = (oldColour, newColour) => {
  let root = document.documentElement;
  root.style.setProperty(`${oldColour}`, `${newColour}`);
};

const setSectionColours = (section) => {
  switch (section) {
    case 'about':
      changeLogo('--color-gen-2', '#ff3366');
      changeLogo('--color-gen-4', 'rgb(240, 235, 244)');
      break;
    case 'home':
      changeLogo('--color-gen-2', '#f172a1');
      changeLogo('--color-gen-4', 'rgb(240, 235, 244)');
      break;
    case 'projects':
      changeLogo('--color-gen-2', '#e64398');
      changeLogo('--color-gen-4', 'rgb(240, 235, 244)');
      break;
    case 'experience':
      changeLogo('--color-gen-2', '#a1c3d1');
      changeLogo('--color-gen-4', 'rgb(240, 235, 244)');
      break;
    case 'contact':
      changeLogo('--color-gen-2', '#cccccc');
      changeLogo('--color-gen-4', 'rgb(240, 235, 244)');
      break;
    case 'feedback':
      changeLogo('--color-gen-2', '#cb2d6f');
      changeLogo('--color-gen-4', '#cccccc');
      break;
    default:
      changeLogo('--color-gen-1', '#f172a1;');
      changeLogo('--color-gen-4', 'rgb(240, 235, 244)');
  }
};

const setTheContactSection = () => {
  const content = document.getElementById('content');
  content.innerHTML = theContactSection;
  submitTheContactMessage();
};

function submitTheContactMessage() {
  const contactForm = document.querySelector('#contactForm');
  const contactName = document.querySelector('#name');
  const contactEmail = document.querySelector('#email');
  const contactMessage = document.querySelector('#message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleAni('.contact-button-wrapper', true);

    if (contactName.value && contactEmail.value && contactMessage.value) {
      const item = {
        name: contactName.value,
        email: contactEmail.value,
        message: contactMessage.value,
      };

      sendHttpRequest(
        'POST',
        'https://firestore-api-server.herokuapp.com/api/contact',
        item,
      ).then((res) => {
        if (res.status === 200) {
          toggleAni('.contact-button-wrapper', false);
          sendButtonFunctionality();
          contactName.value = '';
          contactEmail.value = '';
          contactMessage.value = '';
          disableButton('#contact-submit', true);
        }
      });
    }
  });
}

const setTheFeedbackSection = () => {
  const content = document.getElementById('content');
  content.innerHTML = theFeedbackSection;
  submitTheFeedbackMessage();
};

function submitTheFeedbackMessage() {
  const feedbackForm = document.querySelector('#feedbackForm');
  const bad = document.querySelector('#bad');
  const meh = document.querySelector('#meh');
  const ok = document.querySelector('#ok');
  const feedbackMessage = document.querySelector('#commentMessage');

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleAni('.contact-button-wrapper', true);

    if (ok.checked || meh.checked || bad.checked) {
      console.log(bad, meh, ok);
      const item = {
        ok: ok.checked,
        meh: meh.checked,
        bad: bad.checked,
        message: feedbackMessage.value,
      };
      sendHttpRequest(
        'POST',
        'https://firestore-api-server.herokuapp.com/api/feedback',
        item,
      ).then((res) => {
        if (res.status === 200) {
          toggleAni('.contact-button-wrapper', false);
          sendButtonFunctionality();
          feedbackMessage.value = '';
          disableButton('#feedback-submit', true);
        }
      });
    }
  });
}

const sendHttpRequest = async function (method, url, data) {
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

const toggleAni = (el, trueOrFalse) => {
  const t = document.querySelector(el);
  t.removeAttribute('clicked');
  if (trueOrFalse === true) {
    t.setAttribute('clicked', trueOrFalse);
  }
};

const disableButton = (id, trueFalse) => {
  const button = document.querySelector(id);
  button.addEventListener('click', () => {
    button.disabled = trueFalse;
  });
};

const sendButtonFunctionality = () => {
  const plane = document.querySelector('.plane-send');
  plane.style.display = 'none';
  const success = document.querySelector('.success');
  success.style.display = 'block';
  success.style.fill = 'var(--color-green)';
  const buttonInstruction = document.querySelector('.button-instruction');
  buttonInstruction.style.display = 'none';
  const hexBorder = document.querySelector('.hexagon-border');
  hexBorder.style.color = 'var(--color-green)';
  const contactButton = document.querySelector('.contact-button-wrapper');
  contactButton.style.color = 'var(--color-green)';
  const thanksMessage = document.querySelector('.thanks-message');
  thanksMessage.style.display = 'block';
};
