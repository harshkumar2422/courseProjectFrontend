import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TermandCondition from "../../assets/docs/TermandCondition"
import { useNavigate } from 'react-router-dom';
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src= "https://avatars.githubusercontent.com/u/112031159?s=400&u=6a81bb447db4254d4c32efd5fee562388fce8d03&v=4" boxSize={['40', '48']} />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Harsh kumar" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi I am a Full stack developer .
      My goal is to teach with good content at reasonable price`}
      />
    </VStack>
  </Stack>
);
// const VideoPlayer = () => (
//   <Box>
//     <video
//       autoPlay
//       loop
//       muted
//       controls
//       controlsList="nodownload nofullscreen noremoteplayback"
//     ></video>
//   </Box>
// );
const TandC = termAndCondition => (
  <Box>
    <Heading
      children="Terms & Condition"
      size={'md'}
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h={'sm'} p="4" overflowY={"scroll"}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {' '}
        {TermandCondition}
      </Text>
      <Heading my={"4"} size={"xs"} children="Refund only appllicable for cancellation within 7 days"/>
    </Box>
  </Box>
);
const About = () => {
  const navigate = useNavigate()
  const navigaToSubscribe = () => {
    navigate("/subscribe")
  }
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses availble
          only for premium usres .
        </Text>
        <Link to={"/subscribe"}>
          <Button onClick={navigaToSubscribe} variant={'ghost'} colorScheme="yellow">
            CheckOut Our Plan
          </Button>
        </Link>
       
      </Stack>
      {/* <VideoPlayer /> */}

      <TandC termAndCondition={TermandCondition} />
      <HStack my={'4'} p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by RazorPay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
