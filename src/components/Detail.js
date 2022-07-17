import React from 'react';

class Detail extends React.Component {

    render() { 
        return (
            <div className='wrapper-detail'>
                <div className='detail'>
                    <h3 className="title">Detail</h3>
                    <div className='name'>
                        Name: {this.props.detail.name}
                    </div>
                    <div className='age'>
                        Age: {this.props.detail.age}
                    </div>
                    <div className='address'>
                        Address: {this.props.detail.address}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;