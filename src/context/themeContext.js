import React, { useState, createContext } from "react";

// Create Context Object
export const ThemeContext = createContext();

// Create a provider for components to consume and subscribe to changes
const darkTheme = {
  // brand
  blueColorPrimary: '#3663f6',
  blueColorPrimaryHover: '#4670f8',
  blueColorSecondary: '#0099ff',
  blueColorSecondaryHover: '#42b3ff',
  redColor: '#fd4c5c',
  redColorHover: '#ff6a77',
  redColorSecondary: '#ee6575',
  greenColor: '#0f996d',
  yellowColor: '#ffbb00',

  // theme colors
  pure: '#000000',
  primaryBackground: '#151516',
  SecondaryBackground: '#242526',
  cardBackground: '#2D2E30',
  cardOnCardBackground: '#363739',
  inputBackground: '#3E3F41',
  borderBackground: '#4F4F50',
  tagBorder: '#6D6F71',

  // text
  textPrimary: '#FFFFFF',
  textPrimaryFilter:'invert(100%) sepia(0%) saturate(7487%) hue-rotate(126deg) brightness(109%) contrast(101%)',
  textSecondary: '#BBBBBC',
  textSecondaryFilter:'invert(75%) sepia(5%) saturate(2%) hue-rotate(243deg) brightness(101%) contrast(90%)',
  textDisabled: '#999999'
}
const whiteTheme = {
  // brand
  blueColorPrimary: '#3663f6',
  blueColorPrimaryHover: '#4670f8',
  blueColorSecondary: '#0099ff',
  blueColorSecondaryHover: '#42b3ff',
  redColor: '#fd4c5c',
  redColorHover: '#ff6a77',
  redColorSecondary: '#ee6575',
  greenColor: '#0f996d',
  yellowColor: '#ffbb00',
  // theme colors
  pure: '#f5f5f5',
  pureFilter:'invert(100%) sepia(0%) saturate(7487%) hue-rotate(126deg) brightness(109%) contrast(101%)',
  primaryBackground: '#F2F2F2',
  SecondaryBackground: '#FFFFFF',
  cardBackground: '#FFFFFF',
  cardOnCardBackground: '#E4E3E2',
  inputBackground: '#D8D8D8',
  borderBackground: '#BFC1C0',
  tagBorder: '#8A8A8A',

  // text
  textPrimary: '#000000',
  textPrimaryFilter:'',
  textSecondary: '#606162',
  textSecondaryFilter:'invert(39%) sepia(6%) saturate(83%) hue-rotate(168deg) brightness(93%) contrast(88%)',
  textDisabled: '#999999'
}
export const ThemeContextProvider = props => {
  const [darkThemeSelected, setTheme] = useState(true);
  const [rtlDirection, setRtlDirection] = useState(false);
  const theme = darkThemeSelected ? darkTheme : whiteTheme
  const toggleTheme = () => setTheme(!darkThemeSelected)
  return (
    <ThemeContext.Provider value={{ darkThemeSelected, theme, toggleTheme, rtlDirection, setRtlDirection }}>
      {props.children}
    </ThemeContext.Provider>
  );
};