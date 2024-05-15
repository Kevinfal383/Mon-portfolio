const ratio = .1
const options = {
    root: null,                      //Zone d'affiche qui le detecte
    rootMargin: '0px',               //Defini à combien de px l'element peut etre detecté
    threshold: .1                    //A partir de quel moment peut etre executer (10%)
}

const Activation = function (entries, observer) {
    entries.forEach(function (entry){
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
} 

//Activarion est la fonction qui s'activera lorsque l'element sera visible
const observer = new IntersectionObserver(Activation, options)

/*observer.observe(document.querySelector('.invisible'))*/
document.querySelectorAll('[class*="invisible-"]').forEach(function (r) {
    observer.observe(r)
})