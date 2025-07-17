document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');// we use querySelectorAll to select all elements with the class 'box' because getElementbyid only selects one element by its ID, and we need to handle multiple boxes.
  // Each box contains a button and a soundbar with animated bars.

  boxes.forEach(box => {
    const button = box.querySelector('.btn');
    const soundbar = box.querySelector('.soundbar');
    const bars = soundbar.querySelectorAll('span');

    button.addEventListener('click', () => {
      const key = button.textContent.trim().toUpperCase();// Get the text content of the button, trim whitespace, and convert to uppercase
      let audio;

      // Load audio based on key
      if (key === 'A') {
        audio = new Audio('guitar_sound.wav');
      } else if (key === 'R') {
        audio = new Audio('srum_sound.wav');
      } else if (key === 'Y') {
        audio = new Audio('flute_sound.wav');
      } else {
        audio = new Audio('violon_sound.wav');
      }

      audio.play();

      
      soundbar.style.visibility = 'visible';
      bars.forEach(bar => {
        bar.style.animationPlayState = 'running';
      });

    
      audio.addEventListener('ended', () => {
        bars.forEach(bar => {
          bar.style.animationPlayState = 'paused';
        });
        soundbar.style.visibility = 'hidden';
      });
    });
  });
});



    // This code waits for the DOM to be fully loaded before running the script.
    // It selects all buttons with the class 'btn' and adds a click event listener to each button.
    // When a button is clicked, it checks the text inside the button to determine which sound to play.
    // Depending on the button clicked, it plays the corresponding sound file.