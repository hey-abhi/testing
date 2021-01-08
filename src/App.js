import './App.css';
import {connect} from 'react-redux'
import {increment,decrement,reset} from './Actions/index'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <div></div>
      <button >Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}
const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
    increment : ()=>dispatch(increment()),
    decrement : ()=>dispatch(decrement()),
    reset : ()=>dispatch(reset())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
