import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Sparkles from './components/Sparkles';
import Button from './components/Button';
import Contact from './components/Contact';
import Article, { ArticleData } from './components/Article';
import { Camera, Diamond, PenTool, ArrowRight } from 'lucide-react';

// Reusable Section Title Component
const SectionTitle: React.FC<{ title: string; subtitle: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="font-sans text-xs md:text-sm text-luxury-silver tracking-[0.3em] uppercase mb-4 opacity-80">{subtitle}</h2>
    <h3 className="font-script text-4xl md:text-5xl lg:text-6xl text-luxury-white">{title}</h3>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'article'>('home');
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  // Données des articles (mock)
  const articles: ArticleData[] = [
    {
      id: 1,
      title: "L'âme du Saphir",
      date: "12 Octobre 2023",
      excerpt: "Comprendre la complexité des teintes bleutées et comment les retranscrire avec fidélité en gouaché.",
      img: "https://picsum.photos/600/400?random=10",
      content: (
        <>
          <p className="mb-6">
            Le saphir n'est jamais simplement bleu. C'est une profondeur abyssale, un voyage entre l'azur céleste et le bleu nuit des océans profonds. Pour le retranscrire en gouaché, il ne suffit pas de peindre une couleur, il faut peindre la lumière qui le traverse.
          </p>
          <p className="mb-6">
            J'utilise une superposition de couches très diluées, un lavis progressif qui permet de donner cette impression de transparence vitreuse. Les zones de lumière, ou "feux", sont réservées dès le début ou réhaussées à la gouache blanche pure en toute fin de processus. C'est un jeu constant entre l'ombre portée par les facettes de culasse et la lumière réfléchie par la table.
          </p>
          <p>
            Chaque saphir a sa personnalité. Le saphir de Ceylan vibre d'un bleu électrique, presque violet par endroits, tandis que le saphir Cachemire possède cette texture veloutée si particulière, ce "sommeil" qui adoucit la lumière. C'est cette âme que je cherche à capturer sur le papier.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "Technique du Lavis",
      date: "28 Septembre 2023",
      excerpt: "Les secrets d'un fond parfait pour mettre en valeur l'éclat métallique de la monture.",
      img: "https://picsum.photos/600/400?random=11",
      content: (
        <>
          <p className="mb-6">
            Le secret d'un métal qui semble lourd et précieux sur le papier réside souvent dans la qualité du lavis initial. L'or gris, particulièrement exigeant, demande une gamme de gris colorés subtils, tirant parfois sur le bleu acier ou le chaud selon l'alliage désiré.
          </p>
          <p className="mb-6">
            La technique du dégradé parfait est essentielle pour suggérer la courbure du métal (le "bombé"). Je travaille sur papier gris ou teinté masse, ce qui me permet d'utiliser le fond comme une valeur moyenne et de venir sculpter les volumes uniquement avec les ombres profondes et les lumières vives.
          </p>
          <p>
            Un bon gouaché doit faire sentir le poids du bijou. Le contraste entre le fini poli miroir et les parties plus mates ou brossées crée ce réalisme tactile qui donne envie de toucher la pièce avant même qu'elle ne soit fabriquée.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "Inspirations Nocturnes",
      date: "15 Septembre 2023",
      excerpt: "Retour sur la création de la collection 'Nyx', née sous les étoiles d'une nuit d'été.",
      img: "https://picsum.photos/600/400?random=12",
      content: (
        <>
          <p className="mb-6">
            La nuit n'est pas noire, elle est riche de nuances. La collection 'Nyx' est née d'une observation minutieuse du ciel d'été. J'ai voulu capturer ce moment précis où le crépuscule bascule vers l'obscurité totale, où les premières étoiles apparaissent comme des diamants solitaires.
          </p>
          <p className="mb-6">
            Pour cette série d'illustrations, j'ai travaillé avec des spinelles noirs et des diamants sur or noir rhodié. Le défi était de rendre lisible une pièce "ton sur ton". Le jeu des reflets devient alors primordial : c'est la lumière qui dessine la forme, puisque la couleur s'efface.
          </p>
          <p>
            L'inspiration est venue de l'architecture gothique et des voûtes célestes. Les lignes sont élancées, piquantes, presque dangereuses, mais adoucies par des cabochons mystérieux qui semblent contenir leur propre lumière interne.
          </p>
        </>
      )
    }
  ];

  const navigateToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const openArticle = (article: ArticleData) => {
    setSelectedArticle(article);
    setCurrentPage('article');
  };

  const navigateToHomeJournal = () => {
    setCurrentPage('home');
    setTimeout(() => {
        document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative min-h-screen text-luxury-white selection:bg-white selection:text-black">
      
      {/* 
        TEXTURE ARDOISE / PIERRE NOIRE (SLATE BACKGROUND)
        Recreation procédurale de la texture de l'image fournie
      */}
      <div className="fixed inset-0 bg-[#080808] z-0"></div>
      
      {/* Couche de relief stratifié (les "vagues" de la pierre) */}
      <div 
        className="fixed inset-0 opacity-30 z-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(115deg, transparent 0%, transparent 40%, rgba(255,255,255,0.08) 45%, transparent 50%, transparent 100%),
            linear-gradient(105deg, transparent 0%, transparent 20%, rgba(255,255,255,0.05) 25%, transparent 35%, transparent 100%),
            linear-gradient(125deg, transparent 0%, transparent 60%, rgba(255,255,255,0.04) 65%, transparent 75%, transparent 100%)
          `,
          backgroundSize: '150% 150%'
        }}
      ></div>

      {/* Couche de grain intense pour l'aspect minéral */}
      <div className="fixed inset-0 bg-noise opacity-[0.15] mix-blend-overlay pointer-events-none z-0"></div>
      
      {/* Vignette sombre pour la profondeur */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_120%)] pointer-events-none z-0"></div>

      <Sparkles />

      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="relative z-10 min-h-screen">
        {currentPage === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section id="hero" className="relative w-full h-screen flex flex-col items-center pt-24 md:pt-0 z-10 overflow-hidden">
              {/* Banner Image Area */}
              <div className="absolute top-0 left-0 w-full h-[55vh] md:h-[65vh] overflow-hidden">
                <img 
                  src="image_0.png" 
                  alt="Gouaché de haute joaillerie" 
                  className="w-full h-full object-cover opacity-90 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#080808]"></div>
              </div>

              {/* Content Area */}
              <div className="relative mt-[50vh] md:mt-[60vh] z-20 flex flex-col items-center justify-center text-center px-4 w-full">
                  <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-4 p-4 leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-white via-luxury-silver to-gray-400 drop-shadow-2xl">
                    L'atelier de Cassiopée
                  </h1>
                  <p className="font-sans text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-luxury-silver mb-12 max-w-2xl leading-relaxed">
                    Gouaché & Illustration de Haute Joaillerie
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <Button onClick={() => {
                        const el = document.getElementById('portfolio');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}>Voir le portfolio</Button>
                    <Button variant="outline" onClick={navigateToContact} className="border-luxury-silver/30 text-luxury-silver hover:border-white hover:text-black hover:bg-white">
                      Demander un devis
                    </Button>
                  </div>
              </div>
            </section>

            {/* PRESENTATION SECTION */}
            <section id="à-propos" className="py-32 px-6 md:px-12 bg-black/20 backdrop-blur-[2px]">
              <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative">
                  <div className="aspect-[4/5] bg-[#111] overflow-hidden border border-white/10 p-2 shadow-2xl">
                    <div className="w-full h-full bg-[#0a0a0a] relative">
                        <img src="https://picsum.photos/600/800?grayscale" alt="L'artiste au travail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform" />
                    </div>
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-luxury-white/20"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-luxury-white/20"></div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <SectionTitle align="left" title="L'Art du Détail" subtitle="L'Atelier" />
                  <p className="font-sans font-light text-luxury-silver leading-loose tracking-wide mb-8 text-justify">
                    Au cœur de la création joaillière, le gouaché est l'étape cruciale où l'idée prend vie. 
                    Dans une atmosphère feutrée, je traduis la lumière, le volume et l'éclat des pierres précieuses 
                    sur le papier, offrant une vision réaliste et poétique de vos futures parures.
                  </p>
                  <p className="font-sans font-light text-luxury-silver leading-loose tracking-wide mb-12 text-justify">
                    Chaque trait est une promesse, chaque reflet une invitation au rêve. Spécialisée dans le rendu 
                    photoréaliste et l'esthétique sombre, je sublime vos créations par le contraste et l'élégance.
                  </p>
                  <Button>Découvrir l'artiste</Button>
                </div>
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-32 px-6 md:px-12 bg-black/40 border-t border-white/5">
              <div className="container mx-auto">
                <SectionTitle title="Mes Services" subtitle="Expertise" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                  {[
                    { 
                      icon: <PenTool className="w-8 h-8 mb-6 text-white font-thin" strokeWidth={1} />,
                      title: "Gouaché Traditionnel", 
                      desc: "Réalisation à la main de gouachés techniques et artistiques pour la haute joaillerie. Maîtrise des volumes or et platine." 
                    },
                    { 
                      icon: <Diamond className="w-8 h-8 mb-6 text-white font-thin" strokeWidth={1} />,
                      title: "Rendu de Gemmes", 
                      desc: "Expertise dans la représentation des pierres précieuses : diamants, saphirs, émeraudes, avec un souci absolu de la réfraction." 
                    },
                    { 
                      icon: <Camera className="w-8 h-8 mb-6 text-white font-thin" strokeWidth={1} />,
                      title: "Illustration Conceptuelle", 
                      desc: "Création d'ambiances visuelles et de moodboards pour vos collections, alliant techniques mixtes et digitales." 
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="group p-8 border border-white/5 bg-[#0f0f0f] hover:bg-[#151515] transition-colors duration-500 hover:border-white/20 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {service.icon}
                      <h4 className="font-sans text-lg uppercase tracking-[0.15em] mb-4 text-white group-hover:text-luxury-silver transition-colors relative z-10">{service.title}</h4>
                      <p className="font-sans font-light text-sm text-gray-400 leading-relaxed tracking-wide relative z-10">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PORTFOLIO PREVIEW */}
            <section id="portfolio" className="py-32 px-0 relative overflow-hidden">
              <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
                <div className="text-left">
                    <h2 className="font-sans text-xs md:text-sm text-luxury-silver tracking-[0.3em] uppercase mb-2 opacity-80">Portfolio</h2>
                    <h3 className="font-script text-4xl md:text-5xl text-luxury-white">Sélection Précieuse</h3>
                </div>
                <a href="#portfolio-full" className="hidden md:block font-sans text-xs uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-colors">Tout voir</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group relative h-[500px] overflow-hidden border-r border-white/5 border-b lg:border-b-0 last:border-r-0 bg-[#0a0a0a]">
                    <img 
                      src={`https://picsum.photos/800/1000?random=${item}&grayscale`} 
                      alt="Pièce de joaillerie" 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 opacity-60 group-hover:opacity-100 mix-blend-normal hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-8 left-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white mb-2">Collection {2023 + item}</p>
                      <h4 className="font-script text-3xl text-white">Bague Éternité #{item}</h4>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 flex justify-center md:hidden">
                <Button variant="outline">Voir tout le portfolio</Button>
              </div>
            </section>

            {/* BLOG SECTION (LE JOURNAL) */}
            <section id="journal" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
              <div className="container mx-auto">
                <SectionTitle title="Carnet d'Atelier" subtitle="Journal" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {articles.map((article) => (
                      <article key={article.id} onClick={() => openArticle(article)} className="group flex flex-col cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[3/2] border border-white/5 relative">
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity z-10"></div>
                          <img 
                            src={`${article.img}&grayscale`} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                          />
                        </div>
                        <div className="flex flex-col gap-3">
                          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-silver/60">{article.date}</span>
                          <h4 className="font-script text-3xl text-luxury-white group-hover:text-luxury-silver transition-colors">{article.title}</h4>
                          <p className="font-sans font-light text-xs leading-loose text-gray-400 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                            Lire l'article <ArrowRight size={12} />
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </section>

            {/* CONTACT BANNER (CTA Only) */}
            <section id="contact-banner" className="py-40 px-6 relative flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-[#0f0f0f]"></div>
                <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
                
                <div className="relative z-10">
                  <h2 className="font-script text-5xl md:text-7xl mb-8">Donnons vie à l'exceptionnel</h2>
                  <p className="font-sans text-sm tracking-[0.2em] text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
                    Disponible pour des collaborations exclusives et des commandes privées.
                  </p>
                  <Button onClick={navigateToContact} className="bg-luxury-black hover:bg-white hover:text-black border-luxury-black">Me Contacter</Button>
                </div>
            </section>
          </>
        ) : currentPage === 'contact' ? (
          <Contact onBack={navigateToHome} />
        ) : (
          selectedArticle && <Article article={selectedArticle} onBack={navigateToHomeJournal} />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/10 relative z-10">
        <div className="container mx-auto flex flex-col items-center">
          <img src="image_2.jpg" alt="Logo Footer" className="h-20 w-20 mb-8 opacity-80 mix-blend-screen" />
          
          <div className="flex gap-8 mb-12">
            {['Instagram', 'LinkedIn', 'Pinterest'].map(social => (
              <a key={social} href="#" className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
          
          <p className="font-sans text-[10px] tracking-[0.2em] text-gray-700 uppercase">
            © {new Date().getFullYear()} L'atelier de Cassiopée. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;