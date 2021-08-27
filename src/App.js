import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import ModelItem from './components/ModelItem';
import ModelPost from './components/ModelPost';
import model from './data/model';

function App() {
    const [selectedModel, setSelectedModel] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onModelOpenClick(model) {
        setSelectedModel(model);
    }

    function onModelCloseClick() {
        setSelectedModel(null);
    }

    const modelItems = model.filter((model) => {
        return model.title.includes(searchText);
    }).map((model, index) => {
        return <ModelItem key={index} model={model} onModelClick={onModelOpenClick} />;
    });

    let modelPost = null;
    if (!!selectedModel) {
        modelPost = <ModelPost model={selectedModel} onBgClick={onModelCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {modelItems}
                    </div>
                </div>
            </section>
            {modelPost}
        </div>
    );
}

export default App;
