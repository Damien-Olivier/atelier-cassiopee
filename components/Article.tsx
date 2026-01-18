import React, { useEffect } from 'react';
import Button from './Button';
import { ArrowLeft, Share2 } from 'lucide-react';

export interface ArticleData {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  img: string;
  content: React.ReactNode;
}

interface ArticleProps {
  article: ArticleData;
  onBack: () => void;
}

const Article: React.FC<ArticleProps> = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <article className="pt-32 pb-20 px-6 md:px-12 min-h-screen relative z-10 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-12 flex items-center gap-2 group text-gray-500 hover:text-white pl-0">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Retour au journal
        </Button>

        <header className="mb-16 text-center">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-luxury-silver mb-4 block opacity-80">
                {article.date} — Journal de l'Atelier
            </span>
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-luxury-white mb-8 leading-tight drop-shadow-lg">
                {article.title}
            </h1>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
        </header>

        <div className="mb-16 relative aspect-[16/9] w-full overflow-hidden border border-white/10 group shadow-2xl">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
             <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert prose-lg mx-auto font-serif text-gray-300 font-light leading-loose tracking-wide">
            {/* Drop cap effect simulated */}
            <div className="first-letter:float-left first-letter:text-6xl first-letter:pr-4 first-letter:font-script first-letter:text-white">
                {article.content}
            </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
             <div className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500">Partager cette inspiration</div>
             <div className="flex gap-4">
                 <button className="p-3 hover:bg-white hover:text-black rounded-full transition-all duration-300 border border-white/10">
                    <Share2 size={18} strokeWidth={1.5} />
                 </button>
             </div>
        </div>
      </div>
    </article>
  );
};

export default Article;