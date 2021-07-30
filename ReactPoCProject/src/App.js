
import Expenses from './Components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Insurance',
      amount: 100,
      date: new Date(2021, 2, 1),
    },
    {
      id: 'e2',
      title: 'Appliances',
      amount: 200,
      date: new Date(2021, 3, 1),
    },
    {
      id: 'e3',
      title: 'Travel',
      amount: 300,
      date: new Date(2021, 4, 1),
    },
    {
      id: 'e4',
      title: 'Grocery',
      amount: 400,
      date: new Date(2021, 5, 1),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
