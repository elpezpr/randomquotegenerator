async function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const spinner = document.getElementById("spinner");

    quoteElement.classList.add("hidden");
    spinner.classList.remove("hidden");

    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random");
        const data = await response.json();
        const quoteData = data[0];
        const quoteText = quoteData.q;

        quoteElement.textContent = `"${quoteText}" - ${quoteData.a}`;

    } catch (error) {
        quoteElement.textContent = "Sorry, couldn't fetch a quote. Try again!";
        console.error("Error fetching quote:", error);
    } finally {
        spinner.classList.add("hidden");
        quoteElement.classList.remove("hidden");
        quoteElement.style.animation = 'none'; // Reset animation
        quoteElement.offsetHeight; // Trigger reflow
        quoteElement.style.animation = null; // Restart animation
    }
}
