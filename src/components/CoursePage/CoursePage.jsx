import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  console.log(user.subscription);
  const { lectures } = useSelector(state => state.course);
  // const lectures = [
  //   {
  //     _id: 'ajkldjk',
  //     title: 'sample',
  //     description: 'aklkfklldkl',
  //     video: {
  //       url: 'jkjjdk',
  //     },
  //   },
  //   {
  //     _id: 'ajkldjk2',
  //     title: 'sample2',
  //     description: 'aklkfklldkl',
  //     video: {
  //       url: 'jkjjdk',
  //     },
  //   },
  //   {
  //     _id: 'ajkldjk3',
  //     title: 'sample3',
  //     description: 'aklkfklldkl',
  //     video: {
  //       url: 'jkjjdk',
  //     },
  //   },
  // ];

  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
    // if (user.role !== "admin" || user.subscription !== 'active') {
    //   return navigate('/subscribe')
    // }
  }, [dispatch, params.id, navigate, user.role, user.subscription]);

  // if (
  //   user.role !== "admin"
  //   (user.subscription !== undefined || user.subscription.status !== 'active') //user.subscription && user.subscription.status === 'active'
  // ) {
  //   return navigate("/subscribe") ;
  // }
  // if (
  //   (user.role !== 'admin' && user.subscription !== undefined) ||
  //   user.subscription.status !== 'active'
  // ) {
  //   return navigate('/subscribe');
  // }1==

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={lectures[lectureNumber].video.url}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1}
              {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
