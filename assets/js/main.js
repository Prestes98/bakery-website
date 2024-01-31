/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
  //navMenu, navToggle e navClose são selecionados pelos seus respectivos IDs
    /*menu show*/
if(navToggle) {
  navToggle.addEventListener('click', () => {//evento de clique é adicionado ao elemento
    navMenu.classList.add('show-menu') //Quando o elemento navToggle (geralmente um botão de menu) é clicado, a classe 'show-menu' é adicionada ao elemento navMenu. Isso faz com que o menu de navegação seja exibido.
  })
}
/*menu hidden*/
if(navClose) {
  navClose.addEventListener('click', ()=> { 
    navMenu.classList.remove('show-menu') //Quando o elemento navClose (geralmente um ícone ou texto para fechar o menu) é clicado, a classe 'show-menu' é removida do elemento navMenu. Isso faz com que o menu de navegação seja ocultado.
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  //when we click on each nav__link, me remove the show-menu click
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
//Resumidamente, essa função faz com que, quando um link do menu de navegação é clicado, o menu de navegação seja ocultado, removendo a classe 'show-menu'. Isso proporciona uma experiência de navegação suave, onde o menu é fechado automaticamente após o usuário selecionar um item do menu.

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
//esta função cria um efeito visual onde o cabeçalho da página é desfocado quando o usuário rola a página para baixo além de 50 unidades de viewport, e o efeito é removido quando o usuário rola para cima. Isso pode ser usado para criar uma transição suave entre diferentes seções da página ou simplesmente para fins estéticos.

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add de show-scroll class to the with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
//esta função cria um efeito visual onde o botão "rolar para cima" torna-se visível quando o usuário rola a página para baixo além de 350 pixels, e é ocultado quando o usuário rola para cima. Isso proporciona uma maneira conveniente para os usuários retornarem rapidamente ao topo da página.


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') 
//seleciona todas as seções do documento que possuem um atributo 'id'
const scrollActive = () => {
  const scrollDown = window.scrollY //obtém a posição atual da barra de rolagem vertical.(eixoY)

  sections.forEach(current => { //itera sobre cada seção encontrada
    const sectionHeight = current.offsetHeight, //obtém a altura da seção.
          sectionTop = current.offsetTop - 58, //obtém a posição superior da seção em relação ao topo do documento, ajustado por 58 pixels (possivelmente para acomodar uma barra de navegação fixa).
          sectionId = current.getAttribute('id'), //obtém o atributo id da seção.
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')//seleciona o elemento do menu de navegação associado à seção atual com base em seu atributo href.

          if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
          } else {
            sectionClass.classList.remove('active-link')
            //Dentro do bloco condicional, verifica-se se a posição de rolagem atual está dentro da área visível da seção. Se estiver, a classe 'active-link' é adicionada ao elemento do menu de navegação correspondente. Caso contrário, a classe é removida.
          }//Em resumo, esta função ajusta dinamicamente as classes dos elementos do menu de navegação com base na posição de rolagem do usuário, indicando visualmente qual seção está atualmente visível na página.
  })
}
window.addEventListener('scroll', scrollActive) //adiciona um ouvinte de evento de rolagem à janela, o que significa que a função scrollActive será chamada sempre que a barra de rolagem for movida.

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  //reset: true, //Animations repeat
}
)

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)

sr.reveal(`.home__img, footer__img-1, .footer__img-2`, { rotate: {z: -15} })
sr.reveal(`.home__bread, .about__bread`, { rotate: {z: 15} })    
sr.reveal(`.home__footer`, { scale: 1, origin: 'bottom' }) 

sr.reveal(`.new__card:nth-child(1) img`, { rotate: {z: -30}, distance: 0 })
sr.reveal(`.new__card:nth-child(2) img`, { rotate: {z: 15}, distance: 0, delay: 600 })
sr.reveal(`.new__card:nth-child(3) img`, { rotate: {z: -30}, distance: 0, delay: 900 })

sr.reveal(`.favorite__card img`, { interval: 100, rotate: {z: 15}, distance: 0 })

sr.reveal(`.footer__container`, { scale: 1 })
