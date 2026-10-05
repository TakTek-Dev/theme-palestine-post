/* =========================================================================
   Five-day weather for Gaza and Jerusalem in the header menu.
   Source: Open-Meteo (free, no API key in the page). One request covers both
   cities; the result is cached for thirty minutes.
   ========================================================================= */
(function () {
  "use strict";

  const CITIES = [
    { name: "غزة", lat: 31.5017, lon: 34.4668 },
    { name: "القدس", lat: 31.7683, lon: 35.2137 },
  ];
  const API = "https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min"
    + "&timezone=Asia%2FJerusalem&forecast_days=5"
    + `&latitude=${CITIES.map((c) => c.lat).join(",")}&longitude=${CITIES.map((c) => c.lon).join(",")}`;
  const CACHE_KEY = "pp:weather";
  const MAX_AGE = 30 * 60 * 1000;
  let state = "idle";

  // WMO weather codes → Arabic description and a Font Awesome icon
  function describe(code) {
    if (code === 0) return ["صحو", "fa-sun"];
    if (code <= 2) return ["غائم جزئيًا", "fa-cloud-sun"];
    if (code === 3) return ["غائم", "fa-cloud"];
    if (code <= 48) return ["ضباب", "fa-smog"];
    if (code <= 57) return ["رذاذ", "fa-cloud-rain"];
    if (code <= 67) return ["أمطار", "fa-cloud-showers-heavy"];
    if (code <= 77) return ["ثلوج", "fa-snowflake"];
    if (code <= 82) return ["زخات مطر", "fa-cloud-sun-rain"];
    return ["عواصف رعدية", "fa-cloud-bolt"];
  }

  function cached() {
    try {
      const hit = JSON.parse(localStorage.getItem(CACHE_KEY));
      return hit && Date.now() - hit.at < MAX_AGE ? hit.data : null;
    } catch {
      return null;
    }
  }

  function cityBlock(city, daily) {
    const days = daily.time.map((day, i) => {
      const [label, icon] = describe(daily.weather_code[i]);
      const name = i === 0 ? "اليوم" : new Date(`${day}T12:00:00`).toLocaleDateString("ar-EG-u-nu-latn", { weekday: "long" });
      return `<li class="weather-item">
        <p>${name}</p>
        <i class="fa-solid ${icon}" aria-hidden="true"></i>
        <span class="description-weather">${label}</span>
        <span class="temperature"><bdi>${Math.round(daily.temperature_2m_max[i])}°</bdi> / <bdi>${Math.round(daily.temperature_2m_min[i])}°</bdi></span>
      </li>`;
    }).join("");
    return `<section class="background-weather" aria-label="الطقس في ${city.name}">
      <header class="d-flex align-items-center gap-2 justify-content-between mb-2">
        <div class="title-with-circle title-with-circle-small d-flex align-items-center gap-2">
          <div class="dot-title red-dot"></div><h5>${city.name}</h5>
        </div>
      </header>
      <ul class="weather-list">${days}</ul>
    </section>`;
  }

  function render(menu, data) {
    const list = Array.isArray(data) ? data : [data];
    menu.querySelector(".weather-sliders").innerHTML = CITIES.map((city, i) => list[i] ? cityBlock(city, list[i].daily) : "").join("");
  }

  function fail(menu) {
    menu.querySelector(".weather-sliders").innerHTML =
      '<p class="menu-error">تعذّر تحميل حالة الطقس. <button type="button" class="menu-retry">إعادة المحاولة</button></p>';
    menu.querySelector(".menu-retry").addEventListener("click", () => load(menu));
  }

  function load(menu) {
    const hit = cached();
    if (hit) {
      render(menu, hit);
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
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data })); } catch { /* private mode */ }
        render(menu, data);
        state = "done";
      })
      .catch(() => {
        state = "idle";
        fail(menu);
      })
      .finally(() => overlay?.classList.remove("active"));
  }

  document.addEventListener("pp:menu-open", (event) => {
    if (event.detail.id !== "menu-weather" || state === "done") return;
    load(document.getElementById("menu-weather"));
  });
})();
