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
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Definir opacidade inicial para os elementos
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-card, .produto-card, .depoimento-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Disparar animação uma vez no carregamento
    setTimeout(animateOnScroll, 500);
});

// Adicionar evento de scroll para animação
window.addEventListener('scroll', animateOnScroll);