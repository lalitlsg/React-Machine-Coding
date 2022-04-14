import style from '../dynamic-form.module.css';

const TextField = ({ fieldType, handleOnChange }) => {
  const { value, label, name, id } = fieldType;
  return (
    <div className={style.fieldContainer} key={id}>
      <label htmlFor={id}>{label}</label>
      <input type={value} id={id} name={name} onChange={handleOnChange} autoComplete="off" />
    </div>
  );
};

export default TextField;
