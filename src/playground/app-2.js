console.log('App.js is running !');

// JSX - Javascript XML

const temp = {
  tittle:  'Indecision App!',
  subtittle: 'Put your life in the hands of computer',
  optionsArray: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const optionValue = e.target.elements.option.value;

  if(optionValue) {
    temp.optionsArray.push(optionValue);
    e.target.elements.option.value = '';

    templateApp();
  }
}

const RemoveAll = () => {
  temp.optionsArray = [];
  templateApp();
}


const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * temp.optionsArray.length);
  const selectedValue = temp.optionsArray[randomNumber];
  // console.log(selectedValue);
  window.alert(selectedValue);
};


var appRoot = document.getElementById('app');

const templateApp = () => {
  const template = (
    <div> 
      <h1>{temp.tittle} </h1> 
      {temp.subtittle && <p>{temp.subtittle }</p> }
      <p>{temp.optionsArray.length > 0 ? 'Here are your options' : 'No options available'}</p>
      <p>Number of options: {temp.optionsArray.length}</p> 
      <button disabled={temp.optionsArray.length === 0} onClick={makeDecision}>What Should I Do ?</button>      <br></br><br></br>
      <button onClick={RemoveAll}>Remove All</button>
      <ol>
        {
          temp.optionsArray.map((arrayValue) => <li key={arrayValue}>  {arrayValue}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/> 
      <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};


templateApp();



