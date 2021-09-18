var found;
// für alle Links, die automatisch geklickt werden
if (found = $([
  '.login a[href*="login/index"]', // für https://moodle.informatik.tu-darmstadt.de/
  '.potentialidp a[href*="login"]' // für https://moodle.informatik.tu-darmstadt.de/login/index.php
].join())[0]) {
  console.log('Gefunden:', found);
  //console.log(`Gefundenn: ${found.href}`);
  //console.log(`Current URL: ${window.location.href}`);
  if (found.href == 'https://moodle.informatik.tu-darmstadt.de/login/index.php') {

    location.href = 'https://moodle.informatik.tu-darmstadt.de/login/index.php?authCAS=CAS';
    // Direktweg will nicht
    //location.href = `https://sso.tu-darmstadt.de/login?service=${encodeURI(window.location.href)}`;
  } else {
    // simuliere Click
    location.href = found.href;
  }
}
// für alle Submit-Buttons, die automatisch geklickt werden
else if (location.href.length == 64 
  && location.href.startsWith('https://sso.tu-darmstadt.de/idp/profile/cas/login?execution=e') 
  && (found = $('form button'))) {
  console.log('Gefunden:', found);
  // console.log(`Gefundenn: ${found.a}`);
  // simuliere Click
  var interval = setInterval(() => {
    if (!localStorage.getItem('password')) {
      if (!$('#username').val() || !$('#password').val()) {
        console.info("Enter login visible!");
        return;
      }
      localStorage.setItem('username', $('#username').val());
      localStorage.setItem('password', $('#password').val());
    } else {
      if (!$('#username').val() || !$('#password').val()) {
        $('#username').val(localStorage.getItem('username'));
        $('#password').val(localStorage.getItem('password'));
      }
    }
    // console.log($(found).submit());
    // console.log(found.form.__proto__.submit.apply(found.form, []));
    found.click();
    clearInterval(interval);
  }, 200);
}


/* else if (found = $([`#field_user`,
  `#field_pass`,
  `#logIn_btn`].join())[0]) {
  //console.log('Gefunden:', found);
  console.log(`Gefundenn: ${found.a}`);
  // simuliere Click
  var interval = setInterval(() => {
    if (!localStorage.getItem('password')) {
      if (!$('#username').val() || !$('#password').val()) {
        console.info("Enter login visible!");
        return;
      }
      localStorage.setItem('username', $('#username').val());
      localStorage.setItem('password', $('#password').val());
    } else {
      if (!$('#username').val() || !$('#password').val()) {
        $('#username').val(localStorage.getItem('username'));
        $('#password').val(localStorage.getItem('password'));
      }
    }
    console.log($(found).submit());
    console.log(found.form.__proto__.submit.apply(found.form, []));
    clearInterval(interval);
  }, 200);
} */
if (window.location.href.includes(`tucan.tu-darmstadt.de/`)) {
  console.log("hi")
  //$(`#field_user`).val("lool");
  // simuliere Click
  var interval = setInterval(() => {
    if (!localStorage.getItem('password')) {
      if (!$('#field_user').val() || !$('#field_pass').val()) {
        console.info("Enter login visible!");
        return;
      }
      localStorage.setItem('username', $('#field_user').val());
      localStorage.setItem('password', $('#field_pass').val());
    } else {
      if (!$('#field_user').val() || !$('#field_pass').val()) {
        $('#field_user').val(localStorage.getItem('username'));
        $('#field_pass').val(localStorage.getItem('password'));
      }
    }
    console.log($(`#logIn_btn`).click());
    // console.log(found.form.__proto__.submit.apply(found.form, []));
    clearInterval(interval);
  }, 200);
}
if (window.location.href.includes(`moodle.informatik.tu-darmstadt.de/`)) {
  var interval = setInterval(() => {
    let continueSessionButton = $('button:contains("Aktuelle Sitzung verlängern")');
    if (continueSessionButton) {
      continueSessionButton.click();
    }
  }, 30000);
}