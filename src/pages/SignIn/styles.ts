import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    135deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
`;

export const Card = styled.div`
  border-radius: 1rem;
  width: 90vw;
  max-width: 50rem;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(5px);

  :hover {
    transform: scale(1.02);
  }

  transition: 300ms ease;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
`;
