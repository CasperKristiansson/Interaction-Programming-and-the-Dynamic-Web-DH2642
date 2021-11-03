function SidebarView(props) {
    return (
        <div>
            <button> + </button>
            <span title="guests">{props.guests}</span>
            <button disabled = {props.guests <= 1}> - </button>
       </div>
    );
}
