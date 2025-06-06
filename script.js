function copiarTexto() {
      var texto = document.getElementById("textoParaCopiar").innerText;

      var tempInput = document.createElement("textarea");
      tempInput.value = texto;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // Exibir a mensagem animada
      const msg = document.getElementById("mensagemCopiado");
      msg.classList.add("ativo");

      // Esconder depois de 2,5 segundos
      setTimeout(() => {
        msg.classList.remove("ativo");
      }, 2500);
    }

    // Responsividade
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animação ao rolar a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.category-card, .produto-card, .depoimento-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('fade-in'); // Apenas adiciona a classe
        }
    });
};

// Animações da pagina
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-card, .produto-card, .depoimento-card').forEach(element => {
        element.classList.add('fade-init');
    });

    setTimeout(animateOnScroll, 500);
});

window.addEventListener('scroll', animateOnScroll);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});