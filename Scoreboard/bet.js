function chooseTeam(teamName) {
    console.log("You chose: " + teamName);
    alert("You chose: " + teamName);
}

function sendMessage() {
    var message = document.getElementById("chat-message").value;
    var chatMessages = document.getElementById("chat-messages");
    var chatMessageElement = document.createElement("div");
    chatMessageElement.classList.add("chat-message");

    var profilePhoto = document.createElement("img");
    profilePhoto.classList.add("profile-photo");
    profilePhoto.src = "profile-photo.png";
    chatMessageElement.appendChild(profilePhoto);

    var username = document.createElement("span");
    username.classList.add("username");
    username.textContent = "Username:";
    chatMessageElement.appendChild(username);

    var messageText = document.createElement("span");
    messageText.textContent = message;
    chatMessageElement.appendChild(messageText);

    chatMessages.appendChild(chatMessageElement);
    document.getElementById("chat-message").value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addEmoji(emoji) {
    document.getElementById("chat-message").value += emoji;
}

function openPredictionPage() {
    window.open("ourpred.html", "_blank");
}
