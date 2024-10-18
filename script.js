// Fetch a random quote and display it
async function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const spinner = document.getElementById("spinner");

    // Show loading spinner and hide the quote
    quoteElement.classList.add("hidden");
    spinner.classList.remove("hidden");

    try {
        // Fetch the quote from the API
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random");
        const data = await response.json();
        const quoteData = data[0];
        const quoteText = quoteData.q;

        // Display the quote
        quoteElement.textContent = `"${quoteText}" - ${quoteData.a}`;

    } catch (error) {
        // If there was an error, display a fallback message
        quoteElement.textContent = "Sorry, couldn't fetch a quote. Try again!";
        console.error("Error fetching quote:", error);
    } finally {
        // Hide the spinner and show the quote
        spinner.classList.add("hidden");
        quoteElement.classList.remove("hidden");
        quoteElement.style.animation = 'none'; // Reset animation
        quoteElement.offsetHeight; // Trigger reflow
        quoteElement.style.animation = null; // Restart animation
    }
}

// Trigger fetching a random quote when the page loads
window.onload = function() {
    generateQuote();
};
