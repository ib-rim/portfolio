
function Pocket (props) {
    
    return (
        <div className="pocket">
            <div className="head">{props.head}</div>
            <div className="info">{props.children}</div>
        </div>
        
    )
    
    
}

export default Pocket;