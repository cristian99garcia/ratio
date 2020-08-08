function calculate() {
  inputWidth = Number(inputWidthTag.value);
  inputHeight = Number(inputHeightTag.value);

  let fraction = Math.simplifyFraction(inputWidth, inputHeight);
  numerator = fraction[0];
  denominator = fraction[1];

  let finalWidth;
  let finalHeight;

  if (inputWidth > 0 && inputHeight > 0) {
    let [ maxWidth, maxHeight ] = getAvailableSpace();

    if (maxWidth >= inputWidth && maxHeight > inputHeight) {
      finalWidth = inputWidth;
      finalHeight = inputHeight;

    } else if (inputWidth > maxWidth) {
      let candidate = maxWidth * numerator / denominator;

      if (candidate <= maxHeight) {
        finalWidth = maxWidth;
        finalHeight = candidate;
      } else {
        finalWidth = Math.min(maxHeight * numerator / denominator, maxWidth);
        finalHeight = maxHeight;
      }

    } else if (inputHeight > maxHeight) {
      let candidate = maxHeight * numerator / denominator;
      if (candidate <= maxWidth) {
        finalWidth = candidate;
        finalHeight = maxHeight;
      } else {
        finalWidth = maxWidth;
        finalHeight = Math.min(maxWidth * numerator / denominator, maxHeight);
      }
    }

    rectangleInputDiv.style.width = `${ finalWidth }px`;
    rectangleInputDiv.style.height = `${ finalHeight }px`;

    if (inputDesired > 0) {
      const borderWidth = 4;
      rectangleOutputDiv.style.borderWidth = `${ borderWidth }px`;

      if (ratioBy === 'width') {
        rectangleOutputDiv.style.width = `${ Math.min(inputDesired, maxWidth) - 2 * borderWidth }px`;
        rectangleOutputDiv.style.height = `${ Math.min(inputDesired / finalWidth * finalHeight) - 2 * borderWidth }px`;
        outputP.innerHTML = `Alto: ${ userFriendlyNumber(inputWidth / inputHeight * inputDesired) }`;
      } else if (ratioBy === 'height') {
        rectangleOutputDiv.style.width = `${ Math.min(inputDesired / finalHeight * finalWidth) - 2 * borderWidth }px`;
        rectangleOutputDiv.style.height = `${ Math.min(inputDesired, maxHeight) - 2 * borderWidth }px`;
        outputP.innerHTML = `Ancho: ${ userFriendlyNumber(inputHeight / inputWidth * inputDesired) }`;
      }
    }

    fractionP.innerHTML = `${ numerator }:${ denominator }`;
  } else {
    rectangleInputDiv.style.width = 0;
    rectangleInputDiv.style.height = 0;
    rectangleOutputDiv.style.width = 0;
    rectangleOutputDiv.style.height = 0;
    fractionP.innerHTML = '';
    outputP.innerHTML = '';
  }
}
