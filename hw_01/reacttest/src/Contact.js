import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div>
                <h2>Contact</h2>
                <div className="maps">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10261.107460717036!2d36.2307676!3d49.9874185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1515524992136"></iframe>
                </div>
                <div className="contact">
                    <section>
                        <h2>Address:</h2>
                        <i class="icons fa fa-home"></i>
                        <div className="address">
                            15 AK <br />
                            United States <br/>
                            city-2460286
                        </div>
                    </section>
                    <section>
                        <h2>Phones:</h2>
                        <i class="icons fa fa-phone"></i>
                        <p>+123456789</p>
                        <i class="icons fa fa-mobile"></i>
                        <p>+987654321</p>

                    </section>
                    <section>
                        <h2>E-mail:</h2>
                        <i class="icons fa fa-envelope"></i>
                        <p>weather@gmail.com</p>
                        <p>forecast@gmail.com</p>
                    </section>
                </div>

            </div>
        );
    }
}

export default Contact;