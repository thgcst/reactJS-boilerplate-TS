import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import AuthActions from '~/store/ducks/auth/actions';

import { Container, Card, Title, Input } from './styles';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { setFieldValue, values, handleSubmit } = useFormik({
    initialValues: { username: '' },
    onSubmit: e => {
      dispatch(AuthActions.signInRequest(e.username.replace('@', '')));
    },
  });

  return (
    <Container>
      <Card>
        <Title>Buscar no GitHub</Title>

        <Input
          value={values.username === '@' ? '' : values.username}
          name="username"
          onChange={e =>
            setFieldValue('username', `@${e.target.value.replace('@', '')}`)
          }
          onKeyUp={e => {
            if (e.code === 'Enter') {
              handleSubmit();
            }
          }}
          placeholder="Insira o username"
        />
      </Card>
    </Container>
  );
};

export default SignIn;
