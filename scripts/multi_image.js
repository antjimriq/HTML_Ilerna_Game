// Initial image index and array of image sources
var currentIndex = 0;
var imageSources = ['../images/story_images/Dessert_Start.PNG', '../images/story_images/Sweeper_Nolo_Phone.PNG', '../images/story_images/Sweeper_Sparky_Questions.PNG'];
var textContents = ['Vamos Nolo. Tenemos que buscar a Vert.', '¿Tezla, donde esta Vert?', 'Sparky, ¿Vert donde esta?, ¿tu estabas con el no?'];

function changeContent() {
    var image = document.getElementById('image');
    var text = document.getElementById('text');

    image.style.opacity = '0'; // Set opacity to 0 for a fade-out effect

    setTimeout(function () {
        // Change the image source
        currentIndex = (currentIndex + 1) % imageSources.length;
        image.src = imageSources[currentIndex];
        text.textContent = textContents[currentIndex];
        image.style.opacity = '1'; // Set opacity back to 1 for a fade-in effect
    }, 500); // Adjust the timeout value to match the transition duration
}