const modeButton = document.getElementById('btn');
const svg1 = document.getElementById("headerSVG1");
const svg2 = document.getElementById('headerSVG2');
/*const h1 = document.getElementsByTagName('h1');*/

var elements = document.getElementsByTagName('*');

modeButton.addEventListener('click', function onClick(event){
     if(svg1.style.visibility === 'visible')
     {
          svg1.style.visibility = 'hidden';
          svg2.style.visibility = 'visible';

          for(var i=0; i < elements.length; i++)
          {
               elements[i].style.color = '#001220';
               elements[i].style.backgroundColor = '#EAEBED';
          }
     }
     else if(svg1.style.visibility === 'hidden')
     {
          svg2.style.visibility = 'hidden';
          svg1.style.visibility = 'visible';

          for(var i=0; i < elements.length; i++)
          {
               elements[i].style.color = '#EAEBED';
               elements[i].style.backgroundColor = '#001220';
          }
     }
});

