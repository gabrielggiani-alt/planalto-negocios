"use client";

import { useState, useCallback } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "buscar cliente",
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setValue(v);
      onSearch(v);
    },
    [onSearch]
  );

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Label above */}
      <div className="flex items-center justify-center gap-3 mb-4 text-[10px] tracking-[0.5em] uppercase text-gold-dim">
        <span className="diamond" />
        <span>Consulta Privada</span>
        <span className="diamond" />
      </div>

      {/* Search frame */}
      <div
        className={`search-frame relative bg-surface/90 transition-all duration-500 ${
          focused ? "bg-surface/95" : ""
        }`}
        style={{ borderRadius: "2px" }}
      >
        {/* Inner frame ornamentation */}
        <div className="ornament-corner tl" style={{ width: 14, height: 14 }} />
        <div className="ornament-corner tr" style={{ width: 14, height: 14 }} />
        <div className="ornament-corner bl" style={{ width: 14, height: 14 }} />
        <div className="ornament-corner br" style={{ width: 14, height: 14 }} />

        <div className="flex items-center gap-5 px-7 py-5">
          {/* Search icon */}
          <svg
            className="w-4 h-4 text-gold shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-text text-base placeholder:text-text-muted/60 outline-none font-light tracking-[0.15em] lowercase"
            style={{ fontFamily: "var(--font-serif)" }}
            autoFocus
          />

          {value && (
            <button
              onClick={() => {
                setValue("");
                onSearch("");
              }}
              className="text-text-muted/60 hover:text-gold transition-colors"
              aria-label="Limpar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Hint below */}
      <div className="text-center mt-4 text-[10px] tracking-[0.3em] uppercase text-text-muted/50">
        digite o nome para encontrar o registro
      </div>
    </div>
  );
}
