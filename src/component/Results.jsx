import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ userInput }) {

    const result = calculateInvestmentResults(userInput)
    const initilaInvestment =
        result[0].valueEndOfYear -
        result[0].interest -
        result[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Intrest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map(yearData => {
                        const totalIntrest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initilaInvestment;
                        const totalAmountInvested = yearData.valueEndOfYear - totalIntrest
                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalIntrest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}