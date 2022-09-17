export default function ToggleTheme({props}) {
  const { themes, currTheme, setCurrTheme } = props;
  
    return(
  
  <div style={{color: currTheme.shadow}} onClick={(e) => {
        e.stopPropagation();
              console.log('clicked')
                  setCurrTheme((prevState) => {
                    if (prevState.name === "light") return themes.darkTheme;
                    else return themes.lightTheme;
                  });
                  }
                } className="flex items-center cursor-pointer">
   
   Change Theme
      </div>
      );
}