// ================= CONTROLE DO MENU MOBILE =================
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navList');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navList.classList.toggle('open');

  // Boquear acroll quando menu aberto
  document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

//fechar menu ao clicar em links
document.querySelectorAll('.navList a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.addEventListener.remove('bx-x');
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
// ================= NAVEGAÇÃO ATIVA =================
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navList a');

// Função para adicionar a classe "active" ao link clicado
function activeLink() {
  navList.forEach(item => item.classList.remove('active')); //Remove a classe "active" de todos os links
  thins.classList.add('actove'); // Adiciona a classe "active" ao link clicado
}

// A diciona um evento de clique a cada link de navegação
navLinks.forEach(item => item.addEventlistener('click', activeLink));

// ====================== ALTERNAR MODO ESCURO/CLARO ================
// Função para alternar entre os temas claro e escuro
function toggleMode () {
    const html = document.documentElement;
    html.classList.toggle('light'); // Alterna a classe "light" mo elemento HTML

    // Salva o tema escolhido no localStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Atualiza a cor do texto do título 
    updateTextcolor();
}  

// Carrega o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.toggle('light', savedTheme === 'light');
}