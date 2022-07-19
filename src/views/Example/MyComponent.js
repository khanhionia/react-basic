import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrayJobs: [
            {
                id: 'abcJob1',
                title: 'developer',
                salary: '500'
            },
            {
                id: 'abcJob2',
                title: 'tester',
                salary: '400'
            },
            {
                id: 'abcJob3',
                title: 'Managertester',
                salary: '1000'
            }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrayJobs: [...this.state.arrayJobs, job]
        })
        console.log('>>> check data from parent: ', this.state.arrayJobs)
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrayJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrayJobs: currenJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrayJobs={this.state.arrayJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;