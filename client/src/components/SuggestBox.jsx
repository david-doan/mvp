var SuggestBox = (props) => (
  
  <div className="">
    <input className="" type="text" />
    <button className="" onClick>
      <span className="">Suggest!</span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.SuggestBox = SuggestBox;
