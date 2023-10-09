var popup = false
function openWin() {
  var win = window.open();
  var iframe = win.document.createElement('iframe');
  win.document.write('<html><head><link href="style.css" rel="stylesheet" type="text/css" /><meta name="viewport" content="width=device-width"></head></html>')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.frameBorder = 0;
  iframe.src = "https://gooogle-classroom.vercel.app/home.html";
  win.document.body.appendChild(iframe);
};

function popupBlocked() {
  let text = document.getElementById('popup');
  text.innerHTML = 'Now enter the password again, and click on the top right hand corner where it says "popup blocked". Then set it to the other value available, and try one last time. If it still doesn't work after that, please contact me and I will attempt to fix it.'
  popup = true
};

function processForm() {
  let password = document.getElementById('password').value;
  if (password == "darktrooper") {
    let form = document.getElementById('form');
    form.remove();
    if (popup = false) {
      window.location.replace("https://classroom.google.com/");
    }
    openWin();
  } else {
    alert('The password you entered is incorrect.');
    let form = document.getElementById('form');
    form.remove();
    document.createElement('h1').value = "Incorrect password."
  };
};
