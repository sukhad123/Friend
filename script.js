document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.getElementById("image");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
    const heading = document.querySelector("h1");
    let x = 0;

    // Ensure No button is positioned absolutely
    noButton.style.position = "absolute";

    // Function to set a random position
    function setRandomPosition() {
        const randomLeft = Math.random() * (window.innerWidth - noButton.clientWidth);
        const randomTop = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.left = `${randomLeft}px`;
        noButton.style.top = `${randomTop}px`;
    }

    // Set initial random position for No button
    setRandomPosition();

    // Yes button click event
    yesButton.onclick = () => {
        imageElement.src = 'https://www.creativefabrica.com/wp-content/uploads/2022/09/18/I-LOVE-YOU-VECTOR-DESIGN-Graphics-38781369-1.jpg';
        heading.innerHTML = 'I know You love me! ❤️🥰';
        document.querySelector("#button").innerHTML = '';
    };

    // No button hover event
    noButton.addEventListener("onclick", () => {
        imageElement.src = 'https://cdn-ak.f.st-hatena.com/images/fotolife/n/nativecamp_official/20220221/20220221122300.png';
        
        setRandomPosition(); // Move No button on hover
        
        x++;
        if (x == 1) {
            heading.innerHTML = 'Think again! 🤨👉👈';
        }
        if (x == 2) {
            heading.innerHTML = 'Ma pani Nepali ho! 🇳🇵🥺';
        }
        if (x == 3) {
            heading.innerHTML = 'Feri socha hai ramro sanga 😏💞';
        }
        if (x == 4) {
            heading.innerHTML = 'Paxi regret tw holani feri 😭💔';
        }
        if (x >= 5) {
            heading.innerHTML = 'Anga NO click garnai mildaina 🚫😤💘';
        }
    });
});
