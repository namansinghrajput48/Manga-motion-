function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const output = document.getElementById('outputImage');
  const status = document.getElementById('status');
  if (!prompt.trim()) {
    status.textContent = 'Please enter a description first!';
    return;
  }
  status.textContent = 'Generating your manga scene...';
  setTimeout(() => {
    output.src = 'https://placehold.co/600x400/00aaff/ffffff?text=Manga+Scene';
    status.textContent = `Result for: "${prompt}"`;
  }, 2000);
}
