import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/actions/profile';
import{ useNavigate, useParams} from "react-router-dom"
import toast from 'react-hot-toast';


const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams()
  const {loading ,error,message } = useSelector(state=>state.profile)
  const dispatch = useDispatch()
 

  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(resetPassword(params.token,password))
  }

  const navigate = useNavigate()

  useEffect(() => {
  if(error){
    toast.error(error)
    dispatch({ type: 'clearError' });
  }
  if(message){
    toast.success(message)
    dispatch({ type: 'clearMessage' });
  }  

  navigate('/login')
 
  }, [dispatch,error,message])
  
  return (
    <Container py={"16"} h="90vh">
      <form onSubmit={submitHandler}>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="abc@gmail.com"
            type={'password'}
            focusBorderColor="yellow.500"
          />
          <Button isLoading={loading} type="submit" w={'full'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};




export default ResetPassword