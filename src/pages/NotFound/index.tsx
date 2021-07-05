import React from 'react';

import history from '~/routes/history';

import { Container, NotFoundText, Description, Button } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <NotFoundText>404</NotFoundText>
      <Description>A página que você está procurando não existe</Description>
      <Button onClick={() => history.push('/')}>Voltar ao início</Button>
    </Container>
  );
};

export default NotFound;
