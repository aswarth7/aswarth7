import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Insurance',
      amount: 100,
      date: new Date(2021, 2, 01),
    },
    {
      id: 'e2',
      title: 'Appliances',
      amount: 200,
      date: new Date(2021, 3, 01),
    },
    {
      id: 'e3',
      title: 'Travel',
      amount: 300,
      date: new Date(2021, 4, 01),
    },
    {
      id: 'e4',
      title: 'Grocery',
      amount: 400,
      date: new Date(2021, 5, 01),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
