import React, { useState } from 'react';
import { MACHINE_CODING_HEADERS } from '../../../constant/constant';
import { generateFormData } from './data';
import style from './dynamic-form.module.css';
import CheckboxField from './form-components/CheckboxField';
import GroupFields from './form-components/GroupFields';
import RadioButton from './form-components/RadioButton';
import TextField from './form-components/TextField';

const initialState = {
  name: '',
  age: '',
  roles: {
    frontend: false,
    backend: false,
    devops: false,
  },
  gender: '',
  password: '',
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value, type } = e.target || {};
    const { roles } = formState;
    const inputTypes = {
      text: () => setFormState({ ...formState, [name]: value }),
      number: () => setFormState({ ...formState, [name]: Number(value) }),
      checkbox: () => setFormState({ ...formState, roles: { ...roles, [name]: !roles[name] } }),
      radio: () => setFormState({ ...formState, gender: value }),
      password: () => setFormState({ ...formState, password: value }),
    };
    inputTypes[type]();
  };

  const getJsxByType = (type) => {
    const { value, options, id } = type;
    const inputTypes = {
      text: value === 'text' ? () => <TextField key={id} fieldType={type} handleOnChange={handleOnChange} /> : null,
      number: value === 'number' ? () => <TextField key={id} fieldType={type} handleOnChange={handleOnChange} /> : null,
      password:
        value === 'password' ? () => <TextField key={id} fieldType={type} handleOnChange={handleOnChange} /> : null,
      checkboxGroup:
        value === 'checkboxGroup'
          ? () => (
              <GroupFields key={id} fieldType={type}>
                {options.map((option) => (
                  <CheckboxField key={option.id} fieldType={option} handleOnChange={handleOnChange} />
                ))}
              </GroupFields>
            )
          : null,
      radioGroup:
        value === 'radioGroup'
          ? () => (
              <GroupFields key={id} fieldType={type}>
                {options.map((option) => (
                  <RadioButton
                    key={option.id}
                    fieldType={option}
                    handleOnChange={handleOnChange}
                    currentSelected={formState.gender}
                  />
                ))}
              </GroupFields>
            )
          : null,
    };
    return inputTypes[value] && inputTypes[value]();
  };

  const fields = generateFormData.map((f) => {
    switch (f.element) {
      case 'input':
        return <article key={f.id}>{f.types.map((t) => getJsxByType(t))}</article>;
    }
  });

  return (
    <div>
      <header className={style.header}>{MACHINE_CODING_HEADERS.DYNAMIC_FORM_HEADER}</header>
      <section className={style.formSection}>
        <form>{fields}</form>
      </section>
      <section className={style.formOutput}>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </section>
    </div>
  );
};

export default DynamicForm;
