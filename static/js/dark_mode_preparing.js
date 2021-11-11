

function copyButtonsInDarkMode() {
  let toCss = document.querySelector(':root');
  const endsOfCssVarNames = ["", "2", "3", "4", "5", "6", "7"];
  let lh = endsOfCssVarNames.length;
  for (i=0; i < lh; i++) {
    toCss.style.setProperty('--copyButtonsText' + endsOfCssVarNames[i], '#687589');
    toCss.style.setProperty('--copyButtonsBorder' + endsOfCssVarNames[i], '#353535');
    toCss.style.setProperty('--copyButtonsBackground' + endsOfCssVarNames[i], '#161616');
  }
}



function assignCssVariables() {
  let now_used_mode = localStorage.getItem("used_color_mode");
  if (now_used_mode == "DARK") {
    let toCss = document.querySelector(':root');
    let backgroungOfWebPageAndForWarningPerform = "#111113";
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
    toCss.style.setProperty('--activeButtonsCalcForm', '#bbb');
    toCss.style.setProperty('--activeButtonsHoveredCalcForm', '#dcdcdc');
    toCss.style.setProperty('--buttonsTextCalcForm', '#252f39');
    let fieldsBordersColor = "#323232";
    toCss.style.setProperty('--borderOfFieldsCalcForm', fieldsBordersColor);
    localStorage.setItem("borderColorOfInputFields_forDefaultCondition", fieldsBordersColor);



    toCss.style.setProperty('--normalShadowOfBorderFields', '#0a6fc2');
    let backgroundColorForFieldsOfForm = "#111113";
    toCss.style.setProperty('--backgroundColorOfTextFieldsCalcForm', backgroundColorForFieldsOfForm);
    localStorage.setItem("backgroundColorOfTextFieldsCalcForm_forNonShadow", backgroundColorForFieldsOfForm);

    let placeholdersInFieldsWhenCursorNotInFieldvar = "#313742";
    toCss.style.setProperty('--placeholdersInFieldsWhenCursorNotInField', placeholdersInFieldsWhenCursorNotInFieldvar);

    toCss.style.setProperty('--linesOfDisabledFields', '#252525');










    let fieldsetBackground_feedbackvar = "#071120";
    toCss.style.setProperty('--fieldsetBackground-feedback', fieldsetBackground_feedbackvar);

    let legend_feedbackvar = "#0a8fd6";
    toCss.style.setProperty('--legend-feedback', legend_feedbackvar);

    let beneathTheLegendMessage_feedbackvar = "#0a6fc2";
    toCss.style.setProperty('--beneathTheLegendMessage-feedback', beneathTheLegendMessage_feedbackvar);

    let inputText_feedback = "#2aaaca";
    toCss.style.setProperty('--inputText-feedback', inputText_feedback);

















  }
}

assignCssVariables();
