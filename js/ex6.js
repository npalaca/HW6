const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const contentDiv = document.getElementById("content");

// Create the definition list
const dl = document.createElement("dl");

// Loop through each word object and create a definition term and definition description for each one
words.forEach(word => {
  // Create a definition term
  const dt = document.createElement("dt");
  dt.innerHTML = `<strong>${word.term}</strong>`;

  // Create a definition description
  const dd = document.createElement("dd");
  dd.innerText = word.definition;

  // Append the definition term and description to the definition list
  dl.appendChild(dt);
  dl.appendChild(dd);
});

// Append the definition list to the content div
contentDiv.appendChild(dl);
