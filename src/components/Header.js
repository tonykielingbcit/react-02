const Header = ({title}) => {
    return(
        <section className = "common-settings app-header">
            <h1 className = "header-title">{title}</h1>
        </section>
    );
};

// just in case props
Header.defaultProps = {
    title: "React App" 
};

export default Header;