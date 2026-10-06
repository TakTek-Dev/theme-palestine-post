/* =========================================================================
   فلسطين بوست — theme interactions
   Plain JavaScript, no jQuery. Each init* function owns one component and
   returns early when the page doesn't have it.
   ========================================================================= */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* private mode */ } },
  };

  /* ---- small status message (copy link, form sent) ---------------------- */
  let toastTimer;
  function toast(message) {
    let el = $(".pp-toast");
    if (!el) {
      el = document.createElement("p");
      el.className = "pp-toast";
      el.setAttribute("role", "status");
      document.body.append(el);
    }
    el.textContent = message;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2600);
  }

  /* ---- 1. Mobile navigation (replaces Bootstrap's collapse plugin) ------- */
  function initNavToggle() {
    const button = $(".navbar-toggler");
    const panel = button && document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    const setOpen = (open) => {
      panel.classList.toggle("show", open);
      button.setAttribute("aria-expanded", String(open));
    };
    button.addEventListener("click", () => setOpen(!panel.classList.contains("show")));
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !panel.classList.contains("show")) return;
      setOpen(false);
      button.focus();
    });
  }

  /* local news: the link opens the section; the chevron button beside it opens
     the cities — under the pointer on wide screens (CSS), inside the menu on
     phones. Escape (handled here first), a click elsewhere or tabbing past
     the cities closes them */
  function initLocalNewsMenu() {
    const item = $(".navbar-nav .dropdown");
    const button = item && $(".nav-disclosure", item);
    if (!button) return;
    const setOpen = (open) => {
      item.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    };
    button.addEventListener("click", () => setOpen(!item.classList.contains("is-open")));
    item.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !item.classList.contains("is-open")) return;
      event.stopPropagation();
      setOpen(false);
      button.focus();
    });
    item.addEventListener("focusout", (event) => {
      if (event.relatedTarget && !item.contains(event.relatedTarget)) setOpen(false);
    });
    document.addEventListener("click", (event) => {
      if (!item.contains(event.target)) setOpen(false);
    });
    // the header menus stop their clicks from reaching the document
    document.addEventListener("pp:menu-open", () => setOpen(false));
  }

  /* ---- 2. Header menus: currency, weather, notifications ----------------- */
  function initHeaderMenus() {
    const boxes = $$(".left-icons .icon-container");
    if (!boxes.length) return;
    const setOpen = (box, open) => {
      box.classList.toggle("is-open", open);
      $(".icon-trigger", box)?.setAttribute("aria-expanded", String(open));
    };
    boxes.forEach((box) => {
      const button = $(".icon-trigger", box);
      const menu = $(".mega-menu", box);
      if (!button || !menu) return;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const open = !box.classList.contains("is-open");
        boxes.forEach((other) => other !== box && setOpen(other, false));
        setOpen(box, open);
        if (open) document.dispatchEvent(new CustomEvent("pp:menu-open", { detail: { id: menu.id } }));
      });
      menu.addEventListener("click", (event) => event.stopPropagation());
    });
    document.addEventListener("click", () => boxes.forEach((box) => setOpen(box, false)));
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const open = boxes.find((box) => box.classList.contains("is-open"));
      if (!open) return;
      setOpen(open, false);
      $(".icon-trigger", open)?.focus();
    });
  }

  /* the bell shows how many stories arrived since the reader last opened it */
  function initNotificationBadge() {
    const items = $$("#menu-notifications .notification-item");
    const badge = $("[data-notif-count]");
    if (!items.length || !badge) return;
    const latest = $("h6", items[0])?.textContent.trim() || "";
    const seen = store.get("pp:notif-seen");
    const fresh = seen ? items.findIndex((item) => $("h6", item)?.textContent.trim() === seen) : items.length;
    const count = fresh < 0 ? items.length : fresh;
    if (count > 0) {
      badge.textContent = String(count);
      badge.hidden = false;
      badge.closest(".icon-trigger")?.setAttribute("aria-label", `الإشعارات، ${count} أخبار جديدة`);
    }
    document.addEventListener("pp:menu-open", (event) => {
      if (event.detail.id !== "menu-notifications") return;
      store.set("pp:notif-seen", latest);
      badge.hidden = true;
      badge.closest(".icon-trigger")?.setAttribute("aria-label", "الإشعارات");
    });
  }

  /* home sidebar: it travels beside the long grid; when it is taller than the
     window it settles by its bottom edge, so every part of it gets seen */
  function initStickyAside() {
    const aside = $(".home-aside");
    if (!aside) return;
    const place = () => aside.style.setProperty("--aside-top", `${Math.min(16, window.innerHeight - aside.offsetHeight - 16)}px`);
    place();
    window.addEventListener("resize", place);
    if ("ResizeObserver" in window) new ResizeObserver(place).observe(aside);
  }

  /* ---- 3. Tabs: local news (home) and the writer page -------------------- */
  function initTabs() {
    $$("[role=tablist]").forEach((list) => {
      const tabs = $$("[role=tab]", list);
      const select = (tab, focus) => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          t.parentElement.classList.toggle("active", on);
          const pane = document.getElementById(t.getAttribute("aria-controls"));
          if (!pane) return;
          pane.classList.toggle("active", on);
          if (pane.classList.contains("tab-pane")) pane.hidden = !on;
        });
        if (focus) tab.focus();
        tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
      };
      tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => select(tab, false));
        tab.addEventListener("keydown", (event) => {
          // right-to-left: the left arrow moves to the next tab
          const moves = { ArrowLeft: i + 1, ArrowRight: i - 1, Home: 0, End: tabs.length - 1 };
          if (!(event.key in moves)) return;
          event.preventDefault();
          select(tabs[(moves[event.key] + tabs.length) % tabs.length], true);
        });
      });
    });
  }

  /* ---- 4. Special files: one file open at a time ------------------------- */
  function initFiles() {
    $$(".fb-accordion").forEach((accordion) => {
      const items = $$(".fb-accordion-item", accordion);
      const open = (item) => items.forEach((other) => {
        const on = other === item;
        other.classList.toggle("fb-active", on);
        other.classList.toggle("fb-closed", !on);
        $(".fb-accordion-title", other)?.setAttribute("aria-expanded", String(on));
        const panel = $(".fb-accordion-content", other);
        if (panel) panel.hidden = !on;
      });
      items.forEach((item) => {
        const panel = $(".fb-accordion-content", item);
        if (panel && !item.classList.contains("fb-active")) panel.hidden = true;
        $(".fb-accordion-title", item)?.addEventListener("click", () => open(item));
      });
    });
  }

  /* ---- 5. Video: poster first, the player only when asked ---------------- */
  function embedUrl(src, autoplay) {
    const url = new URL(src.replace("www.youtube.com/embed", "www.youtube-nocookie.com/embed"), location.href);
    url.searchParams.set("rel", "0");
    if (autoplay) url.searchParams.set("autoplay", "1");
    return url.toString();
  }

  function makeFrame(src, title) {
    const frame = document.createElement("iframe");
    frame.src = embedUrl(src, true);
    frame.title = title || "مشغّل الفيديو";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.className = "video-embed";
    return frame;
  }

  function initVideoFacades() {
    document.addEventListener("click", (event) => {
      const poster = event.target.closest("[data-embed]");
      if (!poster) return;
      const label = poster.getAttribute("aria-label")?.replace("تشغيل الفيديو: ", "");
      const frame = makeFrame(poster.dataset.embed, label);
      poster.replaceWith(frame);
      frame.focus();
    });
  }

  function initVideoPlaylist() {
    const section = $(".videos-section2");
    if (!section) return;
    const items = $$(".video-item", section);
    const stage = $("#main-video", section);
    const overlay = $("#video-thumbnail-overlay", section);
    const counter = $(".video-counter", section);
    const title = $(".title-video-play", section);
    const toggle = $(".toggle-video", section);
    if (!items.length || !stage) return;
    let current = Math.max(0, items.findIndex((item) => item.classList.contains("active")));
    let playing = false;

    const show = (index, play) => {
      current = index;
      playing = play;
      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
        if (i === index) item.setAttribute("aria-current", "true");
        else item.removeAttribute("aria-current");
      });
      const item = items[index];
      const text = $("p", item)?.textContent.trim() || "";
      if (counter) counter.textContent = `${index + 1}/${items.length}`;
      if (title) title.textContent = text;
      stage.replaceChildren();
      if (overlay) {
        const poster = $("img", overlay);
        const thumb = $("img", item);
        if (poster && thumb) poster.src = thumb.currentSrc || thumb.src;
        overlay.hidden = play;
      }
      if (play) stage.append(makeFrame(item.dataset.video, text));
      if (toggle) {
        toggle.setAttribute("aria-label", play ? "إيقاف الفيديو" : "تشغيل الفيديو");
        $("i", toggle).className = play ? "fas fa-stop" : "fas fa-play";
      }
    };

    items.forEach((item, i) => item.addEventListener("click", () => show(i, true)));
    $(".video-overlay__play", section)?.addEventListener("click", () => show(current, true));
    toggle?.addEventListener("click", () => show(current, !playing));
    show(current, false);
  }

  // Video page: a card's link opens its video in a dialog sized to the picture
  // (portrait files are tall, YouTube is wide). Without <dialog> support the
  // link simply opens the video file or the YouTube page.
  function initVideoDialog() {
    const links = $$(".video-card__open");
    if (!links.length || typeof HTMLDialogElement !== "function") return;
    let dialog, stage, heading, meta, counter, nav;
    let list = [];
    let index = 0;
    // the link also holds a visually hidden length for screen readers
    const nameOf = (link) => Array.from(link.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent).join("").trim();

    // width ÷ height of the picture: sets the stage size, and portrait videos get their details beside them
    const shape = (ratio) => {
      dialog.style.setProperty("--r", ratio.toFixed(4));
      dialog.classList.toggle("is-portrait", ratio < 1);
    };

    // a replaced <video> keeps downloading unless its source is dropped
    const clear = () => {
      $$("video", stage).forEach((video) => {
        video.pause();
        video.removeAttribute("src");
        video.load();
      });
      stage.replaceChildren();
    };

    // `opening`: focus the player (or the close button); stepping keeps focus on the arrow
    const show = (i, opening) => {
      index = (i + list.length) % list.length;
      const link = list[index];
      const name = nameOf(link);
      const seconds = Number(link.dataset.duration);
      const date = $("time", link.closest(".video-card"))?.textContent.trim() || "";
      shape(Number(link.dataset.ratio) || 16 / 9);
      heading.textContent = name;
      meta.textContent = seconds ? `${date} · ${clock(seconds)}` : date;
      counter.textContent = `${index + 1} من ${list.length}`;
      nav.hidden = list.length < 2;
      clear();
      if (link.dataset.youtube) {
        stage.replaceChildren(makeFrame(`https://www.youtube.com/embed/${link.dataset.youtube}`, name));
        // keys pressed inside YouTube's frame never reach this page, so Esc would not close
        if (opening) $(".video-dialog__close", dialog).focus();
        return;
      }
      const video = Object.assign(document.createElement("video"), { src: link.dataset.videoSrc, controls: true, playsInline: true });
      video.setAttribute("aria-label", name);
      video.addEventListener("loadedmetadata", () => {
        if (video.isConnected && video.videoWidth) shape(video.videoWidth / video.videoHeight);
      });
      stage.replaceChildren(video);
      if (opening) video.focus();
      // still inside the click that opened the dialog, so the browser lets it play with sound
      video.play().catch(() => {});
    };

    const close = () => {
      clear();
      dialog.close();
      list[index]?.focus();
    };

    const build = () => {
      dialog = document.createElement("dialog");
      dialog.className = "video-dialog";
      dialog.setAttribute("aria-labelledby", "video-dialog-title");
      dialog.innerHTML = `<div class="video-dialog__stage"></div>
        <div class="video-dialog__bar">
          <div class="video-dialog__text"><h2 class="video-dialog__title" id="video-dialog-title"></h2><p class="video-dialog__meta"></p></div>
          <div class="video-dialog__tools">
            <div class="video-dialog__nav">
              <button type="button" data-step="-1" aria-label="الفيديو السابق"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
              <span class="video-dialog__count"></span>
              <button type="button" data-step="1" aria-label="الفيديو التالي"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
            </div>
            <button type="button" class="video-dialog__close" aria-label="إغلاق المشغّل"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
          </div>
        </div>`;
      document.body.append(dialog);
      stage = $(".video-dialog__stage", dialog);
      heading = $(".video-dialog__title", dialog);
      meta = $(".video-dialog__meta", dialog);
      counter = $(".video-dialog__count", dialog);
      nav = $(".video-dialog__nav", dialog);
      $$("[data-step]", dialog).forEach((button) => button.addEventListener("click", () => show(index + Number(button.dataset.step))));
      $(".video-dialog__close", dialog).addEventListener("click", close);
      // a click on the dimmed backdrop lands on the dialog element itself
      dialog.addEventListener("click", (event) => event.target === dialog && close());
      // Esc: the browser cancels, then closes the dialog itself
      dialog.addEventListener("cancel", clear);
      dialog.addEventListener("close", () => {
        clear();
        // the browser has just put focus back on the opening link; move it to the video shown last
        setTimeout(() => dialog.open || list[index]?.focus());
      });
    };

    links.forEach((link) => link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (!dialog) build();
      list = links.filter((other) => !other.closest("[hidden]"));
      if (!dialog.open) dialog.showModal();
      show(list.indexOf(link), true);
    }));
  }

  /* ---- 6. Podcast: one play button per episode, Plyr once it is pressed -- */
  const PLYR_VERSION = "3.7.8";
  const PLYR_AR = {
    restart: "من البداية", rewind: "رجوع {seektime} ثانية", play: "تشغيل", pause: "إيقاف مؤقت",
    fastForward: "تقديم {seektime} ثانية", seek: "انتقال", seekLabel: "{currentTime} من {duration}",
    played: "تم تشغيله", buffered: "تم تحميله", currentTime: "الوقت الحالي", duration: "المدة",
    volume: "الصوت", mute: "كتم الصوت", unmute: "تشغيل الصوت", settings: "الإعدادات",
    menuBack: "رجوع", speed: "السرعة", normal: "عادية",
  };
  let plyrLoading;
  function loadPlyr() {
    if (window.Plyr) return Promise.resolve();
    plyrLoading ||= new Promise((resolve, reject) => {
      const base = `https://cdnjs.cloudflare.com/ajax/libs/plyr/${PLYR_VERSION}/`;
      const css = Object.assign(document.createElement("link"), { rel: "stylesheet", href: base + "plyr.min.css" });
      const js = Object.assign(document.createElement("script"), { src: base + "plyr.min.js" });
      js.onload = resolve;
      js.onerror = () => { plyrLoading = null; reject(new Error("Plyr did not load")); };
      document.head.append(css, js);
    });
    return plyrLoading;
  }

  const clock = (seconds) => {
    const whole = Math.round(seconds);
    return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
  };

  // Each episode rests as one button with its length. The first press swaps in
  // Plyr; until the library arrives (or if it never does) the native controls play.
  function initPodcastPlayers() {
    const hosts = $$("[data-pod-player]");
    if (!hosts.length) return;
    const players = new Map();

    const upgrade = (host) => {
      if (players.has(host) || !window.Plyr) return players.get(host);
      const audio = $("audio", host);
      const player = new window.Plyr(audio, {
        controls: ["play", "rewind", "fast-forward", "progress", "current-time", "mute", "settings"],
        settings: ["speed"],
        speed: { selected: 1, options: [0.75, 1, 1.25, 1.5, 2] },
        seekTime: 15,
        invertTime: false,
        title: audio.getAttribute("aria-label") || "",
        i18n: PLYR_AR,
        keyboard: { focused: true, global: false },
        tooltips: { controls: true, seek: true },
      });
      players.set(host, player);
      return player;
    };

    // the pressed button disappears: hand focus to the player's own play button
    const keepFocus = (player) => {
      if (document.activeElement && document.activeElement !== document.body) return;
      [].concat(player?.elements.buttons.play || [])[0]?.focus({ preventScroll: true });
    };

    const play = (host) => {
      const audio = $("audio", host);
      host.classList.remove("is-idle");
      $(".pod-facade", host)?.remove();
      const player = upgrade(host);
      // play() inside the click keeps the browser's permission to start sound
      Promise.resolve(player ? player.play() : audio.play()).catch(() => {});
      if (player) {
        keepFocus(player);
        return;
      }
      if (document.activeElement === document.body) audio.focus();
      loadPlyr().then(() => keepFocus(upgrade(host))).catch(() => {});
    };

    hosts.forEach((host) => {
      const audio = $("audio", host);
      if (!audio) return;
      const title = audio.getAttribute("aria-label") || "الحلقة";
      const seconds = Number(host.dataset.duration) || 0;
      const facade = document.createElement("button");
      facade.type = "button";
      facade.className = "pod-facade";
      facade.setAttribute("aria-label", seconds ? `استمع إلى ${title}، المدة ${clock(seconds)}` : `استمع إلى ${title}`);
      facade.innerHTML = '<span class="pod-facade__icon" aria-hidden="true"><i class="fa-solid fa-play"></i></span>'
        + '<span class="pod-facade__label" aria-hidden="true">استمع</span>'
        + (seconds ? `<span class="pod-facade__time" aria-hidden="true">${clock(seconds)}</span>` : "");
      facade.addEventListener("click", () => play(host));
      host.prepend(facade);
      host.classList.add("is-idle");
    });

    // "listen to the newest episode" and similar buttons name the episode card they play
    $$("[data-play]").forEach((button) => button.addEventListener("click", () => {
      const card = document.getElementById(button.dataset.play);
      const host = card && $("[data-pod-player]", card);
      if (!host) return;
      if (card.closest("[hidden]")) $('[data-episode-filter] [data-series="all"]')?.click();
      card.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
      if ($("audio", host).paused) play(host);
    }));

    // one episode at a time; the card that is playing is marked
    document.addEventListener("play", (event) => {
      if (!(event.target instanceof HTMLAudioElement)) return;
      $$("audio").forEach((audio) => audio !== event.target && audio.pause());
      event.target.closest(".episode-card")?.classList.add("is-playing");
    }, true);
    ["pause", "ended"].forEach((type) => document.addEventListener(type, (event) => {
      if (event.target instanceof HTMLAudioElement) event.target.closest(".episode-card")?.classList.remove("is-playing");
    }, true));

    // fetch the library while the reader approaches, so the first press is instant
    if (!("IntersectionObserver" in window)) return;
    const watcher = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      watcher.disconnect();
      loadPlyr().catch(() => {});
    }, { rootMargin: "400px 0px" });
    hosts.forEach((host) => watcher.observe(host));
  }

  /* podcast page: show one series at a time */
  function initEpisodeFilter() {
    const group = $("[data-episode-filter]");
    const list = $(".episode-list");
    if (!group || !list) return;
    const buttons = $$("button[data-series]", group);
    const items = $$(":scope > li", list);
    const status = $("[data-episode-status]");
    buttons.forEach((button) => button.addEventListener("click", () => {
      const series = button.dataset.series;
      let shown = 0;
      buttons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      items.forEach((item) => {
        item.hidden = series !== "all" && item.dataset.series !== series;
        if (!item.hidden) shown += 1;
      });
      if (status) status.textContent = `تظهر ${shown} من ${items.length} حلقات`;
    }));
  }

  /* ---- 7. Share panels and copy link ------------------------------------ */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const field = Object.assign(document.createElement("textarea"), { value: text });
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      return ok;
    }
  }

  function initShare() {
    const closeAll = (except) => $$(".btn-share[aria-expanded=true]").forEach((button) => {
      if (button === except) return;
      button.setAttribute("aria-expanded", "false");
      document.getElementById(button.getAttribute("aria-controls"))?.classList.remove("show");
    });
    document.addEventListener("click", async (event) => {
      const trigger = event.target.closest(".btn-share");
      if (trigger) {
        const open = trigger.getAttribute("aria-expanded") !== "true";
        closeAll(trigger);
        trigger.setAttribute("aria-expanded", String(open));
        document.getElementById(trigger.getAttribute("aria-controls"))?.classList.toggle("show", open);
        return;
      }
      const copy = event.target.closest("[data-copy]");
      if (copy) {
        toast((await copyText(copy.dataset.copy)) ? "نُسخ الرابط" : "انسخ الرابط من شريط العنوان");
        return;
      }
      if (!event.target.closest(".share-social-icons")) closeAll();
    });
    document.addEventListener("keydown", (event) => event.key === "Escape" && closeAll());
  }

  /* ---- 8. Article: text size, remembered between visits ------------------ */
  function initArticleTools() {
    const text = $(".article-text-content");
    const bigger = $(".zoom-in");
    const smaller = $(".zoom-out");
    if (!text || !bigger || !smaller) return;
    // phones start one step smaller: 18px reads heavy on a 390px screen
    const base = window.matchMedia("(max-width: 768px)").matches ? 17 : 18;
    const sizes = [base - 2, base, base + 2, base + 4, base + 6];
    let index = Math.min(sizes.length - 1, Math.max(0, Number(store.get("pp:article-size") ?? 1)));
    const apply = () => {
      document.documentElement.style.setProperty("--article-size", `${sizes[index]}px`);
      bigger.disabled = index === sizes.length - 1;
      smaller.disabled = index === 0;
      store.set("pp:article-size", String(index));
    };
    bigger.addEventListener("click", () => { index = Math.min(sizes.length - 1, index + 1); apply(); });
    smaller.addEventListener("click", () => { index = Math.max(0, index - 1); apply(); });
    apply();
  }

  /* reading progress: a thin bar that fills as the story is read */
  function initReadProgress() {
    const bar = $(".read-progress span");
    const text = $(".article-text-content");
    if (!bar || !text) return;
    let ticking = false;
    const update = () => {
      // reading starts when the text reaches the middle of the screen
      const box = text.getBoundingClientRect();
      const done = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - box.top) / Math.max(1, box.height)));
      bar.style.transform = `scaleX(${done.toFixed(3)})`;
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ---- 9. Send news form: clear messages instead of browser bubbles ------ */
  function initSendNews() {
    const form = $("[data-send-news]");
    if (!form) return;
    const done = $(".send-news-done");
    const messages = {
      valueMissing: "هذا الحقل مطلوب.",
      typeMismatch: "اكتب بريدًا إلكترونيًا صحيحًا، مثل name@example.com",
      tooShort: "اكتب تفاصيل أكثر: متى وأين حدث ذلك وماذا رأيت.",
    };
    const check = (field) => {
      const error = document.getElementById(`${field.id}-error`);
      const problem = Object.keys(messages).find((key) => field.validity[key]);
      field.setAttribute("aria-invalid", String(Boolean(problem)));
      if (error) {
        error.textContent = problem ? messages[problem] : "";
        error.hidden = !problem;
      }
      return !problem;
    };
    const fields = $$("[required]", form);
    fields.forEach((field) => {
      field.addEventListener("blur", () => field.value && check(field));
      // once a field is marked wrong, the message follows the typing
      field.addEventListener("input", () => field.getAttribute("aria-invalid") === "true" && check(field));
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const invalid = fields.filter((field) => !check(field));
      if (invalid.length) {
        invalid[0].focus();
        return;
      }
      // the backend posts the form; the static theme only confirms the flow
      form.reset();
      if (!done) return;
      form.hidden = true;
      done.hidden = false;
      done.focus();
    });
    if (!done) return;
    $("[data-send-again]", done)?.addEventListener("click", () => {
      done.hidden = true;
      form.hidden = false;
      fields[0]?.focus();
    });
  }

  /* ---- 10. Site map: filter the lists while typing ----------------------- */
  function initSitemapFilter() {
    const field = $("[data-sitemap-filter]");
    if (!field) return;
    const groups = $$(".sitemap-group");
    const letters = $$(".sitemap-letter");
    const index = $(".sitemap-letters");
    const empty = $(".sitemap-empty");
    // Arabic search: hamza seats, short vowels and tatweel don't count; ة/ه and ى/ي match
    const fold = (text) => text.normalize("NFD").replace(/[\u064B-\u065F\u0670\u0640]/g, "")
      .replace(/\u0629/g, "\u0647").replace(/\u0649/g, "\u064A").toLowerCase();
    const entries = $$(".sitemap-group li").map((li) => [li, fold(li.textContent)]);
    field.addEventListener("input", () => {
      const term = fold(field.value.trim());
      entries.forEach(([li, text]) => { li.hidden = Boolean(term) && !text.includes(term); });
      letters.forEach((block) => { block.hidden = $$("li", block).every((li) => li.hidden); });
      let shown = 0;
      groups.forEach((group) => {
        const hits = $$("li", group).filter((li) => !li.hidden).length;
        group.hidden = hits === 0;
        shown += hits;
      });
      // the letter index points at headings a search may have hidden
      if (index) index.hidden = Boolean(term);
      if (empty) empty.hidden = shown > 0;
    });
  }

  /* ---- 11. Back to top ---------------------------------------------------- */
  function initScrollTop() {
    const button = $("#scrollToTop");
    if (!button) return;
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        button.classList.toggle("show", window.scrollY > 800);
        ticking = false;
      });
    }, { passive: true });
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      $(".logo a")?.focus({ preventScroll: true });
    });
  }

  function init() {
    initNavToggle();
    initLocalNewsMenu();
    initHeaderMenus();
    initNotificationBadge();
    initStickyAside();
    initTabs();
    initFiles();
    initVideoFacades();
    initVideoPlaylist();
    initVideoDialog();
    initPodcastPlayers();
    initEpisodeFilter();
    initShare();
    initArticleTools();
    initReadProgress();
    initSendNews();
    initSitemapFilter();
    initScrollTop();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
