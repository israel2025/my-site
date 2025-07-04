const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwqNfkecBeWszZCRrsEH_CIShpWpvI5jYA7wSj-4GW-fyHa-Jcqj1t8OaPjSvI-RlrG/exec";

window.onload = function () {
  //if (!localStorage.getItem("cookiesDecidido")) {
    document.getElementById("avisoCookies").style.display = "block";
  //}
};

function aceitarCookies() {
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      fetch(URL_SCRIPT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          decisao: "aceitou",
          data: new Date().toISOString(),
          ip: data.ip
        })
      });
    });

  localStorage.setItem("cookiesDecidido", "aceito");
  document.getElementById("avisoCookies").style.display = "none";
}

function ignorarCookies() {
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      fetch(URL_SCRIPT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          decisao: "ignorou",
          data: new Date().toISOString(),
          ip: data.ip
        })
      });
    });

  localStorage.setItem("cookiesDecidido", "ignorado");
  document.getElementById("avisoCookies").style.display = "none";
}
