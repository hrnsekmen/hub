// HUM — prototip için içerik katmanı.
// Bilinçli olarak editoryal: sıcak başlıklar, gerçek hissettiren mekânlar.

export const CATEGORIES = [
  { id: 'yoga', label: 'Yoga', glyph: 'M' },
  { id: 'meditation', label: 'Meditasyon', glyph: 'O' },
  { id: 'breathing', label: 'Nefes', glyph: 'I' },
  { id: 'mindfulness', label: 'Farkındalık', glyph: 'U' },
  { id: 'community', label: 'Topluluk', glyph: 'H' },
]

export const CATEGORY_LABEL = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label]),
)

// Her etkinliğe atanan organik gradyan "ruh halleri".
export const MOODS = {
  dawn: ['#E9D9C2', '#C9A77D'],
  sage: ['#C2CDB8', '#8E9E83'],
  clay: ['#E4C3AB', '#C58E6E'],
  mist: ['#D7DEDA', '#A6B3AC'],
  dusk: ['#D9C6C0', '#B08C86'],
}

export const EVENTS = [
  {
    id: 'e1',
    title: 'Sakin Sabah Akışı',
    category: 'yoga',
    host: 'Lena Vey',
    place: 'Nehir Kıyısı Parkı · Çim 4',
    day: 'Sal',
    date: '10 Haz',
    time: '07:30',
    duration: '50 dk',
    spotsLeft: 6,
    capacity: 18,
    price: 140,
    mood: 'dawn',
    featured: true,
    blurb:
      'Şehir uyanmadan önce bedene nazik bir uyanış. Acelesiz hareket, uzun nefesler ve arkanda nehir.',
    tags: ['Her seviye', 'Açık hava', 'Mat sağlanır'],
  },
  {
    id: 'e2',
    title: 'Öğle Sessizliği — Rehberli Oturuş',
    category: 'meditation',
    host: 'Aria Møller',
    place: 'Merkez Atriyum · Kat 2',
    day: 'Sal',
    date: '10 Haz',
    time: '12:15',
    duration: '20 dk',
    spotsLeft: 11,
    capacity: 24,
    price: 0,
    mood: 'mist',
    featured: false,
    blurb:
      'Sabahın yerine oturması için yirmi dakika. Toplantıların arasında, her şeyin ortasında kısa bir rehberli oturuş.',
    tags: ['Yeni başlayana uygun', 'Kapalı alan', 'Ücretsiz'],
  },
  {
    id: 'e3',
    title: 'Nefes & Işık',
    category: 'breathing',
    host: 'HUM Stüdyo',
    place: 'Breathe Hub · Kuzey Meydan',
    day: 'Çar',
    date: '11 Haz',
    time: '18:00',
    duration: '30 dk',
    spotsLeft: 9,
    capacity: 20,
    price: 90,
    mood: 'clay',
    featured: false,
    blurb:
      'Breathe Hub enstalasyonunun yanında daha uzun bir seans — hareketli ışık formlarıyla eşzamanlı, dengeli nefes.',
    tags: ['Her seviye', 'Açık hava', 'Hub yakını'],
  },
  {
    id: 'e4',
    title: 'Yürüyerek Farkındalık',
    category: 'mindfulness',
    host: 'Theo Sand',
    place: 'Tarihi Çarşı · Çeşme önünde buluşma',
    day: 'Per',
    date: '12 Haz',
    time: '08:00',
    duration: '40 dk',
    spotsLeft: 4,
    capacity: 12,
    price: 110,
    mood: 'sage',
    featured: true,
    blurb:
      'Uyanan sokaklarda yavaş, dikkatli bir yürüyüş. Dokuyu, ışığı, sesi fark et — şehri bir meditasyon nesnesi olarak gör.',
    tags: ['Her seviye', 'Açık hava', 'Küçük grup'],
  },
  {
    id: 'e5',
    title: 'Çay & Yabancılar',
    category: 'community',
    host: 'HUM Topluluk',
    place: 'Sera Kafe · Arka Oda',
    day: 'Per',
    date: '12 Haz',
    time: '19:30',
    duration: '75 dk',
    spotsLeft: 8,
    capacity: 16,
    price: 60,
    mood: 'dusk',
    featured: false,
    blurb:
      'Sessiz bir sosyal ritüel. Çay, birkaç nazik soru ve henüz tanışmadığın insanlarla acelesiz bir sohbet.',
    tags: ['Sosyal', 'Kapalı alan', 'Çay dahil'],
  },
  {
    id: 'e6',
    title: 'Mum Işığında Onarıcı Yoga',
    category: 'yoga',
    host: 'Lena Vey',
    place: 'Çatı Katı · Stüdyo B',
    day: 'Cum',
    date: '13 Haz',
    time: '20:00',
    duration: '60 dk',
    spotsLeft: 2,
    capacity: 14,
    price: 160,
    mood: 'dusk',
    featured: false,
    blurb:
      'Taşınmış, desteklenmiş, durağan. Haftayı bedenden dışa doğru kapatmak için mum ışığında uzun onarıcı duruşlar.',
    tags: ['Her seviye', 'Kapalı alan', 'Ekipman sağlanır'],
  },
  {
    id: 'e7',
    title: 'Gün Doğumu Kare Nefes',
    category: 'breathing',
    host: 'Aria Møller',
    place: 'Liman Basamakları',
    day: 'Cmt',
    date: '14 Haz',
    time: '06:45',
    duration: '25 dk',
    spotsLeft: 13,
    capacity: 22,
    price: 0,
    mood: 'dawn',
    featured: false,
    blurb:
      'Işığı dengeli bir kare ritimle karşıla. Hafta sonuna sağlam başlamak için temiz, sade bir pratik.',
    tags: ['Yeni başlayana uygun', 'Açık hava', 'Ücretsiz'],
  },
  {
    id: 'e8',
    title: 'Ses Banyosu',
    category: 'meditation',
    host: 'Niko Ferris',
    place: 'Botanik Sera',
    day: 'Paz',
    date: '15 Haz',
    time: '17:00',
    duration: '45 dk',
    spotsLeft: 7,
    capacity: 20,
    price: 180,
    mood: 'sage',
    featured: true,
    blurb:
      'Bitkilerin arasına uzan ve işi armonik seslere bırak. Haftayı kapatmak için derinden dinlendirici bir kapanış.',
    tags: ['Her seviye', 'Kapalı alan', 'Mat sağlanır'],
  },
]

