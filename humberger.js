const menuHumberger = document.querySelector("#btn")
        const menuHumberger2 = document.querySelector("#cancel")
        const navLinks = document.querySelector(".menu")
    
        menuHumberger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
        menuHumberger2.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })