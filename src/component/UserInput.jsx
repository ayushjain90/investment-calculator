export default function UserInput({ userInputs, handleUserInputs }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInputs.initialInvestment} required onChange={(e) => handleUserInputs('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInputs.annualInvestment} required onChange={(e) => handleUserInputs('annualInvestment', e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInputs.expectedReturn} required onChange={(e) => handleUserInputs('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInputs.duration} required onChange={(e) => handleUserInputs('duration', e.target.value)} />
                </p>
            </div>
        </section>
    )
}