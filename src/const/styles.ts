import React from "react";

export const listStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
} as React.CSSProperties;

export const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 0.5rem",
  background: "#e5e5e5",
  fontSize: "14px",
} as React.CSSProperties;

export const favoriteButtonStyle = {
  border: "1px solid #ccc",
  borderRadius: "2px",
  padding: "0.25rem 0",
  width: "144px",
  cursor: "pointer",
} as React.CSSProperties;

export const toggleButtonStyle = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "0.25rem 0.5rem",
  cursor: "pointer",
} as React.CSSProperties;
