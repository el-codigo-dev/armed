import classNames from 'classnames';
import React from 'react';

interface IInputProps {
  variant: 'form';
  id: string;
  labelText: string;
  placeholder: string;
  validation?: any;
  required?: boolean;
}

export const Input = ({
  variant,
  id,
  labelText,
  placeholder,
  validation,
  required,
}: IInputProps) => {
  const inputStyles = {
    form: {
      container: 'flex flex-col gap-[8px] max-sm:gap-[7px]  w-full',
      label: 'text-label text-custom-green',
      input:
        'px-[15px] py-[10px] text-default-16 !rounded-[25px]  input-form-color outline-none focus:outline-none bg-input-form-color',
    },
  };

  return (
    <div className={inputStyles[variant].container}>
      <label htmlFor={id} className={inputStyles[variant].label}>
        {labelText} {required && <span className="text-red text-[14px]">*</span>}
      </label>
      <input
        {...validation}
        type="text"
        id={id}
        placeholder={placeholder}
        className={inputStyles[variant].input}
      />
    </div>
  );
};
