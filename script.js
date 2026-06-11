function saveSettings() {
  const keyword = document.getElementById("keyword").value;
  const message = document.getElementById("message").value;
  const reply = document.getElementById("reply").value;

  localStorage.setItem("keyword", keyword);
  localStorage.setItem("message", message);
  localStorage.setItem("reply", reply);

  document.getElementById("status").innerText =
    "Demo settings saved in this browser ✅";
}

window.onload = function () {
  document.getElementById("keyword").value = localStorage.getItem("keyword") || "";
  document.getElementById("message").value = localStorage.getItem("message") || "";
  document.getElementById("reply").value = localStorage.getItem("reply") || "";
};
