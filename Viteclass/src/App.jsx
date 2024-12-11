import Sucess from "./Sucess.jsx"
function App() {
  const name = 'Reincatnation'
  //variable defination in jsx
  return (
    <>
    <h1>Name of the Game , Work {name}</h1>
    {/* //adding evaluation expression   */}
    <Sucess />  
    {/* component name should start off with capital letter.
      the component should be named as jsx .
      the tag only render the single tag so it's should be enclode inside the tag or simple div to be rendered.
    */}
    <h1>Time can't hold still.</h1>
    </>
  )
}

export default App
