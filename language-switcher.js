const translations = {
   es: {
     profileTitle: "Ingeniero en Software | Estudiante de Maestria en MIEVEA Desarrollador de Tecnologías Inmersivas | Investigador en Tecnologías Inmersivas",
     tags: ["Desarrollo", "Mundos Virtuales", "Educación", "Investigación", "IA Aplicada"],
     socialMedia: "Redes Sociales",
     linkedinSubtext: "Perfil profesional",
     twitterSubtext: "@Horurasu",
     facebookSubtext: "Página oficial",
     instagramSubtext: "Fotos y actualizaciones",
     youtubeSubtext: "@Horurasu",
     programming: "Programación",
     githubSubtext: "@Horurasu",
     research: "Investigación",
     researchgateSubtext: "Publicaciones académicas",
     googleScholarSubtext: "Citas y artículos",
     academiaSubtext: "Perfil académico",
     orcidSubtext: "0009-0003-5618-2261",
     footerMessage: "Gracias por visitar mi página personal. Si deseas contactarme para colaboraciones, proyectos o cualquier consulta, no dudes en hacerlo a través de mis redes sociales."
   },
   en: {
     profileTitle: "Software Engineer | MIEVEA Master's Student | Immersive Technologies Developer | Immersive Technologies Researcher",
     tags: ["Development", "Virtual Worlds", "Education", "Research", "Applied AI"],
     socialMedia: "Social Media",
     linkedinSubtext: "Professional profile",
     twitterSubtext: "@Horurasu",
     facebookSubtext: "Official page",
     instagramSubtext: "Photos and updates",
     youtubeSubtext: "@Horurasu",
     programming: "Programming",
     githubSubtext: "@Horurasu",
     research: "Research",
     researchgateSubtext: "Academic publications",
     googleScholarSubtext: "Citations and articles",
     academiaSubtext: "Academic profile",
     orcidSubtext: "0009-0003-5618-2261",
     footerMessage: "Thank you for visiting my personal page. If you want to contact me for collaborations, projects, or any inquiry, feel free to do so through my social networks."
   },
   ja: {
     profileTitle: "ソフトウェアエンジニア | MIEVEAの修士課程学生 | イマーシブテクノロジー開発者 | イマーシブテクノロジー研究者",
     tags: ["開発", "バーチャルワールド", "教育", "研究", "応用AI"],
     socialMedia: "ソーシャルメディア",
     linkedinSubtext: "プロフェッショナルプロフィール",
     twitterSubtext: "@Horurasu",
     facebookSubtext: "公式ページ",
     instagramSubtext: "写真とアップデート",
     youtubeSubtext: "@Horurasu",
     programming: "プログラミング",
     githubSubtext: "@Horurasu",
     research: "研究",
     researchgateSubtext: "学術出版物",
     googleScholarSubtext: "引用と記事",
     academiaSubtext: "学術プロフィール",
     orcidSubtext: "0009-0003-5618-2261",
     footerMessage: "個人ページへのご訪問ありがとうございます。コラボレーション、プロジェクト、またはお問い合わせについては、ソーシャルネットワークを通じてお気軽にご連絡ください。"
   },
   de: {
     profileTitle: "Softwareingenieur | MIEVEA-Masterstudent | Entwickler immersiver Technologien | Forscher für immersive Technologien",
     tags: ["Entwicklung", "Virtuelle Welten", "Bildung", "Forschung", "Angewandte KI"],
     socialMedia: "Soziale Medien",
     linkedinSubtext: "Berufliches Profil",
     twitterSubtext: "@Horurasu",
     facebookSubtext: "Offizielle Seite",
     instagramSubtext: "Fotos und Updates",
     youtubeSubtext: "@Horurasu",
     programming: "Programmierung",
     githubSubtext: "@Horurasu",
     research: "Forschung",
     researchgateSubtext: "Akademische Publikationen",
     googleScholarSubtext: "Zitate und Artikel",
     academiaSubtext: "Akademisches Profil",
     orcidSubtext: "0009-0003-5618-2261",
     footerMessage: "Vielen Dank für den Besuch meiner persönlichen Seite. Wenn Sie mich für Zusammenarbeit, Projekte oder Anfragen kontaktieren möchten, können Sie dies gerne über meine sozialen Netzwerke tun."
   }
 };
 
 function changeLanguage(lang) {
   document.querySelectorAll('.lang-btn').forEach(btn => {
     btn.classList.remove('active');
   });
   document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
   
   document.querySelector('.profile-description').textContent = translations[lang].profileTitle;
   
   const tagElements = document.querySelectorAll('.tag');
   for (let i = 0; i < tagElements.length && i < translations[lang].tags.length; i++) {
     tagElements[i].textContent = translations[lang].tags[i];
   }
   
   document.querySelector('.social-header h2').innerHTML = `<i class="fas fa-share-alt"></i> ${translations[lang].socialMedia}`;
   document.querySelector('.programming-header h2').innerHTML = `<i class="fas fa-code"></i> ${translations[lang].programming}`;
   document.querySelector('.research-header h2').innerHTML = `<i class="fas fa-flask"></i> ${translations[lang].research}`;
   
   const linkSubtexts = document.querySelectorAll('.link-subtext');
   linkSubtexts[0].textContent = translations[lang].linkedinSubtext;
   linkSubtexts[1].textContent = translations[lang].twitterSubtext;
   linkSubtexts[2].textContent = translations[lang].facebookSubtext;
   linkSubtexts[3].textContent = translations[lang].instagramSubtext;
   linkSubtexts[4].textContent = translations[lang].youtubeSubtext;
   linkSubtexts[5].textContent = translations[lang].githubSubtext;
   linkSubtexts[6].textContent = translations[lang].researchgateSubtext;
   linkSubtexts[7].textContent = translations[lang].googleScholarSubtext;
   linkSubtexts[8].textContent = translations[lang].academiaSubtext;
   linkSubtexts[9].textContent = translations[lang].orcidSubtext;
   
   document.querySelector('.footer p:first-child').textContent = translations[lang].footerMessage;
   
   localStorage.setItem('preferredLanguage', lang);
 }
 
 document.querySelectorAll('.lang-btn').forEach(btn => {
   btn.addEventListener('click', () => {
     changeLanguage(btn.getAttribute('data-lang'));
   });
 });
 
 document.addEventListener('DOMContentLoaded', () => {
   const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
   changeLanguage(savedLanguage);
 });