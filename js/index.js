const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((e)=>{
    e.addEventListener('click', toggleSkills)
})

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab2=>{
            tab2.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


let swiper = new Swiper('.portfolio__container',{
    cssMode: true,
    loop: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable: true
    }
})

/* ===== SCROLL ===== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY>=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sunset'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moonset':'uil-sunset'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moonset' ? 'add': 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})







var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var statusSuccess = document.getElementById("my-form-status-success");
      var statusError = document.getElementById("my-form-status-error");

      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        statusSuccess.classList.add('show__status')
        form.reset()
      }).catch(error => {
        statusError.classList.add('show__status')
      });
    }
    form.addEventListener("submit", handleSubmit)
