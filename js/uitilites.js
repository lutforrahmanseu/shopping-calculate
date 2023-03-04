function getTextElementById(elementId) {
  const textValue = document.getElementById(elementId);
  const textValueString = textValue.innerText;
  const textString = parseInt(textValueString);
  return textString;
}
function setTextElementById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function calculateSubTotal() {
  //subTotal
  const textString = getTextElementById("text-value");
  const textCaseTotal = getTextElementById("case-text");
  const subTotal = textString + textCaseTotal;
  setTextElementById("sub-total", subTotal);

  //Calculate text
  const textAmountString = (subTotal * 0.1).toFixed(2);
  const textAmount = parseFloat(textAmountString);

  setTextElementById("tax-total", textAmount);
  const finalAmount = subTotal + textAmount;
  setTextElementById("total-calculate", finalAmount);
}
