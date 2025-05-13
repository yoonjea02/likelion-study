document.getElementById('toggle-sections').addEventListener('click', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (section.style.display === 'none') {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });