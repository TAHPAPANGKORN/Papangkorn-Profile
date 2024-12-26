document.addEventListener("DOMContentLoaded", () => {
    const dodgeButton = document.getElementById("dodge-button");
    const linkButton = document.getElementById("link-button");

    dodgeButton.addEventListener("mouseover", (event) => {
        const rect = dodgeButton.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        // Generate random movement distances
        const moveX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 500);
        const moveY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 200);

        dodgeButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
        dodgeButton.style.cursor = "default";
        linkButton.style.cursor = "default";
    });

    // dodgeButton.addEventListener("mouseout", () => {
    //     setTimeout(() => {
    //         dodgeButton.style.transform = 'translate(0, 0)';
    //     }, 10000); // 1-second delay
    // });
});
