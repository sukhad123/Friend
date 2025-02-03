document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.getElementById("image");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
    const heading = document.querySelector("h1");
    let x = 0;

    // Ensure the No button is positioned properly
    noButton.style.position = "absolute";

    // Yes button click event
    yesButton.onclick = () => {
        imageElement.src = 'https://www.creativefabrica.com/wp-content/uploads/2022/09/18/I-LOVE-YOU-VECTOR-DESIGN-Graphics-38781369-1.jpg';
        heading.innerHTML = 'I know You love me!';
        document.querySelector("#button").innerHTML = '';
    };

    // No button click event
    noButton.addEventListener("mouseover", () => {
        imageElement.src = 'https://cdn-ak.f.st-hatena.com/images/fotolife/n/nativecamp_official/20220221/20220221122300.png';
        const randomLeft = Math.random() * (window.innerWidth - noButton.clientWidth);
        const randomTop = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.left = `${randomLeft}px`;
        noButton.style.top = `${randomTop}px`;

        x++;
        if (x >= 5) {
            heading.innerHTML = 'You have to go with me; You cannot say no';
        }
    });
});
