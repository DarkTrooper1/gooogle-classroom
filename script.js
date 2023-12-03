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
  const imperialP = decipher('gg2934234g3429ed7820');
  const kgamesP = decipher('o293gfg2o39f8g23784v5i')
  let password = document.getElementById('password').value;
  if (password === defaultP('6461726b74726f6f706572')) {
    let form = document.getElementById('passwordForm');
    form.remove();
    openWin('https://improved-gooogle-classroom.vercel.app/home.html');
  } else if (password === kgamesP('27203a3d28232e3c3c')) {
    window.open('https://project-hourglass.vercel.app')
  } else if (password === escapeP('525d504242435e5e5c')) {
    window.open('https://classroom.google.com/');
  } else if (password === imperialP('27312b2a2b3c3b')) {
    let f = document.getElementById('passwordForm');
    f.remove();
    openWin('https://improved-gooogle-classroom.vercel.app/tube.html');
  } else {
    alert('The password you entered is incorrect.');
    let form = document.getElementById('passwordForm');
    form.remove();
  };
};

// Home Code

let count = 0;

function changeGame(game) {
  count += 1;
  if (count === 1) {
    top.window.opener.location.replace('https://classroom.google.com/');
  }
  let title = document.getElementById('title');
  let gameDict = {"Slope": "Slope/", "Paper io": "Paper io/", "Retro Bowl": "Retro bowl/", "Getaway Shootout": "Getaway Shootout/", "Rooftop Snipers": "Rooftop Snipers/", "Motox3m Winter": "Motox3m Winter/", "Motox3m": "Motox3m/", "Basketball Stars": "Basketball Stars/", "2048": "2048/", "Awesome Tanks 2": "Awesome Tanks 2/", "Death Run 3D": "Death Run 3D/", "Motox3m Spooky": "Motox3m Spooky/", "Motox3m Pool": "Motox3m Pool/", "1v1.lol": "1v1.lol/", "Learn To Fly": "Learn To Fly/", "Among Us": "Among Us/", "Trimps": "https://trimps.github.io", "Crossy Road": "https://raw.githack.com/3kh0/3kh0-assets/main/crossyroad/index.html", "Jetpack Joyride": "https://raw.githack.com/3kh0/3kh0-assets/main/jetpack-joyride/index.html", "Madalin Stunt Cars 2": "https://raw.githack.com/3kh0/3kh0-assets/main/madalin-stunt-cars-2/index.html", "Subway Surfers": "https://raw.githack.com/3kh0/3kh0-assets/main/subway-surfers/index.html", "Drive Mad": "Drive Mad/", "Rocket Leauge": "https://raw.githack.com/3kh0/3kh0-assets/main/Rocket-League/index.html", "10 Minutes Till Dawn": "https://raw.githack.com/3kh0/3kh0-assets/main/10-minutes-till-dawn/index.html", "Papas Burgeria": "Papas Burgeria/", "Papas Pizzaria": "Papas Pizzaria/"};
  let gameIframe = document.getElementById('gameIframe');
  let introText = document.getElementById('introText');
  
  title.innerHTML = game;
  introText.style.display = 'none';
  gameIframe.src = gameDict[game];
  gameIframe.style.display = "block";
  
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add('active');
}
