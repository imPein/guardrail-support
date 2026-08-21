const copyButton = document.querySelector("[data-copy-wechat]");
const copyStatus = document.querySelector(".copy-status");

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  const copied = document.execCommand("copy");
  input.remove();

  if (!copied) {
    throw new Error("Copy command failed");
  }
}

copyButton?.addEventListener("click", async () => {
  const originalLabel = copyButton.textContent;

  try {
    await copyText(copyButton.dataset.copyWechat);
    copyButton.textContent = "已复制";
    copyStatus.textContent = "微信号已复制，请在微信中搜索添加。";
  } catch {
    copyStatus.textContent = "复制失败，请长按微信号手动复制。";
  }

  window.setTimeout(() => {
    copyButton.textContent = originalLabel;
  }, 2200);
});
