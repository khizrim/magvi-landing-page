const page = document.querySelector(".page");
const youtubePopup = document.querySelector(".youtube-popup");

const shortsPreview = document.querySelectorAll(".shorts__preview");

const handleYoutubePopupClose = () => {
  const iframe = youtubePopup.querySelector("iframe");
  iframe.src = "";
  youtubePopup.classList.remove("youtube-popup_visible");
  page.classList.remove("no-scroll");

  const youtubePopupCloseButton = document.querySelector(
    ".youtube-popup__close-btn"
  );

  youtubePopupCloseButton.removeEventListener("click", handleYoutubePopupClose);
  youtubePopup.removeEventListener("mousedown", handleYoutubePopupClose);
};

const handlePreviewClick = (e) => {
  e.preventDefault();
  const videoUrl = e.currentTarget.getAttribute("href");
  const videoId = extractYouTubeVideoId(videoUrl);
  const iframe = youtubePopup.querySelector("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  youtubePopup.classList.add("youtube-popup_visible");
  page.classList.add("no-scroll");

  const youtubePopupCloseButton = document.querySelector(
    ".youtube-popup__close-btn"
  );

  youtubePopupCloseButton.addEventListener("click", handleYoutubePopupClose);
  youtubePopup.addEventListener("mousedown", handleYoutubePopupClose);
};

const extractYouTubeVideoId = (url) => {
  const match = url.match(/shorts\/([^?&]+)/);
  return match && match[1] ? match[1] : null;
};

const addEventListeners = () => {
  shortsPreview.forEach((preview) => {
    preview.addEventListener("click", handlePreviewClick);
  });
};

addEventListeners();
