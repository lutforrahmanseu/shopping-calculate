function updateCase(isIncrease) {
  const caseField = document.getElementById("case-btn-field");
  const caseBtnValue = caseField.value;
  const caseBtnString = parseInt(caseBtnValue);
  let prevCaseNumber;

  if (isIncrease === true) {
    prevCaseNumber = caseBtnString + 1;
  } else {
    prevCaseNumber = caseBtnString - 1;
  }
  caseField.value = prevCaseNumber;
  return prevCaseNumber;
}
function updateCaseTotalPrice(prevCaseNumber) {
  const caseTotal = prevCaseNumber * 59;
  const caseTotalPrice = document.getElementById("case-text");
  caseTotalPrice.innerText = caseTotal;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const prevCaseNumber = updateCase(true);
  updateCaseTotalPrice(prevCaseNumber);
  calculateSubTotal();
});

document
  .getElementById("case-btn-mainus")
  .addEventListener("click", function () {
    const prevCaseNumber = updateCase(false);
    updateCaseTotalPrice(prevCaseNumber);
    calculateSubTotal();
  });
