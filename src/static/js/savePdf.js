document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadPdf');
    
    function saveAsPDF() {
        const sections = document.querySelectorAll('.cv-section');
        const originalStyles = [];
        
        sections.forEach(section => {
            originalStyles.push({
                opacity: section.style.opacity,
                transform: section.style.transform,
                visibility: section.style.visibility,
                display: section.style.display
            });
            
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
                sections.forEach((section, index) => {
                    const original = originalStyles[index];
                    section.style.opacity = original.opacity;
                    section.style.transform = original.transform;
                    section.style.visibility = original.visibility;
                    section.style.display = original.display;
                });
            }, 1000);
        }, 100);
    }

    downloadBtn.addEventListener('click', saveAsPDF);
});