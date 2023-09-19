import React from 'react'

export default function AboutUS() {

    return (
        <>
            <body>
                <main>
                    <section className="hero">
                        <h1>About Me</h1>
                    </section>

                    <section className="set">
                        <h1 id="H"> I am Computer Science Students at Uet Lahore New Campus. I developed this system for Content Writer</h1>
                        <br />


                        <h2 id="H">Muhammad Arslan</h2>

                        <div className="gallery-image">
                            <div className="Icon">
                                <br />
                                <br />
                                <img src="/images/arslanpic.JPG" id="zoom-image" alt="Muhammad Arslan Arshad" />

                                <div className="transparent-box">
                                    <div className="caption">
                                        <p>
                                            <b>Muhammad Arslan Arshad</b>
                                        </p>
                                        <p className="opacity-low">Computer Scientist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </body>
        </>
    )
}
