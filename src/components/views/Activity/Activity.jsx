// Import necessary libraries
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import actions
import {
  fetchActivity,
  fetchAdressFromCoordinates,
} from '../../../actions/activityActions';

// Import components
import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityIllustration from './ActivityIllustration/ActivityIllustration';
import ActivityDetailApply from './ActivityDetailApply/ActivityDetailApply';
import ActivityPeople from './ActivityPeople/ActivityPeople';
import ActivityPictures from './ActivityPictures/ActivityPictures';

// Import stylesheet
import './Activity.scss';

const Activity = () => {
  // fetch activity slug from url
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivity(slug));
  }, []);

  const activity = useSelector((state) => state.activity.activity);
  // fetch address from coordinates only if they are available
  useEffect(() => {
    if (!activity.lat || !activity.lng) return;
    dispatch(
      fetchAdressFromCoordinates(
        { lat: activity.lat, lng: activity.lng },
        'Activity'
      )
    );
  }, [activity.lat, activity.lng, dispatch]);

  const activityAdress = useSelector((state) => state.activity.activityAdress);

  // if activity and activityAdress are not yet available, return null
  if (!activity.createdBy || !activityAdress.address.road) return null;

  return (
    <main className="Activity">
      <ActivityHeader
        name={activity.name}
        sport={activity.sport}
        userId={activity.createdBy.id}
        userPicture={activity.createdBy.thumbnail}
        userName={activity.createdBy.pseudo}
        userThumbnail={activity.createdBy.thumbnail}
      />
      <ActivityIllustration
        picture={activity.thumbnail}
        date={activity.date}
        adressNumber={activityAdress.address.house_number}
        adressRoad={activityAdress.address.road}
        adressPostcode={activityAdress.address.postcode}
        adressCity={
          activityAdress.address.village ||
          activityAdress.address.city ||
          activityAdress.address.town
        }
        lat={activity.lat}
        lng={activity.lng}
        thumbnail={activity.thumbnail}
      />
      <ActivityDetailApply description={activity.description} />
      <ActivityPeople
        people={activity.participations}
        groupSize={activity.groupSize}
      />
      <ActivityPictures pictures={activity.pictures} />
    </main>
  );
};

export default Activity;
