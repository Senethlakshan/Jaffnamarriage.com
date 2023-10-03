import React, { useState } from 'react';

function PhotoUploadForm() {
  const [photos, setPhotos] = useState(Array(4).fill(null));

  const handleFileChange = (event, index) => {
    const newPhotos = [...photos];
    const file = event.target.files[0];

    if (file) {
      // You can perform additional validation here, e.g., file size, type, etc.
      newPhotos[index] = file;
      setPhotos(newPhotos);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the photos to your server or perform any other desired action
    console.log(photos);
  };

  return (
    <div>
      <h2>Upload Photos</h2>
      <form onSubmit={handleSubmit}>
        {photos.map((photo, index) => (
          <div key={index}>
            <label htmlFor={`photo-${index}`}>Photo {index + 1}:</label>
            <input
              type="file"
              id={`photo-${index}`}
              accept="image/*"
              onChange={(e) => handleFileChange(e, index)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhotoUploadForm;
