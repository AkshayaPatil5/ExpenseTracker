const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const Expense = require('./models/expense');
const path = require('path');
const cors = require('cors');
const expenseRoutes= require('./routes/expenses');
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/expenses',expenseRoutes);




// app.post('/expenses/add-expense', 


// async (req, res, next) => {
//   try {
//     const amount = req.body.amount;
//     const description = req.body.description;
//     const category = req.body.category;
//     const data = await Expense.create({ amount: amount, description: description, category: category });
//     res.status(201).json({ newExpense: data }); 
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err); 
//   }
// })

// app.get('/expenses/get-expense', async (req, res, next) => {
//   try {
//     const expenses = await Expense.findAll();
//     res.status(200).json({ allExpense: expenses }); 
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// app.delete('/expenses/delete-expense/:expenseId', async (req, res, next) => {
//   try {
//     const expenseId = req.params.expenseId;
//     const expense = await Expense.findByPk(expenseId);
//     console.log('expenseId:', expenseId);
    
//     await expense.destroy();
//     res.status(204).send(); 
   
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// app.put('/expenses/edit-expense/:expenseId', async (req, res, next) => {
//   try {
//     const expenseId = req.params.expenseId;
//     const amount = req.body.amount;
//     const description = req.body.description;
//     const category = req.body.category;

//     const expense = await Expense.findByPk(expenseId);
//     expense.amount = amount;
//     expense.description = description;
//     expense.category = category;
//     await expense.save();
//     res.status(200).json({ editedExpense: expense });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });

  


