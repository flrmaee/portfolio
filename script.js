/* ==========================================================
   Florie Mae Magsalay · Portfolio
   Vanilla JavaScript only
   ========================================================== */

(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var toggles = Array.prototype.slice.call(document.querySelectorAll(".dropdown-toggle"));

  /* ---------- Dropdowns ---------- */

  // Return the menu controlled by a toggle button
  function getMenu(toggle) {
    return document.getElementById(toggle.getAttribute("aria-controls"));
  }

  function setOpen(toggle, isOpen) {
    var menu = getMenu(toggle);
    var arrow = toggle.querySelector(".arrow");

    toggle.setAttribute("aria-expanded", String(isOpen));
    if (menu) menu.classList.toggle("open", isOpen);
    if (arrow) arrow.textContent = isOpen ? "▲" : "▼";
  }

  // Close every dropdown, optionally skipping one
  function closeAll(except) {
    toggles.forEach(function (toggle) {
      if (toggle !== except) setOpen(toggle, false);
    });
  }

  toggles.forEach(function (toggle) {
    // Click toggles this menu and closes the others
    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = toggle.getAttribute("aria-expanded") !== "true";
      closeAll(toggle);
      setOpen(toggle, willOpen);
    });

    // ArrowDown opens the menu and moves focus to the first link
    toggle.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        closeAll(toggle);
        setOpen(toggle, true);
        var first = getMenu(toggle).querySelector("a");
        if (first) first.focus();
      }
    });

    // Clicking a link inside the menu closes it
    var menu = getMenu(toggle);
    if (menu) {
      menu.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(toggle, false);
      });

      // Arrow keys move between links in an open menu
      menu.addEventListener("keydown", function (event) {
        var links = Array.prototype.slice.call(menu.querySelectorAll("a"));
        var index = links.indexOf(document.activeElement);
        if (event.key === "ArrowDown") {
          event.preventDefault();
          links[(index + 1) % links.length].focus();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          links[(index - 1 + links.length) % links.length].focus();
        }
      });
    }
  });

  // Click outside closes all dropdowns
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".has-dropdown")) closeAll();
  });

  // Escape closes dropdowns and returns focus to the button
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    var openToggle = toggles.filter(function (t) {
      return t.getAttribute("aria-expanded") === "true";
    })[0];

    if (openToggle) {
      closeAll();
      openToggle.focus();
    }
  });

  // Close menus if focus tabs out of the dropdown area
  document.addEventListener("focusin", function (event) {
    if (!event.target.closest(".has-dropdown")) closeAll();
  });

  /* ---------- Navigation shadow on scroll ---------- */

  function updateHeaderShadow() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  updateHeaderShadow();

  /* ---------- Active navigation section ---------- */

  var navItems = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
  var sections = navItems
    .map(function (item) {
      return document.getElementById(item.getAttribute("data-section"));
    })
    .filter(Boolean);

  function setActive(id) {
    navItems.forEach(function (item) {
      var isActive = item.getAttribute("data-section") === id;
      item.classList.toggle("active", isActive);
      if (isActive && item.tagName === "A") {
        item.setAttribute("aria-current", "true");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A section counts as "active" when it crosses the upper-middle of the viewport
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });

    // Clear the highlight when back in the hero
    var hero = document.getElementById("top");
    if (hero) {
      new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) setActive("");
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      ).observe(hero);
    }
  }

  /* ---------- Footer year ---------- */

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Smooth scrolling ----------
     Handled in CSS (scroll-behavior + scroll-padding-top), which also
     respects prefers-reduced-motion. No extra JavaScript is needed. */
})();