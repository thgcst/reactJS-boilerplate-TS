import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafc;
`;

export const NotFoundText = styled.div`
  font-size: 25rem;
  font-weight: 900;
  margin: 0;
  line-height: 20rem;

  background: url(../images/bg.jpg) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;

  margin-bottom: 2rem;
`;

export const Description = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
`;

export const Button = styled.div`
  background: #fafafc;
  box-shadow: 0.7rem 0.7rem 1.8rem #ebebed, -0.7rem -0.7rem 1.8rem #ffffff;
  cursor: pointer;
  height: 5rem;
  padding: 0 3rem;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  font-size: 1.6rem;

  :hover {
    box-shadow: 1rem 1rem 2rem #e1e1e3, -1rem -1rem 2rem #ffffff;
    transform: scale(1.01);
  }

  transition: 300ms ease;
`;
