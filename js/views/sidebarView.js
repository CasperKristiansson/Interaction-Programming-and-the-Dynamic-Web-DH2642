function SidebarView(props) {
    return (
        <div>
            <button onClick = { event => props.setGuests(props.guests + 1)}> + </button>
            <span title="guests">{props.guests}</span>
            <button disabled = {props.guests <= 1} onClick = { event => props.setGuests(props.guests - 1)}> - </button>
       </div>
    );
}
