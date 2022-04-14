import style from '../dynamic-form.module.css';

const RadioButton = ({ fieldType, handleOnChange, currentSelected }) => {
  const { value, label, name, id } = fieldType;
  return (
    <div className={style.fieldContainer} key={id}>
      <input
        type={value}
        id={id}
        name={name}
        onChange={handleOnChange}
        value={name}
        checked={currentSelected === name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
