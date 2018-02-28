import React, {Component} from 'react';
import MdHome from 'react-icons/lib/md/home'
import MdLocalPhone from 'react-icons/lib/md/local-phone'
export default class Profile extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="profile-profile">
                <div className="profile-section1">
                    <div className="profile-picture">
                        <img src="../../images/profile.JPG"/>
                        <input className="change-image" name="changeImage" type="file"/>
                    </div>
                    <h1>Fahim</h1>
                </div>
                <div className="profile-section2">
                    <span><MdHome size={30}/></span>
                    <span><p><MdLocalPhone/>+8801521492879</p></span>
                    <span className="selling">
                        <p className="open">Open</p>
                        <p>START SELLING</p>
                    </span>
                    <span><p>Following Shop</p></span>
                </div>
            </div>
        );
    }
}
