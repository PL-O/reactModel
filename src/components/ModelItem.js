import './ModelItem.css';

function ModelItem(props) {
    const { model, onModelClick } = props;
    return (
        <div className="model-item">
            <img src={model.thumbnailUrl} onClick={() => onModelClick(model)} />
            <h4>{model.title}</h4>
        </div>
    );
}

export default ModelItem;