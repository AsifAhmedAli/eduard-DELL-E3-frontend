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

// Load Why us Section
fetch("components/why-us-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("whyus").innerHTML = data;
  });

// Load What to Create Section
fetch("components/what-create-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("whatcreate").innerHTML = data;
  });

// Load Need some Advice Section
fetch("components/need-advice-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("needadvice").innerHTML = data;
  });

// Load FAQs Section
fetch("components/faqs-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("faqs-section").innerHTML = data;
  });

// Load Discount Section
fetch("components/discount-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("discount-section").innerHTML = data;
  });
