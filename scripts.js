// Function to show the selected content section and hide others
function showContent(section) {
  // Hide all content sections
  const sections = document.querySelectorAll(".content");
  sections.forEach((sec) => {
    sec.style.display = "none";
  });

  // Show the selected content section
  const selectedSection = document.getElementById(section);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

// Function to handle image upload and preview
function uploadImage(event) {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = function () {
    const dataURL = reader.result;
    const imagePreview = document.getElementById("image-preview");
    imagePreview.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
}

// Placeholder function for searching similar images
function searchSimilarImages() {
  alert("Searching for similar images...");
}

// Editor toolbar functions
function toggleBold() {
  document.execCommand("bold");
}

function toggleItalic() {
  document.execCommand("italic");
}

function toggleUnderline() {
  document.execCommand("underline");
}

function addBullets() {
  document.execCommand("insertUnorderedList");
}

function addCodeBlock() {
  const editor = document.getElementById("editor");
  const codeBlock = document.createElement("pre");
  codeBlock.contentEditable = true;
  codeBlock.style.background = "#f4f4f4";
  codeBlock.style.border = "1px solid #ddd";
  codeBlock.style.padding = "10px";
  codeBlock.style.marginTop = "10px";
  codeBlock.textContent = "Enter your code here...";
  editor.appendChild(codeBlock);
}

// Function to perform WHOIS check
function performWhoisCheck() {
  const domainInput = document.getElementById("domain-input").value;
  const resultContainer = document.getElementById("whois-result");
  resultContainer.textContent = `WHOIS information for ${domainInput}`;
}

// Event listeners for sidebar links to show content sections
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link
      .getAttribute("onclick")
      .match(/showContent\('(.+)'\)/)[1];
    showContent(sectionId);
  });
});

// Set default content to show
document.addEventListener("DOMContentLoaded", () => {
  showContent("home"); // Show home section by default
});
