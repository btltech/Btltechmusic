// BEGINNER EDITING: Update all main artist, streaming, social, email, and phone links here.
// Replace the placeholder # values with the official URLs once you have them.
const artistLinks = {
  spotify: "https://open.spotify.com/artist/3t2rkD90BbAtlzi5Tn4jPu?si=SkRtFELHT4-3te1rXyoyWA",
  appleMusic: "https://music.apple.com/gb/album/through-it-all/1893236878",
  youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kJXtfOoMAxX80GfaoMhZ0Cfa2SBmH3-vw&si=I6yOj1-X7KrukSjw",
  youtubeChannel: "#",
  audiomack: "https://audiomack.com/btl-15",
  tiktok: "https://www.tiktok.com/@btltechmusic",
  instagram: "https://www.instagram.com/btltechmusic/",
  facebook: "#",
  soundcloud: "#",
  smartLink: "#",
  email: "mailto:btl@btltech.co.uk",
  phone: "tel:+447771071111"
};

// BEGINNER EDITING: Choko King is a separate artist. Put his own links here.
// Used anywhere with a data-choko-link attribute. Leave as # until you have the real URL.
const chokoLinks = {
  spotify: "#",
  appleMusic: "#",
  youtube: "#",
  audiomack: "#",
  instagram: "#",
  tiktok: "#",
  smartLink: "#",
  email: "mailto:btl@btltech.co.uk"
};

// BEGINNER EDITING: Choko King's own songs. Falls back to his hub links above when a song link is #.
const chokoReleaseCatalog = {
  chokoSoCool: { links: { spotify: "#", appleMusic: "#", youtube: "#", audiomack: "#" } },
  chokoSoHigh: { links: { spotify: "#", appleMusic: "#", youtube: "#", audiomack: "#" } },
  chokoGyalDem: { links: { spotify: "#", appleMusic: "#", youtube: "#", audiomack: "#" } },
  chokoKingAnthem: { links: { spotify: "#", appleMusic: "#", youtube: "#", audiomack: "#" } }
};

// BEGINNER EDITING: Lyrid is a macOS app in progress. Add the Mac App Store
// link and/or a direct download (.dmg) URL here when public access is ready.
const lyridLinks = {
  macAppStore: "#",
  download: "#",
  web: "lyrid.html"
};

// BEGINNER EDITING: Add release-specific links here so each song can go to its own page.
// If you leave a release link as #, the site falls back to the main artist/platform link above.
const releaseCatalog = {
  omoStacker: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
    }
  },
  chokoSoCool: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
    }
  },
  justDance: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
    }
  },
  imAHustler: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
    }
  },
  welcomeToLagos: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
    }
  },
  bornBlessed: {
    links: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#",
      audiomack: "#"
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
  chokoSoCoolShort: {
    url: "#"
  },
  welcomeToLagosClip: {
    url: "#"
  }
};

// BEGINNER EDITING: Update these placeholder press kit files when you have real assets.
const pressDownloads = {
  photos: "assets/press-photo-placeholder.svg",
  bio: "assets/artist-bio-placeholder.txt",
  logo: "assets/logo-btltech-music.svg",
  oneSheet: "assets/epk-one-sheet-placeholder.txt"
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

document.addEventListener("DOMContentLoaded", () => {
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
  setupMailingListForm();
  setupMobileMenu();
  registerServiceWorker();
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
  const phoneLabel = (artistLinks.phone || "").replace(/^tel:/i, "");

  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.getAttribute("data-link");
    const href = artistLinks[key] || "#";
    const hideIfEmpty = link.dataset.hideIfEmpty === "true";

    setLinkState(link, href, { hideIfEmpty });
  });

  document.querySelectorAll("[data-email-label]").forEach((node) => {
    node.textContent = emailLabel;
  });

  document.querySelectorAll("[data-phone-label]").forEach((node) => {
    node.textContent = phoneLabel;
  });
}

function applyReleaseLinks() {
  document.querySelectorAll("[data-release-key][data-platform]").forEach((link) => {
    const releaseKey = link.dataset.releaseKey;
    const platform = link.dataset.platform;
    const href = resolveReleaseLink(releaseKey, platform);

    setLinkState(link, href);
  });
}

function applyVideoLinks() {
  document.querySelectorAll("[data-video-key]").forEach((link) => {
    const videoKey = link.dataset.videoKey;
    const href = resolveVideoLink(videoKey);

    setLinkState(link, href);
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

    frame.src = src;

    if (wrapper) {
      wrapper.hidden = false;
    }

    setupEmbedErrorHandling(frame, wrapper, card, key);
  });
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

function resolveReleaseLink(releaseKey, platform) {
  const release = releaseCatalog[releaseKey];

  if (!release) {
    return getFirstLiveLink(artistLinks[platform], artistLinks.smartLink);
  }

  return getFirstLiveLink(release.links[platform], artistLinks[platform], artistLinks.smartLink);
}

function resolveVideoLink(videoKey) {
  const video = videoCatalog[videoKey];

  return getFirstLiveLink(video?.url, artistLinks.youtubeChannel, artistLinks.youtube);
}

function getFirstLiveLink(...links) {
  return links.find((href) => !isPlaceholderLink(href)) || "#";
}

function setupMailingListForm() {
  const form = document.querySelector("[data-mailing-list-form]");
  const input = document.querySelector("[data-mailing-list-input]");
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

    const joinUrl = new URL(communityActions.mailingList);
    const body = joinUrl.searchParams.get("body") || "";
    joinUrl.searchParams.set("body", `${body}\n\nSubscriber email: ${email}`);

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

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .catch((error) => {
        console.warn('Service worker registration failed:', error);
      });
  });
}
