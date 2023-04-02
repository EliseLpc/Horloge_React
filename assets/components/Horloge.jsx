import React, { Component } from 'react';

// afficher l'heure en "temps reel" :
export default class Horloge extends Component {
  // j'initialise la classe Horloge
  constructor() {
    // appel de la classe Component :
    super();
    this.state = { heure: "" }
    this.majHorloge = this.majHorloge.bind(this)
  }

  componentDidMount() {
    // toutes les secondes la fonction setInterval :
    setInterval(
      this.majHorloge,
      1000
    );
  }
  majHorloge() {
    const event = new Date();
    this.setState({
      heure: event.toLocaleTimeString('fr-FR')

    })

  }
  render() {
    return (
      <div>
        <h2>Il est {this.state.heure}.</h2>
      </div>
    );
  }
}


