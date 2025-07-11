import UpcomingEvents from '../container/UpcomingEvents/UpcomingEvents';
import { PastEvents } from '../container';
import SponsorGallery from '../container/SponsorsGallery/SponsorsGallery';

const Home = () => {
  return (
    <>
      <UpcomingEvents />
      <SponsorGallery />
      <PastEvents />
    </>
  );
};

export default Home;
