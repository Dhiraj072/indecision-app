class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleDetail = this.handleToggleDetail.bind(this);
    this.state = {
      title: 'Visibility toggle',
      details: {
        text: 'Now you see me!',
        isVisible: true
      }
    }
  }
  handleToggleDetail() {
    console.log(this.state);
    this.setState((currentState) => {
      return {
        details: {
          text: currentState.details.text,
          isVisible: !currentState.details.isVisible
        } 
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleDetail}>{this.state.details.isVisible ? 'Hide details' : 'Show Details'}</button>
        <p>{this.state.details.isVisible ? this.state.details.text : ''}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));






// const app = {
  // title: 'Visibility toggle',
  // details: {
  //   text: 'Now you see me!',
  //   isVisible: false,
  // },
// };

// const toggleDetails = () => {
  // app.details.isVisible = !app.details.isVisible;
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
    // <div>
    //   <h1>{app.title}</h1>
    //   <button onClick={toggleDetails}>{app.details.isVisible ? 'Hide details' : 'Show Details'}</button>
    //   <p>{app.details.isVisible ? app.details.text : ''}</p>
    // </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
