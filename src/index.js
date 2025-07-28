function generateContent(event) {
    event.preventDefault();

    new Typewriter("#results", {
        strings: "The future of tech",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}



let contentFormElement = document.querySelector("#content-form");
contentFormElement.addEventListener("submit", generateContent);