import { lazy, Suspense } from 'react'
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'

import { FloatingCta } from './components/lead/FloatingCta'
import { LeadProvider } from './components/lead/LeadProvider'
import { Footer } from './components/sections/Footer'
import { GallerySection } from './components/sections/GallerySection'
import { Hero } from './components/sections/Hero'
import { ProblemSection } from './components/sections/ProblemSection'
import { PromoSection } from './components/sections/PromoSection'
import { StatementSection } from './components/sections/StatementSection'
import { StrengthsSection } from './components/sections/StrengthsSection'
import { UrgencySection } from './components/sections/UrgencySection'
import { VideoSection } from './components/sections/VideoSection'
import { reels } from './data/content'

// The reels carousel (Swiper) is at the bottom of the page, so it loads in its own chunk.
const ReelsSection = lazy(() => import('./components/sections/ReelsSection'))

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <LeadProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
          >
            Asosiy kontentga o'tish
          </a>
          <Hero />
          <main id="main">
            <VideoSection />
            <ProblemSection />
            <StrengthsSection />
            <StatementSection />
            <GallerySection />
            <PromoSection />
            <UrgencySection />
            {/* While disabled, the reels chunk and its video are never downloaded. */}
            {reels.enabled && (
              <Suspense fallback={<div className="min-h-208 bg-ink-900" />}>
                <ReelsSection />
              </Suspense>
            )}
          </main>
          <Footer />
          <FloatingCta />
        </LeadProvider>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
