let currentPage = 1;
const form = document.getElementById("quizForm");

function showPage(pageNumber) {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    if (i + 1 === pageNumber) {
      pages[i].style.display = "block";
    } else {
      pages[i].style.display = "none";
    }
  }
  currentPage = pageNumber;
}

function nextPage() {
  showPage(currentPage + 1);
}

function prevPage() {
  showPage(currentPage - 1);
}

function submitForm() {
  // Handle form submission logic here
  console.log("Form submitted!");
  // You can uncomment the line below to reset the form after submission
  // form.reset();
}

document.addEventListener("DOMContentLoaded", function() {
  showPage(currentPage);
});
