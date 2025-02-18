import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const EventGallery = () => {
  const { id = '' } = useParams();
  const images = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: require(`../../Assets/Events/${id}/pic${i + 1}.jpg`) // Adjust path as needed
  }));

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openViewer = (index) => {
    setSelectedImageIndex(index);
    setZoomLevel(1);
  };

  const closeViewer = () => setSelectedImageIndex(null);

  const nextImage = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 1));

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage
  });

  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '30px' }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
            <Box
              component="img"
              src={image.src}
              alt={`Gallery Image ${image.id}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: 3,
                cursor: 'pointer'
              }}
              onClick={() => openViewer(index)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        fullScreen
        open={selectedImageIndex !== null}
        onClose={closeViewer}
      >
        {selectedImageIndex !== null && (
          <Box
            {...handlers}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              background: 'black',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <IconButton
              onClick={closeViewer}
              sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImageIndex > 0 && (
              <IconButton
                onClick={prevImage}
                sx={{
                  position: 'absolute',
                  left: 20,
                  zIndex: '100',
                  color: 'white'
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            )}
            <Box
              component="img"
              src={images[selectedImageIndex].src}
              alt={`Gallery Image ${selectedImageIndex + 1}`}
              sx={{
                maxWidth: '90%',
                maxHeight: '80vh',
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.2s ease-in-out'
              }}
            />
            {selectedImageIndex < images.length - 1 && (
              <IconButton
                onClick={nextImage}
                sx={{ position: 'absolute', right: 20, color: 'white' }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            )}
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                color: 'white',
                background: 'rgba(0, 0, 0, 0.6)',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            >
              {selectedImageIndex + 1} / {images.length}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: 70,
                display: 'flex',
                gap: 1
              }}
            >
              <IconButton onClick={handleZoomIn} sx={{ color: 'white' }}>
                <ZoomInIcon />
              </IconButton>
              <IconButton onClick={handleZoomOut} sx={{ color: 'white' }}>
                <ZoomOutIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default EventGallery;
