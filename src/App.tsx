import React, { useState, useEffect } from 'react';
import { BookingForm } from './types';
import { useToast } from './hooks/useToast';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Toast from './components/ui/Toast';
import FloatingButtons from './components/ui/FloatingButtons';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import PracticeAreas from './components/sections/PracticeAreas';
import Attorneys from './components/sections/Attorneys';
import CaseQuiz from './components/sections/CaseQuiz';
import Booking from './components/sections/Booking';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import { ConveyancingInsight, LegalInsightsIndex } from './components/sections/LegalInsights';

const INITIAL_BOOKING: BookingForm = {
  clientName: '', clientEmail: '', clientPhone: '',
  practiceArea: 'corporate', priority: 'medium', prefDate: '', summaryText: ''
};

export default function App() {
  const [activeTab, setActiveTab] = useState('corporate');
  const [darkTheme, setDarkTheme] = useState(true);
  const [bookingForm, setBookingForm] = useState<BookingForm>(INITIAL_BOOKING);
  const { toast, triggerToast, dismissToast } = useToast();
  const getView = () => {
    if (window.location.hash === '#insights/conveyancing') return 'conveyancing';
    if (window.location.hash.startsWith('#insights')) return 'insights';
    return 'home';
  };
  const [view, setView] = useState(getView);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.classList.toggle('dark', darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    const updateView = () => setView(getView());
    window.addEventListener('hashchange', updateView);
    return () => window.removeEventListener('hashchange', updateView);
  }, []);

  useEffect(() => {
    if (view !== 'home' || !window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }, [view]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.clientName || !bookingForm.clientEmail || !bookingForm.clientPhone) {
      triggerToast('Please complete all mandatory contact fields.', 'error');
      return;
    }
    triggerToast(`Success! Strategy reservation initiated. A Senior Paralegal will call you to confirm the date of ${bookingForm.prefDate || 'next business day'}.`, 'success');
    setBookingForm(INITIAL_BOOKING);
  };

  return (
    <div className={`min-h-screen font-serif transition-colors duration-300 ${darkTheme ? 'bg-[#0F141F] text-slate-100' : 'bg-[#FAF9F5] text-slate-900'}`}>
      <Toast toast={toast} onDismiss={dismissToast} />
      <FloatingButtons />
      <Header darkTheme={darkTheme} onToggleTheme={() => setDarkTheme(!darkTheme)} />
      <main>
        {view === 'conveyancing' ? <ConveyancingInsight /> : view === 'insights' ? <LegalInsightsIndex /> : <>
          <Hero />
          <About />
          <PracticeAreas activeTab={activeTab} onSetActiveTab={setActiveTab} onSetBookingForm={setBookingForm} onTriggerToast={triggerToast} />
          <Attorneys onSetBookingForm={setBookingForm} onTriggerToast={triggerToast} />
          {/* <Calculator onSetBookingForm={setBookingForm} onTriggerToast={triggerToast} /> */}
          <CaseQuiz onSetBookingForm={setBookingForm} onTriggerToast={triggerToast} />
          {/* <ClientPortal onTriggerToast={triggerToast} /> */}
          <Booking bookingForm={bookingForm} onSetBookingForm={setBookingForm} onSubmit={handleBookingSubmit} />
          <FAQ onTriggerToast={triggerToast} />
          <Contact />
        </>}
      </main>
      <Footer onSetActiveTab={setActiveTab} />
    </div>
  );
}
