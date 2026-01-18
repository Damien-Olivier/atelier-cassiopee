import React from 'react';
import Button from './Button';
import { Mail, MapPin, Phone, Instagram, Linkedin, Send, ArrowLeft } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen flex flex-col justify-center relative z-10">
      <div className="container mx-auto">
        
        {/* Back Button */}
        <div className="mb-12">
             <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 group text-gray-500 hover:text-white pl-0">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Retour à l'accueil
            </Button>
        </div>
        
        {/* Header Section */}
        <div className="mb-20">
            <h2 className="font-sans text-xs md:text-sm text-luxury-silver tracking-[0.3em] uppercase mb-4 opacity-80">
                Me Contacter
            </h2>
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-luxury-white mb-6">
                Parlons de votre <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600">Projet Précieux</span>
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="font-sans font-light text-luxury-silver leading-loose text-lg mb-12">
                Chaque création commence par une rencontre. Que ce soit pour un gouaché unique, une illustration de collection ou une collaboration artistique, je suis à votre écoute.
              </p>

              <div className="space-y-10">
                <div className="group">
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 group-hover:text-white transition-colors">Email</h4>
                  <a href="mailto:Cassiopee.Olivier@gmail.com" className="font-sans text-xl md:text-2xl text-white hover:text-gray-300 transition-colors flex items-center gap-3">
                    Cassiopee.Olivier@gmail.com
                  </a>
                </div>

                <div className="group">
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 group-hover:text-white transition-colors">Atelier</h4>
                  <p className="font-sans text-xl md:text-2xl text-white flex items-center gap-3">
                    Voie lactée, Univers <span className="text-sm text-gray-500 ml-2">(Sur rendez-vous)</span>
                  </p>
                </div>

                <div className="group">
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 group-hover:text-white transition-colors">Réseaux</h4>
                  <div className="flex gap-6">
                    <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <Instagram size={20} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <Linkedin size={20} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 pt-12 border-t border-white/10">
                <p className="font-script text-2xl text-gray-400">
                    "Le détail fait la perfection, et la perfection n'est pas un détail."
                </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-[#111]/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-white transition-colors">Nom</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors font-sans font-light placeholder-white/10"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="group">
                  <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-white transition-colors">Prénom</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors font-sans font-light placeholder-white/10"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-white transition-colors">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors font-sans font-light placeholder-white/10"
                  placeholder="adresse@email.com"
                />
              </div>

              <div className="group">
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-white transition-colors">Sujet</label>
                <select className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors font-sans font-light">
                    <option value="" className="bg-luxury-black text-gray-500">Sélectionnez un objet</option>
                    <option value="devis" className="bg-luxury-black">Demande de Devis</option>
                    <option value="collab" className="bg-luxury-black">Collaboration</option>
                    <option value="autre" className="bg-luxury-black">Autre demande</option>
                </select>
              </div>

              <div className="group">
                <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within:text-white transition-colors">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors font-sans font-light placeholder-white/10 resize-none"
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>

              <div className="pt-8 flex justify-end">
                <Button type="submit" className="flex items-center gap-3 bg-white text-black border-white hover:bg-transparent hover:text-white group">
                  Envoyer <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;