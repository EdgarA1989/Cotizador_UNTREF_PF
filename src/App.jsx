
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';


const body = {backgroundColor:  'rgb(126, 88, 161)',
minHeight: '100%',
}


function App() {
  
  return (
 
    <>
        <div className="first-container" style={body}>  
        <Header />
        <Form />
        </div> 
     
    </>
  
    
  )
}

export default App
