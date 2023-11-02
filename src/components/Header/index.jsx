import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.png'
import logoText from '../../assets/logo_text.png'


const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-family: Comfortaa;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${(props) =>
      props.$isFullLink && `
      color: white;
      border-radius: 30px;
      background-color: ${colors.primary};
      `
    }
`

const StyledBanner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-inline:  62px;
padding-top: 38px;
margin-bottom: 91Px;
`

const StyledGlobalLogo = styled.div`
      display: flex;
      gap: 18px;
      align-items: center;

`

const StyledLogo = styled.img`
height: 80;
width: 80;
`

const StyledLogoText = styled.img`
height: 50px !important;
`

const StyledNav = styled.nav`
      display: flex;
      align-items: center;
      gap: 35px;
`


function Header() {
  return (
    <StyledBanner>
      <StyledGlobalLogo>
        <StyledLogo src={logo}></StyledLogo>
        <StyledLogoText src={logoText} alt="Shiny" />
      </StyledGlobalLogo>

      <StyledNav>
        <StyledLink  to="/">Accueil</StyledLink >
        <StyledLink  to="/survey/1" >Questionnaire</StyledLink >
        <StyledLink  to="/freelances" $isFullLink>Faire le test</StyledLink >
      </StyledNav>
    </StyledBanner>
  )
}

export default Header
