import { createContext, useContext, useState } from "react";

interface FormContextType {
  output: Record<any, any>;
  onSubmitData: (data) => void;
}
export const FormContext = createContext<FormContextType>(
  {} as FormContextType
);

export const AppContextProvider = ({ children }) => {
  const [output, setOutput] = useState({});

  const handleOnSubmit = (data) => {
    setOutput(data);
  };

  return (
    <FormContext.Provider
      value={{
        output,
        onSubmitData: handleOnSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default function useFormContact() {
  return useContext(FormContext);
}
