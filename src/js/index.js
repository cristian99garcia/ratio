var ratioBy = null;

var rectangleInputDiv;
var rectangleOutputDiv;
var fractionP;
var outputP;
var inputAreaDiv;

var radioWidth;
var radioHeight;

var inputWidthTag;
var inputHeightTag;
var inputDesiredTag;

var inputWidth = 0;
var inputHeight = 0;
var inputDesired = 0;
var numerator = 0;
var denominator = 0;

function getAvailableSpace() {
  const {
    width: screenWidth,
    height: screenHeight,
  } = window.screen;
  const { devicePixelRatio } = window;

  return [
    // screenWidth * devicePixelRatio,
    screenWidth,
    // screenHeight * devicePixelRatio - inputAreaDiv.offsetHeight,
    screenHeight - inputAreaDiv.offsetHeight,
  ];
}

function onRadioChanged(radio) {
  let hasToCalculate = ratioBy !== null;

  radioWidth.checked = radio === 'width';
  radioHeight.checked = radio === 'height';
  ratioBy = radio;

  if (hasToCalculate) {
    calculate();
  }
}

window.onload = () => {
  inputAreaDiv = document.getElementById('input-area');

  rectangleInputDiv = document.getElementById('rectangle-input');
  rectangleOutputDiv = document.getElementById('rectangle-output');
  fractionP = document.getElementById('fraction');
  outputP = document.getElementById('output');

  radioWidth = document.getElementById('dest-radio-width');
  radioHeight = document.getElementById('dest-radio-height');

  radioWidth.onchange = () => { onRadioChanged('width') };
  radioHeight.onchange = () => { onRadioChanged('height') };

  inputWidthTag = document.getElementById('input-width');
  inputHeightTag = document.getElementById('input-height');
  inputDesiredTag = document.getElementById('input-desired');

  inputWidthTag.onkeydown = function() {
    setTimeout(() => {
      calculate();
    }, 1);
  }

  inputHeightTag.onkeydown = function() {
    setTimeout(() => {
      calculate();
    }, 1);
  }

  inputDesiredTag.onkeydown = function() {
    setTimeout(() => {
      inputDesired = Number(inputDesiredTag.value);
      calculate();
    });
  }

  onRadioChanged('width');
}
