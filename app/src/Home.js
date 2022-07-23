import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const {username, password} = useSelector(state => state.userReducer);

  return (
    <Text>
      Hello {username}, Your password is {password}
    </Text>
  );
};

export default Home;
