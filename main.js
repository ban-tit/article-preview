const shareButton = document.querySelector("#share__image");
const shareBox = document.querySelector("#share__box");

shareButton.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
});

// mobile share toggle

const mobileAuthorArea = document.querySelector(".mobile-author-area");

const mobileSocialSharingBar = document.querySelector(
  ".mobile-social-sharing-bar"
);

const mobileSharBtnContainer = document.querySelector(
  ".mobile-share-btn-container"
);

mobileSharBtnContainer.addEventListener("click", function () {
  mobileAuthorArea.style.display = "none";
  mobileSocialSharingBar.style.display = "flex";
});

const mobileSocialSharingBtn = document.querySelector(
  ".mobile-social-sharing-btn-container"
);

mobileSocialSharingBtn.addEventListener("click", function () {
  mobileAuthorArea.style.display = "flex";
  mobileSocialSharingBar.style.display = "none";
});
