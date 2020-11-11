import React, { useState, useEffect } from 'react';
import './Icons.scss';

const ArticleIcon = (props) => {

  const srcChildren = props.elem.children;
  const [srcLink1, srcLink1New] = useState("");
  const [srcLink2, srcLink2New] = useState("");
  const theme = "";

  useState(() => {
    srcChildren !== undefined && (srcChildren).map(
      (item, index) => {
        index === 0 && srcLink1New(item.src);
        index === 1 && srcLink2New(item.src);
      }
    )
  })  

  useEffect(() => {
  }, [])
    
  //console.log(this.props.themeDisplay);
  return (
    <img className={props.elem.img}
      src={props.elem.src !== undefined ? props.elem.src :
        (theme === "checked" ? srcLink2 : srcLink1)
      }>
    </img>)
}

export default ArticleIcon;