// Mensajes predefinidos para la conversación
const messages = [
    "Agente: ¡Hola! ¿En qué puedo ayudarte hoy?",
    "Usuario: Quiero abrir una cuenta bancaria.",
    "Agente: Claro, necesitamos algunos documentos. ¿Tienes tu NIE y una prueba de ingresos?",
    "Usuario: Sí, los tengo.",
    "Agente: Perfecto. ¿Quieres abrir una cuenta corriente o de ahorros?",
    "Usuario: Cuenta corriente.",
    "Agente: Muy bien, abriremos una cuenta corriente para ti. ¡Gracias por elegir nuestro banco!"
];

let messageIndex = 0;

// Función para enviar mensajes en la demo
function sendMessage() {
    const chatOutput = document.getElementById("chat-output");
    const userInput = document.getElementById("user-input");

    if (messageIndex < messages.length) {
        // Mostrar el siguiente mensaje de la conversación
        const newMessage = document.createElement("p");
        newMessage.textContent = messages[messageIndex];
        chatOutput.appendChild(newMessage);
        chatOutput.scrollTop = chatOutput.scrollHeight; // Desplazar hacia abajo
        messageIndex++;
    } else {
        // Fin de la demo
        const endMessage = document.createElement("p");
        endMessage.textContent = "Agente: Esto concluye la demo de apertura de cuenta.";
        chatOutput.appendChild(endMessage);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
    userInput.value = ""; // Limpiar el campo de entrada
}

// Función para mostrar mensaje de suscripción
document.getElementById("subscription-form").onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    document.getElementById("subscription-message").textContent = `¡Gracias por suscribirte!`;
    document.getElementById("email").value = ""; // Limpiar el campo de correo
};
