feather.replace();

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

function sendMessage() {
    var form = document.getElementById("fcf-form-id")
    var data = new FormData(form)
    if (data.get("name") == undefined || data.get("name") == null || data.get("name").trim() == "") {
        return alert("Please enter your name!")
    }
    if (data.get("email") == undefined || data.get("email") == null || data.get("email").trim() == "") {
        return alert("Please enter your email address!")
    }
    if (data.get("message") == undefined || data.get("message") == null || data.get("message").trim() == "") {
        return alert("Please enter your message!")
    }
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