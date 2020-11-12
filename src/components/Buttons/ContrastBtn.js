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

    //theme === "" ? props.toggler("lightTheme") : props.toggler("darkTheme");
    
    //console.log(props)
    changeBtnTheme()
    props.toggler(theme !== "" ? "lightTheme" : "darkTheme");

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
  //updateThemeStore: () => dispatch(themeActions.chacked())
  //store.dispatch(themeActions.toggler('darktheme'))
  toggler: item => dispatch(themeActions.toggler(item))
})


export default connect(null, mapDispatchToProps)(ContrastBtn) //redux