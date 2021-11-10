function RenderTest() {
    console.log("Vue sub-component render test");
    return false;}

function App(props){     
   return ( 
        <div class="flexParent">
			<div class="sidebar debug">
				<SidebarPresenter model = {props.model}/>
			</div>
			<div class="mainContent debug">
				<SummaryPresenter model = {props.model}/>
			</div>
        </div>  
    );
}
