window.addEventListener("DOMContentLoaded", async (event) => {
    const dataValue = document.getElementById("show-id")
    const textArea = document.getElementById("review");
    const button = document.getElementById("review-button");
    const select = document.getElementById("rating-select");
    button.addEventListener("click", event => {
        let review = textArea.value;
        let showId = dataValue.value;
        let rating = select.value;
        const response = await fetch(`http://localhost:8080/browse/${showId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({review, rating}),
        });
        
    });
});
