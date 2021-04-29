function assignCssVariables() {
  let now_used_mode = localStorage.getItem("used_color_mode");
  if (now_used_mode == "DARK") {
    let toCss = document.querySelector(':root');
    let backgroungOfWebPageAndForWarningPerform = "#000";
    toCss.style.setProperty('--backgroundColorOfTheWebPage', backgroungOfWebPageAndForWarningPerform);
    toCss.style.setProperty('--languageButtonOfTheWebPage', '#397391');
    toCss.style.setProperty('--languageButtonHoverFocusOfTheWebPage', '#2a4d85');
    toCss.style.setProperty('--languageSelectionAreaOfTheWebPage', '#111');
    toCss.style.setProperty('--minibuttonsAreaOfTheWebPage', '#354048');

    toCss.style.setProperty('--linksBoxOfTheWebPage', '#202636');
    toCss.style.setProperty('--linksBoxShadowOfTheWebPage', '#102636');
    toCss.style.setProperty('--linksOfTheWebPage', '#30709a');
    toCss.style.setProperty('--linkHoverAndDividersOfLinksOfTheWebPage', '#309ffa');
    toCss.style.setProperty('--h1textAndBackgroundOfBottomOfTheWebPage', '#35585f');
    toCss.style.setProperty('--h2textOfTheWebPage', '#455565');
    toCss.style.setProperty('--textUnderH2OfTheWebPage', '#455565');
    toCss.style.setProperty('--leftAndRightBottomTextOfTheWebPage', '#a1c6ff');
    toCss.style.setProperty('--centerBottomTextOfTheWebPage', '#789ab8');

    toCss.style.setProperty('--legendOfCalcForm', '#7a7a7a');
    toCss.style.setProperty('--labelOfCalcForm', '#7a7a7a');
    toCss.style.setProperty('--inactiveButtonsCalcForm', '#111');
    toCss.style.setProperty('--activeButtonsCalcForm', '#80929f');
    toCss.style.setProperty('--activeButtonsHoveredCalcForm', '#979aaf');
    toCss.style.setProperty('--buttonsTextCalcForm', '#252f49');
    let fieldsBordersColor = "#404143";
    toCss.style.setProperty('--borderOfFieldsCalcForm', fieldsBordersColor);
    toCss.style.setProperty('--normalShadowOfBorderFields', '#0a6fc2');
    let backgroundColorForFieldsOfForm = "#17191a";
    toCss.style.setProperty('--backgroundColorOfTextFieldsCalcForm', backgroundColorForFieldsOfForm);
  }
}

assignCssVariables();
