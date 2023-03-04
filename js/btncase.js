function updateBtn(isNumber) {
  const btnField = document.getElementById("btn-case-field");
  const btnValue = btnField.value;
  const btnString = parseInt(btnValue);
  let newNumber;
  if (isNumber === true) {
    newNumber = btnString + 1;
  } else {
    newNumber = btnString - 1;
  }
  btnField.value = newNumber;
  return newNumber;
}

function updatePriceTotal(newNumber) {
  const total = newNumber * 1219;
  const textValue = document.getElementById("text-value");
  textValue.innerText = total;
}

document.getElementById("btn-plus").addEventListener("click", function () {
  const newNumber = updateBtn(true);
  updatePriceTotal(newNumber);
  calculateSubTotal();
});

document.getElementById("btn-meinus").addEventListener("click", function () {
  const newNumber = updateBtn(false);
  updatePriceTotal(newNumber);
  calculateSubTotal();
});

// subTotal.innerText = subTotalParse + newNumber;
