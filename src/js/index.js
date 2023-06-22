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
    svg: `<svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    width="800px" height="800px" viewBox="0 0 571.487 571.487"
    xml:space="preserve"><title>Personal projects</title>
 <g>
   <g>
     <path d="M91.007,264.572h139.378c0.058,4.688,0.146,8.957,0.263,12.401c-0.134,4.974-12.377,21.678-22.227,35.096
       c-6.16,8.396-12.962,17.667-19.717,27.593c-20.138,29.612-39.615,64.329-47.952,79.159l-2.225,3.936
       c-8.571,15.145-8.682,35.801-0.263,50.234c6.388,10.953,16.622,16.967,28.808,16.967h259.704l0,0
       c12.191,0,22.42-6.037,28.796-16.967c8.407-14.434,8.314-35.102-0.269-50.234l-2.207-3.936
       c-8.338-14.83-27.838-49.547-47.97-79.159c-6.749-9.938-13.545-19.197-19.711-27.593c-9.855-13.429-22.116-30.122-22.222-35.073
       c0.129-3.468,0.199-7.724,0.27-12.436h72.421V222.71h-72.352c-0.069-14.742-0.21-28.101-0.28-34.915h12.856v-22.531H213.559
       v22.555h17.031c-0.088,6.813-0.216,20.184-0.286,34.915H91.007V82.38H49.174v140.353H21.395v41.851h27.779v265.053H21.395v41.851
       h459.33v-41.851H91.007V264.572z M370.353,323.115c6.049,8.232,12.717,17.306,19.326,27.067
       c19.711,28.947,38.92,63.174,47.129,77.77l2.254,4.006c5.289,9.342,5.465,22.934,0.385,31.633
       c-2.989,5.115-7.252,7.707-12.67,7.707H167.072c-5.43,0-9.675-2.592-12.664-7.707c-5.056-8.699-4.916-22.291,0.379-31.633
       l2.254-4.006c8.197-14.607,27.417-48.822,47.123-77.77c6.609-9.75,13.283-18.835,19.32-27.067
       c17.218-23.471,26.186-36.193,25.83-46.743c-0.111-3.24-0.193-7.362-0.251-11.788h95.718c-0.059,4.438-0.129,8.559-0.257,11.788
       C344.173,286.922,353.141,299.645,370.353,323.115z M249.221,192.496h95.407c0.07,7.351,0.176,18.351,0.234,30.238h-95.881
       C249.04,210.834,249.133,199.834,249.221,192.496z"/>
     <path d="M248.537,384.397c-26.046-2.336-44.601-18.672-44.601-18.672c-2.873,3.958-5.874,8.104-8.909,12.564
       c-11.841,17.41-23.319,37.822-28.195,46.533l-1.313,2.324c-5.039,8.897-5.097,21.041-0.158,29.531
       c3.754,6.434,9.768,9.96,16.943,9.96h16.272h60.324h76.071h60.686h15.916c7.17,0,13.172-3.538,16.932-9.96
       c4.939-8.49,4.893-20.646-0.164-29.531l-1.308-2.324c-4.904-8.711-16.348-29.123-28.188-46.533
       c-3.035-4.461-6.025-8.606-8.921-12.564c0,0-15.017,6.224-61.281,7.766C282.378,375.044,274.577,386.709,248.537,384.397z
        M214.09,427.614c-8.542,0-15.478-6.913-15.478-15.461c0-8.547,6.936-15.473,15.478-15.473c8.548,0,15.46,6.926,15.46,15.473
       C229.562,420.701,222.638,427.614,214.09,427.614z M231.284,454.144c-3.042,0-5.529-2.475-5.529-5.522
       c0-3.071,2.487-5.523,5.529-5.523c3.048,0,5.535,2.476,5.535,5.523C236.831,451.657,234.344,454.144,231.284,454.144z
        M279.972,419.194c-5.167,0-9.312-4.191-9.312-9.354c0-5.137,4.157-9.33,9.312-9.33c5.155,0,9.335,4.216,9.335,9.33
       C289.308,415.003,285.127,419.194,279.972,419.194z M317.456,450.384c-4.029,0-7.287-3.281-7.287-7.298
       c0-4.052,3.246-7.31,7.287-7.31s7.322,3.258,7.322,7.31C324.789,447.103,321.496,450.384,317.456,450.384z M387.168,448.609
       c0,3.048-2.487,5.523-5.535,5.523c-3.036,0-5.523-2.476-5.523-5.523c0-3.071,2.487-5.523,5.523-5.523
       C384.692,443.086,387.168,445.538,387.168,448.609z M364.421,403.069c9.236,0,16.698,7.473,16.698,16.686
       c0,9.201-7.462,16.676-16.698,16.676c-9.189,0-16.663-7.475-16.663-16.676C347.77,410.53,355.231,403.069,364.421,403.069z"/>
     <path d="M292.361,146.599c2.487,0.28,4.939,0.409,7.368,0.409c14.783,0,28.668-4.975,39.142-13.703
       c8.595,5.967,18.823,9.779,29.776,10.988c32.848,3.708,61.363-17.183,64.505-45.535c1.121-10.019-1.121-20.172-6.247-29.175
       c6.539-6.312,10.708-14.444,11.712-23.301c2.476-22.555-15.997-43.17-41.22-45.967c-15.951-1.769-31.015,4.058-40.473,14.614
       c-3.702-1.098-7.474-1.857-11.327-2.283c-26.332-2.896-50.165,9.972-59.944,30.407c-24.803,4.122-43.731,22.058-46.265,44.969
       C236.206,116.746,259.981,143.014,292.361,146.599z M294.714,66.143l8.717-0.374l2.3-8.419
       c3.434-12.471,16.769-21.177,32.475-21.177c1.564,0,3.152,0.088,4.775,0.263c4.578,0.502,9.085,1.792,13.383,3.819l10.789,5.114
       l5.114-10.795c3.375-7.117,12.717-11.589,22.49-10.463c12.121,1.337,21.124,10.113,20.062,19.536
       c-0.561,5.179-4.216,9.709-9.973,12.448l-15.109,7.175l11.688,11.981c5.943,6.107,8.793,13.522,7.964,20.89
       c-1.693,15.344-18.754,26.519-38.103,24.405c-9.716-1.074-18.403-5.272-24.487-11.806l-9.844-10.591l-8.559,11.671
       c-6.901,9.424-19.676,14.597-33.409,13.02c-19.285-2.131-33.56-16.558-31.843-32.141
       C264.657,77.167,277.929,66.844,294.714,66.143z"/>
     <path d="M544.505,31.486c-4.787-6.86-12.098-11.835-20.598-14.036c-12.635-3.24-25.971,0.502-33.888,8.991
       c-16.441,0.625-29.812,10.58-33.595,25.182c-2.37,9.184-0.455,19.145,5.278,27.336c5.406,7.736,13.686,13.364,23.296,15.852
       c3.503,0.911,7.076,1.366,10.649,1.366c14.562,0,27.336-7.725,33.046-19.326c10.136-3.275,17.959-11.011,20.505-20.914
       C551.325,47.729,549.62,38.819,544.505,31.486z M518.676,54.612l-9.179,0.66l-1.717,9.05c-0.069,0.35-0.116,0.707-0.163,1.062
       c-1.739,5.167-9.33,8.18-16.64,6.282c-4.018-1.039-7.544-3.375-9.669-6.399c-1.004-1.448-2.581-4.367-1.728-7.666
       c1.109-4.28,6.071-7.281,12.073-7.281c0.864,0,1.729,0.059,2.604,0.193l8.536,1.208l3.842-7.73
       c1.494-3.013,6.527-4.601,11.269-3.392c2.942,0.753,5.488,2.429,6.982,4.578c0.782,1.138,1.635,2.896,1.145,4.793
       C525.401,52.487,522.436,54.35,518.676,54.612z"/>
   </g>
 </g>
 </svg>`,
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

