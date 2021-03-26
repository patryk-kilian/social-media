import { useMutation } from 'react-query';
import { firebase, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

const updateLoggedInUserFollowing = async (
  activeUserDocId: string,
  profileUserId: string,
  isFollowingProfile: boolean
) => {
  return firebase
    .firestore()
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
  isFollowingProfile: boolean
) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(activeUserId)
        : FieldValue.arrayUnion(activeUserId),
    });
};

export const useToggleFollow = () => {
  return useMutation(
    async (toggleFollowData: any) => {
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
        queryClient.invalidateQueries('user');
      },
    }
  );
};
