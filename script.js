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
  win.document.write('<html><head><link href="style.css" rel="stylesheet" type="text/css" /><meta name="viewport" content="width=device-width" allow="autoplay;></head></html>')
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
  const kgamesP = decipher('o293gfg2o39f8g23784v5i')
  let password = document.getElementById('password').value;
  if (password === defaultP("6461726b74726f6f706572")) {
    let form = document.getElementById('form');
    form.remove();
    openWin("https://improved-gooogle-classroom.vercel.app/home.html");
    top.window.opener.location.replace("https://classroom.google.com/");
  } else if (password === kgamesP("27203a3d28232e3c3c")) {
    window.open("https://project-hourglass.vercel.app")
    top.window.opener.location.replace("https://classroom.google.com/");
  } else if (password === escapeP("525d504242435e5e5c")) {
    window.open("https://classroom.google.com/");
    top.window.opener.location.replace("https://classroom.google.com/");
  } else if (password === imperialP("27312b2a2b3c3b")) {
    let f = document.getElementById('form');
    f.remove();
    openWin("https://improved-gooogle-classroom.vercel.app/tube.html");
    top.window.opener.location.replace("https://classroom.google.com/");
  } else {
    alert('The password you entered is incorrect.');
    let form = document.getElementById('form');
    form.remove();
  };
};
