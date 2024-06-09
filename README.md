Build me a page  in javascript that contains following fields:
1. Total Expense
2. Total Income
3. User max Threshold on expense (stored in db)
4. User min threshold on Income (stored in db)

Compute the Total expense and Income by fetching the transaction history from localhost:3000/transactions. Type: 'Income', 'Expense'

Sample:
{
      "id": "3345",
      "type": "Income",
      "amount": 10000000,
      "description": "Ujju",
      "created_at": "2024-05-11T00:00:00"
    },
    {
      "id": "2300",
      "type": "Income",
      "amount": 10000000,
      "description": "Ujju",
      "created_at": "2024-05-11T00:00:00"
    },

if value stored in localhost:3000/trends is not same for id: 'Income and 'Expense' update it. If the user is speding more than his threshold 'threshex' then display Warning: 'Spending more'. If the user is getting less income than his threshold 'threshin' then display Warning: 'Get more income'

{
      "id": "Income",
      "amount": 4000,
      "threshin": 100
    },
    {
      "id": "Expense",
      "amount": 4000,
      "threshex":200
    }

