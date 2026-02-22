import React from 'react';
import toursData from '../data/tours.json';

type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface Tour {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  time: string;
  difficulty: string;
  difficultyLevel: string;
  location: string;
  locationEn: string;
  duration: string;
  distance: string;
  elevation: string;
  spotsAvailable: number;
  maxParticipants: number;
  price: number;
  description: string;
  highlights: string[];
}

const DIFFICULTY_STYLES: Record<DifficultyLevel, string> = {
  easy: 'bg-green-500/20 text-green-400 border-green-500/50',
  medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  hard: 'bg-red-500/20 text-red-400 border-red-500/50',
};

const DEFAULT_DIFFICULTY_STYLE = 'bg-bikec-secondary/20 text-bikec-secondary border-bikec-secondary/50';

function isDifficultyLevel(value: string): value is DifficultyLevel {
  return value === 'easy' || value === 'medium' || value === 'hard';
}

function getDifficultyStyle(level: string): string {
  return isDifficultyLevel(level) ? DIFFICULTY_STYLES[level] : DEFAULT_DIFFICULTY_STYLE;
}

export default function ToursCalendar() {
  const tours: Tour[] = toursData.tours;

  // Format date to Hebrew
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    };
    return date.toLocaleDateString('he-IL', options);
  };

  return (
    <section className="section-bikec bg-bikec-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-bikec-primary">טיולי</span> אופניים קרובים
          </h2>
          <p className="text-bikec-secondary text-lg max-w-2xl mx-auto">
            הצטרפו אלינו לחוויות רכיבה בלתי נשכחות ברחבי הארץ
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="card-bikec hover:border-bikec-primary/50 transition-all duration-300 group"
            >
              {/* Tour Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bikec-primary transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-2 text-bikec-secondary text-sm">
                    <span>📍</span>
                    <span>{tour.location}</span>
                  </div>
                </div>
                
                {/* Spots Badge */}
                {tour.spotsAvailable <= 5 && (
                  <div className="bg-bikec-primary/20 text-bikec-primary px-3 py-1 rounded-full text-xs font-bold border border-bikec-primary/50">
                    {tour.spotsAvailable} מקומות נותרו
                  </div>
                )}
              </div>

              {/* Date & Time */}
              <div className="mb-4 pb-4 border-b border-bikec-secondary/20">
                <div className="text-white font-medium mb-1">
                  {formatDate(tour.date)}
                </div>
                <div className="text-bikec-secondary text-sm">
                  שעת יציאה: {tour.time}
                </div>
              </div>

              {/* Tour Details */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Difficulty */}
                <div>
                  <div className="text-bikec-secondary text-xs mb-1">רמת קושי</div>
                  <div className={`px-3 py-1 rounded-lg text-sm font-bold border ${getDifficultyStyle(tour.difficultyLevel)} text-center`}>
                    {tour.difficulty}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="text-bikec-secondary text-xs mb-1">משך</div>
                  <div className="text-white font-bold text-sm bg-bikec-dark-alt px-3 py-1 rounded-lg text-center">
                    {tour.duration}
                  </div>
                </div>

                {/* Distance */}
                <div>
                  <div className="text-bikec-secondary text-xs mb-1">מרחק</div>
                  <div className="text-white font-bold text-sm bg-bikec-dark-alt px-3 py-1 rounded-lg text-center">
                    {tour.distance}
                  </div>
                </div>

                {/* Elevation */}
                <div>
                  <div className="text-bikec-secondary text-xs mb-1">עלייה</div>
                  <div className="text-white font-bold text-sm bg-bikec-dark-alt px-3 py-1 rounded-lg text-center">
                    {tour.elevation}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-bikec-secondary text-sm mb-4 leading-relaxed">
                {tour.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="text-white text-xs font-bold mb-2">נקודות עיקריות:</div>
                <ul className="space-y-1">
                  {tour.highlights.slice(0, 2).map((highlight, index) => (
                    <li key={index} className="text-bikec-secondary text-xs flex items-start gap-2">
                      <span className="text-bikec-primary">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-bikec-secondary/20">
                <div>
                  <div className="text-bikec-secondary text-xs">מחיר</div>
                  <div className="text-bikec-primary text-2xl font-bold">
                    ₪{tour.price}
                  </div>
                </div>
                <button className="btn-primary text-sm px-4 py-2">
                  הרשמה לטיול
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tours CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-3">
            צפה בכל הטיולים
          </button>
        </div>
      </div>
    </section>
  );
}
