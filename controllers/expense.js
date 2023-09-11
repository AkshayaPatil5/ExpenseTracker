const Expense = require('../models/expense');

const addExpense =async (req, res, next) => {
    try {
      const amount = req.body.amount;
      const description = req.body.description;
      const category = req.body.category;
      const data = await Expense.create({ amount: amount, description: description, category: category });
      res.status(201).json({ newExpense: data }); 
    } catch (err) {
      console.log(err);
      res.status(500).json(err); 


    };
}



const getExpense =async (req, res, next) => {
    try {
      const expenses = await Expense.findAll();
      res.status(200).json({ allExpense: expenses }); 
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
}


const editExpense = async (req, res, next) => {
    try {
      const expenseId = req.params.id;
      const amount = req.body.amount;
      const description = req.body.description;
      const category = req.body.category;
  
      const expense = await Expense.findByPk(expenseId);
      expense.amount = amount;
      expense.description = description;
      expense.category = category;
      await expense.save();
      res.status(200).json({ editedExpense: expense });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

const deleteExpense =  async (req, res, next) => {
    try {
      const expenseId = req.params.id;
      const expense = await Expense.findByPk(expenseId);
      console.log('expenseId:', expenseId);
      
      await expense.destroy();
      res.status(204).send(); 
     
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  
  



module.exports={
  addExpense,
  getExpense,
  editExpense,
  deleteExpense
}
