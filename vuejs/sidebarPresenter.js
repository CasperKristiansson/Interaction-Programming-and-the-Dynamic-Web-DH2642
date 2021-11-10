function SidebarPresenter(props){ 
    return <SidebarView guests = {props.model.numberOfGuests} 
                        dishes = {props.model.dishes}
                        setGuests = {guestsAmount => props.model.setNumberOfGuests(guestsAmount)}
                        removeDish = {id => props.model.removeFromMenu(id)}
                        dishChoice = {id => props.model.setCurrentDish(id)} />
}
