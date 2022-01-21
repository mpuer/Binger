window.addEventListener("DOMContentLoaded", async (event) => {
    const textArea = document.getElementById("review");
    const button = document.getElementById("review-button");
    button.addEventListener("click", event => {
        let review = textArea.value;
        const response = await fetch("http://localhost:8080/browse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        });
    });
});
