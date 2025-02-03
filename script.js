document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.getElementById("image");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
    const heading = document.querySelector("h1");
    let x = 0;

    // Yes button click event
    yesButton.onclick = () => {
        imageElement.src = 'https://www.creativefabrica.com/wp-content/uploads/2022/09/18/I-LOVE-YOU-VECTOR-DESIGN-Graphics-38781369-1.jpg';
        heading.innerHTML = 'I know You love me!';
        document.querySelector("#button").innerHTML = '';
    };

    // No button click event
    noButton.onclick = () => {
        const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100)); 
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 100)); 

        noButton.style.position = "absolute";
        noButton.style.left = `${randomLeft}px`;
        noButton.style.top = `${randomTop}px`;

        x++;
        if (x >= 5) {
            heading.innerHTML = 'You have to go with me; You cannot say no';
        }
    };
});
