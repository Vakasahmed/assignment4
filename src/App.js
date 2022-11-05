import Card from './Components/Card';

function App() {

  const main_styling = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0.1rem",
  };

  return (
    <>
      <div style={main_styling}>
        <Card title="#FF6663" color="PINK" code="PINK" />
        <Card title="#333333" color="GRAY" code="#333333" />
        <Card title="#000000" color="BLACK" code="#000000" />
        <Card title="#38BB14" color="GREEN" code="#38BB14" />
        <Card title="#C90B0B" color="RED" code="#C90B0B" />
      </div>

      <div style={main_styling}>
        <Card title="#FF8000" color="ORANGE" code="#FF8000" />
        <Card title="#FFf500" color="YELLOW" code="#FFf500" />
        <Card title="#CCCCCC" color="LIGHT-GRAY" code="#CCCCCC" />
        <Card title="#7E41A2" color="PURPLE" code="#7E41A2" />
        <Card title="#C14911" color="BROWN" code="#C14911" />
      </div>
    </>
  );
}

export default App;
