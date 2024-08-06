const Button = ({feedback, onClick}) => {
  
  return (
    <div>
      <button onClick={onClick}>
        <div>{feedback} </div>

      </button>
    </div>
  )
}
export default Button;
