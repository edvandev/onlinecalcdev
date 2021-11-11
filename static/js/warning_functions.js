class Warning {
  constructor(colorOfCritical, colorOfCaution, colorOfReadyToSolve, colorOfBack, fontSize) {
    this.colorOfCritical = colorOfCritical;
    this.colorOfCaution = colorOfCaution;
    this.colorOfReadyToSolve = colorOfReadyToSolve;
    this.colorOfBack = colorOfBack;
    this.fontSize = fontSize;
  }
  show(codeOfCondition, mainCurrentColor) {
    var criticalColor = this.colorOfCritical;
    var cautionColor = this.colorOfCaution;
    var readyToSolveColor = this.colorOfReadyToSolve;
    var colorOfBackground = this.colorOfBack;
    var sizeLetters = this.fontSize;
    var x_color;
    var messageItself;
    function performColoring(warnLen, warnColor) {
      let pauseCoefficient = (100 - warnLen) / 10;//here needed some exponential function.
      let halfOfSentence = warnLen / 2;
      if (!Number.isInteger(halfOfSentence)) {
        halfOfSentence -= 0.5;
        var theNumberIsEven = 0;
      } else {var theNumberIsEven = 1;}
      let i;
      let ir;
      for (i = halfOfSentence, ir = halfOfSentence; i < warnLen + theNumberIsEven; i++, ir--) {
        let ii = i;
        let irr = ir;
        setTimeout(function(){
          try {document.getElementById('warningMessageSpanId_' + ii).style.color = warnColor;}
          catch {}
        }, ii*pauseCoefficient);
        setTimeout(function(){
          document.getElementById('warningMessageSpanId_' + irr).style.color = warnColor;
        }, ii*pauseCoefficient);
      }
    }
    conditionCode == 0 ? messageItself = sessionStorage.getItem("warningMessageInLegendOfForm_noNumber"):
    conditionCode == 1 ? messageItself = sessionStorage.getItem("warningMessageInLegendOfForm_negativeNumber"):
    conditionCode == 2 ? messageItself = sessionStorage.getItem("warningMessageInLegendOfForm_impossibleShape"):
    conditionCode == 3 ? messageItself = sessionStorage.getItem("warningMessageInLegendOfForm_canPartiallySolve"):
    conditionCode == 4 ? messageItself = sessionStorage.getItem("warningMessageInLegendOfForm_canSolve"):
    //conditionCode == 5 ? messageItself = sessionStorage.getItem("warningMessageInLegendOfForm_shapeSolved"):
    messageItself = null;
    mainCurrentColor == "red" ? x_color = criticalColor :
    mainCurrentColor == "orange" ? x_color = cautionColor :
    mainCurrentColor == "green" ? x_color = readyToSolveColor :
    x_color = "black";
    if (localStorage.getItem("colorPageBackgroundDefinitionForWarningMessageAnimation") != "light") {
      colorOfBackground = localStorage.getItem("colorPageBackgroundDefinitionForWarningMessageAnimation");
    } else {
      colorOfBackground = colorOfBackground;
    }
    document.getElementById("warningMessage").innerHTML = "";
    let lengthOfWarning = messageItself.length;
    let i;
    for (i=0; i < lengthOfWarning; i++) {
      let elem = document.createElement('SPAN');
      elem.setAttribute("id", 'warningMessageSpanId_' + i);
      elem.innerHTML = messageItself.charAt(i);
      elem.style.fontSize = sizeLetters;
      //elem.style.fontFamily = "'Jura', sans-serif;";
      elem.style.fontWeight = "bold";
      elem.style.color = colorOfBackground;//"red";
      document.getElementById("warningMessage").appendChild(elem);
    }
    performColoring(lengthOfWarning, x_color);
  }
  hide() {
    let element = document.getElementById("warningMessage");
    element.style.fontSize = null;
    element.style.fontFamily = null;
    element.style.fontWeight = null;
    element.style.color = null;
    //bi("warningMessage").style.fontFamily = "'Kanit', sans-serif";
    element.innerHTML = sessionStorage.getItem("warningMessageInLegendOfForm_noMessage");
  }
}





//.......
