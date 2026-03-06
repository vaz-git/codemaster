// ================== CONTROLE DO MENU MOBILE ================== 
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // Bloquear scroll quando menu aberto
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

// Fechar menu ao cliclar em links
document.querySelectorAll('.navList a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Fechar menu ao rolar
window.addEventListener('scroll', () => {
    if (navList.classList.contains('open')) {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});
// ================== LINKS DE NAVEGAÇÃO ==================
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a');

// Função para adicionar a classe "active" ao link clicado
function activeLink() {
    navLinks.forEach(item => item.classList.remove('active')); // Remove a classe "active" de todos os links
    this.classList.add('active'); // Adiciona a classe "active" ao link clicado
}

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach(item => item.addEventListener('click', activeLink));

// ================== MODO CLARO/ESCURO ==================
// Função para alternar entre os temas claro e escuro
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light'); // Alterna a classe "light" no elemento HTML

    // Salva o tema escolhido no localStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Atualiza a cor do texto do título
    updateTextColor();
}

// Carrega o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.toggle('light', savedTheme === 'light');
}

// ================== Animação do Título ==================
// Seleciona o elemento do título e define variáveis para a animção
const titleElement = document.querySelector('#name');
const text = "CODEMASTER";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// Função para animar o texto do título (digitação e apagamento)
function animateText() {
    if (isTyping) {
        if (index < text.length) {
            titleElement.textContent = text.slice(0, index + 1); // Adiciona uma letra ao título
            index++;
        } else {
            isTyping = false; // Alterna para o modo de apagamento
        }
    } else {
      if (index > 1) {
            titleElement.textContent = text.slice(0, index - 1); // Remove uma letra do título
            index--;
      } else {
          isTyping = true; // Alterna para o modo de digitação
          // Alterna a cor do texto entre branco/preto e laranja
          currentColor = currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff') ? '#C94C16' : (document.documentElement.classList.contains('light') ? 'black' : '#fff'); 
          titleElement.style.color = currentColor;
      }
    }
    setTimeout(animateText, 300); // Define um intervalo para a próxima animação
}

// Função para atualizar a cor do texto do título com base no tema
function updateTextColor() {
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// Inicia a animação do título ao carregar a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();
