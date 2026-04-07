// =========================================================
// 1. CRASH-PROOF SINGLE PAGE APPLICATION (SPA) LOGIC
// =========================================================
function switchPage(pageId) {
    // 1. Select the pages and nav buttons
    const teenPage = document.getElementById('teen-page');
    const companyPage = document.getElementById('company-page');
    const navTeen = document.getElementById('nav-teen');
    const navCompany = document.getElementById('nav-company');

    // 2. Safeguard: Hide everything and remove active classes first
    if (teenPage) teenPage.style.display = 'none';
    if (companyPage) companyPage.style.display = 'none';
    if (navTeen) navTeen.classList.remove('active');
    if (navCompany) navCompany.classList.remove('active');

    // 3. Show the requested page with a smooth fade-in effect
    if(pageId === 'teen') {
        if (teenPage) {
            teenPage.style.display = 'block';
            // Trigger reflow for animation restart
            teenPage.style.animation = 'none';
            teenPage.offsetHeight; 
            teenPage.style.animation = 'fadeIn 0.5s ease-in-out';
        }
        if (navTeen) navTeen.classList.add('active');
    } 
    else if (pageId === 'company') {
        if (companyPage) {
            companyPage.style.display = 'block';
            // Trigger reflow for animation restart
            companyPage.style.animation = 'none';
            companyPage.offsetHeight; 
            companyPage.style.animation = 'fadeIn 0.5s ease-in-out';
        }
        if (navCompany) navCompany.classList.add('active');
    }

    // 4. Smoothly scroll back to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// 2. INITIALIZATION & FAQ ACCORDION
// =========================================================
document.addEventListener("DOMContentLoaded", function() {
    // By default, load the Teenlancers page
    const teenPage = document.getElementById('teen-page');
    if (teenPage && teenPage.style.display === 'none') {
        switchPage('teen');
    }

    // FAQ Logic
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector("span");
        if(answer) answer.style.display = "none";

        item.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            document.querySelectorAll(".faq-answer").forEach(ans => {
                ans.style.display = "none";
            });
            document.querySelectorAll(".faq-item span").forEach(icn => {
                icn.textContent = "+";
            });

            if (!isOpen) {
                answer.style.display = "block";
                answer.style.animation = "fadeIn 0.4s ease-in-out";
                icon.textContent = "-";
            }
        });
    });
});

console.log("Shark Tank Edition Funngro Revamp Loaded Successfully! 🚀");