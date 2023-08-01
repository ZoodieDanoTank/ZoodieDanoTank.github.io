function showImage(imageNumber) {
    var imageViewer = document.getElementById("imageViewer");
    var largeImage = document.getElementById("largeImage");
    var imageDescription = document.getElementById("imageDescription");

    
    switch (imageNumber) {
        case 1:
            largeImage.src = "large6.jpg";
            imageDescription.textContent = "Make money work for you.";
            break;
        case 2:
            largeImage.src = "large62.jpg";
            imageDescription.textContent = "Enjoy the work more than the goal.";
            break;
        case 3:
            largeImage.src = "large37.jpg";
            imageDescription.textContent = "Manifest every day.";
            break;
        case 4:
            largeImage.src = "redblue.jpg";
            imageDescription.textContent = "red.";
            break;
        default:
            break;
    }

    imageViewer.style.display = "block";
}

function closeImage() {
    var imageViewer = document.getElementById("imageViewer");
    imageViewer.style.display = "none";
}
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;


    if (name === "" || email === "" || phone === "" || country === "" || message === "") {
        alert("Please fill in all the mandatory fields.");
        return false;
    }

 

    return true;
}

