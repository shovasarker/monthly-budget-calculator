let incomeValue = 0

function getInputValue(inputId) {
  const input = document.getElementById(inputId)
  const inputValueText = input.value
  const inputValue = parseInt(inputValueText)
  const displayName = inputId.split('-').join(' ').toUpperCase()
  if (isNaN(inputValue)) {
    return -1
  }
  if (inputValue < 0) {
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
    return
  }

  displayValue('total-expense-display', totalExpenses)

  const balance = incomeValue - totalExpenses
  displayValue('balance-display', balance)
}

function savings() {
  const savingsValue = getInputValue('save-input')
  if (savingsValue === -1) return

  const savings = (incomeValue * savingsValue) / 100
  console.log(savings)

  const balance = getDisplayedValue('balance-display')
  console.log(balance)
  if (balance === -1) return

  if (savings > balance) {
    return
  }
  const remainingBalance = balance - savings
  displayValue('saving-amount-display', savings)
  displayValue('remaining-balance-display', remainingBalance)
}
