var count = 0;

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

function changeScratchGame(game) {
  count = count + 1;
  if (count == 1) {
     top.window.opener.location.replace("https://classroom.google.com/");
  };

  let scratchGameDict = {"Appel": "60917032", "Arena": "139025103", "14-15": "306576111", "Infinite Bunner": "567535145", "Desert Appel": "489697593", "Getting Over It": "389464290", "Heat Appel": "511913555", "Meltdown": "143663274", "Minecraft Appel": "678316153", "Moon Gravity": "423313626", "Massive Multiplayer": "612229554", "Subzero": "216343253", "Volcano Appel": "472031225", "World": "224236914", "Space Appel": "574035335", "Bionic Blitz": "539747811", "9-13": "140185501"};

  document.getElementById("gameIframe").src = "https://".concat(scratchWeb(), scratchGameDict[game], "/embed");
  document.getElementById("title").innerHTML = game;
  document.getElementById("introText").innerHTML = "";

  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
	  elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
};

function changeOtherGame(game) {
  count = count + 1;
  if (count == 1) {
     top.window.opener.location.replace("https://classroom.google.com/");
  };
  let otherGameDict = {"Bandit Rip": "https://bandit.rip/", "Garden Gnomes": "https://www.google.com/logos/2018/gnomes/gnomes18.html?hl=en", "Slope": "Slope/", "Paper io": "Paper io/", "Retro Bowl": "Retro bowl/"};
  document.getElementById("gameIframe").src = otherGameDict[game];
  document.getElementById("title").innerHTML = game;
  document.getElementById("introText").innerHTML = "";
  
  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
	  elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
};

function changeConstructGame(game) {
  count = count + 1;
  if (count == 1) {
     top.window.opener.location.replace("https://classroom.google.com/");
  };
  let constructGameDict = {"Neon Rocket": "15727", "Ultra Pixel Survive": "26420"};
  
  document.getElementById("gameIframe").src = "https://games.construct.net/".concat(constructGameDict[game], "/latest");
  document.getElementById("title").innerHTML = game;
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

function openWin(link) {
  var win = window.open();
  var iframe = win.document.createElement('iframe');
  win.document.write('<html><head><link href="style.css" rel="stylesheet" type="text/css" /><meta name="viewport" content="width=device-width"></head></html>')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.frameBorder = 0;
  iframe.src = link;
  win.document.body.appendChild(iframe);
};

function processForm() {
  let password = document.getElementById('password').value;
  if (password === "darktrooper") {
    let form = document.getElementById('form');
    form.remove();
    openWin("https://gooogle-classroom.vercel.app/home.html");
  } else if (password === "classroom") {
    window.open("https://classroom.google.com/");
  } else if (password === "youtube") {
    let f = document.getElementById('form');
    f.remove();
    openWin("https://gooogle-classroom.vercel.app/youtube.html");
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
  let youtubeDict = {"Its Not The Future": "k9tgLnI0fFc?si=AlKqpKEpnvw-2r-_", "Hostiles On The Hill": "JRAOdRq-1lw?si=7nNkHc3GDBHv8o-E", "My Stick": "3Xl0Qr0uXuY?si=2_Wx7gPWYRRUoMhW", "I Have The High Ground": "v0wVRG38IYs?si=4-lqNjZuNPmLItxh", "I Have The High Ground EDM": "a2s6BjsYaFs?si=sWc7FTDnHEeV4XvH", "Like A Bantha": "EhAL71gNgKk?si=Da2D24f3-BN-bSCe", "Polynesian Spa Meme": "epBoXVlkxGw?si=Maq9f2RFFCmYwca_", "General Greivous Collection": "hitd55VzUo0?si=voAOs5aGBOMn0ZS-"};
  
  document.getElementById("youtubeIframe").src = "https://www.youtube.com/embed/".concat(youtubeDict[tube]);
  document.getElementById("title").innerHTML = tube;

  let items = document.querySelectorAll('a.active');
  for (let elem of items) {
    elem.classList.remove('active');
  };
  let element = document.getElementById(game);
  element.classList.add("active");
}
