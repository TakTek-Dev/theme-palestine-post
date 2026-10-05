/* =========================================================================
   Currency rates in the header menu.
   Source: open.er-api.com (free, no API key in the page). Fetched the first
   time the menu opens and cached for an hour.
   ========================================================================= */
(function () {
  "use strict";

  const API = "https://open.er-api.com/v6/latest/USD";
  const CACHE_KEY = "pp:fx";
  const MAX_AGE = 60 * 60 * 1000;
  const WATCH = [
    ["ILS", "شيكل"], ["JOD", "دينار أردني"], ["EGP", "جنيه مصري"], ["SAR", "ريال سعودي"],
    ["AED", "درهم إماراتي"], ["QAR", "ريال قطري"], ["KWD", "دينار كويتي"], ["TRY", "ليرة تركية"], ["GBP", "جنيه إسترليني"],
  ];
  let state = "idle";

  function cached() {
    try {
      const hit = JSON.parse(localStorage.getItem(CACHE_KEY));
      return hit && Date.now() - hit.at < MAX_AGE ? hit : null;
    } catch {
      return null;
    }
  }

  function row(code, name, value) {
    const digits = value >= 100 ? 1 : 3;
    return `<div class="currency"><p>${name}</p><span><bdi>${value.toFixed(digits)}</bdi> <small lang="en">${code}</small></span></div>`;
  }

  function render(menu, rates, at) {
    const usd = menu.querySelector(".slider-usd");
    const eur = menu.querySelector(".slider-eur");
    if (usd) usd.innerHTML = WATCH.filter(([c]) => rates[c]).map(([c, n]) => row(c, n, rates[c])).join("");
    if (eur && rates.EUR) {
      const list = [["USD", "دولار أمريكي"], ...WATCH].filter(([c]) => rates[c]);
      eur.innerHTML = list.map(([c, n]) => row(c, n, rates[c] / rates.EUR)).join("");
    }
    const stamp = new Date(at).toLocaleString("ar-EG-u-nu-latn", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
    menu.querySelectorAll(".date-slider").forEach((el) => { el.textContent = `محدّث ${stamp}`; });
  }

  function fail(menu) {
    const content = menu.querySelector(".mega-menu-content");
    let note = menu.querySelector(".menu-error");
    if (!note) {
      note = document.createElement("p");
      note.className = "menu-error";
      content.prepend(note);
    }
    note.innerHTML = 'تعذّر تحميل أسعار العملات. <button type="button" class="menu-retry">إعادة المحاولة</button>';
    note.querySelector("button").addEventListener("click", () => { note.remove(); load(menu); });
  }

  function load(menu) {
    const hit = cached();
    if (hit) {
      render(menu, hit.rates, hit.at);
      state = "done";
      return;
    }
    if (state === "loading") return;
    state = "loading";
    const overlay = menu.querySelector(".loading-overlay");
    overlay?.classList.add("active");
    fetch(API)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (data.result !== "success") throw new Error("bad payload");
        const at = Date.now();
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ at, rates: data.rates })); } catch { /* private mode */ }
        render(menu, data.rates, at);
        state = "done";
      })
      .catch(() => {
        state = "idle";
        fail(menu);
      })
      .finally(() => overlay?.classList.remove("active"));
  }

  document.addEventListener("pp:menu-open", (event) => {
    if (event.detail.id !== "menu-currency" || state === "done") return;
    load(document.getElementById("menu-currency"));
  });
})();
