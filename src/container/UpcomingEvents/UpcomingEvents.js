import React, { useEffect, useState } from 'react';

const UpcomingEvents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Animation delay
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
      fontFamily: "'Arial', sans-serif"
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    eventCardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    },
    eventCard: {
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      width: '300px',
      transition: 'transform 0.6s ease, opacity 0.6s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      opacity: isVisible ? 1 : 0
    },
    eventDetails: {
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '10px'
    },
    label: {
      fontWeight: 'bold',
      color: '#555'
    }
  };

  const upcomingEvents = [
    {
      title: 'CrossFit Masterclass',
      date: 'February 5, 2025',
      time: '5:00 PM',
      coordinator: 'John Doe',
      venue: 'Beat CrossFit Center, Chennai',
      description:
        'Learn advanced CrossFit techniques in this masterclass. Perfect for intermediate to advanced athletes.'
    },
    {
      title: 'Aquatic Fitness Workshop',
      date: 'March 10, 2025',
      time: '9:00 AM',
      coordinator: 'Jane Smith',
      venue: 'Sunset Resort Pool, Chennai',
      description:
        'Discover the benefits of aquatic fitness with our low-impact, high-energy workshop.'
    },
    {
      title: 'Beach Yoga Session',
      date: 'March 20, 2025',
      time: '6:30 AM',
      coordinator: 'Anjali Mehta',
      venue: 'Elliot’s Beach, Chennai',
      description:
        'Start your day with peace and tranquility through our sunrise yoga session.'
    }
  ];

  return (
    <div id="events-section" style={styles.container}>
      <h2 style={styles.heading}>Upcoming Events</h2>
      <div style={styles.eventCardContainer}>
        {upcomingEvents.map((event, index) => (
          <div key={index} style={styles.eventCard}>
            <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
              {event.title}
            </h4>
            <p style={styles.eventDetails}>
              <span style={styles.label}>Date:</span> {event.date}
            </p>
            <p style={styles.eventDetails}>
              <span style={styles.label}>Time:</span> {event.time}
            </p>
            <p style={styles.eventDetails}>
              <span style={styles.label}>Coordinator:</span> {event.coordinator}
            </p>
            <p style={styles.eventDetails}>
              <span style={styles.label}>Venue:</span> {event.venue}
            </p>
            <p style={styles.eventDetails}>
              <span style={styles.label}>Description:</span> {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
