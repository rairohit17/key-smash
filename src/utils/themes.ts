const themes = [
  {
    name: 'ocean-breeze',
    background: '#0A192F', // Navy blue
    primary: '#CCD6F6', // Light blue-gray text
    secondary: '#64FFDA', // Turquoise heading
    right: '#64FFDA', // Turquoise for correct
    wrong: '#FF6B6B', // Coral for wrong
  },
  {
    name: 'cyberpunk',
    background: '#2A2135', // Dark purple
    primary: '#E0E0E0', // Light gray text
    secondary: '#00FF99', // Neon green heading
    right: '#00FF99', // Neon green for correct
    wrong: '#FF007F', // Bright pink for wrong
  },
  {
    name: 'forest',
    background: '#1A2E1A', // Dark green
    primary: '#E0F2E9', // Light mint text
    secondary: '#A8E6CF', // Soft green heading
    right: '#A8E6CF', // Soft green for correct
    wrong: '#FF8B94', // Soft red for wrong
  },
  {
    name: 'retro',
    background: '#2D2D2D', // Dark gray
    primary: '#FFD700', // Gold text
    secondary: '#00CED1', // Turquoise heading
    right: '#00CED1', // Turquoise for correct
    wrong: '#FF6347', // Tomato for wrong
  },
  {
    name: 'default-terminal',
    background: '#300A24', // Pinkish-purple
    primary: 'white', // White text
    secondary: 'white', // White heading
    right: 'green', // Green for correct
    wrong: 'red', // Red for wrong
  },
  {
    name: 'high-contrast',
    background: 'black', // Black background
    primary: 'white', // White text
    secondary: 'white', // White heading
    right: 'green', // Green for correct
    wrong: 'red', // Red for wrong
  },
  {
    name: 'midnight',
    background: '#0c0c15', // Dark blue-black
    primary: '#313551', // Grayish-blue text
    secondary: 'white', // White heading
    right: '#878ba8', // Light gray-blue for correct
    wrong: '#a95b52', // Soft red for wrong
  },
  {
    name: 'tokyo-night',
    background: '#1A1B26', // Dark blue-black
    primary: '#A9B1D6', // Light blue-gray text
    secondary: '#7AA2F7', // Bright blue heading
    right: '#73DACA', // Turquoise for correct
    wrong: '#F7768E', // Soft red for wrong
  },
  {
    name: 'dracula',
    background: '#282A36', // Dark purple-gray
    primary: '#F8F8F2', // Off-white text
    secondary: '#BD93F9', // Light purple heading
    right: '#50FA7B', // Green for correct
    wrong: '#FF5555', // Red for wrong
  },
  {
    name: 'nord',
    background: '#2E3440', // Dark blue-gray
    primary: '#D8DEE9', // Light gray text
    secondary: '#81A1C1', // Light blue heading
    right: '#A3BE8C', // Green for correct
    wrong: '#BF616A', // Red for wrong
  },
  {
    name: 'monokai',
    background: '#272822', // Dark gray
    primary: '#F8F8F2', // Off-white text
    secondary: '#F92672', // Pink heading
    right: '#A6E22E', // Green for correct
    wrong: '#FD971F', // Orange for wrong
  },
  {
    name: 'solarized-dark',
    background: '#002B36', // Dark teal
    primary: '#839496', // Grayish teal text
    secondary: '#B58900', // Yellow heading
    right: '#859900', // Green for correct
    wrong: '#DC322F', // Red for wrong
  },
  {
    name: 'gruvbox',
    background: '#282828', // Dark brown
    primary: '#EBDBB2', // Light beige text
    secondary: '#FE8019', // Orange heading
    right: '#B8BB26', // Green for correct
    wrong: '#FB4934', // Red for wrong
  },
];

export default themes;
