import React from "react";
import { addPost } from "../redux/Actions/postActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
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
      categorie: "",
      ville: "",
      gouvernerat: "",
      typebien: "",
      lit: "",
      chambre: "",
      prix: "",
      description: "",
      image: null
    };
  }
  onChangeImage = e => {
    this.setState({
      image: e.target.files[0]
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const newdata = new FormData();
    newdata.append("ville", this.state.ville);
    newdata.append("categorie", this.state.categorie);
    newdata.append("gouvernerat", this.state.gouvernerat);
    newdata.append("typebien", this.state.typebien);
    newdata.append("lit", this.state.lit);
    newdata.append("chambre", this.state.chambre);
    newdata.append("prix", this.state.prix);
    newdata.append("description", this.state.description);
    newdata.append("image", this.state.image);

    this.props.addPost(newdata);
    console.log(newdata);
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
                name="categorie"
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
              Adresse/Ville
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.onChange}
                type="text"
                name="ville"
                id="exampleCity"
                placeholder="ville"
              />
            </Col>
            <Label for="exampleSelect" sm={2}>
              Gouvernerat
            </Label>
            <Col sm={3}>
              <Input
                onChange={this.onChange}
                type="text"
                name="gouvernerat"
                id="exampleSelect"
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup className="formfield" row>
            <Label for="exampleSelect" sm={2}>
              {" "}
              Type de bien
            </Label>
            <Col sm={4}>
              <Input
                onChange={this.onChange}
                type="select"
                name="typebien"
                id="exampleSelect"
              >
                <option selected>Choisir</option>
                <option value="Appartement">Appartement</option>
                <option value="Villa">Villa</option>
                <option value="Maison">Maison</option>
                <option value="Studio">Studio</option>
                <option value="Fonds de commerce"> Fonds de commerce</option>
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
                name="lit"
                type="text"
              />
            </Col>
            <Label for="exampleSelect" sm={3}>
              Nombre de chambre
            </Label>
            <Col sm={4}>
              <Input
                onChange={this.onChange}
                placeholder="Nombre de chambre"
                name="chambre"
                type="text"
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
                  onChange={this.onChangeImage}
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
              <Link to="/">
                {" "}
                <Button
                  onClick={this.onSubmit}
                  style={{ backgroundColor: "#2f92f3 !important" }}
                >
                  Submit
                </Button>
              </Link>
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
