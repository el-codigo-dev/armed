'use client';

import Slider from './sections/slider';
import { Directions } from './sections/directions';
import WhyChoose from './sections/why-choose';
import { Promotions } from './sections/promotions';
import { ManageYourLife } from './sections/manage-your-life';
import { FullRange } from './sections/full-range';
import { SportMedicine } from './sections/sport-medicine';
import { HealthManagement } from './sections/health-management';
import { Doctors } from './sections/doctors';
import { FrequentQuestions } from './sections/frequent-questions';
import { useAppSelector } from '@/store/store';

export default function Home() {
  const isMobileMenuOpen = useAppSelector((store) => store.main.isMobileMenuOpen);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-custom-gray text-custom-black ${
        isMobileMenuOpen && 'hidden'
      }`}>
      <Slider />
      <Directions />
      <WhyChoose />
      <Promotions />
      <ManageYourLife />
      <FullRange />
      <SportMedicine />
      <HealthManagement />
      <Doctors />
      <FrequentQuestions />
    </main>
  );
}
