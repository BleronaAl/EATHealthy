function readMore(id, buttonID) {
    var partToHide = document.getElementById(id);
    var changeIcon = document.getElementById(buttonID);
  
    if (partToHide.style.display === "block") {
      partToHide.style.display = "none";
      changeIcon.innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
    } else {
      partToHide.style.display = "block";
      changeIcon.innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
    }
  }