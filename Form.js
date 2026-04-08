const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");
const btn = document.getElementById("submit-btn");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  btn.innerText = "Sending...";

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    successMsg.style.display = "block";
    btn.innerText = "Send Message";
    form.reset();
  } else {
    alert("❌ Something went wrong. Try again!");
    btn.innerText = "Send Message";
  }
});