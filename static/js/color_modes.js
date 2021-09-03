function showColorMode(mode_light, mode_dark) {
  var now_mode = localStorage.getItem("used_color_mode");
  if (now_mode == null) {
    now_mode = "LIGHT";
  }
  if (now_mode == "LIGHT") {
    document.getElementById("todarkorlightbutton").innerHTML = mode_light;
    sessionStorage.setItem("textOfColorModeButtonMini", mode_light);
    //showTextTitle();
    //document.body.style.background = "white";
    localStorage.setItem("colorPageBackgroundDefinitionForWarningMessageAnimation", "light");
    localStorage.setItem("normalTextColorInFormFields", "#000");
    localStorage.setItem("backgroundOfTextFieldsForColoringFunctionCalcForm", "#fff");
    localStorage.setItem("shadowColorOfFieldsWhenRedInputExceptWhereReasonOfRed", "#fff");
    localStorage.setItem("borderColorOfFieldsWhenRedInputExceptWhereReasonOfRed", "#bebebe");
  } else {
    document.getElementById("todarkorlightbutton").innerHTML = mode_dark;
    sessionStorage.setItem("textOfColorModeButtonMini", mode_dark);
    //showTextTitle();
    //document.body.style.background = "#232729";
    // var toCss = document.querySelector(':root');
    let backgroungOfWebPageAndForWarningPerform = "#000";
    // toCss.style.setProperty('--backgroundColorOfTheWebPage', backgroungOfWebPageAndForWarningPerform);
    // toCss.style.setProperty('--languageButtonOfTheWebPage', '#397391');
    // toCss.style.setProperty('--languageButtonHoverFocusOfTheWebPage', '#2a4d85');
    // toCss.style.setProperty('--languageSelectionAreaOfTheWebPage', '#111');
    // toCss.style.setProperty('--minibuttonsAreaOfTheWebPage', '#354048');
    document.getElementById("todarkorlightbutton").classList.add("color_mode_button_and_mobile_button_darkStyle");
    document.getElementById("tomobilebutton").classList.add("color_mode_button_and_mobile_button_darkStyle");
    // toCss.style.setProperty('--linksBoxOfTheWebPage', '#202636');
    // toCss.style.setProperty('--linksBoxShadowOfTheWebPage', '#102636');
    // toCss.style.setProperty('--linksOfTheWebPage', '#30709a');
    // toCss.style.setProperty('--linkHoverAndDividersOfLinksOfTheWebPage', '#309ffa');
    // toCss.style.setProperty('--h1textAndBackgroundOfBottomOfTheWebPage', '#35585f');
    // toCss.style.setProperty('--h2textOfTheWebPage', '#455565');
    // toCss.style.setProperty('--textUnderH2OfTheWebPage', '#455565');
    // toCss.style.setProperty('--leftAndRightBottomTextOfTheWebPage', '#a1c6ff');
    // toCss.style.setProperty('--centerBottomTextOfTheWebPage', '#789ab8');
    localStorage.setItem("colorPageBackgroundDefinitionForWarningMessageAnimation", backgroungOfWebPageAndForWarningPerform);
    try {document.getElementById("fieldsetOfCalc").classList.add("fieldsetCalcDarkMode");} catch {}
    //document.getElementById("fieldsetOfCalc").classList.add("fieldsetCalcDarkMode");
    // toCss.style.setProperty('--legendOfCalcForm', '#7a7a7a');
    // toCss.style.setProperty('--labelOfCalcForm', '#7a7a7a');
    // toCss.style.setProperty('--inactiveButtonsCalcForm', '#111');
    // toCss.style.setProperty('--activeButtonsCalcForm', '#80929f');
    // toCss.style.setProperty('--activeButtonsHoveredCalcForm', '#979aaf');
    // toCss.style.setProperty('--buttonsTextCalcForm', '#252f49');
    let fieldsBordersColor = "#404143";
    // toCss.style.setProperty('--borderOfFieldsCalcForm', fieldsBordersColor);
    // toCss.style.setProperty('--normalShadowOfBorderFields', '#0a6fc2');
    let backgroundColorForFieldsOfForm = "#17191a";
    // toCss.style.setProperty('--backgroundColorOfTextFieldsCalcForm', backgroundColorForFieldsOfForm);
    localStorage.setItem("backgroundOfTextFieldsForColoringFunctionCalcForm", backgroundColorForFieldsOfForm);
    localStorage.setItem("normalTextColorInFormFields", "#169bff");
    localStorage.setItem("shadowColorOfFieldsWhenRedInputExceptWhereReasonOfRed", backgroungOfWebPageAndForWarningPerform);
    localStorage.setItem("borderColorOfFieldsWhenRedInputExceptWhereReasonOfRed", fieldsBordersColor);

    try {
      document.getElementById("field_s_a_copy_button").classList.add("copy_button_DarkMode");
      document.getElementById("field_s_b_copy_button").classList.add("copy_button_DarkMode");
      document.getElementById("field_s_c_copy_button").classList.add("copy_button_DarkMode");
      document.getElementById("field_a_A_copy_button").classList.add("copy_button_DarkMode");
      document.getElementById("field_a_B_copy_button").classList.add("copy_button_DarkMode");
      document.getElementById("field_a_C_copy_button").classList.add("copy_button_DarkMode");
      document.getElementById("field_peri_copy_button").classList.add("copy_button_DarkMode");
    }
    catch {
      //...
    }
  }
}

function toDarkOrLight() {
  var to_dark_or_light = localStorage.getItem("used_color_mode");

  if (to_dark_or_light == "LIGHT") {
    var switch_mode_message = to_dark_message;
    var set_mode = "DARK";
  }

  if (to_dark_or_light == "DARK") {
    var switch_mode_message = to_light_message;
    var set_mode = "LIGHT";
  }

  if (to_dark_or_light == null) {var switch_mode_message = to_dark_message; var set_mode = "DARK";}

  if (confirm(switch_mode_message)) {
    localStorage.setItem("used_color_mode", set_mode);
    location.reload();
  }
}
