import React from "react";
import Root from "./Root";

export default {
  name: "my-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      counter: 0,
      searchValue: "",
      isDarkModeOn: false,
      isModalMenuOn: false,
    },
  },
  actions: {
    theme: {
      addToCounter: ({ state }) => {
        state.theme.counter += 1;
      },
      changeSearchValue: ({ state }) => (value) => {
        state.theme.searchValue = value;
      },
      changeDarkMode: ({ state }) => {
        state.theme.isDarkModeOn = !state.theme.isDarkModeOn;
      },
      closeModalMenu: ({ state }) => {
        state.theme.isModalMenuOn = false;
      },
      showMobileMenu: ({ state }) => {
        state.theme.isModalMenuOn = true;
      },
    },
  },
};
