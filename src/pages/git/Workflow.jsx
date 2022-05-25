const Workflow = () => {

    const getContent = () => {
        let content = [];
        for (let i = 1; i <= 12; i++) {
            content.push(
                <div>
                    <h3>{i}</h3>
                    <img src={`/img/code-review/${i}.png`} alt="Alt" width={400}
                         style={i % 3 === 0 ? {float: "left"} : {}}/>
                </div>
            );
        }
        return content;
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {getContent()}
        </div>
    );
};

export default Workflow;