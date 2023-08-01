import {Col, Container, Row} from "react-bootstrap";
import {Fragment} from "react";

const Imprint = () => {
    return (
        <Fragment>
            <Container>
                <Row id="privacy" className="contrasty">
                    <Col lg={12} className="mt-5">
                        <h1>Impressum</h1>
                        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                        <p>
                            Web at Speed GmbH<br/>
                            Rosenfelder Ring 13<br/>
                            10315 Berlin
                        </p>
                        <p>
                            Handelsregister: HRB 149333<br/>
                            Registergericht: Amtsgericht Berlin (Charlottenburg)
                        </p>
                        <p>
                            <strong>Vertreten durch:</strong><br/>
                            Torsten Krohn, Gesch&auml;ftsf&uuml;hrer
                        </p>
                        <h2>Kontakt</h2>
                        <p>
                            Telefon: +49 30 91524052<br/>
                            E-Mail: torsten.krohn (at) webatspeed.com
                        </p>
                        <h2>Logo</h2>
                        <p>
                            Das Logo von Web at Speed ist eine beim europäischen Harmonisierungsamt für den Binnenmarkt
                            registrierte Gemeinschaftsmarke.
                        </p>
                        <h2>Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br/>
                            DE288544736
                        </p>
                        <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
                        <p>
                            <strong>Name und Sitz des Versicherers:</strong><br/>
                            Hiscox Europe Underwriting Ltd., Arnulfstra&szlig;e 31, 80636 M&uuml;nchen
                        </p>
                        <p>
                            <strong>Geltungsraum der Versicherung:</strong><br/>
                            weltweit (ohne USA/CDN)
                        </p>
                        <h2>EU-Streitschlichtung</h2>
                        <p>
                            Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                            bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank"
                                       rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br/>
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <p>
                            Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">
                            https://www.e-recht24.de/impressum-generator.html</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Imprint;