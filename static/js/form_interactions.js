var current = "triangle";
var color;
var reasonOfError;
var conditionCode;
var bi = function(id) {return document.getElementById(id);};
var bc = function(cl) {return document.getElementsByClassName(cl);};
var colorForSolvedFields = "rgb(49, 47, 57)";
var secondColorForSolvedFields = "rgb(69, 66, 80)";

var text = new Text(colorForSolvedFields, secondColorForSolvedFields);//THIS REFERS TO TEXT INSIDE FORM FIELDS WHERE A SHAPE CALCULATING.
var field = new Field("red", colorForSolvedFields, secondColorForSolvedFields);//THIS REFERS TO BORDER AND SHADOW OF THE FORM FIELDS. The attribute red used for blinking only.

var warning = new Warning("red", "yellow", "green", "white", "medium");

function checkInp(f_id) {
  field.coloringBackground(null, null, null);
  var [notNumberInput, some_fields_left, i] = [false, true, 0];
  while (some_fields_left == true && notNumberInput == false) {//name of var change to fieldsLeft.
    try {if (isNaN(bc("field-divided")[i].value)) {notNumberInput = true;}i++;}
    catch {some_fields_left = false;}
  }
  if (notNumberInput == false) {//NOT NUMBER SYMBOLS CHECK.
    var [negativeNumberInput, some_fields_left, i] = [false, true, 0];
    while (some_fields_left == true && negativeNumberInput == false) {
      try {if (bc("field-divided")[i].value < 0) {negativeNumberInput = true;}i++;}
      catch {some_fields_left = false;}
    }
    if (negativeNumberInput ==false) {//NEGATIVE NUMBER CHECK.
      var contradicts = impossibleShapeCheck(shapeType=current);
      if (contradicts == false) {//DATA CONTRADICTS CHECK.
        var readyToSolve = readyToSolveCheck(shapeType=current);
        if (readyToSolve == 1) {//SHAPE PARTIALLY READY TO SOLVE. Now is possible to press the submit button.
          color = "orange"; conditionCode = 3;
          sessionStorage.setItem("colorConditionOfCalculation", "orange");
          bi("submitbut").disabled = false;
          warningMessage = "Shape available for partially solve.";
        } else if (readyToSolve == 2) {//SHAPE FULLY READY TO SOLVE. Now it is possible to press the submit button.
          color = "green"; conditionCode = 4;
          sessionStorage.setItem("colorConditionOfCalculation", "green");
          var fLeft = true;
          var i = 0;
          var thereIsEmpty = false;
          while (fLeft == true) {
            try {
              var fDis = bc("field-divided")[i];
              if (fDis.disabled) {
              } else {
                var whatValue = bc("field-divided")[i].value;
                if (whatValue == "") {thereIsEmpty = true;}
              }
              i++;
            }
            catch {fLeft = false}
          }
          if (thereIsEmpty == true) {bi("submitbut").disabled = false;}
          warningMessage = "You can solve shape.";
        } else {//NOT ENOUGH DATA TO SOLVE SHAPE. Needed more data(i.e. needs fill out more fields, or clear some).
          color = "white";
          sessionStorage.setItem("colorConditionOfCalculation", "white");
          bi("submitbut").disabled = true;
          warningMessage = "..";
        }
      } else {//Input parameters contradicts each other. Means that shape cannot exists.
        color = "red"; conditionCode = 2;
        sessionStorage.setItem("colorConditionOfCalculation", "red");
        reasonOfError = 3; bi("submitbut").disabled = true;
        warningMessage = "IMPOSSIBLE SHAPE, THE INPUT DATA CONTRADICTS EACH OTHER. Input different data.";
      }
    } else {//Negative number has been input.
      color = "red"; conditionCode = 1;
      sessionStorage.setItem("colorConditionOfCalculation", "red");
      reasonOfError = 2; bi("submitbut").disabled = true;
      warningMessage = "NEGATIVE NUMBER(OR NUMBERS) DETECTED. Only input positive ones.";
    }
  } else {//Not a number symbol(or symbols) has been input. Or space(or spaces) between numbers detected.
    color = "red"; conditionCode = 0;
    sessionStorage.setItem("colorConditionOfCalculation", "red");
    reasonOfError = 1; bi("submitbut").disabled = true;
    warningMessage = "INAPROPRIATE CHARACTER(OR CHARACTERS) DETECTED. Input numbers only";
  }
  //bi("testColor").style.backgroundColor = color;//temporary, for testing.
  //bi("testMessage").innerHTML = warningMessage;//temprary, for testing.
  if (color == "red" || color == "yellow" || color == "green") {//here is issue about yellow color.
    if (sessionStorage.getItem("currentWarningMessageShown") != warningMessage) {
      warning.show(conditionCode, color);
      sessionStorage.setItem("currentWarningMessageShown", warningMessage);
    }
  } else {
    warning.hide();
    sessionStorage.setItem("currentWarningMessageShown", ".");
  }
  inField(f_id, ranByInp=true);
  var [some_fields_left, i, thereAllEmpty] = [true, 0, true];
  while (some_fields_left == true) {
    try {
      var containing = bc("field-divided")[i].value;
      if (containing != "") {thereAllEmpty = false;}
      i++;
    }
    catch {some_fields_left = false;}
  }
  if (thereAllEmpty == false) {bi("resetbut").disabled = false;}
  else {bi("resetbut").disabled = true;}
}

