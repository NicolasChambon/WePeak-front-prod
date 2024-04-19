// Import necessary libraries
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import actions
import { fetchUserWithId } from '../../../actions/userActions';

// Import utils
import rewriteImagePath from '../../../utils/rewriteImagePath';

// Import sub-components
import ProfileCard from '../Profile/ProfileCard/ProfileCard';
import SportsCard from '../Profile/SportsCard/SportsCard';
import ParticipationsCard from '../Profile/ParticipationsCard/ParticipationsCard';
import EditProfile from '../Profile/EditProfile/EditProfile';

// Import stylesheet
import './UserPage.scss';

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const userId = JSON.parse(localStorage.getItem('id'));

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
          thumbnail={rewriteImagePath(user.thumbnail)}
          bio={user.description}
          sportsNumber={user.sports.length}
          subscriptionsNumber={futureActivities.length}
          pastActivitiesNumber={pastActivities.length}
        />
        {userId === user.id && (
          <EditProfile
            className="Profile-left-editProfile"
            firstname={user.firstname}
            lastname={user.lastname}
            thumbnail={rewriteImagePath(user.thumbnail)}
          />
        )}
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
