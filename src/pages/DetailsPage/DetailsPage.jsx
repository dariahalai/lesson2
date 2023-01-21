import useFetchEvent from 'hooks/useFetchEvent';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <button onClick={()=>navigate(location.state?.from ?? '/')}>Go back</button>
          <h3>{event.name}</h3>
          <img src={event.images[0].url} alt={event.name} />
          <p>Genre : {event.classifications[0].genre.name}</p>
        </div>
      )}
    </>
  );
};
export default DetailsPage;
