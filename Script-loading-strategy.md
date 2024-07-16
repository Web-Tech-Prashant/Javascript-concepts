1. Ways to add JS to web pages.
sol: we should always use <script> tag in html after all elements get rendered. So we should always try to write at the bottom of body tag.
 
 Note: If we want to write on top or any position inside body tag then we have to use one dom JS method called "DOMContentLoaded"

  <!DOCTYPE>
  <html>
  <head>
  <!-- External JS -->

 <!-- If we want to load JS inside head tag then we have to pass defer attribute which will
        load JS after all content gets rendered in the browser.
        defer->will executer .js file or script file synchronously  
-->
   
   
  <script src=".js(file)" defer>
    </script>

   <!-- using async to load scripting file without checking order means it will execute asynchronusly
   -->
   <script async src=".js(file)">
    </script>
  </head>
  <body>
  <script>
    <!-- This line will call JS after your html and css rendering -->
    document.addEventListener("DOMContentLoaded",function(){
        <!-- write your logic -->
    })
    </script>
  </body>
  </html>