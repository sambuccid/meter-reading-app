import './ReadingList.css'
import Reading from './Reading';

function ReadingList(props){
    const classes = 'readingList ' + props.className;

    return (
        <div className={classes}>
          <Reading road="Clift Road" num={12} energy={32}/>
          <Reading road="Clift Road" num={13} energy={46}/>
          <Reading road="Down Road" num={13} energy={48}/>
        </div>
    );
}

export default ReadingList;