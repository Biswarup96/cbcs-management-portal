// AssignmentList.js
import React from 'react';


function assignmentlist({ assignments }) {
    return (
        <ul>
            {assignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
            ))}
        </ul>
    );
}

export default assignmentlist;
