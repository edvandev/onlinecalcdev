function copyFromForm(buttonId) {
  let leng = buttonId.length;
  let a = 0;
  let b = leng - 12;
  let textToBeCopied = document.getElementById(buttonId.substring(a, b));
  textToBeCopied.select();
  textToBeCopied.setSelectionRange(0, 999999);
  document.execCommand("copy");
}

function displayCopyButton(id_of_field) {
  document.getElementById(id_of_field+"_copy_button").style.display = null;
}

function hideCopyButton(id_of_field) {
  document.getElementById(id_of_field+"_copy_button").style.display = "none";
}

function hideAllCopyButtons() {
  let itemsLeft = true;
  let i = 0;
  while (itemsLeft == true) {
    try {
      document.getElementsByClassName("button_for_copyText")[i].style.display = "none";
      i++;
    }
    catch {
      itemsLeft = false;
    }
  }
}
