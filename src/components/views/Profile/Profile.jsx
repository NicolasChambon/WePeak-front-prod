// Import necessary libraries
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Import actions
import { fetchUserWithId } from '../../../actions/userActions';

// Import sub-components
import ProfileCard from './ProfileCard/ProfileCard';
import EditProfile from './EditProfile/EditProfile';
import SportsCard from './SportsCard/SportsCard';
import ParticipationsCard from './ParticipationsCard/ParticipationsCard';

// Import stylesheet
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);
  const userId = userState.loggedData?.user.id;

  useEffect(() => {
    // If userId is not null, fetch the user with the id
    if (userId) {
      dispatch(fetchUserWithId(userId, 'current'));
    }
  }, [userId, dispatch]);

  const user = useSelector((state) => state.user.currentUser);

  // if user is not yet available, return null
  if (!user.Sports) return null;

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
    <main className="Profile">
      <div className="Profile-left">
        <ProfileCard
          className="Profile-left-profileCard"
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          city={user.city}
          memberSince={user.createdAt}
          thumbnail={user.thumbnail}
          bio={user.description}
          sportsNumber={user.Sports.length}
          subscriptionsNumber={futureActivities.length}
          pastActivitiesNumber={pastActivities.length}
        />
        <EditProfile
          className="Profile-left-editProfile"
          firstname={user.firstname}
          lastname={user.lastname}
          thumbnail={user.thumbnail}
        />
      </div>
      <div className="Profile-right">
        <SportsCard className="Profile-right-sportsCard" sports={user.Sports} />
        <ParticipationsCard
          className="Profile-right-subscriptionCard"
          title="Mes inscriptions"
          participations={futureActivities}
        />
        <ParticipationsCard
          className="Profile-right-pastActivitiesCard"
          title="Mes activités passées"
          participations={pastActivities}
        />
      </div>
    </main>
  );
};

export default Profile;
