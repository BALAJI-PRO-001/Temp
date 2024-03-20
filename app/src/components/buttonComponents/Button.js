import "./Button.css";


const Button = (props) => {
  return (
    <button 
      onClick={props.eventHandler}
      className="button"
      style={props.style}
    >
      {props.children}
    </button>
  );
}

export default Button;