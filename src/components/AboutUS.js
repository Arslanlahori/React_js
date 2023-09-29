import React from 'react'
import arslanImage from './arslanpic.jpg';
export default function AboutUS() {

    return (
        <>
            <body>
                <main>
                    <section className="hero">
                        <h1>About Developer</h1>
                    </section>

                    <section className="set">
                        <h2> As a Computer Science student at UET Lahore New Campus, I understand the challenges that content writers face daily. Juggling deadlines, ensuring impeccable grammar, and delivering engaging content can be a daunting task. That's why I developed "TextAnalyzer"</h2>
                        <br />

                        <div className="gallery-image">
                            <div className="Icon">
                                <br />
                                <br />

                                <img src={arslanImage} id="zoom-image" alt="Muhammad Arslan Arshad" />

                            </div>
                        </div>
                    </section>
                </main>

            </body>
        </>
    )
}
