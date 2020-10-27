import React from "react";

// Pass properties in the functional (stateless) component
const InputGroup = ({
  placeholder,

  icon,
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className="form-control form-control-lg"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
