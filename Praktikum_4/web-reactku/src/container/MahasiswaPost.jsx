import React, {Component} from "react";
import './MahasiswaPost.css';
import PostMahasiswa from '../component/BlogPost/PostMahasiswa';

class MahasiswaPost extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""            
        }
    }

    ambilDataDariServerAPI= () => {
        fetch( 'http://localhost:3002/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                                })
            })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`, { method: 'DELETE' })
            .then(() => {
                this.ambilDataDariServerAPI()
            })
    }

    handleHapusSemuaMahasiswa = () => {
        this.state.listMahasiswa.foreach ((item) => {
            console.log (item)
        })
        
        // fetch(`http://localhost:3002/mahasiswa/` + {item.id}, { method: 'DELETE' })
        //     .then(() => {
        //         this.ambilDataDariServerAPI()
        //     })        
        
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa }
        let timestamp = new Date().getTime()
        formInsertMahasiswa['id'] = timestamp
        formInsertMahasiswa[event.target.name] = event.target.value
        this.setState({
            insertMahasiswa: formInsertMahasiswa,            
        })
       
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((response) => {
                this.ambilDataDariServerAPI()
            })
    }
    

    render() {
        return (            
                <div className="post-mahasiswa">
                    <div className="form pb-2 border-bottom">
                        <div className="form-group-row">
                            <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" name="nim" id="nim" onChange={this.handleTambahMahasiswa} />
                            </div>
                        </div>
                        <div className="form-group-row">
                            <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="nama" id="nama" onChange={this.handleTambahMahasiswa}/>
                            </div>
                        </div>
                        <div className="form-group-row">
                            <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="alamat" id="alamat" onChange={this.handleTambahMahasiswa}/>                            
                            </div>
                        </div>
                        <div className="form-group-row">
                            <label htmlFor="No.Hp" className="col-sm-2 col-form-label">No.Hp</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control"  name="hp" id="hp" onChange={this.handleTambahMahasiswa}/>
                            </div>
                        </div>
                        <div className="form-group-row">
                            <label htmlFor="angkatan" className="col-sm-2 col-form-label">Tahun Angkatan</label>
                            <div className="col-sm-2">
                            <input type="text" className="form-control"  name="angkatan" id="angkatan" onChange={this.handleTambahMahasiswa} />
                            </div>
                        </div>
                        <div className="form-group-row">
                            <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-2">
                            <select className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}>
                                <option value="" disabled selected>Pilih Status--</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Cuti">Cuti</option>
                                <option value="Lulus">Lulus</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger mt-4" onClick={this.handleTombolSimpan}>Simpan</button>
                    </div>
    
                    <h2>Daftar Mahasiswa</h2>
                    {
                        this.state.listMahasiswa.reverse().map(mahasiswa => {
                            return <PostMahasiswa key={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} 
                            hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} date={mahasiswa.Date} hapusMahasiswa={this.handleHapusSemuaMahasiswa} />
                        })
                    }
                </div>
        )
    }
}
export default MahasiswaPost;    
