import Slider from './sections/slider';
import { Directions } from './sections/directions';
import WhyChoose from './sections/why-choose';
import { Promotions } from './sections/promotions';
import { ManageYourLife } from './sections/manage-your-life';
import { FullRange } from './sections/home-page/components/full-range';
import { SportMedicine } from './sections/sport-medicine';
import { HealthManagement } from './sections/health-management';
import { Doctors } from './sections/doctors';
import { FrequentQuestions } from './sections/frequent-questions';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-custom-gray text-custom-black">
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
