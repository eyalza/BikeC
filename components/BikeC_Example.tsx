import React from 'react';
import Image from 'next/image';

/**
 * BikeC Theme Example Component
 * Demonstrates the custom theme colors and Hebrew RTL support
 */

export default function BikeCExample() {
  return (
    <div className="min-h-screen bg-bikec-dark">
      {/* Header with Logo */}
      <header className="bg-bikec-black border-b border-bikec-secondary/20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center">
          <Image
            src="/images/logo-main.png"
            alt="BikeC Logo"
            width={300}
            height={100}
            priority
            className="h-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-bikec text-center">
        <h1 className="text-gradient-bikec mb-4">
          ברוכים הבאים ל-BikeC
        </h1>
        <p className="text-bikec-secondary text-xl mb-8 max-w-2xl mx-auto">
          הפלטפורמה המקצועית לטיולי אופניים, קבוצות רכיבה וציוד איכותי
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">
            הצטרף לטיול הבא
          </button>
          <button className="btn-secondary">
            צפה בקבוצות
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-bikec bg-bikec-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white">
            מה אנחנו <span className="text-bikec-primary">מציעים</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="card-bikec border-accent">
              <div className="text-bikec-primary text-3xl mb-4">🚴</div>
              <h3 className="text-xl mb-2 text-white">טיולים מאורגנים</h3>
              <p className="text-bikec-secondary">
                טיולי אופניים מקצועיים ברחבי הארץ עם מדריכים מנוסים
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="card-bikec border-accent">
              <div className="text-bikec-primary text-3xl mb-4">👥</div>
              <h3 className="text-xl mb-2 text-white">קבוצות רכיבה</h3>
              <p className="text-bikec-secondary">
                הצטרף לקהילת הרוכבים שלנו ורכב עם אנשים בעלי אותם תחומי עניין
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="card-bikec border-accent">
              <div className="text-bikec-primary text-3xl mb-4">🛠️</div>
              <h3 className="text-xl mb-2 text-white">ציוד מקצועי</h3>
              <p className="text-bikec-secondary">
                חנות מקוונת עם מבחר רחב של ציוד רכיבה איכותי
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-bikec bg-bikec-dark-alt">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="texture-overlay p-6">
              <div className="text-5xl font-bold text-bikec-primary mb-2">
                500+
              </div>
              <div className="text-bikec-secondary">
                רוכבים פעילים
              </div>
            </div>

            <div className="texture-overlay p-6">
              <div className="text-5xl font-bold text-bikec-primary mb-2">
                120+
              </div>
              <div className="text-bikec-secondary">
                טיולים בשנה
              </div>
            </div>

            <div className="texture-overlay p-6">
              <div className="text-5xl font-bold text-bikec-primary mb-2">
                10+
              </div>
              <div className="text-bikec-secondary">
                שנות ניסיון
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-bikec bg-bikec-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4 text-white">
            מוכנים <span className="text-bikec-primary">לרכיבה?</span>
          </h2>
          <p className="text-bikec-secondary text-lg mb-8">
            הצטרף אלינו היום והתחל את ההרפתקה הבאה שלך
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            צור קשר עכשיו
          </button>
        </div>
      </section>
    </div>
  );
}
