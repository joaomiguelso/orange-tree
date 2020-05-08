import React from "react"
import { Link } from "gatsby"
import Close from "../components/close"

const NavigationStep2 = ({ }) => (

    <div className="navigation-step-2 fade-in">
        <div className="header flex_space_between_row">
            <Link to="/"><span className="gt-america-text">2019 Commemoration</span></Link>
            <Close />
        </div>
        <Link to="/chapter_navigation"><h1 className="saol-title">Arrival of the First Africans</h1></Link>
        <div className="flex_space_between_row">
            <div className="column">
                <h2 className="saol-subtitle">Founding</h2>
                <Link to="/commemoration"><p className="gt-america-text">i.  Commemoration of the First African Landing</p></Link>
                <p className="gt-america-text">ii.  VMHC's "Determined" exhibit </p>
                <Link to="/dance_theatre"><p className="gt-america-text">iii. Dance Theatre of Harlem "Passage" World Premiere</p></Link>
                <p className="gt-america-text">iv.  Tenacity: Women in Jamestown and Early Virginia</p>
                <p className="gt-america-text">v.  Fort Monroe Broll</p>
                <p className="gt-america-text">vi.  VA to America: Unearthing AA History</p>
            </div>
            <div className="column">
                <h2 className="saol-subtitle">Forging</h2>
                <p className="gt-america-text">i.  Making of America Summits</p>
                <p className="gt-america-text">ii.  VA to America: Arc of Freedom</p>
                <p className="gt-america-text">iii.  VA to America: Civil Rights in Education</p>
                <p className="gt-america-text">iv.  Photo of Maggie Walker</p>
                <p className="gt-america-text">v.  AE Stories: My Grandmother's Safe</p>
                <p className="gt-america-text">vi.  VMHC's "Determined" exhibit </p>
            </div>
            <div className="column">
                <h2 className="saol-subtitle">Evolving</h2>
                <p className="gt-america-text">i.  Commemoration of the First African Landing </p>
                <p className="gt-america-text">ii.  Emancipation Proclamation and Freedom Monument</p>
                <p className="gt-america-text">iii.  Faith Journeys in the Black Experience</p>
                <p className="gt-america-text">iv.  10th Biennial Conference: Association for the Study of the Worldwide African Diaspora</p>
                <p className="gt-america-text">v.  Native: Street Interviews</p>
                <p className="gt-america-text">vi.  VMFA's "Cosmologies from the Tree of Life"</p>
            </div>
        </div>
    </div>
)

export default NavigationStep2
