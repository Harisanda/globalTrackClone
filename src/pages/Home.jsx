import React, { useState } from "react";
import Headers from "../components/Headers/Headers";
import Informations from "../components/Modals-infos/Informations";
import './Home.css';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState()

    const openModal = () => {
        setShowModal(true);
    }

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          console.log(reader.result);
          setImage(reader.result);
        //   dispatch(setAvatar(reader.result))
        }
    }

    return(
        <div className="home">
            <Headers/>
            <div className="home-content">
                <div className="time">
                    <p className="counter">20:47:25</p>
                    <div className="upload-image">
                        <i class="material-icons" onClick={openModal}> collections </i>
                        <input id="image" type='file' onChange={uploadImage}/> <label htmlFor="image">Upload image</label>
                    </div>
                </div>
                {showModal && <Informations onClose={() => setShowModal(false)}/>}
            </div>
        </div>
    )
}

export default Home;