import React from "react";
import { addPost } from "../redux/Actions/postActions";
import { connect } from "react-redux";
import {
  Card,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      catégorie: "",
      adresse: "",
      ville: "",
      zip: "",
      type: "",
      nbrLit: "",
      nbrChambre: "",
      prix: "",
      description: "",
      image: []
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleimage = e => {
    let formdata = new FormData();
    formdata.append("image", e.target.files[0], e.target.files[0].name);

    this.setState({ image: formdata });
    console.log(this.state.image);
  };
  onSubmit = e => {
    e.preventDefault();
    const newAnnouc = {
      catégorie: this.state.catégorie,
      adresse: this.state.adresse,
      ville: this.state.ville,
      zip: this.state.zip,
      type: this.state.type,
      nbrLit: this.state.nbrLit,
      nbrChambre: this.state.nbrChambre,
      prix: this.state.prix,
      description: this.state.description
    };
    this.props.addPost(newAnnouc);
    console.log(newAnnouc);
  };
  render() {
    return (
      <div className="form_ajout">
        <Form className=" maincard h-75 w-75 mx-auto">
          <FormGroup row>
            <Label for="exampleSelect" md={4}>
              <div className="add-title">
                <h3> Ajouter une annonce</h3>{" "}
              </div>
            </Label>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              Type
            </Label>
            <Col sm={4}>
              <Input
                onChange={this.onChange}
                type="select"
                name="catégorie"
                id="exampleSelect"
              >
                <option selected>Choisir</option>
                <option value="A vendre">A vendre</option>
                <option value="A vendre">A acheter</option>
                <option value="A louer">A louer</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              Adresse/Ville
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.onChange}
                type="text"
                name="adresse"
                id="exampleCity"
                placeholder="ville"
              />
            </Col>
            {/* <Col sm={3}>
              <Input
                onChange={this.onChange}
                type="select"
                name="ville"
                id="exampleSelect"
              >
            
              </Input>
            </Col> */}
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              Type de bien
            </Label>
            <Col sm={4}>
              <Input
                onChange={this.onChange}
                type="select"
                name="type"
                id="exampleSelect"
              >
                <option selected>Choisir</option>
                <option value="1">Appartement</option>
                <option value="2">Villa</option>
                <option value="3">Maison</option>
                <option value="4">Studio</option>
                <option value="5">Commercial</option>
                <option value="6">Duplex</option>
                <option value="7">Terrain</option>
                <option value="8"> Fonds de commerce</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" name="nbrLit" sm={2}>
              Nombre de lit
            </Label>
            <Col sm={3}>
              <Input
                onChange={this.onChange}
                placeholder="Nombre de lit"
                min={0}
                max={100}
                type="number"
                step="1"
              />
            </Col>
            <Label for="exampleSelect" sm={3}>
              Nombre de chambre
            </Label>
            <Col sm={4}>
              <Input
                onChange={this.onChange}
                placeholder="Nombre de chambre"
                name="nbrChambre"
                min={0}
                max={100}
                type="number"
                step="1"
              />
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleText" sm={2}>
              Prix
            </Label>
            <Col sm={6}>
              <InputGroup>
                <Input
                  onChange={this.onChange}
                  type="text"
                  name="prix"
                  id="exampleCity"
                />
                <InputGroupAddon addonType="prepend">TND</InputGroupAddon>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleText" sm={2}>
              Images
            </Label>
            <Col sm={8}>
              <InputGroup>
                <Input
                  onChange={this.handleimage}
                  type="file"
                  name="image"
                  id="image"
                />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                onChange={this.onChange}
                type="textarea"
                name="description"
                id="exampleText"
                placeholder="Pour une annonce éfficace, rédigez une présentation précise du bien : sa composition, son emplacement, ses équipements, le prix, les alentours etc..."
              />
            </Col>
          </FormGroup>

          <FormGroup className="formfield" check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button
                onClick={this.onSubmit}
                style={{ backgroundColor: "#2f92f3 !important" }}
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(Add);
