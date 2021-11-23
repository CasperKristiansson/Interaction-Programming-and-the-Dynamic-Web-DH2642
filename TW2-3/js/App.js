function RenderTest() {
    console.log("Vue sub-component render test");
    return false;
}

function defaultRoute() {
    const routes = ["#search", "#summary", "#details"];
    if (!routes.includes(window.location.hash))
        window.location.hash = "#search";
}

function App(props) {
    return (defaultRoute(),
        <div class="flexParent">
            <div class="sidebar debug">
                <SidebarPresenter model={props.model} />
            </div>
            <div class="mainContent debug">
                <Show hash="#search">
                    <SearchPresenter model={props.model} />
                </Show>

                <Show hash="#details">
                    <DetailsPresenter model={props.model} />
                </Show>

                <Show hash="#summary">
                    <SummaryPresenter model={props.model} />
                </Show>
            </div>
        </div>
    );
}
window.addEventListener("hashchange", defaultRoute);
