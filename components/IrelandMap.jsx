'use client';

import { useState, useRef, useCallback } from 'react';
import { provincePaths } from '@/data/province-paths';

// ─── Static metadata ──────────────────────────────────────────────────────────

const PROVINCE_META = {
  connacht: {
    id: 'connacht',
    name: 'Connacht',
    counties: 5,
    detail: 'Wild Atlantic Way — Galway, Mayo, Sligo, Leitrim, Roscommon',
  },
  ulster: {
    id: 'ulster',
    name: 'Ulster',
    counties: 9,
    detail: '9 counties spanning the Republic and Northern Ireland',
  },
  munster: {
    id: 'munster',
    name: 'Munster',
    counties: 6,
    detail: "Ireland's largest province — Cork, Kerry, Limerick, Tipperary, Clare, Waterford",
  },
  leinster: {
    id: 'leinster',
    name: 'Leinster',
    counties: 12,
    detail: '12 counties including Dublin, the capital',
  },
};

// Original SVG viewBox from source files
const VIEW_BOX = '0 0 606 776';

// Base fill colours matching the original image (lightest → darkest)
const BASE_FILL = {
  ulster:   '#D0D2D0',
  connacht: '#ADACAC',
  munster:  '#C4C6C4',
  leinster: '#8C8C8C',
};

// Hover/active tint — slightly darker
// const HOVER_FILL = {
//   ulster:   '#b0b5b0',
//   connacht: '#8f8e8e',
//   munster:  '#a2a4a2',
//   leinster: '#6a6a6a',
// };
const HOVER_FILL = {
  ulster:   '#2A85CB',
  connacht: '#2A85CB',
  munster:  '#2A85CB',
  leinster: '#2A85CB',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function IrelandMap({
  onHover,
  onClick,
  activeProvince,
  className = '',
  width = '100%',
}) {
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const wrapRef = useRef(null);

  const handleEnter = useCallback(
    (id) => {
      setHovered(id);
      onHover?.(PROVINCE_META[id]);
    },
    [onHover],
  );

  const handleLeave = useCallback(() => {
    setHovered(null);
    setTooltip(null);
    onHover?.(null);
  }, [onHover]);

  const handleMove = useCallback((e, name) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left + 14;
    let y = e.clientY - rect.top - 44;
    if (x + 140 > rect.width) x = e.clientX - rect.left - 154;
    if (y < 4) y = 4;
    setTooltip({ x, y, name });
  }, []);

  const handleClick = useCallback(
    (id) => {
      onClick?.(PROVINCE_META[id]);
    },
    [onClick],
  );

  const isActive = (id) =>
    id === (activeProvince ?? hovered);

  return (
    <div ref={wrapRef} className={`relative select-none ${className}`} style={{ width }}>
      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-10 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-md"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.name}
        </div>
      )}

      {/* Map SVG */}
      <svg
        viewBox={VIEW_BOX}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        className="block h-auto"
        aria-label="Map of Ireland's four provinces"
        role="img"
      >
        {(Object.keys(provincePaths)).map((id) => {
          const active = isActive(id);
          const fill = active ? HOVER_FILL[id] : BASE_FILL[id];
          const meta = PROVINCE_META[id];

          return (
            <g
              key={id}
              role="button"
              aria-label={`${meta.name} province`}
              tabIndex={0}
              className="cursor-pointer outline-none"
              style={{ transition: 'filter 0.18s ease' }}
              filter={active ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))' : undefined}
              onMouseEnter={() => handleEnter(id)}
              onMouseLeave={handleLeave}
              onMouseMove={(e) => handleMove(e, meta.name)}
              onClick={() => handleClick(id)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(id)}
            >
              {provincePaths[id].map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={fill}
                  stroke="#9ca3af"
                  strokeWidth="0.4"
                  strokeLinejoin="round"
                  style={{ transition: 'fill 0.18s ease' }}
                />
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}