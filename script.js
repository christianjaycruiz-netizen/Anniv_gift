const unlockBtn = document.getElementById('unlock-btn');
const passcodeInputs = document.querySelectorAll('.code');
const music = document.getElementById('bg-music');
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const letterText = `Dear Baby Jannah, wow dear haha, Happy anniversary po hehe una po is thank you for being in my life. hehe panis kapo siguro kasi nag ingles me may grammar checker na kasi ako dito hehe. gusto kopo sabihin sayo na super duper kitang mahal and happy po ako kasi dumating kapo sa buhay ko palagi mona po ako napapasaya and sinasabayan sa mga gusto kopo kahit na marami akong pag kukulang sayo I love you so much and I hope na kahit anong mangyari mag s-stay po tayo sa isat-isa and magiging happy po sa isat-isa. palagi po akong nandito para sayo kahit po sa mga times walang wala kapo o may probema kapong malaki palagi po kitang sasamahan at hinding hindi po kita iiwanan kahit na anong mangyari and I will always support you in everything that you do basta po tatandaan mopo na palagi me nasa likoran mo na puwede mopong matakbuhan anytime. Happy happy anniversary po mahal ko, I love you so much, hehe na amazed po ako kasi 3 years napo tayo at kinaya natin hehe kahit na maraming away magkasama parin galing natin and I hope na marami pa tayong anniversary na i-celebrate together hehe. maiksi lang po ito kasi gusto ko po na kapag binasa mo ito hindi ka maiyak hehe jk oa hehe yun lamang po Mahal na maha kita I love you  Happy anniversary po ulit.... `;

let index = 0; 

function typeWriter() {
    const typingElement = document.getElementById('typing-text');
    const contentArea = document.querySelector('.content'); // Select the scrolling container
    const nextBtn = document.getElementById('view-photos');

    if (index < letterText.length) {
        typingElement.innerHTML += letterText.charAt(index);
        
        // --- AUTO-SCROLL FIX ---
        contentArea.scrollTop = contentArea.scrollHeight; 
        
        index++;
        setTimeout(typeWriter, 40);
    } else {
        nextBtn.style.opacity = "1";
    }
}


function showAlert(text) {
    alertMessage.innerText = text;
    customAlert.classList.remove('hidden');
}

function closeAlert() {
    customAlert.classList.add('hidden');
}

// Correct Passcode
const CORRECT_CODE = "0517"; 

unlockBtn.addEventListener('click', () => {
    let inputCode = "";
    passcodeInputs.forEach(input => inputCode += input.value);

    if (inputCode === CORRECT_CODE) {
        music.play();
        document.getElementById('lockscreen').classList.remove('active');
        document.getElementById('letter-screen').classList.add('active');
        
        // START THE TYPING HERE
        setTimeout(typeWriter, 1000); // Wait 1 second after screen fades in
    } else {
        showAlert("WRONG CODE!! HINT: Date To Day");
    }
});
document.getElementById('view-photos').addEventListener('click', () => {
    document.getElementById('letter-screen').classList.remove('active');
    document.getElementById('gallery-screen').classList.add('active');
});


function backToLetter() {
    // Hide the Gallery
    document.getElementById('gallery-screen').classList.remove('active');
    
    // Show the Letter
    document.getElementById('letter-screen').classList.add('active');
}

// --- JAVASCRIPT FOR LIGHTBOX (Add to your script.js) ---

// 1. Select all photos and videos inside the grid
const allMedia = document.querySelectorAll('.polaroid img, .polaroid video');
const totalPhotosNum = document.getElementById('total-photos-num');
const currentPhotoNum = document.getElementById('current-photo-num');
const lightboxImg = document.getElementById('lightbox-img');
const lightbox = document.getElementById('lightbox');

// 2. Set the total count automatically
if (totalPhotosNum) {
    totalPhotosNum.innerText = allMedia.length;
}

// 3. Loop through each media item and add the "click" function
allMedia.forEach((item, index) => {
    item.style.cursor = "pointer"; // Makes it look clickable

    item.onclick = function() {
        // If it's a photo, show it in the zoom
        if (item.tagName === 'IMG') {
            lightboxImg.src = item.src;
            currentPhotoNum.innerText = index + 1; // Shows 1, 2, 3...
            lightbox.classList.remove('hidden');
        } 
        // If it's a video, you could play it or just zoom the thumbnail
        else {
            console.log("This is a video with ID: " + item.id);
            // You can add video zoom logic here if needed!
        }
    };
});

// Function to close the zoom
function closeLightbox() {
    lightbox.classList.add('hidden');
}