// Memastikan script jalan setelah HTML siap
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  const hbCheckbox = document.getElementById('humberger');

  console.log("Script Terkoneksi!"); // Cek di Console F12, muncul tidak?

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log("Menu diklik, menutup hamberger..."); 
      if (hbCheckbox) {
        hbCheckbox.checked = false;
      }
    });
  });
});
