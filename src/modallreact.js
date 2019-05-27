import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            lienfilm: "",
            descripfilm: "",
            titlefilm: "",
            rating: ""
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="buttonSearch">
                <Button color="danger" onClick={this.toggle}>+</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> Ajouter film</ModalHeader>
                    <ModalBody>
                        <div className="AjoutFilm">
                            <input className="champ" type="text" name="lienfilm" onChange={this.handleChange} value={this.state.lienfilm} placeholder="Enter lien du film" />
                            <input className="champ" type="text" name="titlefilm" onChange={this.handleChange} value={this.state.titlefilm} placeholder="Enter nom du film" />
                            <input className="champ" type="text" name="descripfilm" onChange={this.handleChange} value={this.state.descripfilm} placeholder="Description" />
                            <input className="champ" type="text" name="rating" onChange={this.handleChange} value={this.state.rating} placeholder="Rating" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <input onClick={() => { this.toggle(); this.props.handleAdd(this.state.lienfilm, this.state.titlefilm, this.state.descripfilm, this.state.rating) }} type="button" value="Validate" />
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalExample;