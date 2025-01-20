import UpcomingEvents from '../container/UpcomingEvents/UpcomingEvents';
import { PastEvents } from '../container';

const Home = () => {
  return (
    <>
      <UpcomingEvents />
      <PastEvents />
    </>
  );
};

export default Home;
