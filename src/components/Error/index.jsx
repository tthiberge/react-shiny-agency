import styled from 'styled-components'
import logo_404 from '../../assets/undraw_page_not_found.png'


const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
`

const StyledText = styled.p`
  margin-bottom: 55px;
  color: #2F2E41;
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Styld404 = styled.img`
  width: 875px;
  height: 476px;
  margin-bottom: 88px;
`

function Error() {
  return (
   <StyledContainer>
    <StyledWrapper>
      <StyledText>Oups ...</StyledText>
      <Styld404 src={logo_404} alt="Error 404"/>
      <StyledText>Il semblerait qu'il y ait un problème</StyledText>
    </StyledWrapper>
  </StyledContainer>
  )
}

export default Error
