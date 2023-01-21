import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchEvents } from '../../services/EventsAPI';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents()
      .then(data => {
        setEvents(data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
    {events.length > 0 && 
      <ul>
        {events.map(({ id,name }) => (
          <li key={id}><Link to={id}>{name}</Link></li>
        ))}
      </ul>}
      <Outlet/>
    </>
    
  );
};

export default EventsPage;
