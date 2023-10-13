import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import AvatarEditor from 'react-avatar-editor';
import { FaCamera, FaEdit } from 'react-icons/fa';
import axiosInstance from '../../../api';
import { FaPlus, FaMinus } from 'react-icons/fa';
import LinearProgress from '@mui/material/LinearProgress';
const CustomDialog = ({ open, onClose }) => {
    const [originalImage, setOriginalImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [editor, setEditor] = useState(null);
    const [isCropDialogOpen, setIsCropDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [scale, setScale] = useState(1.0); // Initial scale value

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleEditClick();
      setOriginalImage(URL.createObjectURL(file));
    }
  };
  const handleCloseDialog = () => {
    const shouldClose = onClose(); // Call the onCancel prop and get the return value
    window.location.href = '/';
  }

  const handleEditClick = () => {
    setIsCropDialogOpen(true);
    const imageToEdit = croppedImage || originalImage;

    if (editor) {
      editor.load(imageToEdit);
    }
  };

  const handleCloseCropDialog = () => {
    setIsCropDialogOpen(false);
  };

  const handleSaveCrop = async () => {
    if (editor) {
      setLoading(true);
  
      const croppedImageDataUrl = editor.getImageScaledToCanvas().toDataURL();
   
  
      const image = new Image();
      image.src = croppedImageDataUrl;
  
      await new Promise((resolve) => {
        image.onload = resolve;
      });
  
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, image.width, image.height);
  
      canvas.toBlob(async (blob) => {
        if (blob) {
          if (blob.size > 2097152) {
            alert('Image size exceeds the maximum limit of 2MB.');
            setLoading(false);
            return;
          }
  
          const formData = new FormData();
          formData.append('profile_pic', blob, 'profile.jpg');
  
          try {
            const response = await axiosInstance.post('/uploadUserProfilePic', formData);
  
            if (response.status === 200) {
                setTimeout(() => {
                    setCroppedImage(croppedImageDataUrl);
                    setIsCropDialogOpen(false);
                    setLoading(false);
                  }, 3000);
            } else {
              alert('Image upload failed');
            }
          } catch (error) {
            console.error('Error uploading image:', error);
            alert('An error occurred while uploading the image');
          } finally {
            // Set loading to false after a 2-second delay
            setTimeout(() => {
              setIsCropDialogOpen(false);
              setLoading(false);
            }, 2000);
          }
        }
      }, 'image/jpeg');
    }
  };
  const handleZoomIn = () => {
    if (editor) {
      const newScale = scale + 0.1; // Increase scale by 0.1
      if (newScale <= 3.0) {
        setScale(newScale); // Update the scale state
      }
    }
  };
  
  const handleZoomOut = () => {
    if (editor) {
      const newScale = scale - 0.1; // Decrease scale by 0.1
      if (newScale >= 0.1) {
        setScale(newScale); // Update the scale state
      }
    }
  };

  
  useEffect(() => {
    const handleBackdropClick = (event) => {
      // Prevent the dialog from closing when clicking the backdrop
      event.stopPropagation();
    };

    const backdropElement = document.querySelector('.MuiBackdrop-root');

    if (backdropElement) {
      backdropElement.addEventListener('click', handleBackdropClick);
    }

    return () => {
      // Remove the event listener when the component unmounts
      if (backdropElement) {
        backdropElement.removeEventListener('click', handleBackdropClick);
      }
    };
  }, []);
  return (
    <Dialog open={open}  aria-labelledby="custom-dialog-title" BackdropClick={false}  disableBackdropClick={true}>
      <DialogTitle><h2 className="custom-heading">Upload Profile Picture</h2></DialogTitle>
      
      <DialogContent>
        <div className="profile-pic-wrapper">
          <div className="pic-holder">
            <img
              id="profilePic"
              className="pic"
              src={croppedImage || originalImage || 'https://source.unsplash.com/random/150x150?person'}
              alt="Profile Pic"
            />

            <input
              className="uploadProfileInput"
              type="file"
              name="profile_pic"
              id="newProfilePhoto"
              accept="image/*"
              style={{ opacity: 0 }}
              onChange={handleFileChange}
            />
            <label htmlFor="newProfilePhoto" className="upload-file-block" style={{ opacity: originalImage || croppedImage ? 0 : 1 }}>
              <div className="text-center">
                <div className="mb-2-text">
                  <FaCamera></FaCamera>
                </div>
                <div className="text-uppercase">
                  Update <br /> Profile Photo
                </div>
              </div>
            </label>

            <Dialog
              open={isCropDialogOpen}
              onClose={handleCloseCropDialog}
              fullWidth
              maxWidth="sm"
            >
              {loading && <LinearProgress />}
              <DialogTitle sx={{ backgroundColor: 'black' }}>
                <h2 className="custom-heading-crop">Crop Image</h2>
              </DialogTitle>
              <DialogContent sx={{ backgroundColor: 'black' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor:'white'  }}>
                <AvatarEditor
  ref={(ref) => setEditor(ref)}
  image={originalImage}
  width={250}
  height={250}
  border={50}
  color={[0, 0, 0, 0.6]} // Set the color to black with 0.9 opacity
  scale={scale}
  rotate={0}
  borderRadius={250}
/>

                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <button onClick={handleZoomIn} className="zoom-button">
    <FaPlus className="zoom-icon" />
  </button>
  <button onClick={handleZoomOut} className="zoom-button">
    <FaMinus className="zoom-icon" />
  </button>
</div>


              </DialogContent>

              <DialogActions sx={{ backgroundColor: 'black' }}>
                <Button onClick={handleSaveCrop} color="primary">
                 {loading ? 'Saving...' : 'Save'}
                </Button>
                <Button onClick={handleCloseCropDialog} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className='editIcon'>
            {originalImage && (
              <p onClick={handleEditClick} variant="contained">
                <FaEdit></FaEdit>
              </p>
            )}
          </div>
          <hr />
          <p className="text-info text-center small">
            Note: Please attach a good quality photo. Maximum image size that can be uploaded is 2mb.
          </p>
        </div>
      </DialogContent>
      <DialogActions>
      <Button autoFocus onClick={handleCloseDialog}>
          Done
        </Button>
        <Button autoFocus onClick={handleCloseDialog}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;


