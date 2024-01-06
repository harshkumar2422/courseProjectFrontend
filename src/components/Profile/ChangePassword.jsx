import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../redux/actions/profile';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
 const navigate = useNavigate()
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
    navigate("/profile")
  };

  const {loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container pu="16" minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Change Password"
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Enter Old Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />
          <Input
            required
            id="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />
          <Button isLoading={loading} w="full" colorScheme={'yellow'} type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
