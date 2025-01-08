
function openModal(title, content) {

    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modalText");
    

    modalText.innerHTML = `<strong>${title}</strong>`;
    

    modal.style.display = "block";
}


document.getElementById("closeBtn").onclick = function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var emailInput = document.getElementById('email').value;
    var errorMessage = document.getElementById('errorMessage');
    var thankYouMessage = document.getElementById('thankYouMessage');


    if (!emailInput.includes('@')) {
    
        errorMessage.style.display = 'block';
        thankYouMessage.style.display = 'none';
    } else {
   
        thankYouMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
});
