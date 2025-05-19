document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('certificateModal');
  const certificateLink = document.querySelector('.certificate-link');
  const closeBtn = document.querySelector('.close-modal');
  const body = document.body;

  function openModal() {
    modal.style.display = 'block';
    body.classList.add('modal-open');
  }

  function closeModal() {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  }

  certificateLink.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});