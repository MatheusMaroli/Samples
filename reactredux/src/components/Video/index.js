import React from 'react';
import {connect} from 'react-redux';


const Video =  ({activeModule, activeLesson}) => 
{
    return (
        <div>
            <strong>Module: {activeModule.title}</strong>
            <br/>
            <span>Aula: {activeLesson.title}</span>
        </div>
    )
}

export default connect(state => ({activeModule : state.course.activeModule, activeLesson: state.course.activeLesson}))(Video);