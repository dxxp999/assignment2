// Selecting the elements from the DOM
const editor = document.querySelector('.editor');
const preview = document.querySelector('.preview');
const resizer = document.getElementById('resizer');

// Function that executes when the resizer is clicked and held
function initDrag(e) {
  // Get the initial position of the mouse
  let startX = e.clientX;
  let startWidthEditor = editor.offsetWidth;
  let startWidthPreview = preview.offsetWidth;

  // Function that adjusts the width of editor and preview
  function doDrag(e) {
    // Calculate the difference in the mouse position
    let change = startX - e.clientX;

    // Adjust the width of the editor and preview elements
    editor.style.width = (startWidthEditor - change) + 'px';
    preview.style.width = (startWidthPreview + change) + 'px';
  }

  // Function to stop the dragging
  function stopDrag() {
    // Remove the event listeners when the mouse is released
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  }

  // Add the event listeners for mousemove and mouseup
  document.documentElement.addEventListener('mousemove', doDrag, false);
  document.documentElement.addEventListener('mouseup', stopDrag, false);
}

// Add mousedown event listener to the resizer
resizer.addEventListener('mousedown', initDrag, false);
