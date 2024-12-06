document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.querySelectorAll('.toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
  
    toggleSidebar.forEach(button => {
      button.addEventListener('click', () => {
        sidebar.classList.toggle('hide');
        main.classList.toggle('hide');
      });
    });
  });
  