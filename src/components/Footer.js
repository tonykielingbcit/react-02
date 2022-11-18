const getYear = () => new Date().getFullYear();

const Footer = ({author, copyright}) => {
    return(
        <section className = "common-settings app-footer">
            <p>&copy; {copyright} — {author}</p>
        </section>
    );
};

// just in case props
Footer.defaultProps = {
    copyright: getYear(),
    author: "Tony Kieling" 
};

export default Footer;