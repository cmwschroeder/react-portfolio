import React from 'react';

function Contact() {
    return (
        <div id="contact" className="w-full h-full flex justify-center">
            <div className="card w-3/4 bg-base-100 shadow-xl my-6">
                <div className="card-body w-full">

                    <h2 className="card-title text-4xl">Contact Me:</h2>

                    <div className="form-control w-5/6 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl">Name: </span>
                        </label>
                        <label className="input-group">
                            <span className="hidden lg:flex lg:w-1/6">Name</span>
                            <input type="text" placeholder="Name" className="input input-bordered w-full lg:w-11/12" id="name" />
                        </label>
                    </div>

                    <div className="form-control w-5/6 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl">Email: </span>
                        </label>
                        <label className="input-group">
                            <span className="hidden lg:flex lg:w-1/6">Email</span>
                            <input type="text" placeholder="Email" className="input input-bordered w-full lg:w-11/12" id="email" />
                        </label>
                    </div>

                    <div className="form-control w-5/6 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl">Message: </span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea textarea-bordered h-48 w-full" placeholder="Message"
                                id="message"></textarea>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;