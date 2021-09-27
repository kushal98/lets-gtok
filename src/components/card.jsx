import React from 'react'

export const Card = (props) => {
    return (
        <div id='card'>
            <p id="current-feeling">Current Feeling</p>
            <p style={{ fontSize: '16px' }}>
                So excited to finally get my hands on latest PS5.
            </p>
            <div>
                <p style={{ fontSize: '13px' }}>
                    <bold>@Josh</bold><br/>
                    a few seconds ago
                </p>
            </div>
        </div>
    );
}