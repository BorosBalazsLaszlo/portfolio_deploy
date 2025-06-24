import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Profil from './images/profile_bg.png';
import { skills } from './types/mock-skills';
import { GrAchievement } from 'react-icons/gr';
import { GoGoal } from 'react-icons/go';

const Main = () => {
    const [typedText, setTypedText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const sections = useRef<(HTMLElement | null)[]>([]);

    const fullText = 'Junior Fejlesztő';
    const typingSpeed = 150;

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setTypingComplete(true);
            }
        }, typingSpeed);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 },
        );

        sections.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            clearInterval(typingInterval);
            sections.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSkills = () => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* About Me Section */}
            <section
                id="intro"
                className="py-5 d-flex justify-content-start align-items-center mt-5"
                style={{ minHeight: '900px' }}
                ref={(el) => (sections.current[0] = el)}
            >
                <div className="container d-flex">
                    {/* Content on the left */}
                    <div className="col-md-6 text-start">
                        <h2 className="display-3">Rólam</h2>
                        <h3 className="display-4 text-muted">
                            {typedText}
                            {!typingComplete && <span className="typing-cursor"></span>}
                        </h3>
                        <p className="lead delay-1">
                            Üdvözlet! <strong>Boros Balázs László</strong> vagyok,{' '}
                            <strong>szoftverfejlesztő</strong>.<br />
                            <strong>Frontend fejlesztés</strong> és <strong>UI/UX tervezés</strong>{' '}
                            területén dolgozom, ahol a modern webtechnológiák kreatív alkalmazása és
                            felhasználóközpontú megoldások kialakítása a fő fókuszom.
                            <br />
                            <br />
                            Programozási karrierem 6 éve kezdődött középiskolai tanulmányaim során,
                            mely során széles körű technológiai ismeretekre tettem szert. A
                            későbbiekben ezeket a tapasztalatokat szeretném tovább mélyíteni
                            egyetemi képzés keretében.
                            <br />
                            <br />
                            Szakmai gyakorlatomat különféle programozási nyelvek és keretrendszerek
                            elsajátítása, valamint komplex projektek megvalósítása jellemzi.
                            Technológiai stackem részleteiért kattintson ide.
                        </p>
                        <button
                            onClick={scrollToSkills}
                            className="btn btn-primary btn-lg mt-3 delay-2"
                            style={{
                                borderRadius: '30px',
                                padding: '10px 30px',
                                fontSize: '18px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Ismereteim
                        </button>
                    </div>

                    {/* Profile Picture on the right */}
                    <div className="col-md-6 d-flex flex-column align-items-center delay-3">
                        <img
                            src={Profil}
                            alt="Profile"
                            className="img-fluid"
                            style={{
                                maxHeight: '600px',
                                objectFit: 'cover',
                                borderRadius: '30px',
                                padding: '5px',
                                marginBottom: '15px',
                            }}
                        />
                        <div className="text-center" style={{ width: '100%' }}>
                            <span className="badge bg-primary p-3 current-work-badge">
                                Jelenleg saját ötleteket valósítok meg
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="bg-light py-5 d-flex justify-content-center align-items-center"
                style={{ minHeight: '900px' }}
                ref={(el) => (sections.current[1] = el)}
            >
                <div className="container text-center">
                    <h2 className="display-3 mb-4">Ismereteim / TechStack</h2>
                    <div className="row mt-4 justify-content-center">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="col-md-2 mt-4"
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className="card skill-card" style={{ width: '10rem' }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{skill.name}</h5>
                                        <img
                                            src={skill.imageURL}
                                            alt={skill.name}
                                            className="card-img-top"
                                            style={{ maxWidth: '50px', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Section */}
            <section
                id="career"
                className="py-5 d-flex justify-content-center align-items-center"
                style={{ minHeight: '900px' }}
                ref={(el) => (sections.current[2] = el)}
            >
                <div className="container">
                    <h2 className="display-2 text-center mb-5">Mérföldkövek</h2>
                    <div className="row">
                        {/* Left Column - Achievements */}
                        <div className="col-md-6 mt-5 delay-1">
                            <h4 className="display-4 mb-3">
                                <GrAchievement /> Eredmények
                            </h4>
                            <ul className="list-unstyled">
                                <li className="current-work-badge">
                                    <h5>GBD Logistics Projekt</h5>
                                    <p className="text-muted">
                                        A <strong>GBD Logistics</strong> projekt egy logisztikai
                                        webes, asztali és mobil alkalmazás, amely a logisztikai
                                        cégek és vállalkozások hatékonyságát növeli.
                                        <br />
                                        Egy <strong>háromfős csapat</strong> tagjaként a mobil- és
                                        webalkalmazás fejlesztéséért feleltem, modern technológiák,
                                        mint a React (TypeScript), CSS, Bootstrap és Node.js
                                        alkalmazásával.
                                    </p>
                                </li>
                                <li>
                                    <h5>C1 Komplex Nyelvvizsga</h5>
                                    <p className="text-muted">
                                        Az angol nyelv iránti elkötelezettségem és szenvedélyem arra
                                        ösztönzött, hogy magas szintű nyelvtudásomat hivatalosan is
                                        igazoljam.
                                        <strong>A C1 komplex nyelvvizsga</strong> megszerzése
                                        nemcsak a nyelvi készségeim fejlesztését tette lehetővé,
                                        hanem a <strong>szakmai</strong> és{' '}
                                        <strong>nemzetközi</strong> kommunikációban való
                                        magabiztosságomat is megerősítette. Ez a mérföldkő fontos
                                        lépés volt az egyetemi tanulmányok irányába.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Goals */}
                        <div className="col-md-6 mt-5 delay-2">
                            <h4 className="display-4 mb-3">
                                <GoGoal /> Célok
                            </h4>
                            <ul className="list-unstyled">
                                <li>
                                    <h5>Full-Stack fejlesztés</h5>
                                    <p className="text-muted">
                                        Célom, hogy elmélyítsem tudásomat a full-stack fejlesztés
                                        területén, beleértve a backend technológiák,{' '}
                                        <strong>adatbázis-kezelés</strong> és{' '}
                                        <strong>szerveroldali architektúrák</strong> elsajátítását.
                                        Ezáltal képes leszek{' '}
                                        <strong>komplex, end-to-end megoldások</strong>{' '}
                                        létrehozására, amelyek a modern webes alkalmazások teljes
                                        spektrumát lefedik.
                                    </p>
                                </li>
                                <li>
                                    <h5>UI/UX designolás</h5>
                                    <p className="text-muted">
                                        Több időt szeretnék szánni a modern{' '}
                                        <strong>UI/UX trendek</strong> és tervezési elvek
                                        tanulmányozására, hogy még letisztultabb,{' '}
                                        <strong>felhasználóbarátabb és esztétikusabb</strong>{' '}
                                        designokat készíthessek. Célom, hogy a felhasználói élményt
                                        a lehető legmagasabb szintre emeljem, miközben a
                                        funkcionalitást is szem előtt tartom.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="bg-light py-5 d-flex justify-content-center align-items-center"
                style={{ minHeight: '900px' }}
                ref={(el) => (sections.current[3] = el)}
            >
                <div className="container text-center">
                    <h2 className="display-3 mb-4">Kapcsolat</h2>
                    <p className="lead delay-1" style={{ fontSize: '1.25rem' }}>
                        Ha szeretnél kapcsolatba lépni vagy kérdésed van, keress bizalommal!
                    </p>
                    <form className="delay-2">
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="form-label"
                                style={{ fontSize: '1.1rem' }}
                            >
                                Neved
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Neved"
                                style={{ maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="form-label"
                                style={{ fontSize: '1.1rem' }}
                            >
                                Email címed
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email címed"
                                style={{ maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="message"
                                className="form-label"
                                style={{ fontSize: '1.1rem' }}
                            >
                                Üzeneted
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows={4}
                                placeholder="Írd ide üzeneted..."
                                style={{ maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                                fontSize: '1.2rem',
                                padding: '10px 20px',
                                borderRadius: '30px',
                                marginTop: '20px',
                            }}
                        >
                            Üzenet küldése
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer
                className="bg-dark text-white text-center py-3"
                ref={(el) => (sections.current[4] = el)}
            >
                <p>&copy; 2025 Boros Balázs, Minden jog fenntartva.</p>
            </footer>
        </div>
    );
};

export default Main;
