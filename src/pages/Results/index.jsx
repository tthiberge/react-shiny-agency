import { useContext } from "react"
import { SurveyContext } from "../../utils/context"

function Results() {
  const { answers } = useContext(SurveyContext)
  console.log(answers)

  return (
    <div>
      <h1> Results here we go</h1>
      <p>{JSON.stringify(answers)}</p>
    </div>
  )
}

export default Results
