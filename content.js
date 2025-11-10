// === USER CONFIG ===
const targetSrc = "PROFILE PIC LINK HERE"; // image to replace
const newSrc = chrome.runtime.getURL("./improvement.jpg"); // replacement image
// ====================

// Replace <img> sources
function replaceImageTags() {
  document.querySelectorAll('img').forEach(img => {
    if (img.src === targetSrc) {
      img.src = newSrc;
      console.log(`[42 Profile Picture Changer] Replaced <img>: ${targetSrc} → ${newSrc}`);
    }
  });
}

// Replace inline background-image styles
function replaceBackgrounds() {
  document.querySelectorAll('[style*="background"]').forEach(el => {
    const style = el.getAttribute('style');
    if (style && style.includes(targetSrc)) {
      const updated = style.replaceAll(targetSrc, newSrc);
      el.setAttribute('style', updated);
      console.log(`[42 Profile Picture Changer] Replaced background-image: ${targetSrc} → ${newSrc}`);
    }
  });
}

// Replace both
function replaceAll() {
  replaceImageTags();
  replaceBackgrounds();
}

// Run once when page loads
replaceAll();

// Observe dynamic changes (useful for React/Vue/Ajax sites)
const observer = new MutationObserver(() => replaceAll());
observer.observe(document.body, { childList: true, subtree: true });
