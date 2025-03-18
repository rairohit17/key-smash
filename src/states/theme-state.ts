import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import themes from '../utils/themes';
export interface Theme {
  name: string;
  background: string;
  primary: string;
  secondary: string;
  wrong: string;
  right: string;
}
const initialState: Theme =
  themes.filter(
    (theme) => theme.name == JSON.parse(localStorage.getItem('theme') as string)
  )[0] || themes.filter((themes) => themes.name == 'retro')[0];

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state: Theme, action: PayloadAction<Theme>) => {
      console.log(state)
      return action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { changeTheme } = themeSlice.actions;
