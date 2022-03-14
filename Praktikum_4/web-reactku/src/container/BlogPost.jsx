import React, {Component} from "react";
import './BlogPost.css';
import Post from '../component/BlogPost/Post';

class BlogPost extends Component{
    state = {
        listArtikel: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listArtikel: result
                })
            })
    }


    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi"/>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
            </div>
        )
    }
}
export default BlogPost;    
