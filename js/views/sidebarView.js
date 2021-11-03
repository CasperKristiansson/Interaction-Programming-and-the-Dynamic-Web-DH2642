function SidebarView(props) {
    return (
        <div>
            <button disabled = { props.guests <= 1 } onClick = { event => props.setGuests(props.guests - 1)}> - </button>
            <span title = "guests"> { props.guests }</span>
            <button onClick = { event => props.setGuests(props.guests + 1)}> + </button>
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
