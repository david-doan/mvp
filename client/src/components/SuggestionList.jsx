var SuggestionList = (props) => (
  <div>
    Suggestion List
    {props.suggs.map( (entry, index) => 
      <SuggestionEntry key={index} entry = {entry} vote={props.vote} />
    )}
  </div>
);



window.SuggestionList = SuggestionList;
