import './style.css'
 const input = document.getElementById('fileInput');
  const list = document.getElementById('fileList');
  let uploadedFiles = [];

  input.addEventListener('change', () => {
    const newFiles = [...input.files];

    // Merge new files with existing ones, avoid duplicates
    newFiles.forEach(file => {
      if (!uploadedFiles.some(f => f.name === file.name && f.size === file.size)) {
        uploadedFiles.push(file);
      }
    });

    // Sort alphabetically
    uploadedFiles.sort((a, b) => a.name.localeCompare(b.name));

    // Render list
    list.innerHTML = '';
    uploadedFiles.forEach(file => {
      const li = document.createElement('li');
      li.textContent = file.name;
      list.appendChild(li);
    });

    // Clear input so same file can be re-selected if needed
    input.value = '';
  });