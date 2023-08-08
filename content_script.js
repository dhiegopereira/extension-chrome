let isHide = false;
function hideDiv() {
  const divToHide = document.querySelector(".mIw6Bf");
  
  if (!isHide) {
    divToHide.style.display = "none";
    isHide = true;
  } else {
    isHide = false;
    divToHide.style.display = "block";
  }
}

const observer = new MutationObserver(function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.addedNodes.length > 0) {
      hideDiv();
    }
  }
});


chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === "hideDiv") {
    hideDiv();
  }
});
