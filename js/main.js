var color = 0;
   function colorback() {
    if (color) {
      document.getElementById("back-col").style.background = "#fff";
      color = 0;
    } else {
      document.getElementById("back-col").style.background = "#000";
      color = 1;
    }
   };
