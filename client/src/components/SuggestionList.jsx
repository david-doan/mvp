var SuggestionList = (props) => (
  <div>
    Suggestion List
    {props.suggs.map(entry => 
      <SuggestionEntry entry = {entry} />
    )}
  </div>
);



window.SuggestionList = SuggestionList;
