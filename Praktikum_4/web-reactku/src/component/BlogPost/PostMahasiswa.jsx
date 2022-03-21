import React from "react";

const PostMahasiswa = (props) =>{
    return(
    <div className="mahasiswa">        
        <div class="foto-mahasiswa">
                    <img src="http://placeimg.com/80/80/tech" alt="Foto Mahasiswa" />
                </div>
                <div class ="konten-mahasiswa">
                    <div class="nim-mahasiswa">{props.nim}</div>
                    <p class="nama-mahasiswa">{props.nama}</p>
                    <p class="alamat-mahasiswa">{props.alamat}</p>
                    <p class="hp-mahasiswa">{props.hp}</p>
                    <p class="angkatan-mahasiswa">{props.angkatan}</p>
                    <p class="status-mahasiswa">{props.status}</p>                                                        
                    <button className="btn btn-sm btn-primary" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                </div>
            </div>       
         
    )
}
export default PostMahasiswa;