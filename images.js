var images = ["images/resim1.jpg", "images/resim2.jpg"];
  var currentImageIndex = 0;

  // Resmi güncelleyen fonksiyon
  function updateImage() {
    var slideshowImage = document.getElementById("slideshow-image");
    slideshowImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length; // İndisi güncelle
  }

  // Her 5 saniyede bir resmi güncelleyen setInterval fonksiyonu
  setInterval(updateImage, 5000);