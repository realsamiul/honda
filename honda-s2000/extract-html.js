const fs = require('fs');
const path = require('path');

// Read the original HTML file
const htmlPath = path.join(__dirname, '..', 'New folder', '(index)');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract the body content (everything between <body> and </body>)
const bodyMatch = htmlContent.match(/<body[^>]*>(.*?)<\/body>/s);
if (bodyMatch) {
  const bodyContent = bodyMatch[1];
  
  // Split into sections for easier processing
  const sections = bodyContent.split(/(?=<div[^>]*class="[^"]*")/);
  
  console.log('Found', sections.length, 'sections');
  
  // Write each section to a separate file for analysis
  sections.forEach((section, index) => {
    if (section.trim()) {
      fs.writeFileSync(
        path.join(__dirname, `section-${index}.html`), 
        section.trim()
      );
    }
  });
  
  // Also write the complete body content
  fs.writeFileSync(
    path.join(__dirname, 'complete-body.html'),
    bodyContent
  );
  
  console.log('HTML extraction complete!');
} else {
  console.log('Could not find body content');
}
