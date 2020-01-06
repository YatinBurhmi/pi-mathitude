import React from "react";

export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Our Ideology</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/1.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Focus on Core Concepts</h4>
                    {/* <h4 className="subheading">Our Humble Beginnings</h4> */}
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      You will have a deeper knowledge of the subject as well as
                      its various forms of application. You'll no longer be
                      confused about formulas and other rules. Your strong
                      foundation in basics will help you crack time bound
                      questions with ease. You'll be able to apply the
                      strategies you learned to make your presentation simple,
                      clear, and accurate.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/2.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Individual Attention</h4>
                    {/* <h4 className="subheading">An Agency is Born</h4> */}
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Every student understands and works at his own pace; We
                      make sure that we recognise each student's weakness and
                      aim at helping the student strengthen in those areas of
                      the subject.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/4.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Test Series</h4>
                    {/* <h4 className="subheading">Phase Two Expansion</h4> */}
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Institute!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
