import Card from '../../components/Card';
import styled from 'styled-components'


const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops'
      },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend'
      },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack'
      },
    {
        name: 'Lauren Ipsum',
        jobTitle: 'UX Designer'
      },
]

const CardsContainer = styled.div`
    display: grid;
    width: 800px;
    margin: 0px auto;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 200px;

`

const Title = styled.h1`
  color: #2F2E41;
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 132.5%; /* 39.75px */
  margin-bottom: 52px;
`

const Subtitle = styled.p`
  color: #8186A0;
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 132.5%; /* 26.5px */
  margin-bottom: 90px;

`

function Freelances() {
  return (
      <div>
          <Title>Trouvez votre prestataire</Title>
          <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>

          <CardsContainer>
              {freelanceProfiles.map((profile, index) => (
                  <Card
                      key={`${profile.name}-${index}`}
                      label={profile.jobTitle}
                      title={profile.name}
                  />
              ))}
          </CardsContainer>
      </div>
  )
}

export default Freelances
