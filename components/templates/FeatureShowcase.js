'use client';

import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/ProductShowcase';

export default function FeatureShowcase({ tab, MockupComponent }) {
  if (!MockupComponent) return null;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white relative">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <style dangerouslySetInnerHTML={{ __html: `#feature-window * { scrollbar-width: none; -ms-overflow-style: none; } #feature-window *::-webkit-scrollbar { display: none; }` }} />
          <div id="feature-window" className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-gray-200">
            <div className="h-[680px] overflow-hidden">
              <div style={{ transform: 'scale(0.88)', transformOrigin: 'top left', width: `${100/0.88}%`, height: `${680/0.88}px` }} className="flex h-full bg-white">
                <DashboardSidebar activePage={tab} />
                <div className="flex-1 flex overflow-hidden">
                  <MockupComponent />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
