var chatWindow = document.getElementById("chatWindow");
var supportIcon = document.getElementById("supportIcon");
var closeButton = document.getElementById("closeButton");
var messageInput = document.getElementById("messageInput");
var chatMessages = document.getElementById("chatMessages");
var sendButton = document.getElementById("sendButton");
var notificationSound = document.getElementById("notificationSound");

supportIcon.addEventListener("click", function() {
    chatWindow.style.display = "block";
    notificationSound.play();
});

closeButton.addEventListener("click", function() {
    chatWindow.style.display = "none";
});

sendButton.addEventListener("click", function() {
    var message = messageInput.value;
    if (message.trim() !== "") {
        var newMessage = document.createElement("div");
        newMessage.className = "message";
        newMessage.textContent = "You: " + message;
        chatMessages.appendChild(newMessage);
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight; 
    }
});

function handleScroll() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 120) {
        supportIcon.classList.add("show-icon"); 
    } else {
        supportIcon.classList.remove("show-icon");
    }
}

window.addEventListener("scroll", handleScroll);

