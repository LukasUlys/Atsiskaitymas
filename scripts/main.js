function openIntro() {
    // Sukurkite naują HTML langą
    const newWindow = window.open('', '', 'width=800,height=600');
  
    // Pridėkite vaizdo įrašą
    const video = document.createElement('video');
    video.src = 'path/to/video.mp4';
    newWindow.document.body.appendChild(video);
  
    // Pridėkite tekstą
    const text = document.createElement('p');
    text.innerText = 'Tekstas apie mus...';
    newWindow.document.body.appendChild(text);
  
    // Pridėkite kryžiuką, kurio paspaudus bus uždarytas langas
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.onclick = function() {
      newWindow.close();
    };
    newWindow.document.body.appendChild(closeButton);
  }