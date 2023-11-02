import { Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()

  // chatGPT me dit que je dois parser pour pouvoir faire des opérations mathématiques
  const currentQuestionNumber = parseInt(questionNumber, 10);
  const previousQuestionNumber = currentQuestionNumber === 1 ? 1 : currentQuestionNumber - 1;
  const nextQuestionNumber = currentQuestionNumber === 10 ? 10 : currentQuestionNumber + 1;


  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <div>
        <Link to={`/survey/${previousQuestionNumber}`}>
          <p>Précedent</p>
        </Link>
        { currentQuestionNumber !== 10 ?
            <Link to={`/survey/${nextQuestionNumber}`}>
              <p>Suivant</p>
            </Link>
          :
            <Link to={`/results`}>
              <p>Résultats</p>
            </Link>
        }
      </div>
    </div>
  )
}

export default Survey
