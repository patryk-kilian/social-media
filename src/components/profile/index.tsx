import { useActiveUser } from '../../context/active-user';
import UserProfileSkeleton from '../skeleton/UserProfileSkeleton';
import useUser from '../../hooks/useUser';
import Header from './Header';
import UserPosts from './UserPosts';

function UserProfile({ userId }: { userId: string }) {
  const {
    data: user,
    isLoading: isProfileLoading,
  }: { data: any; isLoading: boolean } = useUser(userId);

  const { activeUser } = useActiveUser();

  return (
    <>
      {isProfileLoading ? (
        <UserProfileSkeleton />
      ) : (
        <Header user={user} activeUser={activeUser} />
      )}
      <UserPosts userId={userId} />
    </>
  );
}

export default UserProfile;
