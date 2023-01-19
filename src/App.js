import Expenses from "./components/Expenses/Expenses";

const App = () => {

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 200.00, date: new Date(2023, 1, 17) },
    { id: 'e2', title: 'PG&E', amount: 250.00, date: new Date(2023, 1, 14) },
    { id: 'e3', title: 'Mortgage', amount: 2814.00, date: new Date(2023, 1, 1) },
    { id: 'e4', title: 'Utility', amount: 98.00, date: new Date(2023, 1, 19) },
  ]

  return (
    <div>
       <h2>Let's get started!</h2>
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
