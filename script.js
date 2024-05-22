document.addEventListener('DOMContentLoaded', function() {
    showContent('A');
  });
  
  function showContent(content) {
    var contentA = document.getElementById("contentA");
    var contentB = document.getElementById("contentB");
  
    contentA.style.display = "none";
    contentB.style.display = "none";
  

    if (content === "A") {
      contentA.style.display = "block";
    } else if (content === "B") {
      contentB.style.display = "block";
    }
  }