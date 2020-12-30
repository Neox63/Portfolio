const Container = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            { props.children }
        </div>
    )
}

export default Container;