export const FEATURED_ID = 'e1'

// Kullanıcının HUM ile mevcut ilişkisi.
export const INITIAL_BOOKINGS = ['e4'] // halihazırda bir rezervasyon var

export const PAST_ATTENDED = [
  { id: 'p1', title: 'Akşam Sakinliği', category: 'yoga', date: '3 Haz', mood: 'dusk' },
  { id: 'p2', title: 'Öğle Sessizliği — Rehberli Oturuş', category: 'meditation', date: '28 May', mood: 'mist' },
  { id: 'p3', title: 'Nefes & Işık', category: 'breathing', date: '24 May', mood: 'clay' },
  { id: 'p4', title: 'Çay & Yabancılar', category: 'community', date: '19 May', mood: 'sage' },
]

// "Anlar" — yeniden tasarlanan ödül sistemi. Puan değil. Sessiz bir üyelik.
export const MEMBERSHIP = {
  momentsThisSeason: 7,
  seasonGoal: 12, // yumuşak şekilde bir "sezon hediyesi" açar
  tier: 'Yerleşmiş', // Yeni · Yerleşmiş · Kök Salmış
  presence: [2, 1, 0, 3, 1, 2, 1], // son 7 hafta, nazik kavisler — asla skor olarak gösterilmez
}

// Breathe Hub'dan gelen hediyeler — atölyelere yönelik hediyeler, asla kupon değil.
export const INITIAL_GIFTS = [
  {
    id: 'g0',
    label: 'Bir sonraki atölyene küçük bir hediye',
    detail: '−%30 · 6 gün içinde geçerli',
    from: 'Breathe Hub · Kuzey Meydan',
    date: '6 Haz',
    used: false,
  },
]

export const USER = {
  name: 'Nursel',
  since: "Mart'tan beri",
  city: 'İstanbul',
}
