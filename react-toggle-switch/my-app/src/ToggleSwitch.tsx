import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`toggle-switch ${isOn ? 'is-on' : ''}`}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-level">{isOn ? ' ON ' : ' OFF '}</span>
    </div>
  );
}
