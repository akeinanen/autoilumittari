import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tulos from './components/Tulos';

// Images
import car1 from './imgs/car1.svg';
import car2 from './imgs/car2.svg';
import car3 from './imgs/car3.svg';

function App() {

  const [matka, setMatka] = useState('');
  const [nopeus1, setNopeus1] = useState('');
  const [nopeus2, setNopeus2] = useState('');
  const [auto, setAuto] = useState("3");



  return (
    <div className="App">
      <Container className="text-center">
        <h1 className="pt-5">Bensalaskuri</h1>
        <p className="pt-3 pb-5">Valitse auto ja syötä arvot kenttiin</p>
        <Row className="text-center">
          <Col>
            <label>
              <input
                type="radio"
                name="auto"
                id="autoA"
                value="3"
                checked={auto === "3"}
                onChange={e => setAuto((e.target.value))}
              />
              <div className="icon">
                <img src={car1} alt="Car 1" />
                <p>Kulutus 3l/100km</p>
              </div>
            </label>
          </Col>

          <Col>
            <label>
              <input
                type="radio"
                name="auto"
                id="autoB"
                value="3.5"
                checked={auto === "3.5"}
                onChange={e => setAuto((e.target.value))}
              />
              <div className="icon">
                <img src={car2} alt="Car 2" />
                <p>Kulutus 3.5l/100km</p>
              </div>
            </label>
          </Col>

          <Col>
            <label>
              <input
                type="radio"
                name="auto"
                id="autoC"
                value="4"
                checked={auto === "4"}
                onChange={e => setAuto(e.target.value)}
              />
              <div className="icon">
                <img src={car3} alt="Car 3" />
                <p>Kulutus 4l/100kmh</p>
              </div>
            </label>
          </Col>
        </Row>

        <Row className="mt-2">

          <Col className="text-center mb-2">
          <label htmlFor="matka">Syötä matkan pituus kilometreinä</label><br />
          <input type="number" name="matka" autoComplete="off" value={matka} onChange={e => setMatka(e.target.value)} />
          </Col>
          <Col className="text-center mb-2">
            <label htmlFor="nopeus">Syötä nopeus 1 (km/h)</label><br />
            <input type="number" name="nopeus1" autoComplete="off" value={nopeus1} onChange={e => setNopeus1(e.target.value)} />
          </Col>
          <Col className="text-center">
            <label htmlFor="nopeus">Syötä nopeus 2 (km/h)</label><br />
            <input type="number" name="nopeus" autoComplete="off" value={nopeus2} onChange={e => setNopeus2(e.target.value)} />
          </Col>

        </Row>

        <Row className="mt-5">

        </Row>


        <Tulos
          className="tulos"
          matka={matka}
          auto={auto}
          nopeus1={nopeus1}
          nopeus2={nopeus2}
        />

      </Container>
    </div>
  );
}

export default App;


/* (kulutus2 * (Math.pow(1009, nopeus).toFixed(2) / Math.pow(1000, nopeus).toFixed(2))) / 100 */