'use client';

import { useFetchSalesQuery } from '@/api/mainApi';
import { PromotionCard } from '@/app/sections/home-page/components/promotion-card';
import { Button } from '@/components/ui/button';
import { ISale } from '@/types/apiTypes';

import { useState } from 'react';



export const PromotionCardList = () => {

const [isListOpen, setIsListOpen] = useState(false)


  const { data } = useFetchSalesQuery('');


  
const sales = isListOpen ? data : data?.slice(0, 3)
console.log(sales);

  return (
    <>
      <ul className="grid grid-cols-3 gap-[19px] mb-[30px]">
        {sales?.map((sale: ISale) => (
          <PromotionCard sale={sale} key={sale._id} />
        ))}
      </ul>
<div className='self-center'>
      <Button variant={'primary'} onClick={() => setIsListOpen(!isListOpen)}>
       {isListOpen ? 'Скрыть' : ' Посмотреть все акции'}
      </Button></div>
    </>
  );
};
