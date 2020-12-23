import 'bootstrap/dist/js/bootstrap';
import '../sass/style.scss';
import $ from "jquery";
import "ekko-lightbox/dist/ekko-lightbox.js";
import 'jquery/dist/jquery';


// LIGHTBOX SCRIPT

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// ROUTING

const navLinks = document.querySelectorAll('a.nav-link');
const navHome = document.querySelector('a.home');
const navAboutMe = document.querySelector('a.about-me');
const navGallery = document.querySelector('a.gallery');
const navUpcycling = document.querySelector('a.upcycling');
const navNews = document.querySelector('a.news');
const navContact = document.querySelector('a.contact');

const sections = document.querySelectorAll('.routing');
const sectionAboutMe = document.querySelector('section.about-me');
const sectionGallery = document.querySelector('section.gallery');
const sectionUpcycling = document.querySelector('section.upcycling');
const sectionNews = document.querySelector('section.news');
const sectionContact = document.querySelector('section.contact');
const sectionHome = document.querySelector('section.home');

const resetActiveSection = () => {
    sections.forEach(section => {
        section.classList.remove('active')
    })
}

navHome.addEventListener('click', () => {

    resetActiveSection();
    sectionHome.classList.add('active');
});

navAboutMe.addEventListener('click', () => {
    resetActiveSection();
    sectionAboutMe.classList.add('active')
});

navGallery.addEventListener('click', () => {
    resetActiveSection();
    sectionGallery.classList.add('active')
});

navUpcycling.addEventListener('click', () => {
    resetActiveSection();
    sectionUpcycling.classList.add('active')
})

navNews.addEventListener('click', () => {
    resetActiveSection();
    sectionNews.classList.add('active')
})

navContact.addEventListener('click', () => {
    resetActiveSection();
    sectionContact.classList.add('active')
})

//UP BUTTON

const upButton = document.querySelector('p.up');
upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})