import React from "react";

// Pass properties in the functional (stateless) component
const TextFieldGroup = ({
  placeholder,

  error,
  info,
  type,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control form-control-lg"
        placeholder={placeholder}
      />
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

export default TextFieldGroup;
