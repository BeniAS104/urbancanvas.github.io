document.addEventListener("DOMContentLoaded", function () {
    // load all the elements
    const zajebmiButton = document.querySelector('.zajebmi');
    const barfullDiv = document.getElementById('barfull');
    const textbarDiv = document.querySelector('.textbar');
    const redirectButton = document.querySelector('button');

  
    // add click event listener to the zajebmi button
    zajebmiButton.addEventListener('click', function () {
      // toggle the visibility of barfull and textbar
      if (barfullDiv.style.display === 'none') {
        barfullDiv.style.display = 'block';
        textbarDiv.style.display = 'block';
  
        // set a timeout to hide show a NEW message after 5s
       
        setTimeout(function () {
          textbarDiv.innerHTML = 'Process complete! Click the button underneath.';
          redirectButton.style.display = 'block';
          assignRandomURL();
        }, 5000);

      } else {
        barfullDiv.style.display = 'none';
        textbarDiv.style.display = 'none';
      }
    });
    //randomly assign a page that it will forward to 
    function assignRandomURL() {
      const randomIndex = Math.floor(Math.random() * 3); 
      const urls = ['../Art1/art.html', '../Art1/art.html','../Art1/art.html'];
      redirectButton.setAttribute('onclick', `window.location.href='${urls[randomIndex]}'`); }
  });
  