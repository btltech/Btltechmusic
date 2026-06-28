// BEGINNER EDITING: Update all main artist, streaming, social, and email links here.
// Replace the placeholder # values with the official URLs once you have them.
const artistLinks = {
  spotify: "https://open.spotify.com/artist/3t2rkD90BbAtlzi5Tn4jPu?si=SkRtFELHT4-3te1rXyoyWA",
  appleMusic: "https://music.apple.com/gb/album/through-it-all/1893236878",
  youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kJXtfOoMAxX80GfaoMhZ0Cfa2SBmH3-vw&si=I6yOj1-X7KrukSjw",
  youtubeChannel: "https://www.youtube.com/@btltechmusic",
  audiomack: "https://audiomack.com/btl-15",
  tiktok: "https://www.tiktok.com/@btltechmusic",
  instagram: "https://www.instagram.com/btltechmusic/",
  facebook: "#",
  soundcloud: "#",
  smartLink: "#",
  email: "mailto:btl@btltech.co.uk"
};

// BEGINNER EDITING: Choko King is a separate artist. Put his own links here.
// Used anywhere with a data-choko-link attribute. Leave as # until you have the real URL.
const chokoLinks = {
  spotify: "https://open.spotify.com/album/1BeFz4HWKYgxqJdf2ITnkP?si=xhP_-sKOSrmL_uRUZ61_VA",
  appleMusic: "https://music.apple.com/gb/album/sweet-fire-single/6781821072",
  youtube: "https://youtu.be/laj3oyrXPR8",
  audiomack: "#",
  instagram: "https://www.instagram.com/chokokingofficial/",
  tiktok: "https://www.tiktok.com/@chokokingofficial",
  smartLink: "#",
  email: "mailto:chokoking@btltechmusic.com?subject=Choko%20King%20Enquiry"
};

// BEGINNER EDITING: Choko King's own songs. Falls back to his hub links above when a song link is #.
const chokoReleaseCatalog = {
  sweetFire: {
    links: {
      spotify: "https://open.spotify.com/album/1BeFz4HWKYgxqJdf2ITnkP?si=xhP_-sKOSrmL_uRUZ61_VA",
      appleMusic: "https://music.apple.com/gb/album/sweet-fire-single/6781821072",
      youtube: "https://youtu.be/laj3oyrXPR8",
      audiomack: "#"
    }
  }
};

// BEGINNER EDITING: Add the Lemon Squeezy checkout link here when the Lyrid
// product is published. Product setup: one-time payment, £29 base price, £24
// launch sale price, license keys enabled.
const lyridLinks = {
  checkout: "#",
  macAppStore: "#",
  download: "#",
  web: "lyrid.html"
};

