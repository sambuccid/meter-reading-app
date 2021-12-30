import './Button.css'

function Button(props){
    return (
        <div className='button'><a>{props.children}</a></div>
    );
}

export default Button;