import useFetchEvent from 'hooks/useFetchEvent';
import {Link} from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();

  return (
    <>
      {event && (
        <div>
          <h3>{event.name}</h3>
          <img src={event.images[0].url} alt={event.name} />
          <Link to='details'>More details</Link>
        </div>
      )}
    </>
  );
};
export default EventSubPage;
