import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

const EventGallery = () => {
  const { id = '' } = useParams();
  console.log('Pathname', id);
  const images = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: require(`../../Assets/Events/${id}/pic${i + 1}.jpg`) // Adjust path as needed
  }));
  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '30px' }}>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
            <Box
              component="img"
              src={image.src}
              alt={`Gallery Image ${image.id}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: 3
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventGallery;
