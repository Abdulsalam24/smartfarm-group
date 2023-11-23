import React from "react";

const TextInput: React.FC<{
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  label: string;
  acceptNumber?: any;
  onChange: (value: any) => void;
}> = ({ type, name, value, label, placeholder, acceptNumber, onChange }) => {
  return (
    <div>
      <label className="font-medium capitalize">{label}</label>
      {type === "text" ? (
        <>
          <input
            name={name}
            value={value}
            className="border border-[#161616] mt-[9px] border-x-0 border-t-0 w-full"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />
        </>
      ) : type === "phone" ? (
        <>
          <input
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
      ) : (
        <>
          <input
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
