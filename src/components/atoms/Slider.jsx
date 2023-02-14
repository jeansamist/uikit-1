import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import theme from "../../constants/theme";
import Flexbox from "../containers/Flexbox";
// import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function FormSlider({ label = "Slider", min = 0, max = 10, onChange = () => {} }) {
  const [active, setactive] = useState(false);
  const [value, setvalue] = useState(0);
  function onFocus() {
    setactive(true);
  }
  function onBlur() {
    setactive(false);
  }
  return (
    <div>
      <Flexbox className="aic jcsb">
        <b className="label" style={{ color: active ? theme.COLORS.primary : theme.COLORS.colorInfo }}>
          {label}
        </b>
        <div className="value">{value}</div>
      </Flexbox>
      <Slider
        railStyle={{ height: "0.3em", background: theme.COLORS.border }}
        trackStyle={{ height: "0.3em", background: theme.COLORS.primary }}
        /*railStyle={{ background: "red" }}*/ handleStyle={{
          background: theme.COLORS.primary,
          opacity: 1,
          border: "none",
          boxShadow: "none",
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(v) => {
          setvalue(v);
          onChange(v);
        }}
        max={max}
        min={min}
        ariaLabelledByForHandle={"test"}
      />
      {/* <Range /> */}
    </div>
  );
}

FormSlider.propTypes = {
  label: PropTypes.node,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default FormSlider;
