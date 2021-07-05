import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import AuthActions from '~/store/ducks/auth/actions';

import { Container, Card, Title, Input } from './styles';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { username: '' },
    onSubmit: e => {
      dispatch(AuthActions.signInRequest(e.username));
    },
  });

  return (
    <Container>
      <Card>
        <Title>Buscar no GitHub</Title>
        <Input
          value={values.username}
          name="username"
          onChange={handleChange}
          onKeyUp={e => {
            if (e.code === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </Card>
    </Container>
  );
};

export default SignIn;
