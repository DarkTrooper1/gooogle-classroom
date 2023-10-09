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
  let otherGameDict = {"Bandit Rip": "https://bandit.rip/", "Garden Gnomes": "https://www.google.com/logos/2018/gnomes/gnomes18.html?hl=en"};
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
  let constructGameDict = {"Neon Rocket": "15727", "Shot Out 4": "40843", "Ultra Pixel Survive": "26420"};
  
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
