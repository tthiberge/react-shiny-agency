import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import avatar from '../../assets/people_shiny.png'

const CardLabel = styled.span`
  color: ${colors.primary};
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const CardName = styled.span`
  color: #000;
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  align-items: center;
  padding: 33px 20px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={avatar} alt="freelance" />
      <CardName>{title}</CardName>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: ''
}

export default Card
