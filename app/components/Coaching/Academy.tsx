"use client";

import React, { useState } from "react";

interface Session {
  title: string;
  price: string;
  subtitle: string;
  time: string;
  duration: string;
}

interface DayData {
  name: string;
  color: string;
  extra?: string;
  sessions: Session[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  days: DayData[];
}

interface AcademyProps {
  data: {
    introTitle: string;
    introDesc: string;
    categories: Category[];
  };
}

const Academy = ({ data }: AcademyProps) => {
  const [activeTab, setActiveTab] = useState(data.categories[0].id);

  const activeCategory = data.categories.find((cat) => cat.id === activeTab) || data.categories[0];

  return (
    <section className="bg-[#111111] py-20 px-8 md:px-16 lg:px-32 relative text-white pt-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
        <h2 className="font-bison font-bold uppercase leading-none flex flex-col pl-4">
          <span className="inline-block text-white text-5xl md:text-7xl lg:text-8xl tracking-tight" style={{ transform: "skewX(-18deg)" }}>
            ACADEMY SESSIONS
          </span>
        </h2>
        <div className="text-right">
          <p className="inline-block text-[#009FF3] font-bison font-bold tracking-[0.2em] uppercase text-sm md:text-lg" style={{ transform: "skewX(-15deg)" }}>
            {data.introTitle}
          </p>
          <p className="font-inter text-gray-400 font-light mt-2 max-w-md ml-auto">{data.introDesc}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-800 pb-2 pl-4">
        {data.categories.map((cat) => (
          <button key={cat.id} onClick={() => setActiveTab(cat.id)} className={`transition-all duration-300 px-4 py-2 ${activeTab === cat.id ? "bg-[#009FF3] text-white border-b-4 border-[#009FF3]" : "bg-white text-black hover:bg-[#009FF3] hover:text-white"}`}>
            <span className="inline-block font-bison font-bold text-xl md:text-3xl tracking-wider uppercase" style={{ transform: "skewX(-15deg)" }}>
              {cat.title}
            </span>
          </button>
        ))}
      </div>

      {/* Category Content */}
      <div className="mb-12 animate-fade-in-0">
        <p className="font-inter text-gray-300 font-light max-w-3xl leading-relaxed whitespace-pre-line">{activeCategory.description}</p>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-1">
        {activeCategory.days.map((day, idx) => (
          <div key={idx} className="border-[2px] bg-[#1a1a1a]/50 p-6 flex flex-col relative overflow-hidden transition-all hover:bg-[#1a1a1a]" style={{ borderColor: day.color }}>
            {/* Top faded gradient inside card */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom, ${day.color}, transparent)` }}></div>

            <div className="relative z-10 mb-8 pl-2">
              <h3 className="inline-block font-bison font-bold text-5xl text-white tracking-widest" style={{ transform: "skewX(-18deg)" }}>
                {day.name}
              </h3>
              <div className="w-16 h-1 mt-2" style={{ backgroundColor: day.color }}></div>
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-grow">
              {day.sessions.map((session, sIdx) => (
                <div key={sIdx} className="flex flex-col border-b border-gray-800/50 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="inline-block font-bison font-bold text-2xl uppercase tracking-wider text-white" style={{ transform: "skewX(-15deg)" }}>
                      {session.title}
                    </h4>
                    <span className="font-inter font-bold text-sm tracking-tight shrink-0" style={{ color: day.color }}>
                      {session.price}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 font-inter font-medium tracking-widest uppercase">
                    <span className="shrink-0">{session.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{session.subtitle}</span>
                  </div>
                  <div className="mt-2 text-sm font-bison italic tracking-widest text-gray-500">START: {session.time}</div>
                </div>
              ))}
            </div>

            {day.extra && <div className="mt-6 pt-4 border-t border-gray-800 text-xs italic text-gray-500 font-inter">*{day.extra}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academy;
