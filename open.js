function openWin() {
  window.close();
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

password = prompt("Please enter password: ");
if (password == "darktrooper") {
  openWin();
} else {
  incorrect = document.getElementById('incorrerct');
  incorrect.innerHTML = "Incorrect password";
  incText = document.getElementById('incText');
  inctext.innerHTML = "That password was incorrect. Please contact me if you want the correct password."
};
