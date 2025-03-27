import React from "react";

const MySVG: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="80"
      height="80"
      viewBox="0 0 1300 1000"
      className={`w-full h-auto ${className}`}
    >
      <g id="XMLID_3_">
        <g id="XMLID_6_">
          <g id="XMLID_1_">
            <linearGradient id="grad1" x1="436.0373" y1="352.8995" x2="576.954" y2="596.9743" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#B9E5FB" />
              <stop offset="1" stopColor="#00B6F1" />
            </linearGradient>
            <path
              fill="url(#grad1)"
              d="M845.704,386.518c-44.583-67.275-120.958-111.646-207.71-111.646c-129.006,0-235.097,98.097-247.757,223.766 c-7.24-1.173-14.665-1.792-22.236-1.792c-76.236,0-138.038,61.802-138.038,138.038c0,52.175,28.951,97.584,71.661,121.053 C352.291,699.023,534.303,512.649,845.704,386.518z"
            />
            <linearGradient id="grad2" x1="698.3542" y1="484.6699" x2="881.501" y2="801.8895" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00B6F1" />
              <stop offset="1" stopColor="#007DAC" />
            </linearGradient>
            <path
              fill="url(#grad2)"
              d="M1070.038,583.888c0-104.4-84.633-189.033-189.033-189.033c-9.759,0-19.345,0.741-28.706,2.167 c-0.177-0.298-0.359-0.625-0.537-0.922C759.252,453.339,595.76,577,521.142,773H881.18l-0.12-0.112 C985.435,772.858,1070.038,688.27,1070.038,583.888z"
            />
          </g>
          <linearGradient id="grad3" x1="851.7585" y1="331.7192" x2="1060.248" y2="331.7192" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00AEEF" />
            <stop offset="1" stopColor="#006991" />
          </linearGradient>
          <polygon fill="url(#grad3)" points="851.758,318.177 906.181,333.19 1023.847,291.067 938.57,342.124 938.754,342.175 978.18,388.567 1060.248,274.872" />
        </g>
      </g>
    </svg>
  );
};

export default MySVG;
