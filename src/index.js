document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(form);
		const box = document.querySelector(".resultBox");

		box.style.cssText = borderRadius(
			formData.get("top-left"),
			formData.get("top-right"),
			formData.get("bottom-left"),
			formData.get("bottom-right"),
		);
	});
});

const borderRadius = (topLeft, topRight, bottomLeft, bottomRight) => {
	let text = "border-radius: ";
	let result = `${topLeft ?? ""}px ${topRight ?? ""}px ${bottomRight ?? ""}px ${
		bottomLeft ?? ""
	}px`;

	if (result === "   ") {
		result = "0";
	}

	text += `${result};`;

	console.log(text);

	return text;
};
