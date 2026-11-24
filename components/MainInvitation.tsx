'use client';

import React, { useState } from 'react';
import { Navigation } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Florals } from './Florals';
import { Divider } from './Divider';
import { ScratchCard } from './ScratchCard';

export const MainInvitation: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <main className="relative animate-fade-in w-full overflow-hidden">
      {/* Hero Poster / Banner */}
      <section className="w-full flex justify-center bg-cream">
        <img
          src="/assets/homehero.png"
          alt="Mohd Saleem & Insha Siddiqui - Wedding Invitation"
          className="w-full max-w-4xl h-auto block shadow-soft"
        />
      </section>

      {/* Scratch to Reveal Date & Countdown */}
      <section className="relative py-10 px-6 bg-cream">
        <Florals />
        <div className="relative max-w-3xl mx-auto text-center">
          <Divider />
          <FadeIn className="mb-10">
            <ScratchCard
              revealed={isRevealed}
              onRevealed={() => setIsRevealed(true)}
            />
          </FadeIn>
        </div>
      </section>

      {/* Reception Ceremony Card Showcase */}
      <section className="relative py-8 px-4 sm:px-6 bg-cream">
        <Florals />
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn className="w-full max-w-lg">
            <div className="rounded-3xl overflow-hidden border border-gold-soft shadow-elegant hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/assets/reception.png"
                alt="Reception Ceremony - Dawat-e-Walima"
                className="w-full h-auto object-cover block shadow-soft"
              />
            </div>
          </FadeIn>
        </div>
      </section>



      {/* Awaiting your gracious presence / Muslim Invitation Details */}
      <section className="relative py-12 px-6 bg-cream text-center">
        <Florals />
        <FadeIn className="relative max-w-3xl mx-auto">
          {/* Islamic Bismillah Heading */}
          <p className="font-serif-display text-2xl sm:text-3xl text-rose-deep font-semibold tracking-wide mb-2">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-sm sm:text-base italic text-foreground/75 tracking-wider uppercase mb-6">
            In the name of Allah, the most Beneficent &amp; Merciful
          </p>

          <p className="font-serif-display text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Mrs. &amp; Mr. Mohd. Abdul Jabbar Ahmad
          </p>
          <p className="text-sm sm:text-base text-foreground/70 italic mt-1">
            cordially request your gracious presence on the auspicious occasion of
          </p>

          <h2 className="font-script text-4xl sm:text-6xl text-rose-deep my-4">
            Reception Ceremony
          </h2>
          <p className="font-serif-display text-xl sm:text-2xl text-rose-deep font-medium mb-3">
            (دعوتِ ولیمہ)
          </p>
          <p className="text-sm sm:text-base text-foreground/70 italic">
            of their beloved son
          </p>

          {/* Groom & Bride Names */}
          <div className="my-6">
            <h3 className="font-script text-4xl sm:text-5xl text-rose-deep">
              Mohd Saleem
            </h3>
            <p className="text-sm sm:text-base text-foreground/75 italic">
              S/o Mohd. Abdul Jabbar Ahmad
            </p>

            <div className="flex items-center justify-center my-3">
              <span className="h-[1px] w-12 bg-gold-soft"></span>
              <span className="font-script text-2xl sm:text-3xl text-rose-deep px-4">Weds</span>
              <span className="h-[1px] w-12 bg-gold-soft"></span>
            </div>

            <h3 className="font-script text-4xl sm:text-5xl text-rose-deep">
              Insha Siddiqui
            </h3>
            <p className="text-sm sm:text-base text-foreground/75 italic">
              D/o Mohd. Naseem Ahmad
            </p>
          </div>

          <Divider />

          {/* Date & Day Highlight */}
          <div className="bg-white/60 border border-gold-soft/80 rounded-2xl py-4 px-6 max-w-md mx-auto shadow-soft my-6 backdrop-blur-sm">
            <p className="font-cinzel text-rose-deep text-lg sm:text-xl font-bold tracking-wider">
              SUNDAY, 13TH DECEMBER 2026
            </p>
            <p className="font-serif-display text-foreground/80 text-base mt-1">
              13 دسمبر 2026، بروز اتوار
            </p>
          </div>

          {/* Special Note from Card */}
          <div className="inline-block border border-dashed border-rose-deep/50 rounded-full px-6 py-2 bg-rose-deep/5 text-rose-deep text-sm sm:text-base font-medium">
            Note: Please come early to avoid rush
          </div>
        </FadeIn>
      </section>

      {/* R.S.V.P & Best Compliments */}
      <section className="relative py-12 px-6 text-cream bg-cream">
        <Florals />
        <div className="relative max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
              With Best Compliments From (W.B.C.F.)
            </h2>
            <p className="font-serif-display text-xl text-foreground/80 leading-relaxed mt-2 font-medium">
              Mohd. Abdul Jabbar Ahmad &amp; All Relatives
            </p>
            <p className="font-serif-display text-base text-foreground/70 mt-1">
              (جملہ عزیز و اقارب و دوست و احباب)
            </p>

            <Divider />

            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
              R. S. V. P.
            </h2>
            <p className="font-serif-display text-lg text-rose-deep font-medium mb-4">
              (منتظرین و چشمِ براہ)
            </p>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-2xl mx-auto mt-4 text-foreground/85 text-sm sm:text-base">
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Haji Mohd. Yunus
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Tayyab
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Nazim
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Asim
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Qasim
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Roshan Jama
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Shahid
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Hashim
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Waseem
              </div>
              <div className="bg-white/60 border border-gold-soft/70 rounded-xl py-2.5 px-3 shadow-sm font-medium">
                Mohd. Shameem
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Where We Celebrate / Map Section */}
      <section className="relative py-20 px-6 bg-cream">
        <Florals />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep mt-2">
              Where We Celebrate
            </h2>
            <Divider />
            <p className="font-serif-display text-2xl sm:text-3xl text-rose-deep leading-relaxed max-w-xl mx-auto font-bold tracking-wide">
              Asia Lawn
            </p>
            <p className="font-serif-display text-lg sm:text-xl text-foreground/85 leading-relaxed max-w-xl mx-auto font-medium mt-1">
              Raebareli, Uttar Pradesh
            </p>
            <p className="font-serif-display text-base text-foreground/75 mt-0.5">
              ایشیا لان، رائے بریلی، اتر پردیش
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm sm:text-base text-foreground/80">
              <span className="bg-white/60 px-4 py-1.5 rounded-full border border-gold-soft shadow-sm">
                📞 +91 9889884829
              </span>
              <span className="bg-white/60 px-4 py-1.5 rounded-full border border-gold-soft shadow-sm">
                📞 +91 6392877490
              </span>
            </div>
          </FadeIn>

          <FadeIn
            delay={150}
            className="mt-10 rounded-2xl overflow-hidden border border-gold-soft shadow-elegant max-w-3xl mx-auto"
          >
            <iframe
              title="Venue map"
              src="https://www.google.com/maps?q=Asia+Lawn,+Raebareli&output=embed"
              className="w-full h-[360px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </FadeIn>

          <FadeIn delay={250}>
            <a
              href="https://www.google.com/maps/search/Asia+Lawn,+Raebareli"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8"
            >
              <button
                type="button"
                className="gradient-gold text-white border-0 hover:opacity-95 rounded-full px-8 h-12 shadow-gold inline-flex items-center justify-center font-medium text-base transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions to Asia Lawn
              </button>
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};
