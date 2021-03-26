import { useMutation } from 'react-query';
import { firebase, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

const updateLoggedInUserFollowing = async (
  activeUserDocId: string,
  profileId: string,
  isFollowingProfile: boolean
) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(activeUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
};

const updateFollowedUserFollowers = (
  activeUserDocId: string,
  profileDocId: string,
  isFollowingProfile: boolean
) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(activeUserDocId)
        : FieldValue.arrayUnion(activeUserDocId),
    });
};

export const useToggleFollow = () => {
  return useMutation(
    async (toggleFollowData: any) => {
      const {
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
        profileDocId,
        activeUserDocId,
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
