import { aboutCenter } from '@/utils/constants';
import Link from 'next/link';

export const AboutCenterMenu = () => {
  return (
    <div className="flex gap-[42px]">
      <ul className="flex flex-col gap-[17px]">
        {aboutCenter.slice(0, 3).map((i) => (
          <li key={i.id}>
            <Link href={i.link}>{i.text}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-[17px] border-r-[1px] border-l-[1px] border-border-color pr-[20px] pl-[20px] border-opacity-50">
        {aboutCenter.slice(3, 5).map((i) => (
          <li key={i.id}>
            <Link href={i.link}>{i.text}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-[17px]">
        {aboutCenter.slice(5).map((i) => (
          <li key={i.id}>
            <Link href={i.link}>{i.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCenterMenu;
