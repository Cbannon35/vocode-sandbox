const ThemePicker = ({
  theme,
  changeTheme,
}: {
  theme: string;
  changeTheme: (text: string) => void;
}) => {
  return (
    <div className="flex  bg-secondary lex-row space-x-2 justify-around p-2">
      <p
        className={`pl-1 pr-1 text-text bg-primary ${
          theme === "light"
            ? "cursor-not-allowed"
            : "cursor-pointer hover:bg-text hover:text-primary"
        }`}
        onClick={() => {
          changeTheme("light");
        }}
      >
        Light
      </p>
      <p
        className={`pl-1 pr-1 text-text bg-primary ${
          theme === "dark"
            ? "cursor-not-allowed"
            : "cursor-pointer hover:bg-text hover:text-primary"
        }`}
        onClick={() => {
          changeTheme("dark");
        }}
      >
        Dark
      </p>
    </div>
  );
};

export default ThemePicker;
