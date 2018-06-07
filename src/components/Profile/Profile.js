import React from 'react';

function Profile(props) {
    return (
        <div className="Profile">
            <div className='container'>
                <img src="/images/Alan_01.jpg" alt="profile"/>
                <div className='text'>
                    <h2>About me</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nostrum, totam
                        iste modi quos fugit soluta earum laborum repellendus est! Ad voluptates sequi
                        veniam beatae eveniet, nulla modi tempore ut, mollitia optio placeat? Odit
                        beatae perferendis repellendus quibusdam omnis corporis!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;