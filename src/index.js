function displayResult(response) {

    new Typewriter("#results", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generateContent(event) {
    event.preventDefault();

    let propmptInput = document.querySelector("#user-prompt");
    let apiKey = "797te34742354ao3a1f8b8aa324b0f36";
    let context = "You are an expert copywriter and love to write great content. Your mission is to write clear, simple, high-performing content in basic HTML(Do not include the words html in the content) that starts with a strong hook, uses plain language and short paragraphs at an 8th–10th grade reading level, maintains a friendly tone, avoids fluff, and ends with a clear takeaway or call to action to inform and engage. Make sure to follow the user instructions";
    let prompt = `User instrusctions: Generate content about ${propmptInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    axios.get(apiURL).then(displayResult);


}



let contentFormElement = document.querySelector("#content-form");
contentFormElement.addEventListener("submit", generateContent);