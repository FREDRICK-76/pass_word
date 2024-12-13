// to get and store element from DOM or html element
const Emailinput =  document.getElementById('email');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');

// Function to check both email and password
function checkCredentials(e) {
  e.preventDefault()
 const  correctEmail = "fredrickame75@gmail.com";
  const correctPassword = "123"; // Example correct password

  if (Emailinput.value === "" || passwordInput.value === "") {
    submitButton.textContent = "Enter Credentials😊";
  } else if(Emailinput.value !==  correctEmail || passwordInput.value !== correctPassword){
    submitButton.textContent = "No Cheating 🧐";
  }else if (Emailinput.value !==  correctEmail) {
    submitButton.textContent = "Invalid email🧐";
  } else if (passwordInput.value !== correctPassword) {
    submitButton.textContent = "No Cheating 🧐";
  } else {
    submitButton.textContent = "submitted!";
    submitButton.style.transform = "none"; // Reset button position if correct
    document.removeEventListener('mousemove', moveButtonListener);
   }
 }

//function to move the button
let moveButtonListener;  // is undefined for now   

function moveButton() {
  const distance = 200; // Increased distance to move the button
  const buttonRect = submitButton.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  moveButtonListener = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move button only if mouse is within 300px of the button's center position. 
    if (Math.abs(mouseX - buttonCenterX) < 300 && Math.abs(mouseY - buttonCenterY) < 300) {
      const offsetX = mouseX < buttonCenterX ? distance : -distance;
      const offsetY = mouseY < buttonCenterY ? distance : -distance;


      // Calculate the angle of rotation based on the mouse position relative to the button's center position.
      let angle = Math.atan2(offsetY, offsetX) * (45 / Math.PI);
      submitButton.style.transform = `rotate(${angle}deg) translate(${offsetX}px, ${offsetY}px)`;
      
    } 
  };

  // Start listening for mousemove events to move the button.
  document.addEventListener('mousemove', moveButtonListener);
}

//events listeners for the function to be called and it begin to work
submitButton.addEventListener('click', checkCredentials);
submitButton.addEventListener('onhover', moveButton());
