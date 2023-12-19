// Accordeon
const accordeonItems = document.querySelectorAll(".accordion_item");
const accordion = document.querySelector(".accordion");

accordeonItems.forEach(element => {
    element.addEventListener("click", () => {
        if (accordion.querySelector('.content_show') && accordion.querySelector('.content_show') !== element.nextElementSibling) {
            accordion.querySelector('.content_show').classList.remove('content_show');
            accordion.querySelector('.active').classList.remove('active');
        };

        element.nextElementSibling.classList.toggle('content_show');
        element.querySelector('.accordion_arrow').classList.toggle('active');
    })
});


// Modal
let feedbackButtons = document.querySelectorAll('.feedback_btn');
let modal = document.querySelector('.modal');
let btnCloseModal = modal.querySelector('.btn-close-modal-window');
let backgroundModal = modal.querySelector('.modal-window-background');

feedbackButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        document.querySelector('body').style['overflow'] = 'hidden';
        modal.style['display'] = 'flex';
    })
})
btnCloseModal.addEventListener('click', (e) => {
    document.querySelector('body').style['overflow'] = 'auto';
    modal.style['display'] = 'none';


    modal.querySelectorAll('.inputs-block input').forEach(element => {
        element.value = "";
    });
});

backgroundModal.addEventListener('click', (e) => {
    document.querySelector('body').style['overflow'] = 'auto';
    modal.style['display'] = 'none';
});

// phoneMask
let phoneInputs = document.querySelectorAll('input[name="phone"]');
phoneInputs.forEach(element => {
    element.addEventListener('click', function () {
        if (element.value == '') {
            element.value = '+7'
        }
    })
});

// mobileMenu
let body = document.querySelector('body');
let burgerBtn = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile_menu_container');

burgerBtn.addEventListener('click', (e) => {
    body.classList.toggle('overflow');
    mobileMenu.classList.toggle('open');
    burgerBtn.classList.toggle('burger_close');
})