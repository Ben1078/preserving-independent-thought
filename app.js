// Open expandable panels when their nav links are used
function openPanel(id) {
  const panel = document.getElementById(id);
  if (panel) panel.open = true;
}

document.querySelectorAll('a[href="#reflection"]').forEach((link) => {
  link.addEventListener("click", () => openPanel("reflection"));
});

document.querySelectorAll('a[href="#sources"]').forEach((link) => {
  link.addEventListener("click", () => openPanel("source-list"));
});

if (window.location.hash === "#reflection") openPanel("reflection");
if (window.location.hash === "#sources") openPanel("source-list");

// Before-you-prompt checklist
const checkCards = document.querySelectorAll(".check-card");
const checkCount = document.getElementById("check-count");
const checkMsg = document.getElementById("check-msg");

checkCards.forEach((card) => {
  card.addEventListener("click", () => {
    const pressed = card.getAttribute("aria-pressed") === "true";
    card.setAttribute("aria-pressed", String(!pressed));

    const total = document.querySelectorAll('.check-card[aria-pressed="true"]').length;
    checkCount.textContent = `${total} of ${checkCards.length}`;
    checkMsg.textContent =
      total === checkCards.length
        ? "you have a solid starting point."
        : "aim to complete all four before starting.";
  });
});

// Copy-prompt buttons
document.querySelectorAll("[data-copy]").forEach((button) => {
  let resetTimer;
  button.addEventListener("click", async () => {
    const text = button.parentElement
      .querySelector(".prompt-text")
      .textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied ✓";
      button.classList.add("copied");
    } catch {
      button.textContent = "Couldn't copy — select the text";
    }
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      button.textContent = "Copy prompt";
      button.classList.remove("copied");
    }, 4000);
  });
});
