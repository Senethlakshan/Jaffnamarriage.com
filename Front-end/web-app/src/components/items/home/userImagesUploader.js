import React, { useState } from 'react';
import '../../../App.css'; // Import the external CSS file

const UploadImages = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const maxSize = 2 * 1024 * 1024; // 2MB
  const maxImages = 5;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Filter out files that exceed the size limit
    const filteredFiles = files.filter((file) => file.size <= maxSize);

    // Check if adding these files exceeds the maximum image limit
    if (selectedFiles.length + filteredFiles.length > maxImages) {
      alert('You can upload a maximum of 5 images.');
      return;
    }

    // Update the selectedFiles state with valid files
    setSelectedFiles([...selectedFiles, ...filteredFiles]);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    // Filter out files that exceed the size limit
    const filteredFiles = files.filter((file) => file.size <= maxSize);

    // Check if adding these files exceeds the maximum image limit
    if (selectedFiles.length + filteredFiles.length > maxImages) {
      alert('You can upload a maximum of 5 images.');
      return;
    }

    // Update the selectedFiles state with valid files
    setSelectedFiles([...selectedFiles, ...filteredFiles]);
  };

  return (
    <div
      className="upload__box"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="upload__header">
        <h2 className="custom-heading">Please Upload Profile Image</h2>
      </div>

      <div className="Neon Neon-theme-dragdropbox">
        <label
          className="upload__btn"
          style={{
            zIndex: 999,
            opacity: 0,
            width: '320px',
            height: '200px',
            position: 'absolute',
            right: '0',
            left: '0',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <p>Choose Images</p>
          <input
            type="file"
            multiple
            data-max_length="20"
            className="upload__inputfile"
            onChange={handleFileChange}
          />
        </label>
        <div className="upload__img-wrap">
          {selectedFiles.map((file, index) => (
            <div key={index} className="upload__img-box">
              <img
                src={URL.createObjectURL(file)}
                alt={`Image ${index + 1}`}
              />
              <div
                className="upload__img-close"
                onClick={() => handleRemoveImage(index)}
              >
                &#x2716;
              </div>
            </div>
          ))}
        </div>
        <div className="Neon-input-dragDrop">
          <div className="Neon-input-inner">
            <div className="Neon-input-icon">
              <i className="fa fa-file-image-o"></i>
            </div>
            <div className="Neon-input-text">
              <h3>Drag&Drop files here</h3>
              <span style={{ display: 'inline-block', margin: '15px 0' }}>
                or
              </span>
            </div>
            <a className="Neon-input-choose-btn blue">Browse Files</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImages;
