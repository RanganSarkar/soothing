// Function to extract video ID from iframe src
function getVideoID(iframe) {
    const src = iframe.getAttribute("src");
    const match = src.match(/embed\/([\w-]+)/);
    return match ? match[1] : null;
}

// Function to update the background image
function updateBackground(kpz8lpoLvrA&t=1s) {
    if (videoID) {
        const thumbnailURL = `https://img.youtube.com/vi/${kpz8lpoLvrA&t=1s}/maxresdefault.jpg`;
        document.body.style.backgroundImage = `url('${thumbnailURL}')`;
    }
}

// Add event listeners to all iframes
const iframes = document.querySelectorAll("iframe");
iframes.forEach((iframe) => {
    iframe.addEventListener("mouseenter", () => {
        const videoID = getVideoID(iframe);
        updateBackground(kpz8lpoLvrA&t=1s);
    });
});
