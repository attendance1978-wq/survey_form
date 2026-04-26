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
    "vanoten123",
    "template_dxigdc7",
    data
  )
  .then((res) => {
    console.log("SUCCESS", res);
    alert("✅ Sent successfully!");
    e.target.reset();
  })
  .catch((err) => {
    console.log("FAILED", err);
    alert("❌ Failed to send (check console)");
  });
});
