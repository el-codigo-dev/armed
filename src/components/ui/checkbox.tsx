import ArrowIcon from './icons/arrow-icon';

interface ICheckboxProps {
  variant: 'form';
  id: string;
  labelText: string;
  validation?: any;
  isChecked: boolean;
}

export const Checkbox = ({ variant, id, labelText, validation, isChecked }: ICheckboxProps) => {
  const checkboxStyles = {
    form: {
      container: 'flex items-center gap-[10px] relative',
      checkbox:
        'w-5 h-5 rounded-[5px] cursor-pointer appearance-none bg-input-form-color checked:bg-custom-green checked:border-transparent',
      labelText: `text-default-16 cursor-pointer max-sm:max-w-[250px] text-custom-black opacity-55 ${
        isChecked && 'opacity-100'
      }`,

      customCheckbox:
        'w-5 h-5 absolute top-0 left-0 flex justify-center items-center max-sm:top-[8px]',
    },
  };

  return (
    <div className={checkboxStyles[variant].container}>
      <input {...validation} type="checkbox" id={id} className={checkboxStyles[variant].checkbox} />

      <label htmlFor={id} className={checkboxStyles[variant].labelText}>
        {isChecked && (
          <span className={checkboxStyles[variant].customCheckbox}>
            <ArrowIcon />
          </span>
        )}

        {labelText}
      </label>
    </div>
  );
};
