export const Alert=(props)=>{
    return(
        <div className="alert alert-danger d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" role="img" ariaLabel="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
            <div>
                {props.msg}
            </div>
        </div>
    )
}