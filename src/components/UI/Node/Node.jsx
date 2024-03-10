import React from 'react';
import cl from './Node.module.css';
function Node() {
    // if (state === 'pending') {
    //     cl.pending
    // } else if (state === 'completed') {
    //     cl.completed
    // } else if (state === 'deleted') {
    //     cl.deleted
    // }
    return (
        <div className={`${cl.progressNode}  ${cl.completed}`}>

        </div>
    )
}

export default Node;
