import React from "react";

// Pass properties in the functional (stateless) component
const TextAreaFieldGroup = ({
  placeholder,

  info,
}) => {
  return (
    <div className="form-group">
      <textarea
        className="form-control form-control-lg"
        placeholder={placeholder}
      />
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

export default TextAreaFieldGroup;