// BEGINNER EDITING: Add release-specific links here so each song can go to its own page.
// If you leave a release link as #, the site falls back to the main artist/platform link above.
const releaseCatalog = {
  omoStacker: {
    links: {
      spotify: "https://open.spotify.com/track/02iC7F7WG1ytUpAmfHed9l",
      appleMusic: "https://music.apple.com/gb/album/omo-stacker/1893236878?i=1893236954",
      youtube: "https://www.youtube.com/watch?v=Q02rkkR6rzU",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  justDance: {
    links: {
      spotify: "https://open.spotify.com/track/7frTkXYbeWoJ6OB0EAPx4z",
      appleMusic: "#",
      youtube: "#",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  imAHustler: {
    links: {
      spotify: "https://open.spotify.com/track/5LP7z14HOE3CZpbJzg8Evz",
      appleMusic: "https://music.apple.com/gb/album/im-a-hustler/1893236878?i=1893236879",
      youtube: "https://youtu.be/Wqxl7dakMu8",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  welcomeToLagos: {
    links: {
      spotify: "https://open.spotify.com/track/0nVh3jDIOYWEu2xzBDJf8p",
      appleMusic: "https://music.apple.com/gb/album/welcome-to-lagos/6773167906?i=6773167907",
      youtube: "https://www.youtube.com/watch?v=Gmq0UzyPvZk",
      audiomack: "https://audiomack.com/btl-15/song/welcome-to-lagos"
    }
  },
  bornBlessed: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
    }
  },
  naYou: {
    links: {
      spotify: "https://open.spotify.com/track/0EWiL1ctDiuDn7tlrY0SUB",
      appleMusic: "#",
      youtube: "#",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  youLied: {
    links: {
      spotify: "https://open.spotify.com/track/0FFCOxvNDvT1IvNhHIcKW4",
      appleMusic: "#",
      youtube: "#",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  ahYouMeChoose: {
    links: {
      spotify: "https://open.spotify.com/track/5ZZnHjuwgSZhDgFMxdeuA1",
      appleMusic: "https://music.apple.com/gb/album/ah-you-me-choose/1893236878?i=1893236961",
      youtube: "#",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  candidate: {
    links: {
      spotify: "https://open.spotify.com/track/4o5Om5rXRlZE0EArX2o8wg",
      appleMusic: "https://music.apple.com/gb/album/candidate/1893236878?i=1893236887",
      youtube: "#",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  },
  chocoKing: {
    links: {
      spotify: "https://open.spotify.com/track/7ia1IV6ahcZeUuOiY4KLkz",
      appleMusic: "https://music.apple.com/gb/album/choco-king/1893236878?i=1893236886",
      youtube: "#",
      audiomack: "https://audiomack.com/btl-15/album/through-it-all"
    }
  }
};

// BEGINNER EDITING: Update the upcoming release actions here.
const upcomingRelease = {
  preSave: "#",
  teaser: "#",
  follow: artistLinks.spotify
};

// BEGINNER EDITING: Update these video links if each visual has its own destination.
const videoCatalog = {
  omoStackerVisual: {
    url: "#"
  },
  welcomeToLagosClip: {
    url: "https://www.youtube.com/watch?v=Gmq0UzyPvZk"
  }
};

// BEGINNER EDITING: Update these press kit files as new assets are approved.
const pressDownloads = {
  photos: "assets/artists/choko-king-real.jpg",
  bio: "assets/choko-king-artist-bio.txt",
  logo: "assets/logo-btltech-music.svg",
  oneSheet: "#"
};

// BEGINNER EDITING: This powers the simple mailing list form with no backend.
// Replace this later with Mailchimp, ConvertKit, or another service if needed.
const communityActions = {
  mailingList:
    "mailto:btl@btltech.co.uk?subject=Join%20BTLTECH%20Music%20Mailing%20List&body=Please%20add%20me%20to%20the%20BTLTECH%20Music%20mailing%20list.",
  booking:
    "mailto:btl@btltech.co.uk?subject=BTLTECH%20Music%20Booking%20Enquiry",
  press:
    "mailto:btl@btltech.co.uk?subject=BTLTECH%20Music%20Press%20Enquiry",
  lyridEarlyAccess:
    "mailto:btl@btltech.co.uk?subject=Request%20Lyrid%20Early%20Access&body=Hi%20BTLTECH%20Music%2C%0A%0AI%E2%80%99d%20like%20to%20get%20Lyrid%20early-access%20updates.%0A%0AName%3A%0AUse%20case%3A%0A",
  lyridUpdates:
    "mailto:btl@btltech.co.uk?subject=Lyrid%20Product%20Updates&body=Hi%20BTLTECH%20Music%2C%0A%0APlease%20keep%20me%20posted%20on%20Lyrid%20release%20updates.%0A"
};

const embedLinks = {
  spotifyArtist: buildSpotifyEmbedUrl(artistLinks.spotify),
  youtubePlaylist: buildYouTubePlaylistEmbedUrl(artistLinks.youtube)
};

const mediaConsentStorageKey = "btltech-media-consent";
const mediaConsentAccepted = "accepted";
const mediaConsentEssential = "essential";

document.addEventListener("DOMContentLoaded", () => {
  setupMediaConsent();
  applyArtistLinks();
  applyChokoLinks();
  applyChokoReleaseLinks();
  applyLyridLinks();
  applyReleaseLinks();
  applyVideoLinks();
  applyUpcomingReleaseLinks();
  applyPressDownloads();
  applyCommunityActions();
  applyEmbedLinks();
  setupDirectMediaEmbeds();
  setupMailingListForm();
  setupMobileMenu();
  clearLegacyServiceWorker();
});

function applyChokoLinks() {
  document.querySelectorAll("[data-choko-link]").forEach((link) => {
    const key = link.getAttribute("data-choko-link");
    const href = chokoLinks[key] || "#";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";

    setLinkState(link, href, { hideIfEmpty });
  });
}

function applyChokoReleaseLinks() {
  document.querySelectorAll("[data-choko-release][data-platform]").forEach((link) => {
    const releaseKey = link.dataset.chokoRelease;
    const platform = link.dataset.platform;
    const release = chokoReleaseCatalog[releaseKey];
    const href = getFirstLiveLink(release?.links?.[platform], chokoLinks[platform], chokoLinks.smartLink);

    setLinkState(link, href);
  });
}

function applyLyridLinks() {
  document.querySelectorAll("[data-lyrid-link]").forEach((link) => {
    const key = link.getAttribute("data-lyrid-link");
    const href = lyridLinks[key] || "#";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";

    setLinkState(link, href, { hideIfEmpty });
  });
}

function applyArtistLinks() {
  const emailLabel = artistLinks.email.replace(/^mailto:/i, "");
  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.getAttribute("data-link");
    const href = artistLinks[key] || "#";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";

    setLinkState(link, href, { hideIfEmpty });
  });

  document.querySelectorAll("[data-email-label]").forEach((node) => {
    node.textContent = emailLabel;
  });

}

function applyReleaseLinks() {
  document.querySelectorAll("[data-release-key][data-platform]").forEach((link) => {
    const releaseKey = link.dataset.releaseKey;
    const platform = link.dataset.platform;
    const strict = link.dataset.releaseStrict === "true";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";
    const href = resolveReleaseLink(releaseKey, platform, { strict });

    setLinkState(link, href, { hideIfEmpty });
  });
}

function applyVideoLinks() {
  document.querySelectorAll("[data-video-key]").forEach((link) => {
    const videoKey = link.dataset.videoKey;
    const strict = link.dataset.videoStrict === "true";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";
    const href = resolveVideoLink(videoKey, { strict });

    setLinkState(link, href, { hideIfEmpty });
  });
}

function applyUpcomingReleaseLinks() {
  document.querySelectorAll("[data-upcoming-link]").forEach((link) => {
    const key = link.dataset.upcomingLink;
    const href = upcomingRelease[key] || "#";

    setLinkState(link, href);
  });
}

function applyPressDownloads() {
  document.querySelectorAll("[data-download]").forEach((link) => {
    const key = link.getAttribute("data-download");
    const href = pressDownloads[key] || "#";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";

    setLinkState(link, href, { hideIfEmpty });
  });
}

function applyCommunityActions() {
  document.querySelectorAll("[data-community-link]").forEach((link) => {
    const key = link.dataset.communityLink;
    const href = communityActions[key] || artistLinks.email;

    setLinkState(link, href);
  });
}

function applyEmbedLinks() {
  document.querySelectorAll("[data-embed]").forEach((frame) => {
    const key = frame.dataset.embed;
    const src = embedLinks[key] || "";
    const wrapper = frame.closest("[data-embed-wrapper]");
    const card = frame.closest(".embed-card");

    if (!src) {
      if (wrapper) {
        wrapper.hidden = true;
      }

      showEmbedFallback(card, key);
      return;
    }

    frame.dataset.cookieSrc = src;

    if (!hasMediaConsent()) {
      showMediaConsentPlaceholder(frame, key);

      if (wrapper) {
        wrapper.hidden = false;
      }

      return;
    }

    frame.src = src;

    if (wrapper) {
      wrapper.hidden = false;
    }

    setupEmbedErrorHandling(frame, wrapper, card, key);
  });
}

function setupDirectMediaEmbeds() {
  document.querySelectorAll("iframe[data-cookie-src]:not([data-embed])").forEach((frame) => {
    if (hasMediaConsent()) {
      loadMediaFrame(frame);
      return;
    }

    showMediaConsentPlaceholder(frame);
  });
}

function setupMediaConsent() {
  addCookieSettingsLink();

  if (getMediaConsent()) {
    return;
  }

  showMediaConsentBanner();
}

function showMediaConsentBanner() {
  if (document.querySelector("[data-cookie-banner]")) {
    return;
  }

  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.setAttribute("data-cookie-banner", "");
  banner.setAttribute("aria-label", "Cookie and media choices");
  banner.innerHTML = `
    <div>
      <p class="cookie-banner__title">Media and cookies</p>
      <p>BTLTECH Music uses essential browser storage. YouTube and Spotify players only load if you accept optional media embeds.</p>
    </div>
    <div class="cookie-banner__actions">
      <button class="button button--primary" type="button" data-accept-media>Accept Media</button>
      <button class="button button--ghost" type="button" data-essential-media>Essential Only</button>
      <a href="privacy-policy.html">Privacy Policy</a>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelector("[data-accept-media]")?.addEventListener("click", () => {
    setMediaConsent(mediaConsentAccepted);
    banner.remove();
    loadAllMediaFrames();
  });

  banner.querySelector("[data-essential-media]")?.addEventListener("click", () => {
    setMediaConsent(mediaConsentEssential);
    banner.remove();
    unloadAllMediaFrames();
  });
}

function addCookieSettingsLink() {
  document.querySelectorAll(".footer-links").forEach((footerLinks) => {
    if (footerLinks.querySelector("[data-cookie-settings]")) {
      return;
    }

    const button = document.createElement("button");
    button.className = "cookie-settings-link";
    button.type = "button";
    button.setAttribute("data-cookie-settings", "");
    button.textContent = "Cookie settings";
    button.addEventListener("click", () => {
      clearMediaConsent();
      showMediaConsentBanner();
      document.querySelector("[data-cookie-banner]")?.scrollIntoView({ block: "nearest" });
    });

    footerLinks.appendChild(button);
  });
}

function showMediaConsentPlaceholder(frame, embedKey = "") {
  const wrapper = frame.closest(".embed-frame-wrap") || frame.parentElement;

  if (!wrapper) {
    return;
  }

  frame.hidden = true;
  frame.removeAttribute("src");

  if (wrapper.querySelector("[data-media-placeholder]")) {
    return;
  }

  const provider = getMediaProviderLabel(frame.dataset.cookieSrc || frame.src || "", embedKey);
  const openUrl = frame.dataset.openUrl || getExternalMediaUrl(frame.dataset.cookieSrc);
  const placeholder = document.createElement("div");
  placeholder.className = "embed-consent-placeholder";
  placeholder.setAttribute("data-media-placeholder", "");
  placeholder.innerHTML = `
    <p class="embed-consent-placeholder__title">${provider} player blocked</p>
    <p>Load this optional media player to watch or listen here. You can also open it on the external platform.</p>
    <div class="button-group">
      <button class="button button--primary" type="button" data-load-media>Load Media</button>
      ${openUrl ? `<a class="button button--ghost" href="${openUrl}" target="_blank" rel="noopener noreferrer">Open Externally</a>` : ""}
    </div>
  `;

  placeholder.querySelector("[data-load-media]")?.addEventListener("click", () => {
    setMediaConsent(mediaConsentAccepted);
    document.querySelector("[data-cookie-banner]")?.remove();
    loadAllMediaFrames();
  });

  wrapper.appendChild(placeholder);
}

function loadAllMediaFrames() {
  document.querySelectorAll("iframe[data-cookie-src]").forEach(loadMediaFrame);
}

function unloadAllMediaFrames() {
  document.querySelectorAll("iframe[data-cookie-src]").forEach((frame) => {
    frame.removeAttribute("src");
    showMediaConsentPlaceholder(frame, frame.dataset.embed || "");
  });
}

function loadMediaFrame(frame) {
  const src = frame.dataset.cookieSrc;

  if (!src) {
    return;
  }

  frame.src = src;
  frame.hidden = false;
  frame.closest(".embed-frame-wrap")?.querySelector("[data-media-placeholder]")?.remove();

  const card = frame.closest(".embed-card");

  if (frame.dataset.embed) {
    setupEmbedErrorHandling(frame, frame.closest("[data-embed-wrapper]"), card, frame.dataset.embed);
  }
}

function getMediaConsent() {
  try {
    return window.localStorage.getItem(mediaConsentStorageKey);
  } catch {
    return "";
  }
}

function hasMediaConsent() {
  return getMediaConsent() === mediaConsentAccepted;
}

function setMediaConsent(value) {
  try {
    window.localStorage.setItem(mediaConsentStorageKey, value);
  } catch {
    /* Storage may be unavailable in private browsing modes. */
  }
}

function clearMediaConsent() {
  try {
    window.localStorage.removeItem(mediaConsentStorageKey);
  } catch {
    /* Storage may be unavailable in private browsing modes. */
  }
}

function getMediaProviderLabel(src, embedKey = "") {
  if (embedKey.includes("spotify") || src.includes("spotify.com")) {
    return "Spotify";
  }

  if (src.includes("youtube.com") || src.includes("youtu.be")) {
    return "YouTube";
  }

  return "Third-party";
}

function getExternalMediaUrl(src = "") {
  try {
    const parsedUrl = new URL(src);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.pathname.match(/\/embed\/([^/?]+)/)?.[1];
      return videoId ? `https://youtu.be/${videoId}` : src;
    }

    if (parsedUrl.hostname.includes("spotify.com")) {
      return src.replace("/embed/", "/");
    }
  } catch {
    return "";
  }

  return src;
}

function setupEmbedErrorHandling(frame, wrapper, card, key) {
  const checkEmbedLoaded = () => {
    try {
      if (frame.contentWindow) {
        return;
      }
    } catch {
      try {
        frame.addEventListener("load", () => {
          const errorMsg = wrapper?.querySelector(".embed-error");
          if (errorMsg) {
            errorMsg.remove();
          }
        }, { once: true });

        setTimeout(() => {
          if (!wrapper?.hidden) {
            const iframeHeight = frame.getBoundingClientRect?.().height;
            if (!iframeHeight || iframeHeight < 100) {
              showEmbedFallback(card, key);
            }
          }
        }, 8000);
        return;
      } catch {
        /* cross-origin, assume loaded */
      }
    }
  };

  frame.addEventListener("error", () => {
    showEmbedFallback(card, key);
  });

  checkEmbedLoaded();
}

function showEmbedFallback(card, embedKey) {
  if (!card) {
    return;
  }

  const wrapper = card.querySelector("[data-embed-wrapper]");
  if (!wrapper) {
    return;
  }

  const existingError = wrapper.querySelector(".embed-error");
  if (existingError) {
    return;
  }

  const label = embedKey === "spotifyArtist" ? "Spotify Player" : "YouTube Playlist";

  const errorDiv = document.createElement("div");
  errorDiv.className = "embed-error";
  errorDiv.style.cssText = "display:flex;align-items:center;justify-content:center;min-height:380px;padding:2rem;text-align:center;color:var(--muted);";
  errorDiv.innerHTML = `<div><p style="margin:0 0 0.5rem;font-size:1.1rem;color:var(--cream);">${label} Unavailable</p><p style="margin:0;font-size:0.95rem;">This embed could not be loaded. You can still visit the artist page directly.</p></div>`;

  wrapper.appendChild(errorDiv);
  wrapper.hidden = false;
}

function resolveReleaseLink(releaseKey, platform, options = {}) {
  const { strict = false } = options;
  const release = releaseCatalog[releaseKey];

  if (!release) {
    return strict ? "#" : getFirstLiveLink(artistLinks[platform], artistLinks.smartLink);
  }

  if (strict) {
    return getFirstLiveLink(release.links[platform]);
  }

  return getFirstLiveLink(release.links[platform], artistLinks[platform], artistLinks.smartLink);
}

function resolveVideoLink(videoKey, options = {}) {
  const { strict = false } = options;
  const video = videoCatalog[videoKey];

  if (strict) {
    return getFirstLiveLink(video?.url);
  }

  return getFirstLiveLink(video?.url, artistLinks.youtubeChannel, artistLinks.youtube);
}

function getFirstLiveLink(...links) {
  return links.find((href) => !isPlaceholderLink(href)) || "#";
}

function setupMailingListForm() {
  const form = document.querySelector("[data-mailing-list-form]");
  const input = document.querySelector("[data-mailing-list-input]");
  const consent = document.querySelector("[data-mailing-consent]");
  const feedback = document.querySelector("[data-mailing-list-feedback]");

  if (!form || !input || !feedback) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = input.value.trim();

    if (!email || !input.checkValidity()) {
      form.reportValidity();
      feedback.textContent = "Enter a valid email address to join the release-alert list.";
      return;
    }

    if (consent && !consent.checked) {
      feedback.textContent = "Confirm consent to receive occasional BTLTECH Music updates before joining.";
      consent.focus();
      return;
    }

    const joinUrl = new URL(communityActions.mailingList);
    const body = joinUrl.searchParams.get("body") || "";
    joinUrl.searchParams.set("body", `${body}\n\nSubscriber email: ${email}\nConsent: yes, release and Lyrid updates requested.`);

    window.location.href = joinUrl.toString();
    feedback.textContent = "Your email app should open so you can confirm the request. If it does not, use the Open In Email App button below.";
    form.reset();
  });
}

function setLinkState(link, href, options = {}) {
  const { hideIfEmpty = false } = options;

  if (!link.dataset.defaultLabel) {
    link.dataset.defaultLabel = link.textContent.trim();
  }

  if (!link.dataset.defaultAriaLabel && link.hasAttribute("aria-label")) {
    link.dataset.defaultAriaLabel = link.getAttribute("aria-label");
  }

  if (isPlaceholderLink(href)) {
    link.setAttribute("href", "#");
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.removeAttribute("title");

    if (hideIfEmpty) {
      link.hidden = true;
      link.classList.remove("is-disabled", "is-coming-soon");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");
      link.removeAttribute("data-status-label");

      if (link.dataset.defaultAriaLabel) {
        link.setAttribute("aria-label", link.dataset.defaultAriaLabel);
      }
    } else {
      link.hidden = false;
      link.classList.add("is-disabled", "is-coming-soon");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("tabindex", "-1");
      link.setAttribute("data-status-label", "Coming Soon");
      link.setAttribute("title", `${link.dataset.defaultLabel} coming soon`);
      link.setAttribute("aria-label", `${link.dataset.defaultLabel} coming soon`);
    }

    return;
  }

  link.hidden = false;
  link.classList.remove("is-disabled", "is-coming-soon");
  link.removeAttribute("aria-disabled");
  link.removeAttribute("tabindex");
  link.removeAttribute("data-status-label");
  link.removeAttribute("title");
  link.setAttribute("href", href);

  if (link.dataset.defaultAriaLabel) {
    link.setAttribute("aria-label", link.dataset.defaultAriaLabel);
  } else {
    link.removeAttribute("aria-label");
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  } else {
    link.removeAttribute("target");
    link.removeAttribute("rel");
  }
}

function isPlaceholderLink(href) {
  return !href || href === "#";
}

function buildSpotifyEmbedUrl(url) {
  const match = url.match(/open\.spotify\.com\/(artist|album|track|playlist)\/([^?]+)/i);

  if (!match) {
    return "";
  }

  return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator`;
}

function buildYouTubePlaylistEmbedUrl(url) {
  if (isPlaceholderLink(url)) {
    return "";
  }

  try {
    const parsedUrl = new URL(url);
    const playlistId = parsedUrl.searchParams.get("list");

    return playlistId ? `https://www.youtube.com/embed/videoseries?list=${playlistId}` : "";
  } catch {
    return "";
  }
}

function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (!menuToggle || !siteNav) {
    return;
  }

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const nextState = String(!isOpen);

    menuToggle.setAttribute("aria-expanded", nextState);
    siteNav.classList.toggle("is-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 920) {
      closeMenu();
    }
  });
}

function clearLegacyServiceWorker() {
  const cacheCleanup = 'caches' in window
    ? caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
    : Promise.resolve();

  const workerCleanup = 'serviceWorker' in navigator
    ? navigator.serviceWorker.getRegistrations().then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister()))
      )
    : Promise.resolve();

  Promise.allSettled([cacheCleanup, workerCleanup]).then(() => {
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
      return;
    }

    try {
      if (sessionStorage.getItem('btltech-sw-cleared') === '1') {
        return;
      }

      sessionStorage.setItem('btltech-sw-cleared', '1');
      window.location.reload();
    } catch {
      /* If storage is unavailable, leave the current page alone. */
    }
  });
}
