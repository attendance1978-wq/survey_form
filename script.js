// Initialize EmailJS
emailjs.init("kAFp5VhBEt9voXnxs");

// DOM Elements
const form = document.getElementById('studentForm');
const modalOverlay = document.getElementById('modalOverlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalBtn = document.getElementById('modalBtn');

// Function to show modal
function showModal(type, title, message) {
  const modalBox = document.querySelector('.modal-box');
  
  // Set icon and colors based on type
  if (type === 'success') {
    modalIcon.textContent = '✅';
    modalBox.className = 'modal-box success';
    modalTitle.style.color = '#28a745';
  } else if (type === 'error') {
    modalIcon.textContent = '❌';
    modalBox.className = 'modal-box error';
    modalTitle.style.color = '#dc3545';
  }
  
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalOverlay.classList.add('active');
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when clicking overlay
modalOverlay.addEventListener('click', function(e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal when clicking OK button
modalBtn.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  const data = {
    firstName: e.target.firstName.value.trim(),
    lastName: e.target.lastName.value.trim(),
    username: e.target.username.value.trim(),
    email: e.target.email.value.trim(),
    gradeLevel: e.target.gradeLevel.value
  };

  // Validate all fields
  if (!data.firstName || !data.lastName || !data.username || !data.email || !data.gradeLevel) {
    showModal('error', 'Validation Error', 'Please fill in all fields!');
    return;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    showModal('error', 'Invalid Email', 'Please enter a valid email address!');
    return;
  }

  // Send email with EmailJS
  emailjs.send(
    "vanoten123",
    "template_dxigdc7",
    data
  )
  .then((res) => {
    console.log("SUCCESS", res);
    showModal('success', 'Registration Successful!', 'Welcome to EduLMS! Your account has been created.');
    form.reset();
  })
  .catch((err) => {
    console.log("FAILED", err);
    showModal('error', 'Registration Failed', 'Something went wrong. Please try again later.');
  });
});
