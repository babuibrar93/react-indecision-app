class VisibilityToggle extends React.Component {
constructor(props) {
    super(props)

    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
        visibility: false
    }
}

handleVisibilityToggle() {
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        }
    })
}

render() {
    return (
        <div>
        <h2>Visibility Toggle</h2>
        <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide Details' : "Show Details"}</button>
        { this.state.visibility && (
            <div>
               <p>Hey! This is Babu Ibrar</p>
            </div>
        )}
        </div>
    )
}
};


var appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);


// let visibility = false;

// const visible = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const visibilityToggle = (
//         <div>
//         <h1>Visibility Toggle</h1>
//             <button onClick={visible}>{visibility ? 'Hide Detals' : 'Show Details'}</button>
//             {visibility && (
//                 <div>
//                 <p>Hey! This is Babu Ibrar</p>
//                 </div>
//             )}
//         </div>
//         );
//         ReactDOM.render(visibilityToggle, appRoot);
// }




// var appRoot = document.getElementById('app');
// render();