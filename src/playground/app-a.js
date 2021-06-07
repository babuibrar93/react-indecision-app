class IndecisionApp extends React.Component {
  constructor() {
    super();

    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handledeleteOne = this.handledeleteOne.bind(this);
    
    this.state = {
      optionsArray: [] 
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  

componentWillUnmount() {
  console.log('componentWillUnmount');
}

  handleDeleteAll() {
    this.setState(() =>  ({optionsArray: []  })    )
  }

  handledeleteOne(optionToRemove) {
    this.setState((prevState) => ({
      optionsArray: prevState.optionsArray.filter((opti) => {
        return optionToRemove !== opti;
      })
    }) );
  }

  handlePick() { 
       const randomNumber= Math.floor(Math.random() * this.state.optionsArray.length);
       const selectedNumber= this.state.optionsArray[randomNumber];
       alert(selectedNumber);
  }

  handleAddOption(optionTake) {
    if(!optionTake) {
      return 'Enter a valid option';
    }
    else if(this.state.optionsArray.indexOf(optionTake) > -1) {
      return 'This option alraedy exist';
    }
    
    this.setState((prevState) => 
    ( { optionsArray: prevState.optionsArray.concat(optionTake) })    )
      
    }


  render() {
    const tittle = 'Indecision';
    const subtittle =  'Put your life in the hands of a computer';
    return (
      <div>
      <Header tittle={tittle} subtittle={subtittle}/>
      <Action hasOptions={this.state.optionsArray.length > 0} handlePickOption={this.handlePick} />

      <Options
      optionsArr={this.state.optionsArray}  
      handleDeleteAllOptions={this.handleDeleteAll}
      handledeleteOneOption={this.handledeleteOne}
      />
      <AddOption optionTaker={this.handleAddOption} />
      </div>
    )
  }
}

// IndecisionApp.defaultProps = {
//   optionsArray: []
// }

const Header = (props) => {
  return (
    <div>
    <h1>{props.tittle}</h1>
    <h2>{props.subtittle}</h2>
    </div>
  )
};


// class Header extends React.Component {
//   render() {
//      return (
//        <div>
//        <h1>{this.props.tittle}</h1>
//        <h2>{this.props.subtittle}</h2>
//        </div>
//      )
//   }
// }

const Action = (props) => {
  return (
    <div>
    <button 
    onClick={props.handlePickOption} disabled={ !props.hasOptions} > What Should I Do?
    </button>
    </div>
  )
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//       <button 
//       onClick={this.props.handlePickOption} disabled={ !this.props.hasOptions} > What Should I Do?
//       </button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
   {/* Option Length: {this.props.optionsArr.length} */} <br></br>
    <button onClick={props.handleDeleteAllOptions}>Remove All</button>  
  
    {
      props.optionsArr.map((opt) => 
      (<Option key={opt} optText={opt}  optionOne={props.handledeleteOneOption} />) ) }

    </div>
  )
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//      {/* Option Length: {this.props.optionsArr.length} */} <br></br>
//       <button onClick={this.props.handleDeleteAllOptions}>Remove All</button>
      
//       <ol>
//       {this.props.optionsArr.map((opt) => <Option key={opt} optText={opt} /> )}
//       </ol>

//       <Option />
//       </div>
//     )
//   }
// }

const Option = (props) => {
  return (
    <div>
    {props.optText}
    <button onClick={(e) => {props.optionOne(props.optText)}}>Remove</button>
    </div>
  )
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//       {this.props.optText}
//       </div>
//     )
//   }
// }


class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();

  const optionValue = e.target.elements.option.value.trim();
  const error= this.props.optionTaker(optionValue);

  this.setState(() =>  ({error} )  )
 
  
  if (!error) {
    e.target.elements.option.value = '';
  }

  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option"/>
      <button >Add Option</button>
      </form>
      </div>
    )
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));