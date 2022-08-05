

function Allclass (props){
  return (
   <div> {props.user.tools}
      {props.user.kit}
</div>
  );
  }

  function Wow (props) {
    return (
      <div>
        <Allclass user={props.item} />
      </div>
    )
  }



function App (){
  return (
    <Wow />
  );
}

export default App;
