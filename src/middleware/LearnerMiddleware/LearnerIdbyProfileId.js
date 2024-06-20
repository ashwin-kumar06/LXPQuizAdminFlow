

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LearnerIdbyProfileId() {
    console.log("vanakama alll");
    const sessionLearnerId = sessionStorage.getItem('UserSessionID');
    // const [data, setData] = useState();
    // Only make the API call if sessionLearnerId is not null
    if (sessionLearnerId) {
        axios.get(`http://localhost:5199/api/Registration/GetProfileId/${sessionLearnerId}`)
            .then(response => {
                // Use the response to set data
                // Now you can use the data to set the sessionStorage
                sessionStorage.setItem('ProfileId', response.data);

            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });// Depend on sessionLearnerId instead of data

        // If you need to display the data or use it in the render, you can do so here

        return (
            <div>
                <h1>Hi</h1>
            </div>
        );
    }

}
LearnerIdbyProfileId();