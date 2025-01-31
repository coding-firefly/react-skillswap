import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const SearchComponent = () => {
    const [offer, setOffer] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = () => {
        api.get(`/api/poster/search/?offer=${offer.toLowerCase()}`)
            .then((respData) => respData.data)
            .then((data) => {
                console.log('Response data:', data);
                if (Array.isArray(data)) {
                    setResults(data);
                } else {
                    setResults([]);
                }
            })
            .catch((error) => {
                console.error('Failed Fetching at search endpoint', error);
                setResults([]);
            });
    };

    return (
        <div>
            <select
                id="offer"
                name="offer"
                required
                onChange={(e) => setOffer(e.target.value)}
                value={offer}
            >
                <optgroup label="Frontend">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </optgroup>
                <optgroup label="Backend">
                    <option value="python">Python</option>
                    <option value="django">Django</option>
                    <option value="flask">Flask</option>
                    <option value="nodejs">Node.js</option>
                    <option value="express">Express</option>
                </optgroup>
                <optgroup label="Scripting">
                    <option value="bash">Bash</option>
                    <option value="powershell">PowerShell</option>
                    <option value="perl">Perl</option>
                    <option value="ruby">Ruby</option>
                </optgroup>
                <optgroup label="GUI">
                    <option value="tkinter">Tkinter</option>
                    <option value="qt">Qt</option>
                    <option value="wxwidgets">wxWidgets</option>
                </optgroup>
                <optgroup label="AI">
                    <option value="tensorflow">TensorFlow</option>
                    <option value="pytorch">PyTorch</option>
                    <option value="keras">Keras</option>
                    <option value="scikitlearn">Scikit-learn</option>
                </optgroup>
            </select>
            <br />
            <button onClick={handleSearch}>Search</button>

            <div>
                {results.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    results.map((result) => (
                        <div key={result.id} className="result-container">
                            <h3>{result.title}</h3>
                            <p>{result.content}</p>
                            <p>{result.offer}</p>
                            <button onClick={() => window.location.href = `mailto:${result.requestor}`}>Contact</button>
                        </div>
                    ))
                )}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => navigate("/secure")}>Secure</button>
                <button onClick={() => navigate("/logout")}>Logout</button>
            </div>
        </div>
    );
};

export default SearchComponent;
