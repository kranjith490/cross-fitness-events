import React from 'react';
import {
  Card,
  CardMedia,
  Button,
  Grid,
  Container,
  Typography
} from '@mui/material';
import Marathon_2025 from '../../Assets/Events/Upcoming/Marathon_2025/Marathon_2025.jpg';

const upcomingEvents = [
  {
    banner: Marathon_2025,
    enabled: true,
    buttonText: 'Registration opening soon'
  }
];

const UpcomingEvents = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
      >
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {upcomingEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                transition: '0.3s',
                '&:hover': { boxShadow: event.enabled ? 8 : 3 }, // No hover effect if disabled
                opacity: event.enabled ? 1 : 0.6 // Light fade for disabled events
              }}
            >
              {/* Event Poster */}
              <CardMedia
                component="img"
                image={event.banner}
                alt="Event Poster"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />

              {/* Register Now Button */}
              <Button
                fullWidth
                variant="contained"
                disabled={!event.enabled}
                sx={{
                  mt: -1,
                  p: 2,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: event.enabled
                    ? 'linear-gradient(45deg, #ff4081, #ff79b0)'
                    : '#ccc',
                  color: event.enabled ? '#fff' : '#888',
                  transition: '0.3s',
                  '&:hover': event.enabled
                    ? {
                        background: 'linear-gradient(45deg, #ff79b0, #ff4081)',
                        transform: 'scale(1.05)'
                      }
                    : {}
                }}
              >
                {event?.buttonText ?? ''}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      {upcomingEvents.length === 0 && (
        <Typography
          variant="h6"
          color="textSecondary"
          textAlign="center"
          sx={{ width: '100%', mt: 3 }}
        >
          Get ready to hit the pavement - Events coming soon...
        </Typography>
      )}
    </Container>
  );
};

export default UpcomingEvents;
