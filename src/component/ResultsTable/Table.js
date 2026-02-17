import classes from './Table.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export default function TablePage({results,initialInvestment}) {
  return(
        <div className={classes.tableContainer}>
          <table className={classes.result}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => {
                return(
                  <tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.savingsEndOfYear)}</td>
                    <td>{formatter.format(result.yearlyInterest)}</td>
                    <td>
                      {formatter.format(
                        result.savingsEndOfYear - 
                        initialInvestment - 
                        result.yearlyContribution * result.year)}
                    </td>
                    <td>
                      {formatter.format(
                        initialInvestment + 
                        result.yearlyContribution * result.year)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    )
}