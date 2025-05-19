export function saveAsPDF() {
  document.querySelectorAll('.cv-section').forEach(section => {
      section.style.opacity = '1';
      section.style.transform = 'none';
      section.style.visibility = 'visible';
      section.style.display = 'block';
  });

  document.body.classList.add('printing');
  
  setTimeout(() => {
      window.print();
      
      setTimeout(() => {
          document.body.classList.remove('printing');
      }, 1000);
  }, 100);
}