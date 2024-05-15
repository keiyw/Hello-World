document.addEventListener("DOMContentLoaded", function() {
    var messageElement = document.getElementById("message");
    var languageButton = document.getElementById("language-button");
    var languages = ["English", "Spanish", "French", "German"];
    var currentLanguageIndex = 0;
  
    // Define os cumprimentos em diferentes idiomas
    var greetings = {
      English: "Hello, World!",
      Spanish: "¡Hola, Mundo!",
      French: "Bonjour, le Monde!",
      German: "Hallo, Welt!"
    };
  
    // Função para alternar entre os idiomas
    function toggleLanguage() {
      currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
      var currentLanguage = languages[currentLanguageIndex];
      messageElement.textContent = greetings[currentLanguage];
      languageButton.textContent = "Toggle Language (" + currentLanguage + ")";
    }
  
    // Adiciona o evento de clique ao botão
    languageButton.addEventListener("click", toggleLanguage);
  });
  