function inField(f_id, ranByInp) {
  text.coloring(color);
  var conditionOfDataInput = sessionStorage.getItem("conditionOfinput");
  field.coloring(f_id, reasonOfError, color, conditionOfDataInput);
  if(sessionStorage.getItem("conditionOfinput") == "solved") {field.coloringBackground(f_id, null, null)};
  if (ranByInp == true) {
    if (document.getElementById(f_id).value.length != 0) {
      displayCopyButton(f_id);
    } else {
      hideCopyButton(f_id);
    }
    sessionStorage.setItem("conditionOfinput", "not_solved");
  }
  if (color == "red" && ranByInp == true && reasonOfError != 3) {
    field.blinking(f_id, reasonOfError, resetButOrPageReload=false);
  }
}

function outField(f_id) {
  field.coloringBackground(f_id, true, sessionStorage.getItem("conditionOfinput"));
  //bi(f_id).style.boxShadow = "0 0 8px white"; bi(f_id).style.border = "1px solid #BEBEBE";
  bi(f_id).style.boxShadow = null; bi(f_id).style.border = null;
}

function resetBlinking() {
  field.blinking(f_id=null, reasonOfError=null, resetButOrPageReload=true);
}

function backcolor() {
  color = "white";
  sessionStorage.setItem("colorConditionOfCalculation", "white");
  var [some_fields_left, i] = [true, 0];
  while (some_fields_left == true) {
    try {bc("field-divided")[i].style.backgroundColor = null; i++;}
    catch {some_fields_left = false;}
  }
  //bi("testColor").style.backgroundColor = color;
  //bi("testMessage").innerHTML = "..";//temprary, for testing.
  bi("submitbut").disabled = true;
  bi("main_form").reset();
  bi("resetbut").disabled = true;
  resetBlinking();
  sessionStorage.setItem("conditionOfinput", "not_solved");
  prep();
  warning.hide();
  sessionStorage.setItem("currentWarningMessageShown", ".");
  hideAllCopyButtons();
}

