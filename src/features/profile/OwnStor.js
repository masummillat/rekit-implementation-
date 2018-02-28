import React, {Component} from 'react';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
export default class OwnStor extends Component {
    static propTypes = {};

    render() {
        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        return (
            <div className="profile-own-stor">
                <div className="store">
                    <div className="section1">
                        <img src="../../images/mikasa.png"/>
                    </div>
                    <div className="section2">
                        section 2
                    </div>
                </div>
                <div className="add-new-store">
                    <FaPlusCircle size={70}/>
                </div>
            </div>
        );
    }
}
