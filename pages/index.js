import styled from 'styled-components'
import db from '../db.json'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary}
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg2});
  flex: 1;
  background-position: center;
  background-size: cover;
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #4CAF50;
  background-color: #1c1814;
  border-radius: 4px;
  overflow: hidden;

  h1,h2,h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <h1>The legengs</h1>
          <p>Em desenvolvimento</p>
        </Widget>
        <Widget>
          <h1>The legengs</h1>
          <p>Em desenvolvimento</p>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}

