import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '~/store/ducks/auth/actions';
import { RootState } from '~/store/ducks/rootReducer';

import {
  Container,
  Card,
  WrapperTop,
  Avatar,
  Title,
  Text,
  WrapperExit,
} from './styles';

export const ExitIcon: React.FC = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="times-circle"
    className="svg-inline--fa fa-times-circle fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="#fff"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
    />
  </svg>
);

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);

  const data = Object.entries(userData);

  return (
    <Container>
      <WrapperExit
        onClick={() => {
          dispatch(AuthActions.resetState());
        }}
      >
        <ExitIcon />
      </WrapperExit>
      <Card>
        <WrapperTop>
          <Avatar src={userData.avatar_url} />
          <Title>{userData.name}</Title>
        </WrapperTop>
        {data.map(item => (
          <Text>
            <b>{item[0]}</b>: {item[1]}
          </Text>
        ))}
      </Card>
    </Container>
  );
};

export default Home;
