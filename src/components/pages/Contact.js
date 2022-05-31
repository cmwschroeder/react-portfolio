import React from 'react';

function Contact() {
    return (
        <div class="w-full h-full flex justify-center">
            <div class="card w-3/4 bg-base-100 shadow-xl my-6">
                <div class="card-body w-full">

                    <h2 class="card-title text-4xl">Contact Me:</h2>

                    <div class="form-control w-5/6 mx-auto">
                        <label class="label">
                            <span class="label-text text-2xl">Name: </span>
                        </label>
                        <label class="input-group">
                            <span class="hidden lg:flex lg:w-1/6">Name</span>
                            <input type="text" placeholder="Name" class="input input-bordered w-full lg:w-11/12" id="name" />
                        </label>
                    </div>

                    <div class="form-control w-5/6 mx-auto">
                        <label class="label">
                            <span class="label-text text-2xl">Email: </span>
                        </label>
                        <label class="input-group">
                            <span class="hidden lg:flex lg:w-1/6">Email</span>
                            <input type="text" placeholder="Email" class="input input-bordered w-full lg:w-11/12" id="email" />
                        </label>
                    </div>

                    <div class="form-control w-5/6 mx-auto">
                        <label class="label">
                            <span class="label-text text-2xl">Message: </span>
                        </label>
                        <label class="input-group">
                            <textarea class="textarea textarea-bordered h-48 w-full" placeholder="Message"
                                id="message"></textarea>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;