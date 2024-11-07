// Lorem ipsum generator

// Const (value) for tag options
const tagOptions = [
    "p", "h1", "h2", "h3", "h4", "h5", "h6", "span"
];

// Array of tag lanes

// Grabs the DOM Elements
const optionsContainer = document.querySelector(".options"); // Corrected class name
const outputContainer = document.querySelector(".output");
// Targets the Select input for the tags
const tagsSelect = document.getElementById("tags");
// Targets the Select input for the paragraphs
const paragraphsSlider = document.getElementById("paragraph");
// Target the slider for words per paragraph
const wordsSlider = document.getElementById("words");

const paragraphValue = document.getElementById("paragraphsValue");
const wordsValue = document.getElementById("wordsValue");

// Initialize the generate button
const generateButton = document.getElementById("generate"); // Added this missing element reference

// Create Options UI
function createOptionsUI() {
    // With tag options, fill up the <select> element.
    tagOptions.forEach((tag) => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagsSelect.appendChild(option);
    });

    // Event listeners for sliders
    paragraphsSlider.addEventListener("input", updateParagraphValue);
    wordsSlider.addEventListener("input", updateWordsValue);

    // Event listener for the generate button
    generateButton.addEventListener("click", generateLoremIpsum);
}

// Update the displayed value for Paragraph
function updateParagraphValue() {
    paragraphValue.textContent = paragraphsSlider.value;
}

// Update the displayed value for Words per paragraph
function updateWordsValue() {
    wordsValue.textContent = wordsSlider.value;
}

// Generate Lorem Ipsum Text
function generateLoremIpsum() {
    const paragraphs = parseInt(paragraphsSlider.value);
    const tag = document.getElementById("tags").value;
    const includeHtml = document.getElementById("include").value;
    const wordsPerParagraph = parseInt(wordsSlider.value);

    const loremIpsumText = generateText(paragraphs, tag, includeHtml, wordsPerParagraph);
    displayLoremIpsum(loremIpsumText);
}

// Function to generate Lorem Ipsum text
function generateText(paragraphs, tag, includeHtml, wordsPerParagraph) {
    // Use a placeholder text as an example for illustrating.
    const placeholderText = `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

    // Create an array of paragraphs
    const loremIpsumArray = new Array(paragraphs).fill("");

    // Generate words for each paragraph
    for (let i = 0; i < paragraphs; i++) {
        const words = generateWords(wordsPerParagraph);
        loremIpsumArray[i] = includeHtml === "Yes"
            ? `<${tag}>${words}</${tag}>`
            : words;
    }

    // Join paragraphs into a single string
    return loremIpsumArray.join("\n");
}

// Function to generate a specified number of words
function generateWords(numWords) {
    // Lorem Ipsum text for visual purposes
    const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra nibh. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Sagittis purus sit amet volutpat Consequat mauris. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet mattis vulputate. Enim sed faucibus turpis in eu. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Nulla pharetra diam sit amet nisl suscipit. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Dis parturient montes nascetur ridiculus mus. Justo nec ultrices dui sapien eget. Enim tortor at auctor urna nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc.`;

    // Split the Lorem Ipsum text into words
    const words = loremIpsumText.split(" ");

    // Ensure the number of words requested is within the bounds of the available words
    if (numWords <= words.length) {
        return words.slice(0, numWords).join(" ");
    } else {
        return words.join(" ");
    }
}

// Display Lorem Ipsum Text
function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}

// Initialize the app
createOptionsUI();
