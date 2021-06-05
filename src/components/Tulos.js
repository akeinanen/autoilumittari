import { Col, Row } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

const Tulos = ({ matka, auto, nopeus1, nopeus2 }) => {
    const [showTulos, setShowTulos] = useState(false);
    const nodeRef = useRef(null);

    const laskeKulutus = (matka, nopeus, auto) => {

        if (nopeus === 1) return auto / 100

        let kilometriKulutus = (auto / 100 * Math.pow(1.009, nopeus - 1)).toFixed(10);

        return (kilometriKulutus * matka).toFixed(3)

    }

    const vertaileLuku = (case1, case2) => {
        return Math.max(case1, case2) - Math.min(case1, case2)
    }

    const esitaAika = (aika) => {
        if(aika === Infinity) return 0;
        return `${Math.floor(aika)}h ${Math.round(aika % 1 * 60)}m`;
    }

    const case1 = {
        kesto: matka / nopeus1,
        kulutus: laskeKulutus(matka, nopeus1, auto),
    }
    const case2 = {
        kesto: matka / nopeus2,
        kulutus: laskeKulutus(matka, nopeus2, auto),
    }

    if (!showTulos && matka && nopeus1 && nopeus2) {
        setShowTulos(true);
    } else if (showTulos && (!matka || !nopeus1 || !nopeus2)) {
        setShowTulos(false);
    }

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    return (

        <>
            <Transition
                nodeRef={nodeRef}
                in={!showTulos} timeout={500}
            >
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                    ref={nodeRef}
                    >
                        <h3 className="text-center">Syötä arvot kenttiin</h3>
                    </div>
                )}
            </Transition>




            <Transition 
                in={showTulos} 
                timeout={500} 
                nodeRef={nodeRef}
            >
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} 
                    ref={nodeRef}>
                        <Row>
                            <Col className="text-center matka1 tuloslaatikko">

                                {<h3>Kun ajat {matka}km matkan {nopeus1}km/h </h3>}

                                <p>Matka kestää <b>{esitaAika(case1.kesto)}</b></p>
                                <p>Bensaa kuluu <b>{case1.kulutus}</b></p>
                            </Col>
                            <Col className="text-center matka2 tuloslaatikko">
                                <h3>Kun ajat {matka}km matkan {nopeus2}km/h </h3>
                                <p>Matka kestää <b>{esitaAika(case2.kesto)}</b></p>
                                <p>Bensaa kuluu <b>{case2.kulutus} litraa</b></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center tulos tuloslaatikko">
                                <h3>Nopeammalla vaihtoehdolla:</h3>
                                <ul className="d-inline-block text-left">
                                    <li><p>Olet perillä <b>{esitaAika(vertaileLuku(case1.kesto, case2.kesto))}</b> nopeammin</p></li>
                                    <li><p>Bensaa kuluu <b>{(vertaileLuku(case1.kulutus, case2.kulutus)).toFixed(3)} litraa</b> enemmän</p></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                )}
            </Transition>
        </>
    )
}

export default Tulos;