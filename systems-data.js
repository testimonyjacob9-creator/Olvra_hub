// Olvra Hub — shared system/product metadata.
// Single source of truth, imported by both index.html (public grid) and
// admin.html (dashboard), so a new system only needs to be added here once.
// Firestore only ever overrides: live, url, message, clicks.
export const SYSTEMS_META = [
  { id:'woodpay', name:'WoodPay', icon:'woodpay-icon.png', category:'digital-services',
    desc:'A money wallet for everyday life. Buy data, airtime, cable TV and electricity, and send or receive money easily.',
    defaultUrl:'https://woodpay.com.ng', defaultLive:true,
    defaultMsg:'' },
  { id:'cgpa', name:'Olvra CGPA', icon:'cgpa-icon.png', category:'education',
    desc:'Work out your CGPA using your school’s real grading system, and plan your semester ahead.',
    defaultUrl:'https://olvracgpa.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'snappull', name:'SnapPull', icon:'snappull-icon.png', category:'creator-social',
    desc:'Paste a link and download social videos with no watermark, in one click.',
    defaultUrl:'https://snappull.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'olvraboost', name:'Olvra Boost', icon:'olvra-boost-icon.png', category:'creator-social',
    desc:'Get more followers, likes, views and comments on all the big platforms. Orders start fast and you can track them live.',
    defaultUrl:'https://olvraboost.com.ng', defaultLive:true,
    defaultMsg:'' },
  { id:'lumora', name:'Lumora OLVRA', icon:'lumora-icon.png', category:'ai-platform', cta:'Visit Lumora →',
    desc:'Friendly AI companions you can chat with, create with, and learn from.',
    defaultUrl:'https://lumoral.netlify.app', defaultLive:true,
    defaultMsg:'' },
  { id:'webdev', name:'Web Development', icon:null, category:'web-tech',
    desc:'Websites, automations, bots and graphic design for businesses and creators.',
    defaultUrl:'https://wa.me/2347065702702', defaultLive:true, isService:true,
    defaultMsg:'' },
  { id:'presence', name:'Presence', icon:null, category:'productivity',
    desc:'WhatsApp automation for status updates, replies and scheduled check-ins.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'' },
  { id:'voiceforge', name:'VoiceForge', icon:'icon-voiceforge.png', category:'productivity',
    desc:'Turn any text into natural, human-sounding speech.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🎙️ Turn any text into a voice that sounds human.' },
  { id:'movie', name:'Movie & Streaming Finder', icon:'icon-movie.png', category:'creator-social',
    desc:'Search movies and shows, and find what to watch next.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🍿 Find what to watch before you finish deciding.' },
  { id:'linkbio', name:'Link-in-Bio Builder', icon:'icon-linkbio.png', category:'web-tech',
    desc:'One page that holds all your links, simple to share.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🔗 One link. Every place people can find you.' },
  { id:'qrcard', name:'QR & Business Card Generator', icon:'icon-qrcard.png', category:'productivity',
    desc:'Make QR codes and digital business cards in seconds.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'📇 Your whole contact card, scanned in one tap.' },
  { id:'groupguard', name:'Group Management Bot', icon:'icon-groupguard.png', category:'productivity',
    desc:'Auto-moderation, welcome messages and anti-spam for WhatsApp and Telegram groups.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🛡️ Groups that manage themselves while you sleep.' },
  { id:'apirelay', name:'API Wrapper', icon:'icon-apirelay.png', category:'web-tech',
    desc:'Turn public APIs into your own, with your own docs, limits and pricing.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'🔌 Your own API, your own pricing, zero hassle.' },
  { id:'reminders', name:'Scheduled Reminders', icon:'icon-reminders.png', category:'productivity',
    desc:'Schedule WhatsApp and Telegram messages to send at the right time.',
    defaultUrl:null, defaultLive:false,
    defaultMsg:'⏰ The nudge that shows up exactly when it should.' }
];

export const CATEGORY_LABEL = {
  'digital-services':'Digital Services', 'creator-social':'Creator & Social', 'ai-platform':'AI Platform / AI Companions',
  'education':'Education', 'productivity':'Productivity', 'web-tech':'Web & Technology'
};

// Docs/FAQ content mirrored from docs.html, kept here so the homepage search
// can surface it. If docs.html content changes meaningfully, update this too.
export const DOCS_INDEX = [
  { id:'woodpay-doc', title:'WoodPay — quick start', anchor:'woodpay',
    snippet:'Open woodpay.com.ng, create a wallet, and start sending or receiving money.' },
  { id:'cgpa-doc', title:'CGPA Engine — quick start', anchor:'cgpa',
    snippet:'Open olvracgpa.netlify.app, select your grading system, and enter your course units and grades.' },
  { id:'snappull-doc', title:'SnapPull — quick start', anchor:'snappull',
    snippet:'Open snappull.netlify.app, paste a social video link, and download a clean, watermark-free copy.' },
  { id:'support-doc', title:'Support', anchor:'support',
    snippet:'Need help with any tool? Reach out on the Contact page and we\'ll get back to you on WhatsApp.' }
];
