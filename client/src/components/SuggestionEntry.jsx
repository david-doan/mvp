var SuggestionEntry = (props) => (
  <div className="" onClick={props.vote}>
    {props.entry}
  </div>
);

window.SuggestionEntry = SuggestionEntry;
