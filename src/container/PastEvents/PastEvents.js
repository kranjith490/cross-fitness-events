import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import eventPic12 from '../../Assets/Events/BEATCyclothon/pic12.jpg';

const events = [
  {
    id: 1,
    title: 'BEAT Cyclothon',
    date: 'January 2019',
    image: eventPic12,
    eventName: 'BEATCyclothon'
  }
];

/* const styles = {
  container: {
    padding: '20px 0',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    marginTop: '50px'
  },
  header: { marginBottom: '30px', fontSize: '2rem', fontWeight: 'bold' },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: '#000',
    cursor: 'pointer'
  },
  image: { width: '400px', height: '400px', borderRadius: '10px' },
  title: { fontSize: '1.2rem', fontWeight: 'bold', marginTop: '10px' },
  date: { fontSize: '0.9rem', color: '#555' }
}; */

const styles = {
  container: {
    padding: '20px 0',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  header: { marginBottom: '30px', fontSize: '2rem', fontWeight: 'bold' },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    position: 'relative',
    cursor: 'pointer'
  },
  imageContainer: {
    width: '100%',
    height: '350px', // Fixed height for consistency
    overflow: 'hidden',
    borderRadius: '10px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' // Ensure full coverage
  },
  textOverlay: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0'
  },
  date: {
    fontSize: '1rem',
    margin: '0'
  }
};

const PastEvents = () => {
  const navigate = useNavigate();

  const handleNavigate = (eventName) => {
    navigate(`/events/${eventName}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Gallery</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false} /* 
        centerMode={events.length > 0 ? true : false}
        centerSlidePercentage={60}
        dynamicHeight={false} */
      >
        {events.map((event) => (
          <a
            key={event.id}
            style={styles.card}
            onClick={() => handleNavigate(event?.eventName ?? '')}
          >
            <div style={styles.imageContainer}>
              <img src={event.image} alt={event.title} style={styles.image} />
            </div>
            <div style={styles.textOverlay}>
              <h3 style={styles.title}>{event.title}</h3>
              <p style={styles.date}>{event.date}</p>
            </div>
          </a>
        ))}
      </Carousel>
      {/* <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={50}
        dynamicHeight={false}
      >
        {events.map((event) => (
          <a
            key={event.id}
            style={styles.card}
            onClick={() => {
              handleNavigate(event?.BEATCyclothon ?? '');
            }}
          >
            <img src={event.image} alt={event.title} style={styles.image} />
            <h3 style={styles.title}>{event.title}</h3>
            <p style={styles.date}>{event.date}</p>
          </a>
        ))}
      </Carousel> */}
    </div>
  );
};

export default PastEvents;
