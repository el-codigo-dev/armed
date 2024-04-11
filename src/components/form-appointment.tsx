import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { useForm } from 'react-hook-form';
import CloseIcon from './ui/icons/close-icon';
import { useDispatch } from 'react-redux';
import { setModalClose } from '@/store/mainSlice';

interface IAppointmentForm {
  name: string;
  phone: string;
  communicateOption: string;
  typeOfService: string;
  descriptopn: string;
  agreePersonalDataProcessing: boolean;
  confirmOver18: boolean;
}

export const AppointmentForm = () => {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // getValues,
    watch,
    formState: { isValid },
  } = useForm<IAppointmentForm>({ mode: 'onBlur' });

  const handleClose = () => {
    dispatch(setModalClose());
  };

  const handleSend = async (data: IAppointmentForm) => {
    console.log(data);

    try {
      setIsSuccessMessageVisible(true);
      setTimeout(() => {
        setIsSuccessMessageVisible(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

// console.log(isSuccessMessageVisible);



  return (
    <>
      {!isSuccessMessageVisible ? (
        <form
          className="relative max-w-[640px] w-full bg-white-default pt-[50px] flex flex-col gap-[30px] rounded-[25px] px-[50px] pb-[40px] max-sm:px-[20px] max-sm:py-[30px]  max-sm:gap-[25px] "
          onSubmit={handleSubmit(handleSend)}>
          <button
            className="absolute cursor-pointer right-[25px] top-[25px] max-sm:top-[10px] max-sm:right-[15px]"
            onClick={handleClose}>
            <CloseIcon width={24} />
          </button>

          <h2 className="self-center text-semibold-32 mb-[10px]">Форма для записи к&nbsp;врачу</h2>

          <div className="flex gap-[40px] max-sm:flex-col max-sm:gap-[25px]">
            <Input
              id={'name'}
              variant={'form'}
              labelText={'Имя'}
              placeholder="Иван Петров"
              validation={{
                ...register('name', { required: true }),
              }}
              required
            />
            <Input
              id={'phone'}
              variant={'form'}
              labelText={'Телефон'}
              placeholder="+7 ..."
              validation={{
                ...register('phone', { required: true }),
              }}
              required
            />
          </div>

          <Input
            id={'communicateOption'}
            variant={'form'}
            labelText={'Предпочитаемый вариант связи'}
            placeholder="Звонок / WA / TG"
            validation={{
              ...register('communicateOption', { required: true }),
            }}
            required
          />
          <Input
            id={'typeOfService'}
            variant={'form'}
            labelText={'Врач, услуга, направление'}
            placeholder="Морозова / УЗИ / Терапия"
            validation={{
              ...register('typeOfService', { required: true }),
            }}
            required
          />

          <div className="flex flex-col gap-[8px] max-sm:gap-[7px] w-full">
            <label htmlFor="descriptopn" className="text-label text-custom-green">
              Дополнение к заявке
            </label>
            <textarea
              className="px-[15px] py-[10px] text-default-16 rounded-[15px]  input-form-color outline-none focus:outline-none bg-input-form-color h-[100px] resize-none"
              id="descriptopn"
              placeholder="Пожелание по времени, жалобы"
              {...register('descriptopn')}
            />
          </div>

          <div className="flex flex-col gap-[11px] max-sm:gap-[25px]">
            <Checkbox
              labelText={'Я даю свое согласие на обработку персональных данных'}
              id={'agreePersonalDataProcessing'}
              variant={'form'}
              validation={{
                ...register('agreePersonalDataProcessing', { required: true }),
              }}
              isChecked={watch('agreePersonalDataProcessing')}
            />

            <Checkbox
              labelText={'Я подтверждаю, что старше 18 лет'}
              id={'confirmOver18'}
              variant={'form'}
              validation={{
                ...register('confirmOver18', { required: true }),
              }}
              isChecked={watch('confirmOver18')}
            />
          </div>

          <div className="w-[170px] self-center mt-[10px] max-sm:mt-[5px] max-sm:w-[122px]">
            <Button type={'submit'} variant={'formButton'} isDisabled={!isValid}>
              Отправить
            </Button>
          </div>
        </form>
      ) : (
        <div className=" bg-secondary-button-color text-white-default py-[45px] px-[64px] rounded-[25px] text-center max-w-[500px] text-label mx-[20px]  max-sm:px-[30px] max-sm:py-[25px]">
          Спасибо!
          <p> Ваша заявка принята. Администратор свяжется с&nbsp;вами в течении часа</p>
        </div>
      )}
    </>
  );
};
