import React, { Component, useState } from "react";
import '../styles/App.css';

export default const App = () => {
  return (
    <div id="main">
      <Heading/>
      <SubHeading/>
      <InputQuery/>
      <SubmitButton/>
    </div>
  )
}


