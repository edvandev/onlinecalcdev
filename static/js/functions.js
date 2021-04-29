class Text {
  constructor(solvedColor_1, solvedColor_2) {
    this.solvedColor_1 = solvedColor_1;
    this.solvedColor_2 = solvedColor_2;
  }
  coloring(currentColor) {
    var colorOfSolved_1 = this.solvedColor_1;
    var colorOfSolved_2 = this.solvedColor_2;
    if (currentColor != "red" && currentColor != "green" && currentColor != "orange") {
      var colorOfTextInForm = localStorage.getItem("normalTextColorInFormFields");
    }
    else {var colorOfTextInForm = currentColor;}
    var [some_fields_left, i] = [true, 0];
    while (some_fields_left == true) {
      try {
        var toUseColorText;
        var nowColor = bc("field-divided")[i].style.backgroundColor;
        if (nowColor == colorOfSolved_1 || nowColor == colorOfSolved_2) {toUseColorText = "white";}
        else {toUseColorText = colorOfTextInForm;}
        bc("field-divided")[i].style.color = toUseColorText; i++;
      }
      catch {some_fields_left = false;}
    }
  }
}

class Field {
  constructor(errorColor, solvedColor, solvedColor2) {
    this.errorColor = errorColor;
    this.solvedColor = solvedColor;
    this.solvedColor2 = solvedColor2;
  }
  coloring(field_id, reasonOfRedColor, colorOfCondition, conditionInput) {
    var inputCondition = conditionInput;
    var sha;
    var bor;
    var f_id = field_id;
    var reasonOfError = reasonOfRedColor;
    var color = colorOfCondition;
    var valueOfField = bi(f_id).value;
    var colorOfSolved = this.solvedColor;
    function coloring(sha, bor) {
      bi(f_id).style.boxShadow = "0 0 8px " + sha; bi(f_id).style.border = "1px solid " + bor;
    }
    if (color == "red") {
      if (reasonOfError == 1 && isNaN(valueOfField)) {coloring(sha=color, bor=color);}
      else if (reasonOfError == 2 && valueOfField < 0) {coloring(sha=color, bor=color);}
      else if (reasonOfError == 3 && valueOfField != "") {coloring(sha=color, bor=color);}
      else {coloring(sha=localStorage.getItem("shadowColorOfFieldsWhenRedInputExceptWhereReasonOfRed"),
      bor=localStorage.getItem("borderColorOfFieldsWhenRedInputExceptWhereReasonOfRed"));}
    }
    else if (color == "orange") {coloring(sha=color, bor=color);}
    else if (color == "green" && valueOfField != "") {
      if (inputCondition == "solved") {
        bi(f_id).style.backgroundColor == colorOfSolved ? coloring(sha=colorOfSolved, bor=colorOfSolved) : coloring(sha="white", bor="#BEBEBE");
        //coloring(sha="white", bor="#BEBEBE");
      } else {
        coloring(sha=color, bor=color);
      }
    }
    else {bi(f_id).style.boxShadow = null; bi(f_id).style.border = null;}
  }
  coloringBackground(field_id_forBackground, ranByFocusOut, hasShapeSolved) {
    var colorOfSolved = this.solvedColor;
    var colorOfSolved2 = this.solvedColor2;
    var ranByOutField = ranByFocusOut;
    var shapeSolved = hasShapeSolved;
    var f_id_b = field_id_forBackground;
    if (ranByOutField == true && shapeSolved == "solved" && bi(f_id_b).style.backgroundColor == colorOfSolved2) {
      bi(f_id_b).style.backgroundColor = colorOfSolved;
    } else {
      if (f_id_b == null) {
        var allFields;
        var whichFields;
        var backgroundFieldsColor = localStorage.getItem("backgroundOfTextFieldsForColoringFunctionCalcForm");
        var fieldsLeft = true;
        var i = 0;
        while (fieldsLeft == true) {
          try {
            bc("field-divided")[i].style.backgroundColor = backgroundFieldsColor;
            i++;
          }
          catch {fieldsLeft = false;}
        }
      } else {
        if (bi(f_id_b).style.backgroundColor == colorOfSolved) {
          bi(f_id_b).style.backgroundColor = colorOfSolved2;
        }
      }
    }
  }
  blinking(field_idForBlinking, reasonOfRedForBlinking, ranByResetButtonOrPageReload) {
    var badColor = this.errorColor;
    var ranByReset = ranByResetButtonOrPageReload;
    if (ranByReset == true) {
      sessionStorage.setItem("whichFieldHadBkinkingLast", "");
    } else {
      var f_id = field_idForBlinking;
      var reasonOfError = reasonOfRedForBlinking;
      var lastBlinkingEndedTime = Date.parse(sessionStorage.getItem("timeOfEndOfLastBlinking"));
      var dateAndTimeNow = new Date();
      var diffLastBlinkAndNow = dateAndTimeNow - lastBlinkingEndedTime;
      var blinkingNowCondition = sessionStorage.getItem("fieldsBlinkingNow");
      var whichFieldBlinkedLast = sessionStorage.getItem("whichFieldHadBkinkingLast");
      if ((isNaN(lastBlinkingEndedTime) || diffLastBlinkAndNow > 1200) &&
      (blinkingNowCondition == "no" || blinkingNowCondition == null) &&
      (whichFieldBlinkedLast != f_id || whichFieldBlinkedLast == null || whichFieldBlinkedLast == "")) {
        var idsForBlinking = ["","","","","","","","","",""];//probably not this amount of elements in list should be.
        var allowToRunBlink = true;
        if (reasonOfError == 1) {
          var [fieldsLeft, i] = [true, 0];
          while (fieldsLeft == true) {
            try {
              var valField = bc("field-divided")[i].value; var blinkId = bc("field-divided")[i].id;
              if (isNaN(valField) && blinkId != f_id) {idsForBlinking[i] = blinkId;}
              if (isNaN(valField) && blinkId == f_id) {allowToRunBlink = false; break;}
              i++;
            }
            catch {fieldsLeft = false;}
          }
        }
        if (reasonOfError == 2) {
          var [fieldsLeft, i] = [true, 0];
          while (fieldsLeft == true) {
            try {
              var valField = bc("field-divided")[i].value; var blinkId = bc("field-divided")[i].id;
              if (valField < 0 && blinkId != f_id) {idsForBlinking[i] = blinkId;}
              if (valField < 0 && blinkId == f_id) {allowToRunBlink = false; break;}
              i++;
            }
            catch {fieldsLeft = false;}
          }
        }
        if (allowToRunBlink == true) {
          sessionStorage.setItem("fieldsBlinkingNow", "yes");
          blinkChangeColor1();
        }
        var countBlinks = 1;
        var listIsNotEmpty = false;
        function blinkChangeColor1() {
          var i;
          for (i = 0; i < idsForBlinking.length; i++) {
            if (idsForBlinking[i] != "") {
              listIsNotEmpty = true;
              bi(idsForBlinking[i]).style.boxShadow = "0 0 8px " + badColor;
              bi(idsForBlinking[i]).style.border = "1px solid " + badColor;
            }
          }
          countBlinks += 1;
          if (listIsNotEmpty == true) {setTimeout(blinkChangeColor2, 250);}
        }
        function blinkChangeColor2() {
          var i;
          for (i = 0; i < idsForBlinking.length; i++) {
            if (idsForBlinking[i] != "") {
              bi(idsForBlinking[i]).style.boxShadow = null;
              bi(idsForBlinking[i]).style.border = null;
            }
          }
          if (countBlinks < 3) {
            setTimeout(blinkChangeColor1, 250);
          } else {
            var dateAndTimeOfEndBlinking = new Date();
            sessionStorage.setItem("timeOfEndOfLastBlinking", dateAndTimeOfEndBlinking);
            sessionStorage.setItem("fieldsBlinkingNow", "no");
            sessionStorage.setItem("whichFieldHadBkinkingLast", f_id);
          }
        }
      }
    }
  }
}

//.......