const theContactSection = `<div class="contact">
<section class="layout" id="contact">
    <div class="wrapper animate-left-fast">
        <h2>Get in touch</h2>
        <form id="contactForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" name="Email" id="email" placeholder="email@domain.tld" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
          </div>
          <div class="form-group">
          <div class="beside">
          <button id="contact-submit">
            <div class=contact-button-wrapper>
              <div class="hexagon-container">
              <div class="hexagon-border hexagon"></div>
              <div class="hexagon-background hexagon"></div>
            </div>
            <div class="icon-container">
              <svg class="plane-send" viewBox="0 0 512.005 512.005" width="50px">
                <path class="plane-send" d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z"></path>
              </svg>
              <svg class="success" viewBox="0 0 512.005 512.005" width="60px">
              
              <path d="m395.621094 185.636719-161.011719 153.902343-87.804687-87.679687c-4.855469-4.855469-12.726563-4.855469-17.585938 0-4.855469 4.859375-4.855469 12.730469 0 17.589844l96.410156 96.410156c2.339844 2.351563 5.535156 3.65625 8.855469 3.613281 3.21875.03125 6.316406-1.226562 8.605469-3.492187l169.742187-162.257813c4.921875-4.769531 5.082031-12.613281.363281-17.578125-4.726562-4.960937-12.566406-5.1875-17.574218-.507812zm0 0"/>
              </svg>
              <div class="button-instruction">Send</div>
            </div>
          </div>
          </button>
          <div class="thanks-message"> Thanks for reaching out!</div>
          </div>
          </div>
        </form>
      </div>
    <div class="logo fade-in">
        <div class="pos-1">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-2">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-3">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-4">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-5">
            <svg version="1.1" viewBox="0 0 600 516.8">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
    </div>
</section>
</div>`;

