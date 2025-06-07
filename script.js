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

// Banco de dados de produtos (simulado)
        const productsDatabase = {
            // Anéis
            'A1': 'Imagens/anel1.jpg',
            'A2': 'Imagens/anel2.jpg',
            'A3': 'Imagens/anel3.jpg',
            'A4': 'Imagens/anel4.jpg',
            'A5': 'Imagens/anel5.jpg',
            
            // Berloques
            'BE1': 'Imagens/berloc1.jpg',
            'BE2': 'Imagens/berloc2.jpg',
            'BE3': 'Imagens/berloc3.jpg',
            'BE4': 'Imagens/berloc4.jpg',
            'BE5': 'Imagens/berloc5.jpg',
            
            // Brincos
            'BR1': 'Imagens/brinco1.jpg',
            'BR2': 'Imagens/brinco2.jpg',
            'BR3': 'Imagens/brinco3.jpg',
            'BR4': 'Imagens/brinco4.jpg',
            'BR5': 'Imagens/brinco5.jpg',
            'BR6': 'Imagens/brinco6.jpg',
            'BR7': 'Imagens/brinco7.jpg',
            'BR8': 'Imagens/brinco8.jpg',
            
            // Colares
            'C1': 'Imagens/colar1.jpg',
            'C2': 'Imagens/colar2.jpg',
            'C3': 'Imagens/colar3.jpg',
            'C4': 'Imagens/colar4.jpg',
            'C5': 'Imagens/colar5.jpg',
            'C6': 'Imagens/colar6.jpg',
            'C7': 'Imagens/colar7.jpg',
            'C8': 'Imagens/colar8.jpg',
            'C9': 'Imagens/colar9.jpg',
            'C10': 'Imagens/colar10.jpg',
            'C11': 'Imagens/colar11.jpg',
            'C12': 'Imagens/colar12.jpg',
            'C13': 'Imagens/colar13.jpg',
            'C14': 'Imagens/colar14.jpg',
            'C15': 'Imagens/colar15.jpg',
            'C16': 'Imagens/colar16.jpg',
            'C17': 'Imagens/colar17.jpg',
            'C18': 'Imagens/colar18.jpg',
            'C19': 'Imagens/colar19.jpg',
            
            // Pulseiras
            'P1': 'Imagens/pulseira1.jpg',
            'P2': 'Imagens/pulseira2.jpg',
            'P3': 'Imagens/pulseira3.jpg',
            'P4': 'Imagens/pulseira4.jpg',
            'P5': 'Imagens/pulseira5.jpg',
            'P6': 'Imagens/pulseira6.jpg',
            'P7': 'Imagens/pulseira7.jpg'
        };

        // Senha simples (em um sistema real, isso seria no servidor)
        const CORRECT_PASSWORD = "mazzio123"; // Troque por uma senha segura
        
        // Elementos
        const loginSection = document.querySelector('.login-section');
        const searchSection = document.querySelector('.search-section');
        const productDisplay = document.getElementById('product-result');
        const passwordInput = document.getElementById('password-input');
        const loginButton = document.getElementById('login-button');
        const loginError = document.getElementById('login-error');
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const searchError = document.getElementById('search-error');
        const productImage = document.getElementById('product-image');
        const productCodeDisplay = document.getElementById('product-code');
        
        // Login
        loginButton.addEventListener('click', function() {
            if (passwordInput.value === CORRECT_PASSWORD) {
                loginSection.style.display = 'none';
                searchSection.style.display = 'block';
                loginError.style.display = 'none';
            } else {
                loginError.style.display = 'block';
            }
        });
        
        // Pesquisa
        searchButton.addEventListener('click', searchProduct);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProduct();
            }
        });
        
        function searchProduct() {
            const code = searchInput.value.trim().toUpperCase();
            
            if (!code) {
                searchError.textContent = 'Por favor, digite um código para pesquisar.';
                searchError.style.display = 'block';
                productDisplay.style.display = 'none';
                return;
            }
            
            if (productsDatabase[code]) {
                productImage.src = productsDatabase[code];
                productCodeDisplay.textContent = `Código: ${code}`;
                productDisplay.style.display = 'block';
                searchError.style.display = 'none';
            } else {
                searchError.textContent = 'Produto não encontrado. Verifique o código e tente novamente.';
                searchError.style.display = 'block';
                productDisplay.style.display = 'none';
            }
        }