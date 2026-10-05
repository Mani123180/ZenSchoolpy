
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const button = item.querySelector(".faq-question");

button.addEventListener("click", () => {

faqItems.forEach(faq => {

if(faq !== item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});
const workflowcards = document.querySelectorAll(".workflow-card");

let current = 0;

setInterval(() => {

workflowCards.forEach(card => card.classList.remove("active"));

workflowCards[current].classList.add("active");

current++;

if(current >= workflowCards.length){

current = 0;

}

},3000);
const plan = document.querySelectorAll(".plan-card");

plans.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

});

});
document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Menu Hamburger Injection & Toggle
    const headerContainer = document.querySelector(".header-container");
    if (headerContainer) {
        const menuBtn = document.createElement("button");
        menuBtn.className = "mobile-menu-btn";
        menuBtn.setAttribute("aria-label", "Toggle Menu");
        menuBtn.innerHTML = "<span></span><span></span><span></span>";
        headerContainer.appendChild(menuBtn);

        const mainNav = document.querySelector(".main-nav");
        const headerButtons = document.querySelector(".header-buttons");

        menuBtn.addEventListener("click", function () {
            menuBtn.classList.toggle("active");
            if (mainNav) mainNav.classList.toggle("active");
            if (headerButtons) headerButtons.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });

        // Close menu when clicking nav links
        if (mainNav) {
            const navLinks = mainNav.querySelectorAll("a");
            navLinks.forEach(link => {
                link.addEventListener("click", () => {
                    menuBtn.classList.remove("active");
                    mainNav.classList.remove("active");
                    if (headerButtons) headerButtons.classList.remove("active");
                    document.body.classList.remove("menu-open");
                });
            });
        }
    }

    // 2. FAQ Accordion Logic
    const faqItems = document.querySelectorAll(".faq-item");
console.log("FAQ Items:", faqItems.length);
   
    faqItems.forEach(item => {
        const button = item.querySelector(".faq-question");
        if (button) {
            button.addEventListener("click", () => {
                faqItems.forEach(faq => {
                    if (faq !== item) {
                        faq.classList.remove("active");
                        const icon = faq.querySelector("i");
                        if (icon) {
                            icon.classList.remove("fa-minus");
                            icon.classList.add("fa-plus");
                        }
                    }
                });
                item.classList.toggle("active");
                const icon = item.querySelector("i");
                if (icon) {
                    if (item.classList.contains("active")) {
                        icon.classList.remove("fa-plus");
                        icon.classList.add("fa-minus");
                    } else {
                        icon.classList.remove("fa-minus");
                        icon.classList.add("fa-plus");
                    }
                }
            });
        }
    });

    // 3. Tab switching logic (for dashboard showcase)
   

        if (!image) return;
        switch (type) {
            case "admin":
                image.src = "../images/admin-dashboard.png";
                break;
            case "principal":
                image.src = "../images/principal-dashboard.png";
                break;
            case "teacher":
                image.src = "../images/teacher-dashboard.png";
                break;
            case "student":
                image.src = "../images/student-dashboard.png";
                break;
            case "parent":
                image.src = "../images/parent-dashboard.png";
                break;
        }
    });

    // 4. Workflow timeline auto activation
    const workflowCards = document.querySelectorAll(".workflow-card");
    if (workflowCards.length > 0) {
        let current = 0;
        setInterval(() => {
            workflowCards.forEach(card => card.classList.remove("active"));
            workflowCards[current].classList.add("active");
            current++;
            if (current >= workflowCards.length) {
                current = 0;
            }
        }, 3000);
    }

    // 5. Plan cards transition setup
    const plans = document.querySelectorAll(".plan-card");
    plans.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = ".4s";
        });
    });

    // Initialize AOS if loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    };


