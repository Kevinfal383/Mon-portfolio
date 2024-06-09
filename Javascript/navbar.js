//--------------------------animation qui change le bg de la barre de navigation-----------------
/*window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var acceuil = document.getElementById('acceuil').offsetTop;
    var propos = document.getElementById('propos').offsetTop;
    var competence = document.getElementById('competence').offsetTop;
    var skills = document.getElementById('skills').offsetTop;
    var contact = document.getElementById('contact').offsetTop;
    
    var scrollPosition = window.scrollY;

    if (scrollPosition < propos) {
        navbar.classList.remove('navbar-color-propos');
        navbar.classList.remove('navbar-color-competence');
        navbar.classList.remove('navbar-color-skills');
        navbar.classList.remove('navbar-color-contact');
        navbar.classList.add('navbar-color-acceuil');
    } else if (scrollPosition >= propos && scrollPosition < competence) {
        navbar.classList.remove('navbar-color-acceuil');
        navbar.classList.remove('navbar-color-competence');
        navbar.classList.remove('navbar-color-skills');
        navbar.classList.remove('navbar-color-contact');
        navbar.classList.add('navbar-color-propos');
    } else if (scrollPosition >= competence && scrollPosition < skills) {
        navbar.classList.remove('navbar-color-acceuil');
        navbar.classList.remove('navbar-color-propos');
        navbar.classList.remove('navbar-color-skills');
        navbar.classList.remove('navbar-color-contact');
        navbar.classList.add('navbar-color-competence');
    } else if (scrollPosition >= skills && scrollPosition < contact) {
        navbar.classList.remove('navbar-color-acceuil');
        navbar.classList.remove('navbar-color-propos');
        navbar.classList.remove('navbar-color-competence');
        navbar.classList.remove('navbar-color-contact');
        navbar.classList.add('navbar-color-skills');
    } else {
        navbar.classList.remove('navbar-color-acceuil');
        navbar.classList.remove('navbar-color-propos');
        navbar.classList.remove('navbar-color-competence');
        navbar.classList.remove('navbar-color-skills');
        navbar.classList.add('navbar-color-contact');
    }
});*/






window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
            var currentId = section.getAttribute('id');
            var currentLink = document.querySelector('a[href="#' + currentId + '"]');
            setActiveClass(currentLink);
        }
    });
});

function setActiveClass(current) {
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        link.parentNode.classList.remove('active');
    });
    current.parentNode.classList.add('active');
}

