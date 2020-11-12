import React, { useState, useEffect } from "react"
import { connect } from 'react-redux' //redux
import { themeActions } from '../../app/theme/' //redux

import "./Buttons.scss"

const ContrastBtn = (props) => {
  const [theme, setTheme] = useState("");

  const changeTheme = () => {
    if (typeof window !== `undefined`) {
      let doc = document.body;
      doc.classList.toggle('dark-theme');
    }

    const changeBtnTheme = () => {
      theme === "" ? setTheme("checked") : setTheme("");
      //theme === "" ? (themeActive = "checked") : (themeActive = "");
    }

    const updateThemeStore = () => {
      //theme === "" ? "on" : "off";
    }
    
    console.log(props.add())
    changeBtnTheme()
    updateThemeStore()
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
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

//redux
const mapDispatchToProps = dispatch => ({
  //add: theme => dispatch(themeActions.checked(theme)) //funckja którą chcemy wywołać na naszym storze
  //store.dispatch(themeActions.chacked())
  //updateThemeStore: () => dispatch(themeActions.chacked())
})


export default connect(null, mapDispatchToProps)(ContrastBtn) //redux