import React from "react";
import { useFieldType, Label } from "payload/components/forms";
import { Props } from "payload/components/fields/Number";
import Error from "payload/dist/admin/components/forms/Error/index";
import "./styles.scss";

const baseClass = "order-field";

export const OrderField: React.FC<Props> = (props) => {
  const { path, label, required, validate } = props;
  const {
    initialValue = 0,
    value = 0,
    setValue,
    errorMessage,
    showError,
  } = useFieldType<number>({
    path,
    validate,
  });

  const classes = ["field-type", "text", baseClass, showError && "error"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <Label htmlFor={path} label={label} required={required} />
      <Error showError={showError} message={errorMessage} />
      <input
        className={`${baseClass}__input`}
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={value || initialValue}
        min={0}
      />
    </div>
  );
};
