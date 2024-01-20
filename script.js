// Portal code

const decipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}
function openWin(link) {
  let win = window.open();
  let iframe = win.document.createElement('iframe');
  win.top.document.title = 'Google Classroom';
  win.document.write("<html><head><link href='style.css' rel='stylesheet' type='text/css' /><meta name='viewport' content='width=device-width'></head></html>")
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.frameBorder = 0;
  iframe.src = link;
  win.document.body.appendChild(iframe);
}
function processForm() {
  const defaultP = decipher('11987123871932');
  const escapeP = decipher('2k43g2342jgk21o41');
  const kgamesP = decipher('j872g3rbg8oq289yrbg45h83iug')
  let password = document.getElementById('password').value;
  if (password === defaultP('6461726b74726f6f706572')) {
    let form = document.getElementById('passwordForm');
    form.remove();
    openWin('https://gooogle-classroom.vercel.app/home.html');
  } else if (password === kgamesP('3b1705021304591e190304111a170505')) {
    window.open('https://project-hourglass.vercel.app')
  } else if (password === escapeP('525d504242435e5e5c')) {
    window.open('https://classroom.google.com/');
  } else {
    alert('The password you entered is incorrect.');
  };
};

// Home Code

function changeGame(game) {
  let title = document.getElementById('title');
  let gameDict = {'Slope': 'Slope/', 'Paper io': 'Paper io/', 'Retro Bowl': 'Retro bowl/', 'Getaway Shootout': 'Getaway Shootout/', 'Rooftop Snipers': 'Rooftop Snipers/', 'Motox3m Winter': 'Motox3m Winter/', 'Motox3m': 'Motox3m/', 'Basketball Stars': 'Basketball Stars/', '2048': '2048/', 'Awesome Tanks 2': 'Awesome Tanks 2/', 'Death Run 3D': 'Death Run 3D/', 'Motox3m Spooky': 'Motox3m Spooky/', 'Motox3m Pool': 'Motox3m Pool/', '1v1.lol': '1v1.lol/', 'Learn To Fly': 'Learn To Fly/', 'Among Us': 'Among Us/', 'Trimps': 'https://trimps.github.io', 'Drive Mad': 'Drive Mad/', 'Papas Burgeria': 'Papas Burgeria/', 'Papas Pizzaria': 'Papas Pizzaria/', 'Neon Rocket': 'https://games.construct.net/15727/latest', '99 Balls': '99 Balls/', 'Tunnel Rush': 'Tunnel Rush/'};
  let gameIframe = document.getElementById('gameIframe');
  let introText = document.getElementById('introText');
  let fullscreenButton = document.getElementById('fullscreenButton');

  if (gameDict[game] === '2048/') {
    document.getElementById('gameIframe').setAttribute("scrolling", "none");
  }
  fullscreenButton.style.display = 'block';
  title.innerHTML = game;
  introText.style.display = 'none';
  gameIframe.src = gameDict[game];
  gameIframe.style.display = 'block';
  
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add('active');
}

function changeScratch(game) {
  let title = document.getElementById('title');
  let scratchDict = {'Appel': '60917032', 'Arena': '139025103', 'GD 14-15': '306576111', 'Infinite Bunner': '567535145', 'Desert Appel': '489697593', 'Getting Over It': '389464290', 'Heat Appel': '511913555', 'GD Meltdown': '143663274', 'Minecraft Appel': '678316153', 'Moon Gravity': '423313626', 'Massive Multiplayer': '612229554', 'GD Subzero': '216343253', 'Volcano Appel': '472031225', 'GD World': '224236914', 'Space Appel': '574035335', 'Bionic Blitz': '539747811', 'GD 9-13': '140185501', 'Five Nights At Freddys': '488211339', 'Paper Minecraft': '10128407'};
  let gameIframe = document.getElementById('gameIframe');
  let introText = document.getElementById('introText');
  let fullscreenButton = document.getElementById('fullscreenButton');

  fullscreenButton.style.display = 'block';
  title.innerHTML = game;
  introText.style.display = 'none';
  gameIframe.src = 'https://scratch.mit.edu/projects/'.concat(scratchDict[game], '/embed');
  gameIframe.style.display = 'block';

  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add('active');
}

let menuPlacement = 0;
function displayMenu() {
  let sidebar = document.getElementById('sidebar')
  if (menuPlacement === 1) {
    sidebar.style.width = '0px';
    menuPlacement = 0;
    document.getElementById('gameIframe').classList.add('centerGame');
  }
  else {
    sidebar.style.width = '200px';
    menuPlacement = 1;
    document.getElementById('gameIframe').classList.remove('centerGame');
  };
};


function changeListTo(list) {
  document.getElementById('fullscreenButton').style.display = 'none';
  document.getElementById('introText').style.display = 'block';
  document.getElementById('gameIframe').style.display = 'none';
  document.getElementById('gamesList').style.display = 'none';
  document.getElementById('scratchList').style.display = 'none';
  document.getElementById(list).style.display = 'list-item';
  
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  
  let itemsList = document.querySelectorAll('a.catagoryActive');
  for (let elem of itemsList) {
    elem.classList.remove('catagoryActive');
  };
  let element = document.getElementById(list + 'Catagory');
  element.classList.add('catagoryActive');
}

function fullscreen() {
  let gameIframe = document.getElementById('gameIframe');
  gameIframe.height = '100vh';
  if (gameIframe.requestFullscreen) {
    gameIframe.requestFullscreen();
  } else if (gameIframe.webkitRequestFullscreen) { /* Safari */
    gameIframe.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    gameIframe.msRequestFullscreen();
  };
};
