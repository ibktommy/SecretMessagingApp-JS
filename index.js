// Selecting necessary elements
const form = document.querySelector("form");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");

// Add Event Listener on Form
form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Select Message Input and Encode It
	const encrypted = btoa(messageInput.value);

	linkInput.value = encrypted;
});
