function openWin() {
  window.location.replace("https://classroom.google.com/");
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

function processForm() {
  let password = document.getElementById('password').value;
  if (password == "darktrooper") {
    let form = document.getElementById('form');
    form.remove()
    window.location.replace("https://classroom.google.com/");
    openWin();
  } else {
    alert('That password is incorrect.');
    let form = document.getElementById('form');
    form.remove();
    document.createElement('h1').value = "Incorrect password."
  };
};
