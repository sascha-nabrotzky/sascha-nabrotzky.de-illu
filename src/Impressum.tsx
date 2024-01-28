import React from "react";
import MainLayout from "./components/MainLayout";

function Impressum() {
    return (
        <MainLayout>
            <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h2>Impressum</h2>
                <h4>Angaben gemäß § 5 TMG:</h4>
                <p className="mt-4">
                    Sascha Nabrotzky
                    <br />
                    Koldefeld 11
                    <br />
                    49549 Ladbergen
                </p>

                <h4>Kontakt:</h4>
                <p className="mt-4">
                    Telefon: 05485 207979
                    <br />
                    E-Mail: sascha.nabrotzky (at) online (dot) de
                </p>

                <h3>Haftungsausschluss Disclaimer</h3>
                <h4>Haftung für Inhalte</h4>
                <p className="mt-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von
                    entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                </p>

                <h4>Haftung für Links</h4>
                <p className="mt-4">
                    Unser Angebot enthält Links zu externen Webseiten Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                    permanente inhaltliche Kontrolle der verlinkten Seiten ist
                    jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                    nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                    werden wir derartige Links umgehend entfernen.
                </p>
                <h4>Urheberrecht</h4>
                <p className="mt-4">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                </p>
            </div>
        </MainLayout>
    );
}

export default Impressum;
