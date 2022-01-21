window.addEventListener("DOMContentLoaded", async (event) => {
    const dataValue = document.getElementById("show-id")
    const textArea = document.getElementById("review");
    const button = document.getElementById("review-button");
    button.addEventListener("click", event => {
        let review = textArea.value;
        let showId = dataValue.value;
        const response = await fetch(`http://localhost:8080/browse/${showId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        });
    });
});
