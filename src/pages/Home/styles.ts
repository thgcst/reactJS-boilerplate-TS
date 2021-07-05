import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    135deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  background-attachment: fixed;
  padding: 10rem 0;
`;

export const Card = styled.div`
  border-radius: 1rem;
  max-width: 90vw;
  padding: 3rem 2rem;
  display: flex;
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
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

export const WrapperExit = styled.div`
  ${({ theme }) => theme.general.clickable};
  width: 4rem;
  height: 4rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.2));

  :hover {
    transform: rotate(90deg) scale(1.1);
  }
  :active {
    transform: rotate(90deg) scale(0.98);
  }
`;
