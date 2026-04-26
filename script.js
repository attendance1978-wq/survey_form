emailjs.init("kAFp5VhBEt9voXnxs");

document.getElementById("studentForm").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    username: e.target.username.value,
    email: e.target.email.value,
    gradeLevel: e.target.gradeLevel.value
  };

  emailjs.send(
    "service_acdxp3l",
    "template_dxigdc7",
    data
  ).then(() => {
    document.getElementById("msg").innerText = "✅ Registration sent! Check your email.";
    e.target.reset();
  }).catch((error) => {
    console.log(error);
    document.getElementById("msg").innerText = "❌ Failed to send.";
  });
});
