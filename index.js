// Selecting necessary elements
const form = document.querySelector("form");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");
const messageForm = document.querySelector("#message-form");
const linkForm = document.querySelector("#link-form");
const { hash } = window.location;
const showDecodedMessage = document.querySelector("#showDecodedMessage");

// Add Event Listener on Form
form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Hide Message Form when form is submitted
	messageForm.classList.add("hide");

	// Show Link Form when form is submitted
	linkForm.classList.remove("hide");

	// Select Message Input and Encode It
	const encrypted = btoa(messageInput.value);

	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});

// Decoding the Message submitted
const decodedMessage = atob(hash.replace("#", ""));

// Condition to check if decodeMessage is not null/false
if (decodedMessage) {
	messageForm.classList.add("hide");
	showDecodedMessage.classList.remove("hide");
}
