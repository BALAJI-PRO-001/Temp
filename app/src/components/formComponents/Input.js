import "./Input.css";


const Input = (props) => {
  return (
    <div className="input-group">
      <h3>{props.children}</h3>
      <input type={props.type}></input>
      <img src={props.imgPath} alt={props.alt}></img>
      <p className="error-message">err</p>
    </div>
  );
}

export default Input;