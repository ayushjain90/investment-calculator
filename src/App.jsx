import Header from "./component/header"
import UserInput from "./component/UserInput"
import Results from "./component/Results"
import { useState } from "react"

const INITIAL_VAULES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VAULES);
  const inputIsValid = userInput.duration >= 1

  function handleUserInput(inputIdentifier, inputValue) {
    setUserInput((prevValue => {
      return {
        ...prevValue,
        [inputIdentifier]: +inputValue
      }
    }))
  }

  return (
    <>
      <Header />
      <UserInput userInputs={userInput} handleUserInputs={handleUserInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App