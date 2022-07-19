import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>> handleOnClickDelete: ', job);
        this.props.deleteAJob(job)
    }

    render() {
        // Destructuring
        let { arrayJobs } = this.props;
        let { showJobs } = this.state;
        // let check = showJobs === true ?
        return (
            <>
                {showJobs ?
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                        <div className='job-lists'>
                            {
                                arrayJobs.map((item, index) => {
                                    if (+item.salary >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} $ <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                    </> :
                    <>
                        <div>
                            <button className='btn-show'
                                onClick={() => this.handleShowHide()}>Show</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

// const ChildComponent = (props) => {
//     let { arrayJobs } = props;
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrayJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }

//             </div>
//         </>
//     );
// }

export default ChildComponent;