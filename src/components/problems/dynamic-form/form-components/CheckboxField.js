import style from '../dynamic-form.module.css';

const CheckboxField = ({ fieldType, handleOnChange }) => {
  const { value, label, name, id } = fieldType;
  return (
    <div className={style.fieldContainer} key={id}>
      <input type={value} id={id} name={name} onChange={handleOnChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxField;
