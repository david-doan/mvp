class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room:1,
      suggList: [],
      started: false,
      suggTimer: 10,
      suggLimit: 10,
      serverTime: Infinity
    };
  }

  // updates App state with suggestion
  makeSuggestion(txt) {
    var newList = this.state.suggList;
    if(newList.length === this.state.suggLimit){
      newList.shift();
    }
    newList.push(txt);
    this.setState({suggList: newList});
  }

  //makes post request to server to start instance of chatting
  handleStartButton(e) {
    // make request to server to get serverTime
    var options = {
      endpoint: '/start',
      method: 'POST',
      data: {
        room:this.state.room
      }
    };
    this.props.requestHandler(options, (data) =>{
      console.log('WOOT THIS IS THE SERVER TIME', data.data);
      this.setState({serverTime:data.data});
    });

    //render nextPage
    this.setState({started:true});

    //creates a timer that will have each client POST to the server
    setTimeout( ()=> {
      console.log("It has been '10 setTimeout secs' but really it has been:", (Date.now() - this.state.serverTime)/1000 );
      var options = {
        endpoint: '/start',
        method: 'POST',
        data: {
          room:this.state.room

        }
      };
      
      // this.props.requestHandler(options, () => {console.log("HOLY SHIT SUCCESSFUL POST REQUEST");});

    }, this.state.suggTimer * 1000);
  }

  render() {
    if(this.state.started) {
      return (
        <div>
          Hello World Whats up Dog WOOOT
          <Nav makeSugg ={this.makeSuggestion.bind(this)}/>
          <SuggestionList suggs={this.state.suggList} />
        </div>
      );
    } else {
      return (
        <Start handleStartButton={this.handleStartButton.bind(this)} />
      );
    }
  }
}