// Olvra Hub — lightweight, first-party pageview counter.
// No cookies, no third-party trackers. Counts once per page per browser
// session (sessionStorage), written straight to Firestore as a running
// total per page. Admin dashboard reads these totals.
import { db } from '/firebase-init.js';
import { doc, setDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

(function trackPageview(){
  try {
    const path = window.location.pathname.replace(/\/index\.html$/, '/') || '/';
    const pageId = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\.html$/, '').replace(/\//g, '-');
    const sessionKey = 'olvra_pv_' + pageId;
    if (sessionStorage.getItem(sessionKey)) return; // already counted this session
    sessionStorage.setItem(sessionKey, '1');
    setDoc(
      doc(db, 'pageviews', pageId),
      { views: increment(1), path, lastVisit: new Date().toISOString() },
      { merge: true }
    ).catch(() => {});
  } catch (e) {
    // sessionStorage can throw in private/incognito modes — fail silently,
    // a missed pageview count is not worth surfacing an error to the user.
  }
})();
