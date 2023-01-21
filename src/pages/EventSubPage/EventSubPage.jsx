import useFetchEvent from 'hooks/useFetchEvent';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const EventSubPage = () => {
  const event = useFetchEvent();
const location = useLocation();
  return (
    <>
      {event && (
        <div>
          <h3>{event.name}</h3>
          <img src={event.images[0].url} alt={event.name} />
          <Link to='details' state={location.state}>More details</Link>
        </div>
      )}
    </>
  );
};
export default EventSubPage;
