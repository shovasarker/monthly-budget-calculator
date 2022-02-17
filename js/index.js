let incomeValue = 0

// function for Displaying Error Message
function displayErrorMessage(message) {
  const displayContainer = document.getElementById('error-display-container')
  const errorDisplay = document.getElementById('error-display')
  errorDisplay.innerText = message
  // adding and removing tailwind-css class to the error display container
  displayContainer.classList.remove('hidden')
  displayContainer.classList.add('flex')
}

// function For Hiding Error Message
function hideErrorDisplay() {
  const displayContainer = document.getElementById('error-display-container')
  if (!displayContainer.classList.contains('hidden')) {
    displayContainer.classList.add('hidden')
    displayContainer.classList.remove('flex')
  }
}

// Function for Getting Input Value and Some Error Checking
function getInputValue(inputId) {
  const input = document.getElementById(inputId)
  const inputValueText = input.value
  const inputValue = parseInt(inputValueText)
  input.value = ''
  const displayName = inputId.split('-').join(' ').toUpperCase()
  // checking if input value is a number or not
  if (isNaN(inputValue)) {
    //Creating Error Message And Displaying it
    const message = 'Please Enter a Number in the ' + displayName + ' field'
    displayErrorMessage(message)
    input.focus()
    return -1
  }
  //checking for a positive number
  if (inputValue < 0) {
    //Creating Error Message And Displaying it
    const message =
      'Please Enter a Positive Number in the ' + displayName + ' field'
    displayErrorMessage(message)
    input.focus()
    return -1
  }
  return inputValue
}

// function for Displaying Calculated Value
function displayValue(displayId, value) {
  const display = document.getElementById(displayId)
  display.innerText = value
}

// function for getting calculated displayed value
function getDisplayedValue(displayId) {
  const display = document.getElementById(displayId)
  const displayValue = parseInt(display.innerText)
  if (isNaN(displayValue)) {
    //Creating Error Message And Displaying it
    const message = 'Please Calculate Balance First!'
    displayErrorMessage(message)
    return -1
  }
  return displayValue
}

// function for calculate Balance
function calculateBalance() {
  //Getting Input Values
  incomeValue = getInputValue('income-input')
  if (incomeValue === -1) return

  const foodValue = getInputValue('food-input')
  if (foodValue === -1) return

  const rentValue = getInputValue('rent-input')
  if (rentValue === -1) return

  const clothesValue = getInputValue('clothes-input')
  if (clothesValue === -1) return

  //Calculating total Expenses
  const totalExpenses = foodValue + rentValue + clothesValue

  //comparing totalExpense and incomevalue
  if (totalExpenses > incomeValue) {
    //Creating Error Message And Displaying it
    const message = "You don't have enough money for your Expenses."
    displayErrorMessage(message)
    return
  }
  //Calculating balance
  const balance = incomeValue - totalExpenses

  //displaying calculated value
  displayValue('total-expense-display', totalExpenses)
  displayValue('balance-display', balance)
  //hiding error display
  hideErrorDisplay()
}

//function for calculate savings
function calculateSavings() {
  //getting save-input
  const savingsValue = getInputValue('save-input')
  if (savingsValue === -1) return

  //calculating savings
  const savings = (incomeValue * savingsValue) / 100

  //getting balance value from balance-display
  const balance = getDisplayedValue('balance-display')
  if (balance === -1) return

  //checking if savings is bigger than balance or not
  if (savings > balance) {
    //Creating Error Message And Displaying it
    const message = "You don't have enough money for your savings."
    displayErrorMessage(message)
    document.getElementById('save-input').focus()
    return
  }

  //calculating remaining balance
  const remainingBalance = balance - savings

  //displaying calculated values
  displayValue('saving-amount-display', savings)
  displayValue('remaining-balance-display', remainingBalance)

  //hiding Error display
  hideErrorDisplay()
}
