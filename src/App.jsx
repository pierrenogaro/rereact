import './App.css'

function App() {

  return (
  <>
      <div>
          <Text display="whats up"/>
          <Text display="hello"/>

      </div>
  </>
  )
}

function Text({display}) {

    return (
        <>
            <div>
                <p>{display}</p>
            </div>
        </>
    )
}


export default App
