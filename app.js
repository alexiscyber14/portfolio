const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const filePath = './testimonial.json';

app.use(express.json());

// Check if the JSON file exists, and create it if missing
if (!fs.existsSync(filePath)) {
  const initialData = { users: [] };
  fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2), 'utf-8');
  console.log('Testimonials JSON file created.');
}

app.post('/submit-testimonial', (req, res) => {
  const { name, testimonialText } = req.body;

  // Read existing testimonials from the JSON file
  let existingData = [];
  if (fs.existsSync(filePath)) {
    existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  // Add the new testimonial to the existing testimonials
  existingData.push({ name, testimonialText });

  // Write the updated testimonials back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

  res.json({ message: 'Testimonial data written successfully' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
