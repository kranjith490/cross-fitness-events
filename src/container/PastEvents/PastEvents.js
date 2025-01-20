import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const events = [
  {
    id: 1,
    title: 'Marathon 2023',
    date: 'March 15, 2023',
    image:
      'https://media.istockphoto.com/id/184839421/photo/group-of-runners-in-a-cross-country-race.webp?a=1&b=1&s=612x612&w=0&k=20&c=e-iaej0xal4brjWt2sDmLw22uF0MkxfrIeQRoFMPO74=',
    link: '/events/2023'
  },
  {
    id: 2,
    title: 'Healthy Bootcamp 2022',
    date: 'April 20, 2022',
    image:
      'https://media.istockphoto.com/id/914755448/photo/group-of-young-sporty-people-in-plank-pose.webp?a=1&b=1&s=612x612&w=0&k=20&c=IuWUvp6YwmhujE7UJJju_2rdA6K9JD9Bs4ks25JOq_I=',
    link: '/events/2022'
  },
  {
    id: 3,
    title: 'Cardio Awareness 2021',
    date: 'May 10, 2021',
    image:
      'https://plus.unsplash.com/premium_photo-1663088651100-85eac75d894a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcmF0aG9ufGVufDB8fDB8fHww',
    link: '/events/2021'
  },
  {
    id: 4,
    title: 'Marathon 2020',
    date: 'May 10, 2020',
    image:
      'https://media.istockphoto.com/id/612398606/photo/marathon-running-race.webp?a=1&b=1&s=612x612&w=0&k=20&c=fBwEKB1sBnojRRBTxsNn_MDDtW8HnRRUIlWId71HpNc=',
    link: '/events/2020'
  }
];

const styles = {
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
  image: { width: '100%', height: 'auto', borderRadius: '10px' },
  title: { fontSize: '1.2rem', fontWeight: 'bold', marginTop: '10px' },
  date: { fontSize: '0.9rem', color: '#555' }
};

const PastEvents = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Past Events</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false}
        centerMode
        centerSlidePercentage={50}
        dynamicHeight={false}
        responsive={{
          // Adjust carousel behavior for different screen sizes
          desktop: { centerSlidePercentage: 50 }, // Show 2 cards per row for large screens
          mobile: { centerSlidePercentage: 100 } // Show 1 card for smaller screens
        }}
      >
        {events.map((event) => (
          <a key={event.id} style={styles.card}>
            <img src={event.image} alt={event.title} style={styles.image} />
            <h3 style={styles.title}>{event.title}</h3>
            <p style={styles.date}>{event.date}</p>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default PastEvents;
