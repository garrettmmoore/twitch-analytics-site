import { useState } from 'react';

const useForm = initialFormState => {
  const [form, setForm] = useState(initialFormState);
  return {
    form,
    setForm,
    reset: () => setForm(initialFormState),
    set: (name, settings) => ({
      name,
      value: settings && settings.value ? settings.value : form[name],
      required: settings && settings.required,
      minLength: settings && settings.minLength,
      maxLength: settings && settings.maxLength,
      onChange: event => {
        const { name, value } = event.target;
        setForm(Object.assign({}, form, { [name]: value }));
      }
    }),
    setCheckbox: name => ({
      name,
      value: name,
      checked: form[name],
      onChange: event => {
        const { checked } = event.target;
        setForm(Object.assign({}, form, { [name]: checked }));
      }
    })
  };
};

export default useForm;
