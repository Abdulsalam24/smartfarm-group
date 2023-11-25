import React from "react";

const TextInput: React.FC<{
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  label: string;
  options?: string[];
  acceptNumber?: any;
  onChange: (value: any) => void;
}> = ({
  type,
  name,
  value,
  label,
  placeholder,
  acceptNumber,
  options,
  onChange,
}) => {
  return (
    <div>
      <label className="font-medium capitalize">{label}</label>
      {type === "text" || type === "email" ? (
        <>
          <input
            required
            name={name}
            value={value}
            className="border border-[#161616] mt-[9px] border-x-0 border-t-0 w-full"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
          />
        </>
      ) : type === "phone" ? (
        <>
          <input
            required
            name={name}
            value={value}
            className="border border-[#161616] mt-[9px] border-x-0 border-t-0 w-full"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            maxLength={12}
            onKeyDown={acceptNumber ? acceptNumber : undefined}
          />
        </>
      ) : type === "select" ? (
        <select
          className="border outline-none border-[#161616] mt-[9px] border-x-0 border-t-0 w-full"
          name={name}
          required
          onChange={onChange}
        >
          <option value="">Enter an option</option>
          {options?.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
      ) : (
        <>
          <input
            required
            className="border border-[#161616] mt-[9px] border-x-0 border-t-0 w-full"
            type="text"
            name={name}
            placeholder="*********"
            onChange={onChange}
          />
        </>
      )}
    </div>
  );
};

export default TextInput;
