function changeLanguage() {
    var selectedLanguage = document.getElementById("language-select").value;
    var translation = language[selectedLanguage];
    var elements = document.getElementsByClassName("tr");
    
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].dataset.translationKey;
      elements[i].textContent = translation[key];
    }
  }