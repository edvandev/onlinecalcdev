function assignCssVarsColors() {
  if (localStorage.getItem("used_color_mode") == "LIGHT") {
    let toCss = document.querySelector(':root');
    let tc = function(t, f) {return toCss.style.setProperty(t, f);};
    let i = ['', '2', '3', '4', '5', '6', '7'];
    let c = colorCollection.lightMode;
    let cf = colorCollection.lightMode.calcForm;
    let fb = colorCollection.lightMode.feedback;


    //Website colors.
    tc('--backgroundColorOfTheWebPage', c.backgroundColor);
    tc('--languageButtonOfTheWebPage', c.languageButton);
    tc('--languageButtonHoverFocusOfTheWebPage', c.languageButtonHoverFocus);
    tc('--languageSelectionAreaOfTheWebPage', c.languageSelectionArea);
    tc('--minibuttonsAreaOfTheWebPage', c.minibuttonsArea);
    tc('--linksBoxOfTheWebPage', c.linksBox);
    tc('--linksBoxShadowOfTheWebPage', c.linksBoxShadow);
    tc('--linksOfTheWebPage', c.links);
    tc('--linkHoverAndDividersOfLinksOfTheWebPage', c.linkHoverAndDividersOfLinks);
    tc('--h1textAndBackgroundOfBottomOfTheWebPage', c.h1textAndBackgroundOfBottom);
    tc('--h2textOfTheWebPage', c.h2text);
    tc('--textUnderH2OfTheWebPage', c.textUnderH2);
    tc('--leftAndRightBottomTextOfTheWebPage', c.leftAndRightBottomText);
    tc('--centerBottomTextOfTheWebPage', c.centerBottomText);


    //Calculation form colors.
    tc('--legendOfCalcForm', cf.legend);
    tc('--labelOfCalcForm', cf.label);
    tc('--inactiveButtonsCalcForm', cf.inactiveButtons);
    tc('--activeButtonsCalcForm', cf.activeButtons);
    tc('--activeButtonsHoveredCalcForm', cf.activeButtonsHovered);
    tc('--buttonsTextCalcForm', cf.buttonsText);
    tc('--borderOfFieldsCalcForm', cf.borderOfFields);
    tc('--normalShadowOfBorderFields', cf.normalShadowOfBorderFields);
    tc('--backgroundColorOfTextFieldsCalcForm', cf.backgroundColorOfTextFields);
    tc('--labelFloat1', cf.labelFloats);
    tc('--labelFloat2', cf.labelFloats);
    tc('--labelFloat3', cf.labelFloats);
    tc('--labelFloat4', cf.labelFloats);
    tc('--labelFloat5', cf.labelFloats);
    tc('--labelFloat6', cf.labelFloats);
    tc('--labelFloat7', cf.labelFloats);
    for (let x of i) {
      tc('--copyButtonsText'+x, cf.copyButtonsTexts);
      tc('--copyButtonsBorder'+x, cf.copyButtonsBorders);
      tc('--copyButtonsBackground'+x, cf.copyButtonsBackgrounds);
    }
    tc('--placeholdersInFieldsWhenCursorNotInField', cf.placeholdersInFieldsWhenCursorNotInField);
    tc('--linesOfDisabledFields', cf.disabledFieldsLines);


    //Feedback form colors.
    tc('--fieldsetBackground-feedback', fb.fieldsetBackgroundFeedback);
    tc('--legend-feedback', fb.legendFeedback);
    tc('--beneathTheLegendMessage-feedback', fb.beneathTheLegendMessageFeedback);
    tc('--inputText-feedback', fb.inputTextFeedback);
  }
}
