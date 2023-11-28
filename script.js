let count = 0;
function scratchWeb() {
  let now = new Date();
  let day = now.getDay();
  let hour = 100 * now.getHours();
  let minute = now.getMinutes();
  let time = hour + minute;
  if (day == 0 || day == 6) {
    return "scratch.mit.edu/projects/";
  } else if (time <= 840 || time >= 1600) {
    return "scratch.mit.edu/projects/";
  } else {
    return "scratch.mit.edu/projects/"; // Change this back when Turbowarp is back up and running
  };
};

const decipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}

function changeScratchGame(game) {
  document.getElementById("gameIframe").style.display = 'block';
  document.getElementById('fullscreen').style.display = 'block';
  count = count + 1;
  if (count == 1) {
    top.window.opener.location.replace("https://classroom.google.com/");
  };
  let scratchGameDict = {"Appel": "60917032", "Arena": "139025103", "14-15": "306576111", "Infinite Bunner": "567535145", "Desert Appel": "489697593", "Getting Over It": "389464290", "Heat Appel": "511913555", "Meltdown": "143663274", "Minecraft Appel": "678316153", "Moon Gravity": "423313626", "Massive Multiplayer": "612229554", "Subzero": "216343253", "Volcano Appel": "472031225", "World": "224236914", "Space Appel": "574035335", "Bionic Blitz": "539747811", "9-13": "140185501", "Five Nights At Freddys": "488211339", "Paper Minecraft": "10128407"};
  document.getElementById("gameIframe").src = "https://".concat(scratchWeb(), scratchGameDict[game], "/embed");
  let i = 0;
  let speed = 100;
  document.getElementById("title").innerHTML = "";
  function typeWriter() {
    if (i < game.length) {
      document.getElementById("title").innerHTML += game.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  document.getElementById("title").classList.add('titleColourAnimation')
  document.getElementById("title").addEventListener("animationend", () => {
    document.getElementById("title").classList.remove('titleColourAnimation')
  });
  typeWriter()
  document.getElementById("introText").innerHTML = " ";
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
};

function changeOtherGame(game) {
  document.getElementById("gameIframe").style.display = 'block';
  document.getElementById('fullscreen').style.display = 'block';
  count = count + 1;
  if (count == 1) {
     top.window.opener.location.replace("https://classroom.google.com/");
  };
  let otherGameDict = {"Slope": "Slope/", "Paper io": "Paper io/", "Retro Bowl": "Retro bowl/", "Getaway Shootout": "Getaway Shootout/", "Rooftop Snipers": "Rooftop Snipers/", "Motox3m Winter": "Motox3m Winter/", "Motox3m": "Motox3m/", "Basketball Stars": "Basketball Stars/", "2048": "2048/", "Awesome Tanks 2": "Awesome Tanks 2/", "Death Run 3D": "Death Run 3D/", "Motox3m Spooky": "Motox3m Spooky/", "Motox3m Pool": "Motox3m Pool/", "1v1.lol": "1v1.lol/", "Learn To Fly": "Learn To Fly/", "Among Us": "Among Us/", "Trimps": "https://trimps.github.io", "Crossy Road": "https://raw.githack.com/3kh0/3kh0-assets/main/crossyroad/index.html", "Jetpack Joyride": "https://raw.githack.com/3kh0/3kh0-assets/main/jetpack-joyride/index.html", "Madalin Stunt Cars 2": "https://raw.githack.com/3kh0/3kh0-assets/main/madalin-stunt-cars-2/index.html", "Subway Surfers": "https://raw.githack.com/3kh0/3kh0-assets/main/subway-surfers/index.html", "Drive Mad": "Drive Mad/", "Rocket Leauge": "https://raw.githack.com/3kh0/3kh0-assets/main/Rocket-League/index.html", "10 Minutes Till Dawn": "https://raw.githack.com/3kh0/3kh0-assets/main/10-minutes-till-dawn/index.html", "Papas Burgeria": "Papas Burgeria/", "Papas Pizzaria": "Papas Pizzaria/"};
  document.getElementById("gameIframe").src = otherGameDict[game];
  let i = 0;
  let speed = 100;
  document.getElementById("title").innerHTML = "";
  function typeWriter() {
    if (i < game.length) {
      document.getElementById("title").innerHTML += game.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  document.getElementById("title").classList.add('titleColourAnimation')
  document.getElementById("title").addEventListener("animationend", () => {
    document.getElementById("title").classList.remove('titleColourAnimation')
  });
  typeWriter()
  if (otherGameDict[game] === "Rooftop Snipers/" || otherGameDict[game] === "Getaway Shootout/") {
    document.getElementById("introText").innerHTML = "This game takes about 30 seconds to load. PLEASE PRESS WAIT when you are given the option: it will load very soon after that.";
  } else if (otherGameDict[game] === "1v1lol/") {
    document.getElementById("introText").innerHTML = "If the multiplayer options on this game do not work, then try a 1v1 match. If that does not work either, then you can play some of the local games - I recommend zombies.";
  } else if (otherGameDict[game] === "2048/") {
    document.getElementById('gameIframe').setAttribute("scrolling", "none");
    document.getElementById("introText").innerHTML = "";
  } else if (otherGameDict[game] === "https://raw.githack.com/3kh0/3kh0-assets/main/madalin-stunt-cars-2/index.html") {
    document.getElementById('introText').innerHTML = "If you are given the option, please press wait. This game takes a few minutes to load, but it is worth it, I promise!"
  } else {
    document.getElementById("introText").innerHTML = "";
  }
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
};

function changeConstructGame(game) {
  document.getElementById("gameIframe").style.display = 'block';
  document.getElementById('fullscreen').style.display = 'block';
  count = count + 1;
  if (count == 1) {
     top.window.opener.location.replace("https://classroom.google.com/");
  };
  let constructGameDict = {"Neon Rocket": "15727", "Ultra Pixel Survive": "26420"};
  
  document.getElementById("gameIframe").src = "https://games.construct.net/".concat(constructGameDict[game], "/latest");
  let i = 0;
  let speed = 100;
  document.getElementById("title").innerHTML = "";
  function typeWriter() {
    if (i < game.length) {
      document.getElementById("title").innerHTML += game.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  document.getElementById("title").classList.add('titleColourAnimation')
  document.getElementById("title").addEventListener("animationend", () => {
    document.getElementById("title").classList.remove('titleColourAnimation')
  });
  typeWriter()
  document.getElementById("introText").innerHTML = "";
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
};

function escape() {
  window.open("https://classroom.google.com/");
};

function displayBody() {
  const videoy = document.getElementById("myVideo");
  videoy.style.display = "none";
  document.getElementById("main").style.display = "block"
}

function openWin(link) {
  let win = window.open();
  let iframe = win.document.createElement('iframe');
  win.document.write('<html><head><link href="style.css" rel="stylesheet" type="text/css" /><meta name="viewport" content="width=device-width" allow="autoplay;></head><body><video autoplay id="myVideo" class="myVideo"><source src="Darktrooper Games Video.mp4" type="video/mp4"></video></body></html>')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.frameBorder = 0;
  iframe.src = link;
  win.document.body.appendChild(iframe);
}

function processForm() {
  const defaultP = decipher('11987123871932');
  const escapeP = decipher('2k43g2342jgk21o41');
  const imperialP = decipher('gg2934234g3429ed7820');
  let password = document.getElementById('password').value;
  if (password === defaultP("6461726b74726f6f706572")) {
    let form = document.getElementById('form');
    form.remove();
    openWin("https://gooogle-classroom.vercel.app/home.html");
    top.window.opener.location.replace("https://classroom.google.com/");
  } else if (password === escapeP("525d504242435e5e5c")) {
    window.open("https://classroom.google.com/");
    top.window.opener.location.replace("https://classroom.google.com/");
  } else if (password === imperialP("27312b2a2b3c3b")) {
    let f = document.getElementById('form');
    f.remove();
    openWin("https://gooogle-classroom.vercel.app/tube.html");
    top.window.opener.location.replace("https://classroom.google.com/");
  } else {
    alert('The password you entered is incorrect.');
    let form = document.getElementById('form');
    form.remove();
  };
};

// window.location.replace("https://classroom.google.com/");
function changeYoutube(tube) {
  count = count + 1;
  if (count == 1) {
     top.window.opener.location.replace("https://classroom.google.com/");
  };
  let youtubeDict = {"Its Not The Future": "k9tgLnI0fFc?si=AlKqpKEpnvw-2r-_", "Hostiles On The Hill": "JRAOdRq-1lw?si=7nNkHc3GDBHv8o-E", "My Stick": "3Xl0Qr0uXuY?si=2_Wx7gPWYRRUoMhW", "I Have The High Ground": "v0wVRG38IYs?si=4-lqNjZuNPmLItxh", "I Have The High Ground EDM": "a2s6BjsYaFs?si=sWc7FTDnHEeV4XvH", "Like A Bantha": "EhAL71gNgKk?si=Da2D24f3-BN-bSCe", "Polynesian Spa Meme": "epBoXVlkxGw?si=Maq9f2RFFCmYwca_", "General Greivous Collection": "hitd55VzUo0?si=voAOs5aGBOMn0ZS-", "Fight Scene Dude Perfect": "n1dEqq2hepw?si=LUQqEo_tzaL4i1_5"};
  
  document.getElementById("youtubeIframe").src = "https://www.youtube.com/embed/".concat(youtubeDict[tube]);
  document.getElementById("title").innerHTML = tube;
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
}

function changeTo(list) {
  let introsList = {'Home': 'Please recommend this site to all of your friends!</b><br><br><b>How the website works - PLEASE READ:</b><br><br>Before you dive in to using this website, please consider all of its aspects. When you were given the link to this website, and every time you come back to it, it will show up in your history - as google classroom of course. The link to this site itself if completely invisible - if you look at the title and URL of this page, they are about:blank, which does not show up in history. But to make it even more masked, when you click on a game, you will see that it reloads the first page to the real google classroom, and removes the link to the origional site from your history completely. <br><br><b>Useful functions of the site - PLEASE READ:</b><br><br>If a teacher is suspicious of what the web page with the password entry is, then you can say that it was simply a coding exercise and you can enter "classroom" as your password. This will then open up google classroom and not the games website. Finally, in the nav bar is an escape button. If someone is about to come past, you can press this button and you will be brought to google classroom as well.<br><br>Thank you for reading. Have fun! (If you have any suggestions for games I could feasibly add to the site, then please do contact me - I love the feedback!)<br><br><b>Credit to 3kh0 for many of the games!</b>', 'Scratch': 'This is a collection of good games from Scratch. Not so ling ago, this website was nothing but a poorly coded compilation of Scratch games. This page serves as a reminder of how far it has come. Enjoy!', 'Other': 'These are the serious games on this website. There are only certain games which I can add, mainly from this Github repositary: https://github.com/3kh0/3kh0-Assets/tree/main. Please browse through if you want to, and drop me an inconspicuous email or send me a text if you want it added. <b>Some of the games do not work</b> but I will try my best. If there is a specific game you want added, then drop me an inconspicuous email and I will do my best. Thanks for reading, enjoy!', 'Youtube': 'This part of the site is still under construction: I intend to add an entire unblked Youtube at some point, but for now, if there is a particular video that does not work on your chromebook because it is blked, you can just use the video unblker. Enjoy!'}
  document.getElementById('gameIframe').setAttribute("scrolling", "none");
  document.getElementById('youtubeForm').style.display = 'none';
  document.getElementById("gameIframe").style.display = 'none';
  document.getElementById('gameIframe').removeAttribute('src')
  document.getElementById('introText').innerHTML = introsList[list]
  document.getElementById('Home').style.display = 'none';
  document.getElementById('Scratch').style.display = 'none';
  document.getElementById('Other').style.display = 'none';
  document.getElementById('Youtube').style.display = 'none';
  document.getElementById('fullscreen').style.display = 'none';
  if (list === 'Other') {
    document.getElementById('title').innerHTML = 'Games'
  } else {
    document.getElementById('title').innerHTML = list
  }
  let div = document.getElementById(list);
  div.style.display = 'list-item';
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
};

function fullscreen() {
  // const source = document.getElementById('gameIframe').src
  // openWin(source)
  let gameIfr = document.getElementById('gameIframe')
  if (gameIfr.requestFullscreen) {
    gameIfr.requestFullscreen();
  } else if (gameIfr.webkitRequestFullscreen) { /* Safari */
    gameIfr.webkitRequestFullscreen();
  } else if (gameIfr.msRequestFullscreen) { /* IE11 */
    gameIfr.msRequestFullscreen();
  }
}

function formVisible() {
  let i = 0;
  let speed = 100;
  document.getElementById("title").innerHTML = "";
  let game = 'Youtube Unblker'
  function typeWriter() {
    if (i < game.length) {
      document.getElementById("title").innerHTML += game.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  document.getElementById("title").classList.add('titleColourAnimation')
  document.getElementById("title").addEventListener("animationend", () => {
    document.getElementById("title").classList.remove('titleColourAnimation')
  });
  typeWriter()
  document.getElementById('introText').innerHTML = ""
  document.getElementById('youtubeForm').style.display = 'block'
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById('youtubeUnblker');
  element.classList.add("active");
}

function youtubeUnblker() {
  let youtubeLink = document.getElementById('youtubeLink').value
  if (youtubeLink.includes('www.youtube.com/watch?v=')) {
  youtubeLink = youtubeLink.replace('www.youtube.com/watch?v=', '')
    if (youtubeLink.includes('https://')) {
      youtubeLink = youtubeLink.replace('https://', '')
    }
    document.getElementById("gameIframe").style.display = 'block';
    document.getElementById('gameIframe').src = 'https://www.youtube-nocookie.com/embed/'.concat(youtubeLink)
    top.window.opener.location.replace("https://classroom.google.com/");
  } else {
    alert(`${youtubeLink} is not a valid YouTube URL. Please try again.`)
  }
}

function googleForm() {
  let i = 0;
  let speed = 100;
  document.getElementById("title").innerHTML = "";
  let game = 'Game Recommendations'
  function typeWriter() {
    if (i < game.length) {
      document.getElementById("title").innerHTML += game.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  document.getElementById("title").classList.add('titleColourAnimation')
  document.getElementById("title").addEventListener("animationend", () => {
    document.getElementById("title").classList.remove('titleColourAnimation')
  });
  typeWriter()
  document.getElementById('introText').innerHTML = ""
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById('googleForm');
  element.classList.add("active");
  document.getElementById("gameIframe").style.display = 'block';
  document.getElementById('gameIframe').setAttribute("scrolling", "none");
  document.getElementById('gameIframe').src = "https://docs.google.com/forms/d/e/1FAIpQLSffcNuPWQQcXOpS_SxpXW2dv9p2E3WPM1ENMcQwo9WYuLufwQ/viewform?embedded=true"
}
