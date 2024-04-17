// Import necessary libraries
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import actions
import { fetchUserWithId } from '../../../actions/userActions';

// Import sub-components
import ProfileCard from '../Profile/ProfileCard/ProfileCard';
import SportsCard from '../Profile/SportsCard/SportsCard';
import ParticipationsCard from '../Profile/ParticipationsCard/ParticipationsCard';

// Import stylesheet
import './UserPage.scss';

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchUserWithId(slug, 'visited', navigate));
  }, [slug, dispatch]);

  const user = useSelector((state) => state.user.visitedUser);

  // if user is not yet available, return null
  if (!user.sports) return null;

  // we keep only the validated participations
  const validatedParticipations = user.participations.filter(
    (participation) => participation.status === 1
  );

  const currentDate = new Date();
  const pastActivities = validatedParticipations.filter(
    (participation) => new Date(participation.activity.date) < currentDate
  );
  const futureActivities = validatedParticipations.filter(
    (participation) => new Date(participation.activity.date) >= currentDate
  );

  return (
    <main className="UserPage">
      <div className="UserPage-left">
        <ProfileCard
          className="UserPage-left-profileCard"
          firstname={user.firstname}
          lastname={user.lastname}
          email=""
          city={user.city}
          memberSince={user.createdAt}
          thumbnail={user.thumbnail}
          bio={user.description}
          sportsNumber={user.sports.length}
          subscriptionsNumber={futureActivities.length}
          pastActivitiesNumber={pastActivities.length}
        />
      </div>
      <div className="UserPage-right">
        <SportsCard
          className="UserPage-right-sportsCard"
          sports={user.sports}
        />
        <ParticipationsCard
          className="UserPage-right-subscriptionCard"
          title="Mes inscriptions"
          participations={futureActivities}
        />
        <ParticipationsCard
          className="UserPage-right-pastActivitiesCard"
          title="Mes activités passées"
          participations={pastActivities}
        />
      </div>
    </main>
  );
};

export default UserPage;
