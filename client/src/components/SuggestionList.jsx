var SuggestionList = (props) => (
  <div>
    Suggestion List
    {props.suggs.map( (entry, index) => 
      <SuggestionEntry key={index} entry = {entry} />
    )}
  </div>
);



window.SuggestionList = SuggestionList;
