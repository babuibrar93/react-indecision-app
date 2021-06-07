class Counter extends React.Component {
  constructor(props) {
    super(props); 

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  };

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count+1
      }
    });
  }
  handleMinusOne() {
    this.setState((nextState) => {
      return {
        count: nextState.count-1
      }
    })
  }
  handleReset() {
    this.setState((restSate) => {
      return {
        count: restSate.count-this.state.count
      }
    })
  }


  render() {
    return (
      <div>
    <h1>Count: {this.state.count}</h1>
    <button onClick={this.handleAddOne}>+1</button>
    <button onClick={this.handleMinusOne}>-1</button>
    <button onClick={this.handleReset}>Reset</button>
</div>
    )
  };
};

var appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);











// //------------------
// const user = {
//     name: 'Babu Ibrar',
//     age: '23',
//     location: 'Lahore'
   
//   };
//   function getLocation(location) {
//     if (location) {
//       // return 'Location: ' +location;
//       return <p> Location: {location}</p>
//     }
   
//   };
//   // var userName = 'Muhammad Ibrar Asif';
//   // var userAge = '24';
//   // var userLocation = 'Islamabad';
//   const templateTwo = (
//     <div>
//       <h1>{user.name ? user.name : 'Unknown'}</h1> {/* ternery operator */}
//       {( user.age && user.age >= 18) && <p>Age: {user.age}</p>} {/* Logical and operator. when you wanna do 1 thing or wanna do nothing */}
//       <p>{getLocation(user.location)}</p>
//     </div>
//   );
  
  
//   let count = 0;
//   const addOne = () => {
//     count++;
//     counterApp();
//   }
//   const minusOne = () => {
//     count--;
//     counterApp();
//   }
//   const reset = () => {
//     count= 0;
//     counterApp();
//   }
  
//   const counterApp = () => {
//     const templateThree = (
//       <div>
//       <h2>Count: {count}</h2>
//       <button onClick={addOne}>+1</button>      {/* jSX does not have build-in data binding */}
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button> 
    
//       </div>
//     )
//     ReactDOM.render(templateThree, appRoot);
//   };

//   var appRoot = document.getElementById('app');
// counterApp();