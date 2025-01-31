
import { useState, useEffect } from "react";
import Notes from "../components/Notes";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Home(){


    const [postbild, setPost] = useState([]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [search, setSearch] = useState("");
    const [offer, setOffer] = useState("");
    const [other, setOther] = useState("");
    const navigate = useNavigate();
    

    useEffect(()=>{
        getRequest();
    }, [])


    const getRequest = () => {
        api.get("/api/poster/")
            .then((respData) => respData.data)
            .then((data)=> {setPost(data); console.log(data)})
            .catch((err)=> console.log(err))
    }


    const deleteNote = (id) => {
        api.delete(`/api/poster/delete/${id}/`)
            .then((respData)=>{if (respData.status === 204) console.log(`${id} deleted`)
            else console.log("failed to delete")


            getRequest()
            })
            .catch((err)=> console.log(err))
           
           
           
    }


    const createPost = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        const search = formData.get("search");
        const offer = formData.get("offer");

        console.log('Searching For:', search);
        console.log('Offering:', offer);

        api.post("/api/poster/", { content, title, search, offer, other })
            .then((res) => {
                if (res.status === 201) console.log("Note created");
                else console.log("Failed to create note");

                getRequest();
            })
            .catch((err) => {
                console.log(err);
            });
    }
   


   


    return <div>
        <div>
            <h2>CURRENT USER POST</h2>
            {postbild.map((note)=> <Notes note={note} onDelete={deleteNote} key={note.id}/>)}


        </div>


        <h2>Create a Post</h2>
        <form onSubmit={createPost}>


            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} value={title}/>
            <br />

            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <br />

            <label htmlFor="search">Searching For:</label>
                <select
                    id="search"
                    name="search"
                    required
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
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
                <br /><br />

                <label htmlFor="offer">Offering:</label>
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
            <br /><br /><br />
            <label htmlFor="other">Request Token Available:</label>
            <input type="text" id="other" name="other" required onChange={(e) => setOther(e.target.value)} value={other}/>
            <br />

            <input type="submit" value="{Submit_now}"></input>
            <br />
            
        </form>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => navigate("/search")}>Search</button>
            <button onClick={() => navigate("/logout")}>Logout</button>
        </div>
    </div>
}


export default Home;

