import { useState, useEffect } from 'react';
import {
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalBody,
  ModalContent,
  Image,
  FormControl,
  Input,
  FormLabel,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { storage } from '../../lib/firebase';
import { useActiveUser } from '../../context/active-user';
import useUpdateUser from '../../hooks/useUpdateUser';

type EditProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  picture: any;
  fullname: string | undefined;
};

function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const [isPictureUploading, setPictureUploading] = useState(false);
  const [picturePreview, setPicturePreview] = useState('');
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { activeUser } = useActiveUser();

  const {
    mutate: updateUser,
    isLoading: isUpdating,
    isSuccess: isUpdateSuccess,
  } = useUpdateUser();

  const toast = useToast();

  const handleFileInputChange = (e: any) => {
    const pictureFile = e.target.files[0];
    const picturePreview = URL.createObjectURL(pictureFile);
    setPicturePreview(picturePreview);
  };

  const handleEditSubmit = async (data: FormData) => {
    const pictureFile = data.picture[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(activeUser.userId);

    setPictureUploading(true);

    try {
      if (pictureFile) {
        await fileRef.put(pictureFile);
        const pictureUrl = await fileRef.getDownloadURL();

        updateUser({
          pictureUrl,
          fullname: data.fullname ? data.fullname : activeUser.fullname,
        });
      } else {
        updateUser({
          fullname: data.fullname ? data.fullname : activeUser.fullname,
        });
      }
    } catch (err) {
      console.log(err);
    }

    setPictureUploading(false);
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      reset();
      onClose();
      toast({
        title: 'Profile updated',
        status: 'success',
        isClosable: true,
        position: 'top',
      });
    }
  }, [isUpdateSuccess, onClose, toast, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={picturePreview}
            fallbackSrc='/images/user-placeholder.jpg'
            alt='user'
            boxSize='100px'
            mx='auto'
            my='4'
            borderRadius='full'
            objectFit='cover'
          />
          <form onSubmit={handleSubmit(handleEditSubmit)}>
            <FormControl py='4'>
              <FormLabel htmlFor='picture'>Add profile photo</FormLabel>
              <input
                name='picture'
                type='file'
                ref={register}
                onChange={handleFileInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='fullname'>Fullname</FormLabel>
              <Input name='fullname' type='text' ref={register} />
            </FormControl>
            <Button
              isLoading={isUpdating || isPictureUploading ? true : false}
              loadingText='Saving'
              type='submit'
              isFullWidth
              my='6'
              colorScheme='purple'
            >
              Save
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditProfileModal;
