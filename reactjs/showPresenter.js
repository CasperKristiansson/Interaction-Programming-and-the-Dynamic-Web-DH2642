function Show(props) {
    const [hashState, setHash] = React.useState(window.location.hash);

    React.useEffect(function () {
        const listener = function () {
            setHash(window.location.hash);
        };
        window.addEventListener("hashchange", listener);
        return function () {
            window.removeEventListener("hashchange", listener);
        };
    }, []);

    return (
        <span class={hashState === props.hash ? "" : "hidden"}>
            {props.children}
        </span>
    );
}
