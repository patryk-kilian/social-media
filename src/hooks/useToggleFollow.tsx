import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

const updateLoggedInUserFollowing = async (
  activeUserDocId: string,
  profileUserId: string,
  isFollowingProfile: string | undefined
) => {
  return db
    .collection('users')
    .doc(activeUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileUserId)
        : FieldValue.arrayUnion(profileUserId),
    });
};

const updateFollowedUserFollowers = (
  activeUserId: string,
  profileDocId: string,
  isFollowingProfile: string | undefined
) => {
  return db
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(activeUserId)
        : FieldValue.arrayUnion(activeUserId),
    });
};

type toggleFollowDataTypes = {
  activeUserId: string;
  activeUserDocId: string;
  profileUserId: string;
  profileDocId: string;
  isFollowingProfile: string | undefined;
};

function useToggleFollow() {
  return useMutation(
    async (toggleFollowData: toggleFollowDataTypes) => {
      const {
        activeUserId,
        activeUserDocId,
        profileUserId,
        isFollowingProfile,
        profileDocId,
      } = toggleFollowData;

      await updateLoggedInUserFollowing(
        activeUserDocId,
        profileUserId,
        isFollowingProfile
      );

      await updateFollowedUserFollowers(
        activeUserId,
        profileDocId,
        isFollowingProfile
      );
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries('user');
      },
    }
  );
}

export default useToggleFollow;
