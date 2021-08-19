feather.replace();


//navigation menu btn
var app = function() {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;

    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');

        applyListeners();
    };

    var applyListeners = function applyListeners() {
        menu.addEventListener('click', function() {
            return toggleClass(body, 'nav-active');
        });
    };

    var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
        else element.classList.add(stringClass);
    };

    init();
}();


//form functionality
function sendMessage() {
    var form = document.getElementById("fcf-form-id")
    var data = new FormData(form)

    var sendButton = document.getElementById("fcf-button")
    sendButton.setAttribute("disabled", "true")
    sendButton.nodeValue = "Sending..."
    __sendMessage(data, (errorMessage) => {
        alert(errorMessage)
        sendButton.removeAttribute("disabled")
        sendButton.nodeValue = "Send Message"
    }, () => {
        alert("Message sent!")
        sendButton.removeAttribute("disabled")
        sendButton.nodeValue = "Send Message"
    })
}