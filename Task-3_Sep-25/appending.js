/*  2.2 Write a code snippet that creates a new paragraph element and appends it to an 
    existing div element on the page. */

// Create a new paragraph element
const newParagraph = document.createElement("p");

// Create some text content for the paragraph
const textNode = document.createTextNode("This is a new paragraph!");

// Append the text content to the paragraph element
newParagraph.appendChild(textNode);

// Find the existing div element by its ID (assuming it has an ID of "myDiv")
const existingDiv = document.getElementById("myDiv");

// Append the new paragraph to the existing div
existingDiv.appendChild(newParagraph);