function impossibleShapeCheck() {
  if (shapeType == "triangle") {
    var a = parseFloat(bi("field_s_a").value);
    var b = parseFloat(bi("field_s_b").value);
    var c = parseFloat(bi("field_s_c").value);
    var A = parseFloat(bi("field_a_A").value);
    var B = parseFloat(bi("field_a_B").value);
    var C = parseFloat(bi("field_a_C").value);
    var p = parseFloat(bi("field_peri").value);
    var sum_s_b_s_c = b + c;
    var sum_s_a_s_c = a + c;
    var sum_s_a_s_b = a + b;
    var sum_s_a_s_b_s_c = a + b + c;
    var radDegRatio = 180 / Math.PI
    var expr_angleAbySides = (radDegRatio * Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)));
    var expr_angleBbySides = (radDegRatio * Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)));
    var expr_angleCbySides = (radDegRatio * Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)));
    var sa_th_p_bc = p - (b + c);//side a through perimeter and sides b and c.
    var sb_th_p_ac = p - (a + c);
    var sc_th_p_ab = p - (a + b);
    var expr_angleAby2SidesandPeri_acp = (radDegRatio * Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(sb_th_p_ac, 2)) / (2 * a * c)));
    var expr_angleAby2SidesandPeri_abp = (radDegRatio * Math.acos((Math.pow(a, 2) + Math.pow(sc_th_p_ab, 2) - Math.pow(b, 2)) / (2 * a * sc_th_p_ab)));
    var expr_angleAby2SidesandPeri_cbp = (radDegRatio * Math.acos((Math.pow(sa_th_p_bc, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * sa_th_p_bc * c)));
    var expr_angleBby2SidesandPeri_bap = (radDegRatio * Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(sc_th_p_ab, 2)) / (2 * a * b)));
    var expr_angleBby2SidesandPeri_bcp = (radDegRatio * Math.acos((Math.pow(sa_th_p_bc, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * sa_th_p_bc * b)));
    var expr_angleBby2SidesandPeri_acp = (radDegRatio * Math.acos((Math.pow(a, 2) + Math.pow(sb_th_p_ac, 2) - Math.pow(c, 2)) / (2 * a * sb_th_p_ac)));
    var expr_angleCby2SidesandPeri_cbp = (radDegRatio * Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(sa_th_p_bc, 2)) / (2 * b * c)));
    var expr_angleCby2SidesandPeri_cap = (radDegRatio * Math.acos((Math.pow(sb_th_p_ac, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * sb_th_p_ac * c)));
    var expr_angleCby2SidesandPeri_bap = (radDegRatio * Math.acos((Math.pow(b, 2) + Math.pow(sc_th_p_ab, 2) - Math.pow(a, 2)) / (2 * b * sc_th_p_ab)));
    if (a > sum_s_b_s_c || b > sum_s_a_s_c || c > sum_s_a_s_b ||
      p < sum_s_b_s_c || p < sum_s_a_s_c || p < sum_s_a_s_b ||
      p < a || p < b || p < c ||
      p < sum_s_a_s_b_s_c || p > sum_s_a_s_b_s_c ||
      (p - sum_s_b_s_c) > sum_s_b_s_c || (p - sum_s_a_s_c) > sum_s_a_s_c ||
      (p - sum_s_a_s_b) > sum_s_a_s_b || p < (a * 2) ||
      p < (b * 2) || p < (c * 2) ||
      //.
      //Angles.
      A > 180 || B > 180 || C > 180 || (A + B) > 180 || (A + C) > 180 || (B + C) > 180 || (A + B + C) > 180 ||
      //.
      //Three sides and one angle.
      A > expr_angleAbySides + 0.01 || A < expr_angleAbySides - 0.01 ||
      B > expr_angleBbySides + 0.01 || B < expr_angleBbySides - 0.01 ||
      C > expr_angleCbySides + 0.01 || C < expr_angleCbySides - 0.01 ||
      //.
      //Perimeter, two sides and one angle.
      A > expr_angleAby2SidesandPeri_acp + 0.01 || A < expr_angleAby2SidesandPeri_acp - 0.01 ||
      A > expr_angleAby2SidesandPeri_abp + 0.01 || A < expr_angleAby2SidesandPeri_abp - 0.01 ||
      A > expr_angleAby2SidesandPeri_cbp + 0.01 || A < expr_angleAby2SidesandPeri_cbp - 0.01 ||

      B > expr_angleBby2SidesandPeri_bap + 0.01 || B < expr_angleBby2SidesandPeri_bap - 0.01 ||
      B > expr_angleBby2SidesandPeri_bcp + 0.01 || B < expr_angleBby2SidesandPeri_bcp - 0.01 ||
      B > expr_angleBby2SidesandPeri_acp + 0.01 || B < expr_angleBby2SidesandPeri_acp - 0.01 ||

      C > expr_angleCby2SidesandPeri_cbp + 0.01 || C < expr_angleCby2SidesandPeri_cbp - 0.01 ||
      C > expr_angleCby2SidesandPeri_cap + 0.01 || C < expr_angleCby2SidesandPeri_cap - 0.01 ||
      C > expr_angleCby2SidesandPeri_bap + 0.01 || C < expr_angleCby2SidesandPeri_bap - 0.01) {
        var resultToReturn = true;
      } else {
        var resultToReturn = false;
      }
  }
  return resultToReturn;
}

function readyToSolveCheck() {
  if (shapeType == "triangle") {
    function pF(x) {return parseFloat(bi(x).value);}//pF-Parse Float abbreviation.
    var a = pF("field_s_a");
    var b = pF("field_s_b");
    var c = pF("field_s_c");
    var A = pF("field_a_A");
    var B = pF("field_a_B");
    var C = pF("field_a_C");
    var p = pF("field_peri");
    function fC(x) {return Number.isFinite(x);}//fC-Finite Check abbreviation.
    var out;
    var ex;
    if (fC(a)&&fC(b)&&fC(c)){out=2;ex="___ABCp";} else if (fC(a)&&fC(b)&&fC(p)){out=2;ex="__cABC_";}

    // else if (fC(A) && fC(B) && fC(C)){var out = 2;} else if (fC(A) && fC(B) && fC(C)){var out = 2;}
    // else if (fC(A) && fC(B) && fC(C)){var out = 2;} else if (fC(A) && fC(B) && fC(C)){var out = 2;}
    // else if (fC(A) && fC(B) && fC(C)){var out = 2;} else if (fC(A) && fC(B) && fC(C)){var out = 2;}
    // else if (fC(A) && fC(B) && fC(C)){var out = 2;} else if (fC(A) && fC(B) && fC(C)){var out = 2;}

    else if (fC(A) && fC(B) && fC(C)){var out = 1;}
    else {out = 0;}

    bi("field_current_excessed_data").value = ex;
  }
  return out;
}

//................
