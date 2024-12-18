import { CustomInputProps } from "@/interfaces/customInput.interface";

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  placeholderIcon,
  customClassName = "",
  inputStyle,
  type,
  onChange,
  value,
  defaultValue,
  name,
  readonly,
  label,
  disabled,
  errors,
  required,
}) => {
  const error = errors?.find((e) => e.path === name);
  return (
    <div
      className={`w-full flex items-center justify-center relative ${customClassName}`}
    >
      {placeholderIcon && (
        <div className="absolute top-6 left-0 pl-2 pr-3  pointer-events-none text-black-10">
          {placeholderIcon}
        </div>
      )}
      <div className="flex flex-col gap-2.5 w-full">
        <label
          htmlFor={label?.toLowerCase()}
          className=" text-black-50 text-base"
        >
          {label}
        </label>
        <input
          disabled={disabled}
          type={type}
          onChange={onChange}
          defaultValue={defaultValue}
          required={required}
          value={value}
          name={name}
          className={`${inputStyle} required w-full border border-black-10 py-2  pr-4 focus:outline-none rounded-md ${
            error ? "border-danger" : ""
          } ${readonly ? "text-black-50" : "text-black"} placeholder:text-sm ${
            placeholderIcon ? "pl-9" : "pl-3"
          } ${customClassName}`}
          placeholder={placeholder}
        />
        <small className="text-xs text-danger">{error?.message}</small>
      </div>
    </div>
  );
};

export default CustomInput;
