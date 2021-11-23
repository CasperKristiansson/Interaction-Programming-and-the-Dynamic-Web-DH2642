function SidebarPresenter(props){ 
    return <SidebarView guests = {props.model.numberOfGuests} 
                        setGuests = {guestsAmount => props.model.setNumberOfGuests(guestsAmount)}/>
}
