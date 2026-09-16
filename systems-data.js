// Olvra Hub — shared system/product metadata.
// Single source of truth, imported by both index.html (public grid) and
// admin.html (dashboard), so a new system only needs to be added here once.
// Firestore only ever overrides: live, url, message, clicks.
export const SYSTEMS_META = [
  { id:'woodpay', name:'WoodPay', icon:'woodpay-icon.png', category:'digital-services',
    desc:'A fintech wallet and VTU platform for everyday use — data, airtime, cable TV, electricity, send and receive money without the friction.',
    defaultUrl:'https://woodpay.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'cgpa', name:'Olvra CGPA', icon:'cgpa-icon.png', category:'education',
    desc:'A calculator built around real grading systems, so students can plan a semester before it plans them.',
    defaultUrl:'https://olvracgpa.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'snappull', name:'SnapPull', icon:'snappull-icon.png', category:'creator-social',
    desc:'Pull down video content from social platforms, clean and watermark-free, in one click.',
    defaultUrl:'https://snappull.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'olvraboost', name:'Olvra Boost', icon:'olvra-boost-icon.png', category:'creator-social',
    desc:'Order real followers, likes, views and comments across every major platform — instant processing, live tracking.',
    defaultUrl:'https://olvraboost.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'webdev', name:'Web Development', icon:null, category:'web-tech',
    desc:'Website builds, automations, bots, and graphic design for businesses and creators — from Olvra Systems.',
    defaultUrl:'https://wa.me/2347065702702', defaultLive:true, isService:true,
    defaultMsg:'' },
  { id:'presence', name:'Presence', icon:null, category:'productivity',
    desc:'A quiet WhatsApp automation layer for status, replies, and scheduled check-ins that never sleep.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'' },
  { id:'voiceforge', name:'VoiceForge', icon:'icon-voiceforge.png', category:'productivity',
    desc:'Converts text into natural, human-sounding speech — for voice notes, narration, or accessibility.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🎙️ Turn any text into a voice that sounds human.' },
  { id:'movie', name:'Movie & Streaming Finder', icon:'icon-movie.png', category:'creator-social',
    desc:'Search and browse movies and shows by metadata — a clean way to find what to watch next.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🍿 Find what to watch before you finish deciding.' },
  { id:'linkbio', name:'Link-in-Bio Builder', icon:'icon-linkbio.png', category:'web-tech',
    desc:'One shareable page for all your links — clean, fast, and yours.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🔗 One link. Every place people can find you.' },
  { id:'qrcard', name:'QR & Business Card Generator', icon:'icon-qrcard.png', category:'productivity',
    desc:'Custom QR codes and digital business cards, made and shared in seconds.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'📇 Your whole contact card, scanned in one tap.' },
  { id:'groupguard', name:'Group Management Bot', icon:'icon-groupguard.png', category:'productivity',
    desc:'Auto-moderation, welcome messages, and anti-spam for WhatsApp and Telegram groups.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🛡️ Groups that manage themselves while you sleep.' },
  { id:'apirelay', name:'API Wrapper', icon:'icon-apirelay.png', category:'web-tech',
    desc:'Public APIs, repackaged with your own docs and rate limits — simple access, your pricing.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🔌 Your own API, your own pricing, zero hassle.' },
  { id:'reminders', name:'Scheduled Reminders', icon:'icon-reminders.png', category:'productivity',
    desc:'Scheduled WhatsApp and Telegram messages that show up right when they\'re supposed to.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'⏰ The nudge that shows up exactly when it should.' }
];

export const CATEGORY_LABEL = {
  'digital-services':'Digital Services', 'creator-social':'Creator & Social',
  'education':'Education', 'productivity':'Productivity', 'web-tech':'Web & Technology'
};

// Docs/FAQ content mirrored from docs.html, kept here so the homepage search
// can surface it. If docs.html content changes meaningfully, update this too.
export const DOCS_INDEX = [
  { id:'woodpay-doc', title:'WoodPay — quick start', anchor:'woodpay',
    snippet:'Open woodpay.netlify.app, create a wallet, and start sending or receiving money.' },
  { id:'cgpa-doc', title:'CGPA Engine — quick start', anchor:'cgpa',
    snippet:'Open olvracgpa.netlify.app, select your grading system, and enter your course units and grades.' },
  { id:'snappull-doc', title:'SnapPull — quick start', anchor:'snappull',
    snippet:'Open snappull.netlify.app, paste a social video link, and download a clean, watermark-free copy.' },
  { id:'support-doc', title:'Support', anchor:'support',
    snippet:'Need help with any tool? Reach out on the Contact page and we\'ll get back to you on WhatsApp.' }
];
