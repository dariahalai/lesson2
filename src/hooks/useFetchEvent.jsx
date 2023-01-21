import { fetchEventById } from '../services/EventsAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  useEffect(() => {
    fetchEventById(eventId).then(setEvent);
  }, [eventId]);
  return event;
};

export default useFetchEvent;
