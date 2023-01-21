import { useEffect, useState } from 'react';
import { useSearchParams,Link,Outlet,useLocation } from 'react-router-dom';
import { fetchEventsByName } from 'services/EventsAPI';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('query');
const location = useLocation();
  useEffect(() => {
    if(keyword === '' || keyword === null){
        return
    }
    fetchEventsByName(keyword).then(setEvents);
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if(form.search.value === ''){
        return
    }
    setSearchParams({ query: form.search.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button >Search</button>
      </form>
      <ul>
        {events.length>0 && 
        events.map(event=>
                <li key={event.id}>
                <Link to={`${event.id}`} state={{from : location}}>{event.name}</Link>
            </li>
        )}
      </ul>
      <Outlet/>
    </>
  );
};

export default SearchPage;
