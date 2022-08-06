import React, { useState } from "react";

function Wow(props) {
  let looks;
  if (props.itsura) {
    looks = <h1>Puntahan kita ngayon?</h1>;
  } else {
    looks = <h1>Ay may deliver pala ako next time nalang</h1>;
  }
  return <div>{looks}</div>;
}

function Labas(props) {
  return (
    <div>
      <button onClick={props.gumana} type="button">
        Sige
      </button>
    </div>
  );
}

function App() {
  const [Ex, Setex] = useState(true);
  return (
    <>
      <Wow itsura={Ex} />
      <Labas gumana={() => Setex(!Ex)} />
    </>
  );
}

export default App;
