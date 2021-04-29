var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawPartOfShape(partType, pLine, pArc) {
  if (partType == 1) {
    var [color, width, x1, y1, x2, y2] = [pLine[0], pLine[1], pLine[2], pLine[3], pLine[4], pLine[5]];
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  if (partType == 2) {
    var [color, width, p1, p2, p3, p4, p5] = [pArc[0], pArc[1], pArc[2], pArc[3], pArc[4], pArc[5], pArc[6]];
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(p1, p2, p3, p4, p5 * Math.PI);
    ctx.stroke();
  }
  if (partType == 3) {
    ctx.beginPath();
    ctx.moveTo(140, 15);
    ctx.lineTo(25, 205);
    ctx.lineTo(265, 205);
    ctx.fillStyle = "blue";
    ctx.fill();
    makeAllInactive(true);
  }
}

function makeAllInactive(onlyLettersDo) {
  ctx.font = "18px Arial";
  ctx.fillStyle = "LightGrey";
  ctx.fillText("A", 7, 210);
  ctx.fillText("B", 119, 20);
  ctx.fillText("C", 271, 210);
  ctx.font = "17px Arial";
  ctx.fillStyle = "LightGrey";
  ctx.fillText("a", 66, 110);
  ctx.fillText("b", 209, 110);
  ctx.fillText("c", 140, 200);
  if (onlyLettersDo != true) {
    drawPartOfShape(partType=1, ["LightGrey", 3, 140, 15, 25, 205], null);
    drawPartOfShape(partType=1, ["LightGrey", 3, 140, 15, 265, 205], null);
    drawPartOfShape(partType=1, ["LightGrey", 3, 25, 205, 265, 205], null);
    drawPartOfShape(partType=2, null, ["LightGrey", 3, 25, 205, 35, -1, 0]);
    drawPartOfShape(partType=2, null, ["LightGrey", 3, 140, 15, 35, 1, 0.66]);
    drawPartOfShape(partType=2, null, ["LightGrey", 3, 265, 205, 35, -3.1, -2.7]);
  }
}

function clearParts() {
  ctx.clearRect(1, 1, 287, 210);
}

function prep() {
  clearParts();
  makeAllInactive();
}

function performActive(signOfLetter, xPosLetter, yPosLetter, clear1pos, clear2pos, clear3pos, clear4pos, idForPerformActive, periOrAreaChosen) {
  var i;
  var rC_rgb = 218.04;
  var gC_rgb = 218.04;
  var bC_rgb = 209.53;
  var colorsForLetters = [];
  var colorsForLettersR = [];
  var colorsForLettersG = [];
  var bCgotPeak = false;
  function ascending(xC, amountAscDesc) {return xC + amountAscDesc}
  function descending(xC, amountAscDesc) {return xC - amountAscDesc}
  for (i = 0; i < 60; i++) {
    if (bCgotPeak == false) {
      bC_rgb = ascending(bC_rgb, 1.4666);
      gC_rgb = descending(gC_rgb, 7.0333);
      rC_rgb = descending(rC_rgb, 7.0333);
      colorsForLetters.push(String("rgb("+rC_rgb+","+gC_rgb+","+bC_rgb+")"));
      colorsForLettersR.push(String("rgb("+bC_rgb+","+gC_rgb+","+rC_rgb+")"));
      colorsForLettersG.push(String("rgb("+rC_rgb+","+bC_rgb+","+gC_rgb+")"));
      if (bC_rgb > 254) {bCgotPeak = true}
    }
    if (bCgotPeak == true) {
      bC_rgb = descending(bC_rgb, 1.4666);
      gC_rgb = ascending(gC_rgb, 7.0333);
      rC_rgb = ascending(rC_rgb, 7.0333);
      colorsForLetters.push(String("rgb("+rC_rgb+","+gC_rgb+","+bC_rgb+")"));
      colorsForLettersR.push(String("rgb("+bC_rgb+","+gC_rgb+","+rC_rgb+")"));
      colorsForLettersG.push(String("rgb("+rC_rgb+","+bC_rgb+","+gC_rgb+")"));
    }
  }
  var frequency = 28;
  var colorCounter = 0;
  function litupColor(colorToLitUp) {
    ctx.clearRect(clear1pos, clear2pos, clear3pos, clear4pos);
    if (periOrAreaChosen == true) {
      ctx.font = "bold 36px Arial";
    } else {
      ctx.font = "bold 21px Arial";
    }
    ctx.fillStyle = colorToLitUp;
    ctx.fillText(signOfLetter, xPosLetter, yPosLetter);
    colorCounter++;
    if (colorCounter >= colorsForLetters.length) {
      colorCounter = 0;
    }
  }
  var colorsForLetters_rgb;
  function drawAnotherColor() {
    if (sessionStorage.getItem("colorConditionOfCalculation") == "white") {
      colorsForLetters_rgb = colorsForLetters;
    } else if (sessionStorage.getItem("colorConditionOfCalculation") == "red") {
      colorsForLetters_rgb = colorsForLettersR;
    } else if (sessionStorage.getItem("colorConditionOfCalculation") == "green") {
      colorsForLetters_rgb = colorsForLettersG;
    } else if (sessionStorage.getItem("colorConditionOfCalculation") == "orange") {
      colorsForLetters_rgb = colorsForLetters;
    } else {colorsForLetters_rgb = colorsForLetters;}
    litupColor(colorsForLetters_rgb[colorCounter]);
    if (document.getElementById(idForPerformActive) === document.activeElement && document.hasFocus()) {
      setTimeout(drawAnotherOneColor, frequency);
    } else {
      sessionStorage.setItem("blinkingDrawTri", "");
      ctx.clearRect(clear1pos, clear2pos, clear3pos, clear4pos);
      makeAllInactive(true);
    }
  }
  function drawAnotherOneColor () {
    litupColor(colorsForLetters_rgb[colorCounter]);
    setTimeout(drawAnotherColor, frequency);
  }
  ctx.clearRect(clear1pos, clear2pos, clear3pos, clear4pos);
  litupColor(colorsForLetters[colorCounter]);
  setTimeout(drawAnotherColor, frequency);
}

makeAllInactive();

function doStuff(fieldWorkingOn, typeOfPart, isThisPeri, arrLine, arrArc, arrForPerform) {
  var namesFields = ["field_s_a", "field_s_b", "field_s_c", "field_a_A", "field_a_B", "field_a_C",
  "field_peri", "field_area"];
  var namesFieldsAbbr = ["s_a", "s_b", "s_c", "a_A", "a_B", "a_C", "peri", "area"];
  var lettersForTri = ["a", "b", "c", "A", "B", "C", "P", "S"];
  var id_fieldForDraw = namesFields[fieldWorkingOn];
  prep();
  if (isThisPeri == true) {
    drawPartOfShape(partType=1, ["blue", 4, 140, 15, 25, 205], null);
    drawPartOfShape(partType=1, ["blue", 4, 140, 15, 265, 205], null);
    drawPartOfShape(partType=1, ["blue", 4, 25, 205, 265, 205], null);
  }
  if (isThisPeri != true) {
    if (typeOfPart == 3) {
      setTimeout(function() {drawPartOfShape(partType=typeOfPart, arrLine, arrArc);}, 59);
    } else {drawPartOfShape(partType=typeOfPart, arrLine, arrArc);}
  }
  var blinkingDraw = sessionStorage.getItem("blinkingDrawTri");
  if (blinkingDraw != namesFieldsAbbr[fieldWorkingOn]) {
    setTimeout(function() {sessionStorage.setItem("blinkingDrawTri",
    namesFieldsAbbr[fieldWorkingOn]);}, 50);
    if (fieldWorkingOn == 6 || fieldWorkingOn == 7) {
      var periOrAreaHasChosen = true;
    } else {
      var periOrAreaHasChosen = false;
    }
    performActive(lettersForTri[fieldWorkingOn], arrForPerform[0], arrForPerform[1],
      arrForPerform[2], arrForPerform[3], arrForPerform[4], arrForPerform[5], id_fieldForDraw,
      periOrAreaHasChosen);
  }
}

function drawTriangle(which_canv_color) {
  var canOrCannotBeRanDrawTri = sessionStorage.getItem("conditionOfinput");
  if (canOrCannotBeRanDrawTri == "not_solved") {
    if (which_canv_color == "side_a") {doStuff(0, 1, null,
      ["blue", 4, 140, 15, 25, 205], null, [66, 110, 60, 94, 18, 18]);}
    else if (which_canv_color == "side_b") {doStuff(1, 1, null,
      ["blue", 4, 140, 15, 265, 205], null, [210, 110, 207, 94, 18, 18]);}
    else if (which_canv_color == "side_c") {doStuff(2, 1, null,
      ["blue", 4, 25, 205, 265, 205], null, [140, 200, 136, 184, 18, 18]);}
    else if (which_canv_color == "angle_A") {doStuff(3, 2, null,
      null, ["blue", 4, 25, 205, 35, -1, 0], [7, 210, 5, 194, 17, 17]);}
    else if (which_canv_color == "angle_B") {doStuff(4, 2, null,
      null, ["blue", 4, 140, 15, 35, 1, 0.65], [119, 20, 117, 4, 17, 17]);}
    else if (which_canv_color == "angle_C") {doStuff(5, 2, null,
      null, ["blue", 4, 265, 205, 35, -3.1, -2.7], [271, 210, 270, 194, 17, 17]);}
    else if (which_canv_color == "perimeter") {doStuff(6, null, true,
      null, null, [35, 50, 20, 18, 60, 60]);}
    else if (which_canv_color == "area") {doStuff(7, 3, null,
      null, null, [35, 50, 20, 18, 60, 60]);}
    else {prep();}
  }
}

function drawSolved(dataOfSolvedShape) {
  prep();

  function drawLettersWhenSolved(charDrawSolved, charSolved_x, charSolved_y, charDrawSolved_font,
    clearCharSolved_x1, clearCharSolved_y1, clearCharSolved_x2, clearCharSolved_y2) {

    ctx.clearRect(clearCharSolved_x1, clearCharSolved_y1, clearCharSolved_x2, clearCharSolved_y2);
    //ctx.shadowColor = "green";
    //ctx.shadowBlur = 15;
    ctx.font = charDrawSolved_font;
    ctx.fillStyle = "#945";
    ctx.fillText(charDrawSolved, charSolved_x, charSolved_y);
  }

  var dataSolvedOnlyNeededNumber = dataOfSolvedShape.length / 2;
  var dataDrawSolvedParts = [];
  for (i = dataSolvedOnlyNeededNumber; i < dataOfSolvedShape.length; i++) {
    dataDrawSolvedParts.push(dataOfSolvedShape[i]);
  }
  if (dataDrawSolvedParts[0] == 1) {
    drawPartOfShape(1, ["#945", 4, 140, 15, 25, 205], null);
    drawLettersWhenSolved("a", 66, 110, "bold 21px Arial", 60, 94, 18, 18);
  }
  if (dataDrawSolvedParts[1] == 1) {
    drawPartOfShape(1, ["#945", 4, 140, 15, 265, 205], null);
    drawLettersWhenSolved("b", 209, 110, "bold 21px Arial", 207, 94, 18, 18);
  }
  if (dataDrawSolvedParts[2] == 1) {
    drawPartOfShape(1, ["#945", 4, 25, 205, 265, 205], null);
    drawLettersWhenSolved("c", 140, 200, "bold 21px Arial", 136, 184, 18, 18);
  }
  if (dataDrawSolvedParts[3] == 1) {
    drawPartOfShape(2, null, ["#945", 4, 25, 205, 35, -1, 0]);
    drawLettersWhenSolved("A", 7, 210, "bold 21px Arial", 5, 194, 17, 17);
  }
  if (dataDrawSolvedParts[4] == 1) {
    drawPartOfShape(2, null, ["#945", 4, 140, 15, 35, 1, 0.65]);
    drawLettersWhenSolved("B", 119, 20, "bold 21px Arial", 117, 4, 17, 17);
  }
  if (dataDrawSolvedParts[5] == 1) {
    drawPartOfShape(2, null, ["#945", 4, 265, 205, 35, -3.1, -2.7]);
    drawLettersWhenSolved("C", 271, 210, "bold 21px Arial", 270, 194, 17, 17);
  }
  if (dataDrawSolvedParts[6] == 1) {
    drawPartOfShape(1, ["#945", 4, 51, 15, 15, 75], null);
    drawPartOfShape(1, ["#945", 4, 51, 15, 87, 75], null);
    drawPartOfShape(1, ["#945", 4, 15, 75, 87, 75], null);
    drawLettersWhenSolved("P", 39, 65, "bold 36px Arial", null, null, null, null);
  }
  if (dataDrawSolvedParts[7] == 1) {
    drawPartOfShape(3, null, null);
  }
}

//...
