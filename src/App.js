import { useState } from 'react';
import FormPage from './component/UserInput/Form';
import TablePage from './component/ResultsTable/Table';
import Header from './component/Header/Header';

function App() {
  const [userInput,setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = [];

  if(userInput) {
    let currentSavings = +userInput['current-savings']; 
    const expectedReturn= +userInput['expected-return'] / 100;
    const yearlyContribution = +userInput['yearly-contribution']; 
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      
      <FormPage onCalculate={calculateHandler} />

      {userInput ? 
        <TablePage results={yearlyData} initialInvestment={userInput['current-savings']} /> 
        : <p style={{textAlign: 'center'}}>No Investment Calculate Yet.</p>
      }
      
    </div>
  );
}

export default App;
