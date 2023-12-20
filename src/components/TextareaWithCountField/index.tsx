import React from "react";
import { useFieldType, Label } from "payload/components/forms";
import { Props } from "payload/components/fields/Textarea";
import Error from "payload/dist/admin/components/forms/Error/index";
import "./styles.scss";

const baseClass = "textarea-count-field";

const TextareaWithCountField: React.FC<Props> = (props) => {
  const { path, label, required, validate, maxLength, admin } = props;
  const {
    value = "",
    setValue,
    errorMessage,
    showError,
  } = useFieldType<string>({
    path,
    validate,
  });

  const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const classes = ["field-type", "text", baseClass, showError && "error"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <Label htmlFor={path} label={label} required={required} />
      <Error showError={showError} message={errorMessage} />
      <textarea
        onChange={handleValue}
        value={value}
        className={`${baseClass}__input`}
        style={{
          position: "relative",
        }}
        rows={admin.rows || 5}
      ></textarea>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <span
          className="textarea-count"
          style={{
            color: value.length > maxLength && "red",
            fontSize: "0.8rem",
          }}
        >{`${value.length}/${maxLength}`}</span>
      </div>
    </div>
  );
};

export default TextareaWithCountField;
