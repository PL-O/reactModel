import './ModelPost.css';

function ModelPost(props) {
    const { model, onBgClick } = props;
    return (
        <div className="model-post">
            <div className="model-bg" onClick={onBgClick} />
            <div className="model-content">
                <img src={model.fullUrl} />
                <h3>{model.title}</h3>
            </div>
        </div>
    );
}

export default ModelPost;