function sendMessage() { let userInput = document.getElementById("userInput"); let chatBox = document.getElementById("chatBox");

if (userInput.value.trim() === "") return;

let userMessage = `<p><b>Anda:</b> ${userInput.value}</p>`;
chatBox.innerHTML += userMessage;

setTimeout(() => {
    let botMessage = `<p><b>Bot:</b> Saya tidak mengerti, bisa ulangi?</p>`;
    chatBox.innerHTML += botMessage;
    chatBox.scrollTop = chatBox.scrollHeight;
}, 1000);

userInput.value = "";

}

