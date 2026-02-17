import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BikeC - טיולי אופניים וציוד מקצועי',
  description: 'פלטפורמה מקצועית לטיולי אופניים, קבוצות רכיבה וציוד איכותי',
  keywords: ['אופניים', 'טיולים', 'רכיבה', 'ציוד', 'BikeC'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.className}>
      <body className="bg-bikec-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
