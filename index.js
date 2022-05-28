// Selecting necessary elements
const form = document.querySelector("form");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");
const messageForm = document.querySelector("#message-form");
const linkForm = document.querySelector("#link-form");

// Add Event Listener on Form
form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Select Message Input and Encode It
	const encrypted = btoa(messageInput.value);

	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();

	// Hide Message Form when form is submitted
	messageForm.classList.add("hide");
	// Show Link Form when form is submitted
	linkForm.classList.remove("hide");
});
