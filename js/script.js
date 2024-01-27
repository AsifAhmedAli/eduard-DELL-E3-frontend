// Load Header Component
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementsByTagName("header")[0].innerHTML = data;
  });

// Load Footer Component
fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementsByTagName("footer")[0].innerHTML = data;
  });

// Load Reviews Section
fetch("components/reviews-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("reviews-section").innerHTML = data;
  });
