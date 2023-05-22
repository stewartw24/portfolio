const menuComp = document.querySelector('ws-hex-menu');

const listItems = [
  {
    title: 'Home',
    ariaLabeledBy: 'simpleicons-angular-icon',
    url: '#home',
    colour: `var(--color-gen-3)`,
    svgPath1: `M8,11a1,1,0,0,1,1-1h6a1,1,0,0,1,0,2H9A1,1,0,0,1,8,11ZM21.832,9.555A1,1,0,0,1,21,10H20V21a1,1,0,0,1-.293.707,60.628,60.628,0,0,1-.318.214A.99.99,0,0,1,19,22H5a1,1,0,0,1-1-1V10H3a1.054,1.054,0,0,1-.829-.441l0,0a1,1,0,0,1,.278-1.387L6,5.8V3A1,1,0,0,1,8,3V4.465l3.445-2.3h0A1,1,0,0,1,12,2h0a1,1,0,0,1,.555.168l8.249,5.5.75.5A1,1,0,0,1,21.832,9.555ZM14,16H10v4h4Zm4-7.8-6-4-6,4V20H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v5h2Z`,
  },
  {
    title: 'Gulp icon',
    ariaLabeledBy: 'simpleicons-gulp-icon',
    url: '#about',
    colour: 'var(--color-green)',
    svgPath1: `M19.536 9.146c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.505h2.35v1.15c.4-.463 1.302-1.26 2.71-1.26 1.247 0 2.096.526 2.477 1.59.524-.761 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.963v6.24h-2.353l.005-.007z`,
  },
  {
    title: 'Personal projects',
    ariaLabeledBy: 'personal projects',
    url: '#projects',
    colour: `var(--color-grey)`,
    svgPath1: `M6.091,10.945A6.018,6.018,0,0,0,9,17.191V20a3,3,0,0,0,6,0V17.191a6,6,0,1,0-8.909-6.246ZM12.008,8a3.944,3.944,0,0,1,2.513.9,4,4,0,0,1-.922,6.768,1,1,0,0,0-.6.916V20a1,1,0,0,1-2,0V16.578a1,1,0,0,0-.6-.916,4,4,0,0,1,.725-7.571A4.312,4.312,0,0,1,12.008,8ZM12,4a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V3A1,1,0,0,1,12,4Zm7.778,1.636-.707.707a1,1,0,0,1-1.414-1.414l.707-.707a1,1,0,0,1,1.414,1.414ZM4.929,20.071a1,1,0,0,1-.707-1.707l.706-.707a1,1,0,1,1,1.415,1.414l-.706.707A1,1,0,0,1,4.929,20.071ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM4,12a1,1,0,0,1-1,1H2a1,1,0,0,1,0-2H3A1,1,0,0,1,4,12Zm15.778,6.364a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM6.343,4.929A1,1,0,0,1,4.928,6.343l-.706-.707A1,1,0,0,1,5.637,4.222Z`,
  },
  {
    title: 'experience',
    ariaLabeledBy: 'experience',
    url: '#experience',
    colour: `var(--color-burgundy)`,
    svgPath1: `M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z`,
  },
  {
    title: 'contact',
    ariaLabeledBy: 'contact',
    url: '#contact',
    colour: `var(--color-pink-dark-2)`,
    svgPath1: `M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H10.2C10.7523 20 11.2 19.5523 11.2 19C11.2 18.4477 10.7523 18 10.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V12.1333C18 12.6856 18.4477 13.1333 19 13.1333C19.5523 13.1333 20 12.6856 20 12.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM18.2929 21.2929C17.9024 21.6834 17.9024 22.3166 18.2929 22.7071C18.6834 23.0976 19.3166 23.0976 19.7071 22.7071L22.7071 19.7071C23.0976 19.3166 23.0976 18.6834 22.7071 18.2929L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L19.5858 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H19.5858L18.2929 21.2929Z`,
  },
  {
    title: 'feedback',
    ariaLabeledBy: 'feedback',
    url: '#feedback',
    colour: `var(--color-purple)`,
    svgPath1: `M22,1H15a2.44,2.44,0,0,0-2.41,2l-.92,5.05a2.44,2.44,0,0,0,.53,2,2.47,2.47,0,0,0,1.88.88H17l-.25.66A3.26,3.26,0,0,0,19.75,16a1,1,0,0,0,.92-.59l2.24-5.06A1,1,0,0,0,23,10V2A1,1,0,0,0,22,1ZM21,9.73l-1.83,4.13a1.33,1.33,0,0,1-.45-.4,1.23,1.23,0,0,1-.14-1.16l.38-1a1.68,1.68,0,0,0-.2-1.58A1.7,1.7,0,0,0,17.35,9H14.06a.46.46,0,0,1-.35-.16.5.5,0,0,1-.09-.37l.92-5A.44.44,0,0,1,15,3h6ZM9.94,13.05H7.05l.25-.66A3.26,3.26,0,0,0,4.25,8a1,1,0,0,0-.92.59L1.09,13.65a1,1,0,0,0-.09.4v8a1,1,0,0,0,1,1H9a2.44,2.44,0,0,0,2.41-2l.92-5a2.44,2.44,0,0,0-.53-2A2.47,2.47,0,0,0,9.94,13.05Zm-.48,7.58A.44.44,0,0,1,9,21H3V14.27l1.83-4.13a1.33,1.33,0,0,1,.45.4,1.23,1.23,0,0,1,.14,1.16l-.38,1a1.68,1.68,0,0,0,.2,1.58,1.7,1.7,0,0,0,1.41.74H9.94a.46.46,0,0,1,.35.16.5.5,0,0,1,.09.37Z`,
  },
  // {
  //   title: "JavaScript icon",
  //   ariaLabeledBy: "simpleicons-javascript-icon",
  //   url: "#contact",
  //   colour: "#F7DF1E",
  //   newTab: "yes",
  //   svgPath1:
  //     "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
  // },
  // {
  //   title: "Vue.js icon",
  //   ariaLabeledBy: "simpleicons-vuejs-icon",
  //   url: "#feedback",
  //   colour: "#4FC08D",
  //   svgPath1:
  //     "M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608",
  // },
  // {
  //   title: "Rails icon",
  //   ariaLabeledBy: "simpleicons-rails-icon",
  //   url: "#feedback",
  //   colour: "#CC0000",
  //   svgPath1:
  //     "M20.8848485 15.8107143v1.1635714h1.9818182c.4060606 0 1.1030303-.315 1.1272727-1.19571427v-.45c0-.75214286-.5818182-1.1957143-1.1272727-1.1957143h-.9878788v-.54h1.9575757v-1.17h-1.8787878c-.4848485 0-1.1333334.42428573-1.1333334 1.215v.405c0 .7907143.6424243 1.1957143 1.1333334 1.1957143 1.3636363.00642857-.3272728 0 .9333333 0v.56571428l-2.0060606.0064286zm-10.6181818-.28285716s1.060606-.09642857 1.060606-1.5492857c0-1.45285715-1.2848485-1.58785715-1.2848485-1.58785715H7.72727273v4.5835714H8.8909091v-1.1057143l1.0060606 1.1057142h1.7212121l-1.3515151-1.4464286zm-.44848488-.93857143H8.8909091v-1.0478571h.93333332s.26060608.1028572.26060608.5207143c0 .4178572-.26666668.5271429-.26666668.5271429zM14.2 12.4228572h-1.1818182c-.8424242 0-1.1272727.81-1.1272727 1.1957143v3.35571427h1.1818182v-.8035714h1.1090909v.8035714h1.1454545V13.6185715c0-.97714286-.8363636-1.1957143-1.1272727-1.1957143zm-.0181818 2.44928572h-1.1151515V13.76s0-.2507143.3696969-.2507143h.4060606c.3272728 0 .3333334.2507143.3333334.2507143v1.11214286h.0060606zm1.6848485-2.44928573h1.230303v4.5514285h-1.230303v-4.5514285zm2.9575757 3.375v-3.375H17.6v4.5514285h2.8787879v-1.1764285h-1.6545455z",
  //   svgPath2:
  //     'M.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76363636.16714284-3.93333333 1.87071427-5.2060606 4.12071427-1.27272726 2.25-1.45454546 4.1528571-1.45454546 4.1528571z"/><path d="M.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76363636.16714284-3.93333333 1.87071427-5.2060606 4.12071427-1.27272726 2.25-1.45454546 4.1528571-1.45454546 4.1528571z"/><path d="M.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76969696.16714284-3.93939393 1.87071427-5.2121212 4.12071427C.6 15.0714285.4242424 16.9742857.4242424 16.9742857zM10.4 9.0607143L10.4242424 8.63c-.0545454-.03214286-.2060606-.1092857-.58787876-.225l-.02424243.4242857c.2.0707143.3939394.14785716.5878788.2314286z"/><path d="M9.82424242 10.42357143l-.02424242.405c.2.00642857.4.03214286.6.07714286l.0242424-.3985715c-.2060606-.045-.4060606-.0707143-.59999998-.0835715zm-2.24242424-2.0057143h.06060606l-.12121212-.39214284c-.1878788 0-.38181818.0128571-.58181818.0385714l.1151515.3792857c.1757576-.0192857.35151517-.0257143.52727274-.0257143zm.2909091 2.3657143l.13939393.44357143c.1757576-.09.3515152-.16714286.5272728-.225l-.1333333-.42428572c-.2060606.06428572-.3818182.135-.5333333.2057143zM5.1212121 9.09285713l-.27272727-.44357142c-.15151515.0835715-.3090909.1735715-.47272727.2764286l.27878787.45c.15757576-.1028571.3090909-.1992857.46666667-.2828571zm1.24242424 2.89285716l.2909091.4628571c.1030303-.1607143.22424242-.3085715.35757575-.4564286L6.7393939 11.555c-.13939394.135-.26666667.28285714-.37575758.4307143zm-.87878788 2.07l.4909091.4114285C6 14.2164285 6.04242424 13.9657143 6.1030303 13.715l-.43636363-.36642857c-.07878788.23785714-.13333334.47571428-.1818182.70714286zM2.830303 11.0021428L2.4 10.60357142c-.15757576.1607143-.3090909.32142858-.44848485.48214287L2.41818182 11.51c.12727273-.17357143.26666666-.34714286.4121212-.50785714zM1 13.8757143l-.6969697-.27c-.1151515.27642856-.24242424.59785713-.3030303.77142856l.6969697.27C.77575758 14.42857143.9030303 14.11357143 1 13.8757143zm4.3939394 1.81285713c.0121212.34071428.04242424.61714286.07272727.81L6.1939394 16.775c-.05454546-.2507143-.10909092-.53357143-.14545455-.8357143l-.65454546-.25071427z',
  // },
  // {
  //   title: "CircleCI icon",
  //   ariaLabeledBy: "simpleicons-circleci-icon",
  //   url: "#feedback",
  //   colour: "#343434",
  //   svgPath1:
  //     "M8.963 12c0-1.584 1.284-2.855 2.855-2.855 1.572 0 2.856 1.284 2.856 2.855 0 1.572-1.284 2.856-2.856 2.856-1.57 0-2.855-1.284-2.855-2.856zm2.855-12C6.215 0 1.522 3.84.19 9.025c-.01.036-.01.07-.01.12 0 .313.252.576.575.576H5.59c.23 0 .433-.13.517-.333.997-2.16 3.18-3.672 5.712-3.672 3.466 0 6.286 2.82 6.286 6.287 0 3.47-2.82 6.29-6.29 6.29-2.53 0-4.714-1.5-5.71-3.673-.097-.19-.29-.336-.517-.336H.755c-.312 0-.575.253-.575.576 0 .037.014.072.014.12C1.514 20.16 6.214 24 11.818 24c6.624 0 12-5.375 12-12 0-6.623-5.376-12-12-12z",
  // },
  // {
  //   title: "Webpack icon",
  //   ariaLabeledBy: "simpleicons-webpack-icon",
  //   url: "#feedback",
  //   colour: "#8DD6F9",
  //   svgPath1:
  //     "M21.0157 18.1202L12.351 23v-3.8007l5.3986-2.9567 3.266 1.8776zm.5927-.5344V7.3805l-3.1708 1.822v6.5593l3.1708 1.824zm-18.6827.5344L11.5904 23v-3.8007l-5.3986-2.9567-3.266 1.8776zm-.5927-.5344V7.3805l3.1707 1.822v6.5593l-3.1707 1.824zm.371-10.8656l8.8864-5.0056v3.6748L5.8974 8.507l-.0434.0248-3.15-1.8116zm18.5335 0L12.351 1.7146v3.6748l5.693 3.1177.0434.0248 3.15-1.8116zm-9.647 11.6146l-5.3262-2.9155V9.642l5.326 3.062v5.6308zm.7605 0l5.326-2.9155V9.642l-5.326 3.062v5.6308zM6.625 8.9734l5.3467-2.928 5.3468 2.928-5.3468 3.0744L6.625 8.9734z",
  // },
  // {
  //   title: "Bootstrap icon",
  //   ariaLabeledBy: "simpleicons-bootstrap-icon",
  //   url: "#feedback",
  //   colour: "#563D7C",
  //   svgPath1:
  //     "M20 0H4C1.793.006.006 1.793 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.187 16.855c-.2.482-.517.907-.923 1.234-.42.34-.952.62-1.607.82-.654.203-1.432.305-2.333.305H6.518v-14h6.802c1.258 0 2.266.283 3.02.86.76.58 1.138 1.444 1.138 2.61 0 .705-.172 1.31-.518 1.81-.344.497-.84.886-1.48 1.156v.046c.854.18 1.515.585 1.95 1.215s.658 1.426.658 2.387c0 .538-.104 1.05-.3 1.528l.025.027zm-2.776-3.45c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59h-.017zm-.6-2.823c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4c.583 0 1.08-.17 1.464-.496z",
  // },
  // {
  //   title: "Python icon",
  //   ariaLabeledBy: "simpleicons-python-icon",
  //   url: "#feedback",
  //   colour: "#3776AB",
  //   svgPath1:
  //     "M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z",
  //   svgPath2:
  //     "M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z",
  // },
  // {
  //   title: "Haskell icon",
  //   ariaLabeledBy: "simpleicons-haskell-icon",
  //   url: "#feedback",
  //   colour: "#5D4F85",
  //   svgPath1:
  //     "M.006 20.47L5.649 12 .006 3.531h4.235l5.674 8.47-5.674 8.468zm5.643 0L11.29 12 5.65 3.531h4.266l11.253 16.938h-4.224l-3.535-5.34-3.495 5.34zM19.3 15.525l-1.877-2.827h6.571v2.826zm-2.826-4.235l-1.877-2.827h9.387v2.827z",
  // },
  // {
  //   title: "Meteor icon",
  //   ariaLabeledBy: "simpleicons-meteor-icon",
  //   url: "#feedback",
  //   colour: "#DE4F4F",
  //   svgPath1:
  //     "M0 .234l21.912 20.537s.412.575-.124 1.151c-.535.576-1.236.083-1.236.083L0 .234zm6.508 2.058l17.01 15.638s.413.576-.123 1.152c-.534.576-1.235.083-1.235.083L6.508 2.292zM1.936 6.696l17.01 15.638s.412.576-.123 1.152-1.235.082-1.235.082L1.936 6.696zm10.073-2.635l11.886 10.927s.287.401-.087.805-.863.058-.863.058L12.009 4.061zm-8.567 7.737l11.886 10.926s.285.4-.088.803c-.375.403-.863.059-.863.059L3.442 11.798zm14.187-5.185l5.426 4.955s.142.188-.044.377c-.185.188-.428.027-.428.027l-4.954-5.358v-.001zM6.178 17.231l5.425 4.956s.144.188-.042.377-.427.026-.427.026l-4.956-5.359z",
  // },
  // {
  //   title: "CSS3 icon",
  //   ariaLabeledBy: "simpleicons-css3-icon",
  //   url: "#feedback",
  //   colour: "#1572B6",
  //   svgPath1:
  //     "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
  // },
  // {
  //   title: "Atom icon",
  //   ariaLabeledBy: "simpleicons-atom-icon",
  //   url: "#feedback",
  //   colour: "#66595C",
  //   svgPath1:
  //     "M20.496 9.026c-2.183-.93-5.116-1.53-8.25-1.695-.5-.03-.987-.04-1.45-.04 2.318-2.83 4.802-4.73 6.437-4.79.322-.013.595.055.813.196.706.458.905 1.768.545 3.59-.04.25.12.493.36.54.25.05.49-.11.54-.36.45-2.28.12-3.846-.94-4.538-.38-.248-.84-.365-1.35-.346-2.05.077-4.94 2.3-7.59 5.72-1.154.035-2.24.13-3.232.287-.646-2.897-.39-4.977.594-5.477.138-.073.285-.11.457-.124.697-.054 1.66.395 2.71 1.27.194.16.486.14.646-.06.163-.195.134-.48-.06-.645C9.466 1.51 8.304 1 7.354 1.07c-.286.025-.556.098-.803.22-1.19.607-1.67 2.327-1.37 4.838.07.52.16 1.062.29 1.62C2.19 8.404.1 9.718.01 11.372c-.06 1.17.865 2.284 2.68 3.222.224.115.502.03.62-.2.114-.224.03-.5-.2-.616C1.66 13.032.88 12.19.927 11.42c.05-1.08 1.772-2.19 4.76-2.78.27.994.62 2.032 1.05 3.09-1.018 1.888-1.756 3.747-2.137 5.4-.56 2.465-.26 4.22.86 4.948.36.234.78.35 1.247.35.935 0 2.067-.46 3.347-1.372.21-.15.256-.435.11-.64-.147-.206-.433-.256-.64-.106-1.544 1.103-2.844 1.472-3.562 1.003-.76-.495-.926-1.943-.46-3.976.32-1.386.907-2.93 1.708-4.52.2.438.41.876.63 1.313 1.425 2.796 3.17 5.227 4.91 6.845 1.386 1.29 2.674 1.963 3.735 1.963.35 0 .68-.075.976-.223 1.145-.585 1.64-2.21 1.398-4.575-.224-2.213-1.06-4.91-2.354-7.6-.11-.227-.384-.323-.61-.216-.23.11-.33.385-.22.612 2.69 5.602 2.88 10.19 1.37 10.96-1.59.813-5.424-2.355-8.39-8.18-.34-.655-.637-1.3-.9-1.93.34-.608.7-1.22 1.095-1.83.395-.604.806-1.188 1.224-1.745h.394c.54 0 1.126.01 1.734.048 6.53.343 10.975 2.56 10.884 4.334-.04.765-.924 1.538-2.425 2.12-.234.096-.352.36-.26.596.07.18.24.292.426.292.058 0 .114-.01.167-.03 1.905-.74 2.95-1.756 3.01-2.93.07-1.33-1.17-2.61-3.5-3.6v-.01zM8.08 9.45c-.27.415-.52.827-.764 1.244-.292-.768-.532-1.51-.723-2.215.713-.11 1.485-.19 2.31-.24-.28.39-.554.794-.82 1.21v-.01z",
  //   cx: "12.005",
  //   cy: "12",
  //   r: "1.375",
  // },
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
