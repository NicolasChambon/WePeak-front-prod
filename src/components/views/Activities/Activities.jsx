// Import necessary librairies
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Import components
import Button from '../../utils/Button/Button';
import EventCard from '../../utils/EventCard/EventCard';
import FilterButton from './FilterButton/FilterButton';

// eslint-disable-next-line import/extensions, import/no-unresolved, import/no-absolute-path
import data from '/src/filtersData';

// Import stylesheet
import './Activities.scss';
import Calendar from './Calendar/Calendar';
import rewriteImagePath from '../../../utils/rewriteImagePath';

const Activities = () => {
  const activityList = useSelector((state) => state.activity.activities);

  const lastSearchedCity = useSelector(
    (state) => state.activity.lastSearchedCity
  );

  // If user has not searched for a city, we set the lastSearchedCity to the user's position
  const userPositionName = useSelector((state) => state.user.userPositionName);
  if (!lastSearchedCity.name) {
    lastSearchedCity.name = userPositionName;
  }

  const [isFilterActive, setIsFilterActive] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleClickOnFilter = (title) => {
    setIsFilterActive(isFilterActive === title ? null : title);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.Activities-filters')) {
        setIsFilterActive(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <main className="Activities">
      <h1 className="Activities-title">{`Evènements à proximité de ${lastSearchedCity.name}`}</h1>
      <div className="Activities-filters">
        {data.map((item) => (
          <FilterButton
            title={item.title}
            options={item.options}
            key={item.title.value}
            onClick={() => {
              handleClickOnFilter(item.title.label);
            }}
            active={isFilterActive === item.title.label}
          />
        ))}
        <Calendar lastSearchedCity={lastSearchedCity} />
      </div>
      <div className="Activities-grid">
        {activityList.map((activity) => (
          <EventCard
            key={activity['0'].id}
            title={activity['0'].name}
            city={activity['0'].city}
            date={activity['0'].date}
            difficulty={activity['0'].difficulty.label}
            slug={activity['0'].id}
            sport={activity['0'].sports[0].label}
            thumbnail={rewriteImagePath(activity['0'].thumbnail)}
          />
        ))}
      </div>
      <Button text="Voir la suite" className="primary" url="#" />
    </main>
  );
};

export default Activities;
