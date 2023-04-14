import React, {useState} from "react";
import "./index.css"
export default function App({ Component, pageProps }) {

const [todos,setTodos] = useState([{title: "watch movie", description: "i will watch sytorm over oparadise"}])


    return <Component todos={todos} {...pageProps} />;
  }