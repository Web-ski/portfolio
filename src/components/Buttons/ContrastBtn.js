import React, { useState, useEffect }  from "react"

import "./Buttons.scss"

const ContrastBtn = () => {
  const [theme, setTheme] = useState("");

  const changeTheme = () => {
    if(typeof window !== `undefined`) {
      let doc = document.body;
      doc.classList.toggle('dark-theme');
      console.log(doc) 
    }

    const changeBtnTheme = () => {
      theme === "" ? setTheme("checked") : setTheme("")
    }

    changeBtnTheme()
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