function SidebarView(props) {
    return (
        <div>
            <button disabled = { props.guests <= 1 } onClick = { () => props.setGuests(props.guests - 1)}> - </button>
            <span title = "guests"> { props.guests }</span>
            <button onClick = { () => props.setGuests(props.guests + 1)}> + </button>
       </div>
    );
}

const VueSidebarLocalState= {
    data() { return {number:2};}, 
    render() {  
        return <SidebarView guests={this.number} 
                setGuests={guestsAmount => this.number = guestsAmount} 
                />;
    }
};

function ReactSidebarLocalState() {
    const [num, setNumber] = React.useState(2);
    return <SidebarView guests = {num}
                        setGuests = { x => setNumber(x) } />;
}
