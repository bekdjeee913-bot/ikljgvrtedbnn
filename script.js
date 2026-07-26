// ==========================================================
// GONZALES — site behavior
// ==========================================================

// >>> CONFIG: point this at your actual release asset <<<
// Replace with the real download URL once you've published a
// release (see README.md). Used by the download buttons and by
// thanks.html to auto-start the download.
const DOWNLOAD_URL =
  "https://github.com/YOUR-USERNAME/YOUR-REPO/releases/latest/download/Gonzales-Setup.exe";
const DOWNLOAD_FILENAME = "Gonzales-Setup.exe";

document.addEventListener("DOMContentLoaded", () => {
  // wire up every [data-download] element to the real asset URL
  document.querySelectorAll("[data-download]").forEach((el) => {
    el.setAttribute("href", DOWNLOAD_URL);
  });

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // draw-in animation for the hero recoil graph (raw + trained paths)
  const paths = document.querySelectorAll(".draw-path");
  if (paths.length && !reduceMotion) {
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect(); // force reflow
      path.style.transition = `stroke-dashoffset 1.4s ease-out ${i * 0.35}s`;
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = "0";
      });
    });

    // impact-cluster dots fade in after their line finishes drawing
    document.querySelectorAll(".draw-dot").forEach((dot, i) => {
      dot.style.opacity = "0";
      dot.style.transition = `opacity 0.3s ease-out ${1.3 + i * 0.06}s`;
      requestAnimationFrame(() => {
        dot.style.opacity = "1";
      });
    });
  } else {
    document.querySelectorAll(".draw-dot").forEach((dot) => {
      dot.style.opacity = "1";
    });
  }

  // thanks page: auto-start the download once
  const trigger = document.getElementById("auto-download");
  if (trigger) {
    const filenameEl = document.getElementById("download-filename");
    if (filenameEl) filenameEl.textContent = DOWNLOAD_FILENAME;

    window.setTimeout(() => {
      trigger.setAttribute("href", DOWNLOAD_URL);
      trigger.setAttribute("download", DOWNLOAD_FILENAME);
      trigger.click();
    }, 600);
  }
});
