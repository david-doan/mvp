class SuggestBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestion: ''
    };
  }

  handleInputChange(event) {
    this.setState({suggestion:event.target.value});
  }

  handleButton(e) {
    e.preventDefault();
    this.props.makeSugg(this.state.suggestion);
    this.setState({suggestion:''});
    
  }

  render() {
    return (
      <div className="">
      <form onSubmit={this.handleButton.bind(this)}>
        <input className="" type="text" placeholder="Make a Suggestion" value={this.state.suggestion} onChange={this.handleInputChange.bind(this)} />
        <button className="">
          <span className="">Suggest!</span>
        </button>
      </form>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.SuggestBox = SuggestBox;
