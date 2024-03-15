import Slider from './sections/slider';
import { Directions } from './sections/directions';
import WhyChoose from './sections/why-choose';
import { Promotions } from './sections/promotions';
import { ManageYourLife } from './sections/manage-your-life';

export const Landing = () => {
  return (
    <>
      <Slider />
      <Directions />
      <WhyChoose />
      <Promotions />
      <ManageYourLife />
    </>
  );
};
