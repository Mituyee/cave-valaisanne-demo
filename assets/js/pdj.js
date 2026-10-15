/* Cave Valaisanne — Plat du jour page.
   Reads ../data/plat-du-jour.json (generated from PUBLISHED weeks only; drafts never reach this site).
   "Today" = Europe/Zurich wall-clock date, changing at 04:00 local time (DST-safe). */
(function () {
  "use strict";
  var V = (window.MENU_DATA || {}).venue || {};
  var root = document.getElementById("pdj");
  var DATA_URL = "../data/plat-du-jour.json";
  var TZ = "Europe/Zurich", CHANGEOVER = 4;
  var JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  var MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function money(n) { return (Number.isInteger(n) ? n + ".–" : Number(n).toFixed(2)) + " CHF"; }

  /* ---------- dates (pure functions, exposed for tests) ---------- */
  function zurichParts(date) {
    var p = {};
    new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23" })
      .formatToParts(date).forEach(function (x) { p[x.type] = x.value; });
    return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour };
  }
  function ymd(y, m, d) { var t = new Date(Date.UTC(y, m - 1, d)); return t.toISOString().slice(0, 10); }
  function addDays(iso, n) { var t = new Date(iso + "T00:00:00Z"); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); }
  function serviceDate(now) {
    var z = zurichParts(now || new Date());
    var today = ymd(z.y, z.m, z.d);
    return z.h < CHANGEOVER ? addDays(today, -1) : today;   // calendar arithmetic: correct across DST changes
  }
  function longDate(iso) {
    var t = new Date(iso + "T00:00:00Z");
    var s = JOURS[t.getUTCDay()] + " " + t.getUTCDate() + " " + MOIS[t.getUTCMonth()] + " " + t.getUTCFullYear();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function shortDays(dates) {
    return dates.map(function (iso) { var t = new Date(iso + "T00:00:00Z"); return JOURS[t.getUTCDay()] + " " + t.getUTCDate(); }).join(" & ");
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---------- selection: only an entry dated for the service date can ever be shown ---------- */
  function pick(data, today) {
    var weeks = (data && data.weeks) || [];
    for (var i = 0; i < weeks.length; i++) {
      var w = weeks[i];
      for (var j = 0; j < (w.days || []).length; j++) {
        var day = w.days[j];
        if ((day.dates || []).indexOf(today) !== -1) {
          var state = day.unavailable ? "unavailable" : ((day.dishes || []).length ? "ok" : "none");
          return { state: state, week: w, day: day };
        }
      }
    }
    return { state: "none" };
  }

  /* ---------- rendering ---------- */
  var ICON = {
    back: '<path d="M14.5 5.5L8 12l6.5 6.5"/>',
    plate: '<circle cx="12" cy="13" r="7.5"/><circle cx="12" cy="13" r="4.2"/><path d="M3 4v5M5 4v5M4 9v11"/><path d="M20 4v16"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'
  };
  function icon(n) { return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + "</svg>"; }
  function header() {
    var w = V.logoWebp || {};
    var brand = V.logo ? '<a class="logo-link" href="../" title="Retour à la carte"><picture>' +
      (w["320"] ? '<source type="image/webp" srcset="../' + esc(w["320"]) + ' 320w' + (w["600"] ? ', ../' + esc(w["600"]) + ' 600w' : '') + '" sizes="(min-width:760px) 144px, 132px">' : '') +
      '<img class="logo" src="../' + esc(V.logo) + '" alt="' + esc(V.logoAlt) + '" width="600" height="600" decoding="async"></picture></a>' :
      '<span class="wordmark" role="img" aria-label="' + esc(V.logoAlt || "Cave Valaisanne – Chalet Suisse") + '"><b>' + esc(V.name || "Cave Valaisanne") + "</b><span>" + esc(V.brand || "Chalet Suisse") + "</span></span>";
    return '<header class="top' + (V.logo ? " has-logo" : "") + '"><div class="band">' + brand + '</div><div class="strip" aria-hidden="true"></div>' +
      '<span class="demo-tag">Démonstration de concept</span></header>';
  }
  function photo(d) {
    if (!d.image) return "";   // photo is optional: no empty placeholder when none was added
    return '<div class="ph pdj-photo"><div class="ph-art">' + icon("plate") + '</div><img src="../' + esc(d.image) + '" alt="' + esc(d.name) +
      '" decoding="async" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()"></div>';
  }
  function dishCard(d) {
    return '<article class="pdj-dish' + (d.image ? "" : " no-photo") + '">' + photo(d) + '<div class="pdj-body">' +
      (d.label ? '<p class="pdj-label">' + esc(d.label) + "</p>" : "") +
      '<h2 class="pdj-name">' + esc(d.name) + "</h2>" +
      (d.description ? '<p class="pdj-desc">' + esc(d.description) + "</p>" : "") +
      (d.sides ? '<p class="pdj-sides">' + esc(d.sides) + "</p>" : "") +
      '<p class="pdj-price">' + money(d.price) + "</p></div></article>";
  }
  function weekList(week, today) {
    var rows = week.days.map(function (day) {
      var isToday = day.dates.indexOf(today) !== -1;
      var body = day.unavailable ? '<span class="wk-off">Indisponible</span>' :
        (day.dishes.length ? day.dishes.map(function (d) { return '<span class="wk-dish">' + esc(d.name) + ' <b>' + money(d.price) + "</b></span>"; }).join("") :
          '<span class="wk-off">Non communiqué</span>');
      return '<li class="wk-row' + (isToday ? " is-today" : "") + '"' + (isToday ? ' aria-current="date"' : "") + '><span class="wk-day">' + esc(cap(shortDays(day.dates))) +
        (isToday ? ' <em>Aujourd’hui</em>' : "") + '</span><span class="wk-dishes">' + body + "</span></li>";
    }).join("");
    var first = week.days[0].dates[0], last = week.days[week.days.length - 1].dates.slice(-1)[0];
    return '<details class="pdj-week"><summary>Voir toute la semaine</summary><p class="wk-range">Semaine du ' + esc(shortDays([first])) + " au " + esc(longDate(last).toLowerCase()) + "</p>" +
      '<ul class="wk-list">' + rows + "</ul>" + (week.note ? '<p class="wk-note">' + esc(week.note) + "</p>" : "") + "</details>";
  }
  function footer(demo) {
    return '<nav class="pdj-nav"><a class="pdj-back" href="../">' + icon("back") + "Voir la carte complète</a></nav>" +
      '<footer class="foot">' +
      (V.notice ? "<p>" + esc(V.notice) + "</p>" : "") +
      (V.reservation ? '<p><a class="resa" href="' + esc(V.reservation.url) + '" target="_blank" rel="noopener">' + esc(V.reservation.label) + "</a></p>" : "") +
      '<p class="demo">Démonstration de concept — photographies illustratives' + (demo ? " — plats du jour de démonstration" : "") + ".</p>" +
      '<p class="prov">Conception : ' + esc(V.provider || "Swiss Advert Studio") + "</p></footer>";
  }
  function render(data, now, failed) {
    var today = serviceDate(now);
    var r = failed ? { state: "error" } : pick(data, today);
    var main;
    if (r.state === "ok") {
      var weekend = r.day.dates.length > 1;
      main = '<p class="pdj-date">' + icon("calendar") + esc(longDate(today)) + "</p>" +
        (weekend ? '<p class="pdj-sub">Plat du week-end (' + esc(shortDays(r.day.dates)) + ")</p>" : "") +
        r.day.dishes.map(dishCard).join("") +
        (r.week.note ? '<p class="pdj-note">' + esc(r.week.note) + "</p>" : "") + weekList(r.week, today);
    } else {
      var msg = {
        unavailable: ["Le plat du jour n’est pas disponible aujourd’hui.", "Découvrez nos autres spécialités sur la carte."],
        none: ["Aucun plat du jour n’est publié pour aujourd’hui.", "Notre carte complète reste disponible."],
        error: ["Le plat du jour ne peut pas être affiché pour le moment.", "Vérifiez votre connexion ou consultez la carte complète."]
      }[r.state];
      main = '<p class="pdj-date">' + icon("calendar") + esc(longDate(today)) + "</p>" +
        '<div class="pdj-empty" data-state="' + r.state + '">' + icon("clock") + "<h2>" + msg[0] + "</h2><p>" + msg[1] + "</p></div>" +
        (r.state === "unavailable" ? weekList(r.week, today) : "");
    }
    root.innerHTML = header() + '<main class="pdj-main" data-state="' + r.state + '" data-date="' + today + '"><h1>Plat du jour</h1>' + main + "</main>" +
      footer(data && data.demo);
    document.title = "Plat du jour — " + (V.name || "Cave Valaisanne") + " – " + (V.brand || "Chalet Suisse");
  }

  window.__pdj = { serviceDate: serviceDate, pick: pick, longDate: longDate };

  fetch(DATA_URL + "?v=" + Date.now(), { cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) { render(data, new Date(), false); })
    .catch(function () { render(null, new Date(), true); });
})();
