let incomeValue = 0
function displayErrorMessage(message) {
  const displayContainer = document.getElementById('error-display-container')
  const errorDisplay = document.getElementById('error-display')
  errorDisplay.innerText = message
  displayContainer.classList.remove('hidden')
  displayContainer.classList.add('flex')
}

function hideErrorDisplay() {
  const displayContainer = document.getElementById('error-display-container')
  if (!displayContainer.classList.contains('hidden')) {
    displayContainer.classList.add('hidden')
    displayContainer.classList.remove('flex')
  }
}

function getInputValue(inputId) {
  const input = document.getElementById(inputId)
  const inputValueText = input.value
  const inputValue = parseInt(inputValueText)
  const displayName = inputId.split('-').join(' ').toUpperCase()
  if (isNaN(inputValue)) {
    const message = 'Please Enter a Number in the ' + displayName + ' field'
    displayErrorMessage(message)
    return -1
  }
  if (inputValue < 0) {
    const message =
      'Please Enter a Positive Number in the ' + displayName + ' field'
    displayErrorMessage(message)
    return -1
  }
  input.value = ''
  return inputValue
}

function displayValue(displayId, value) {
  const display = document.getElementById(displayId)
  display.innerText = value
}

function getDisplayedValue(displayId) {
  debugger
  const display = document.getElementById(displayId)
  const displayValue = parseInt(display.innerText)
  if (isNaN(displayValue)) {
    const message = 'Please Calculate Balance First!'
    displayErrorMessage(message)
    return -1
  }

  console.log(displayValue)
  return displayValue
}

function calculate() {
  incomeValue = getInputValue('income-input')
  if (incomeValue === -1) return

  const foodValue = getInputValue('food-input')
  if (foodValue === -1) return

  const rentValue = getInputValue('rent-input')
  if (rentValue === -1) return

  const clothesValue = getInputValue('clothes-input')
  if (clothesValue === -1) return

  const totalExpenses = foodValue + rentValue + clothesValue

  if (totalExpenses > incomeValue) {
    const message = "You don't have enough money for your Expenses."
    displayErrorMessage(message)
    return
  }

  displayValue('total-expense-display', totalExpenses)

  const balance = incomeValue - totalExpenses
  displayValue('balance-display', balance)
  hideErrorDisplay()
}

function savings() {
  const savingsValue = getInputValue('save-input')
  if (savingsValue === -1) return

  const savings = (incomeValue * savingsValue) / 100
  const balance = getDisplayedValue('balance-display')
  if (balance === -1) return

  if (savings > balance) {
    const message = "You don't have enough money for your savings."
    displayErrorMessage(message)
    return
  }
  const remainingBalance = balance - savings
  displayValue('saving-amount-display', savings)
  displayValue('remaining-balance-display', remainingBalance)
  hideErrorDisplay()
}