const theFeedbackSection = `
<div class="feedback">
<section class="layout" id="feedback">
    <div class="wrapper animate-right">
        <h2>Feedback</h2>
        <form id="feedbackForm">
            <h3 class="feedback-text">Rate this site</h3>
            <div class="form__group u-margin-bottom-medium">
                <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="bad" name="opinion">
                    <label for="bad" class="form__radio-label">
                        <span class="form__radio-button test"></span>
                        <div>bad</div>
                    </label>
                </div>
                <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="meh" name="opinion">
                    <label for="meh" class="form__radio-label">
                        <span class="form__radio-button test"></span>
                        <div>meh</div>
                    </label>
                </div>
                <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="ok" name="opinion">
                    <label for="ok" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        <div class="form-padding">ok</div>
                    </label>
                </div>
            </div>
          <div class="form-group">
            <label for="comments">Comments (optional)</label>
            <textarea name="Message" id="commentMessage" rows="2" placeholder="Type your comments here...."></textarea>
          </div>
          <div class="form-group">
          <div class="beside">
          <button id="feedback-submit">
            <div class=contact-button-wrapper>
              <div class="hexagon-container">
              <div class="hexagon-border hexagon"></div>
              <div class="hexagon-background hexagon"></div>
            </div>
            <div class="icon-container">
              <svg class="plane-send" viewBox="0 0 512.005 512.005" width="50px">
                <path class="plane-send" d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z"></path>
              </svg>
              <svg class="success" viewBox="0 0 512.005 512.005" width="60px">
              <path d="m395.621094 185.636719-161.011719 153.902343-87.804687-87.679687c-4.855469-4.855469-12.726563-4.855469-17.585938 0-4.855469 4.859375-4.855469 12.730469 0 17.589844l96.410156 96.410156c2.339844 2.351563 5.535156 3.65625 8.855469 3.613281 3.21875.03125 6.316406-1.226562 8.605469-3.492187l169.742187-162.257813c4.921875-4.769531 5.082031-12.613281.363281-17.578125-4.726562-4.960937-12.566406-5.1875-17.574218-.507812zm0 0"/>
              </svg>
              <div class="button-instruction">Send</div>
            </div>
          </div>
          </button>
          <div class="thanks-message"> Thanks for the feedback!</div>
          </div>
          </div>
        </form>
      </div>
      <div class="build-statement animate-bottom">built with HTML, CSS, JavaScript, StencilJS, NodeJS, and Firebase. Hosted on Netlify and Heroku.</div>
    <div class="logo fade-in">
        <div class="pos-1">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-2">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-3">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-4">
            <svg version="1.1" viewBox="0 0 600 516.8" width="100%" height="100%" preserveAspectRatio="none">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
        <div class="pos-5">
            <svg version="1.1" viewBox="0 0 600 516.8">
                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
        </div>
    </div>
</section>
</div>
`;

//set the menu position
menuComp.menuLink = listItems;
menuComp.style.zIndex = '1000';
menuComp.style.animation = 'moveInBottomMenu 1.6s ease-out .75s';
console.log(menuComp);
if (window.screen.availWidth > 500) {
  menuComp.style.top = '40px';
  menuComp.style.left = '40px';
} else {
  menuComp.style.top = '10px';
  menuComp.style.left = '18px';
}

const tileFinderEl = document.querySelector('ws-hex-menu');
tileFinderEl.addEventListener('wsTileSelected', (event) => {
  const selected = document.querySelector(`.${event.detail.substring(1)}`);
  console.log(selected);
  setSectionColours(event.detail.substring(1));
  // selected !== null ?  content.innerHTML = selected.innerHTML : setTheContactSection();
  selected !== null
    ? (content.innerHTML = selected.innerHTML)
    : setTheRightForm(event.detail.substring(1));
});

const setTheRightForm = (selected) => {
  if (selected === 'contact') {
    return setTheContactSection();
  }
  if (selected === 'feedback') {
    return setTheFeedbackSection();
  }
};

let content = document.querySelector('.content');
content.innerHTML = document.querySelector('.home').innerHTML;

const changeLogo = (oldColour, newColour) => {
  let root = document.documentElement;
  root.style.setProperty(`${oldColour}`, `${newColour}`);
};

const setSectionColours = (section) => {
  console.log(section);
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
