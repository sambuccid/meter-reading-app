import './Button.css'

function Button(props){
    function clickHandler(){
        props.onClick();
    }

    return (
        <div className='button'><a onClick={clickHandler}>{props.children}</a></div>
    );
}

export default Button;