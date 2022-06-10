let counter = 0;

function btn() {
    console.log("click");
    counter++;
    if (counter == 5) {
        counter = 0;
    }
    let image = document.getElementById('image');
    let images = ['bild1.jpg', 'bild2.jpg', 'bild3.jpg', 'bild4.jpg', 'bild5.jpg',];

    image.src = images[counter];

}