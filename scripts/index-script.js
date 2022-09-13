const modeButton = document.getElementById('btn');
const svg1 = document.getElementById("headerSVG1");
const svg2 = document.getElementById('headerSVG2');
/*const h1 = document.getElementsByTagName('h1');*/

const gitlogow = document.getElementById("githublogowhite");
const gitlogob = document.getElementById("githublogoblack");

const myback = document.getElementById('mybackground');
const wiplink = document.getElementById('wiplink');

var elements = document.getElementsByTagName('*');

modeButton.addEventListener('click', function onClick(event){
     if(svg1.style.visibility === 'visible')
     {
         svg1.style.visibility = 'hidden';
         svg2.style.visibility = 'visible';

         gitlogow.style.visibility = 'hidden';
         gitlogob.style.visibility = 'visible';

         for(var i=0; i < elements.length; i++)
         {
             elements[i].style.color = '#001220';
             elements[i].style.backgroundColor = '#EAEBED';
         }

         modeButton.style.border = '1px solid #001220';
         modeButton.parentElement.style.background = '0,0,0,0';

         myback.style.borderLeft = '1px solid #001220';

         wiplink.style.background = '0,0,0,0';
     }
     else if(svg1.style.visibility === 'hidden')
     {
         svg2.style.visibility = 'hidden';
         svg1.style.visibility = 'visible';

         gitlogow.style.visibility = 'visible';
         gitlogob.style.visibility = 'hidden';

         for(var i=0; i < elements.length; i++)
         {
             elements[i].style.color = '#EAEBED';
             elements[i].style.backgroundColor = '#001220';
         }

         modeButton.style.border = '1px solid #EAEBED';
         modeButton.parentElement.style.background = '0,0,0,0';

         myback.style.borderLeft = '1px solid #EAEBED';

         wiplink.style.background = '0,0,0,0';
     }
});

