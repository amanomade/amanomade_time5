import React from 'react'
import cx from "classnames";
import styles from './styles.module.scss';


const Input = ({
  className,
    inputClassName,
    labelClassName,
    type,
    label,
    placeholder,
    readOnly,
    multi,
    maxLength,
    autoFocus,
    value,
    error,
    helperText,
    name,
    onFocus,
    onBlur,
    onKeyDown,
    onChange,
}) => {
  const handleOnBlur = event => {
    const { value } = event.target;
    onBlur && onBlur({ value, name, event });
  };

  const handleOnChange = event => {
    const { value } = event.target;
    onChange && onChange({ value, name, event });
  };

  const handleFocus = event => {
    // To fix the issue with cursor at beginning
    if (value) {
      event.target.value = "";
      event.target.value = value;
    }

    onFocus && onFocus({ event, name, value });
  };

  const handleKeyDown = event => {
    const { value } = event.target;
    onKeyDown && onKeyDown({ value, name, event });
  };
  const _inputClassName = cx(
    {
      [styles.input]: !multi,
      [styles.textarea]: multi,
      [styles.readonly]: readOnly,
      [styles.hasError]: error
    },
    inputClassName
  );

  let _props = {
    autoFocus,
    placeholder,
    value,
    readOnly,
    maxLength,
    className: _inputClassName,
    onChange: handleOnChange,
    onFocus: handleFocus,
    onBlur: handleOnBlur,
    onKeyDown: handleKeyDown
  };

  return (
    <div className={cx(styles.container, className)}>
      {label ? <label className={cx(styles.label, labelClassName, {
    [styles.error]: error
  })}>{label}</label> : null}

      {multi ? (
        <textarea {..._props}></textarea>
      ) : (
        <input {..._props} type={type}/>
      )}

      {helperText && helperText.length ? (
        <span className={cx(styles.helperText, { [styles.error]: error })}>{helperText}</span>
      ) : null}
    </div>
  )
}

export default Input;