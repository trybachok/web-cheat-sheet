const Page = ({links, content}) => {
    return (
        <div style={{width: "100%", height: "100%", matginTop: 60, display: "flex"}}>
            <div style={{overflow: "auto", marginBottom: 60}}>
                {content}
            </div>
            <div style={{height: "100%", width: 400}}>
                {links}
            </div>
        </div>
    );
};

export default Page;