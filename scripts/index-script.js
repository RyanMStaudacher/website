const modeButton = document.getElementById('btn');
const svg1 = document.getElementById("headerSVG1");
const svg2 = document.getElementById('headerSVG2');
const h1 = document.getElementsByTagName('h1');

modeButton.addEventListener('click', function onClick(event){
     if(svg1.style.visibility === 'visible')
     {
          svg1.style.visibility = 'hidden';
          svg2.style.visibility = 'visible';
          document.body.style.color = '#001220'
          document.body.style.backgroundColor = '#EAEBED';
     }
     else if(svg1.style.visibility === 'hidden')
     {
          svg2.style.visibility = 'hidden';
          svg1.style.visibility = 'visible';
          document.body.style.color = '#EAEBED'
          document.body.style.backgroundColor = '#001220';
     }
});

