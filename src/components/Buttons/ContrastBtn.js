import React, { useState, useEffect }  from "react"

import "./Buttons.scss"

const ContrastBtn = ({ btnThemeData }) => {
  const [theme, setTheme] = useState("");

  const changeTheme = () => {
    if(typeof window !== `undefined`) {
      let doc = document.body;
      doc.classList.toggle('dark-theme');
    }
    
    const changeBtnTheme = () => {
      theme === "" ? setTheme("checked") : setTheme("");
      //theme === "" ? (themeActive = "checked") : (themeActive = "");
    }
    
    changeBtnTheme()
    btnThemeData(theme)
  }

  useEffect(() => {
    if(typeof window !== `undefined`) {
      let doc = document.body;
      doc.classList.contains('dark-theme') === true ? setTheme("checked") : setTheme("");
    }
  }, [])

  return (
    <div className={"button__checkbox " + (theme === "checked" ? "box-checked" : "")}>
        <button onClick={changeTheme} className={"contrast " + theme}></button>
    </div>
  )
}


export default ContrastBtn