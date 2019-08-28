import React from "react";
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

export default class Add extends React.Component {
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
      description: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
              Catégorie
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
                <option value="A louer">A louer</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              Adresse
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.onChange}
                type="text"
                name="adresse"
                id="exampleCity"
                placeholder="Rue/route"
              />
            </Col>
            <Col sm={3}>
              <Input
                onChange={this.onChange}
                type="select"
                name="ville"
                id="exampleSelect"
              >
                <option selected> ville</option>
                <option value="1">A vendre</option>
                <option value="2">A louer</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              Type bien
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
                <option value="2">Maison</option>
                <option value="3">Studio</option>
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
            <Col sm={8}>
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
                  onChange={this.onChange}
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
