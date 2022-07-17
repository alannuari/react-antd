import React from 'react';
import {
    InstagramOutlined,
    GlobalOutlined,
    LinkedinOutlined,
    GithubOutlined
} from '@ant-design/icons';

class Contact extends React.Component {

    render() { 
        return (
            <div className='wrapper-contact'>
                <div className='contact'>
                    <h3 className="title">Contact</h3>
                    <div className='contact-item'>
                        <GlobalOutlined style={{ marginRight: '8px' }} />
                        Website: <a href='https://alannuari-website.vercel.app/' target="_blank" rel="noreferrer">alannuari-website.vercel.app</a>
                    </div>
                    <div className='contact-item'>
                        <InstagramOutlined style={{ marginRight: '8px' }} />
                        Instagram: <a href='https://www.instagram.com/alan_nuary/' target="_blank" rel="noreferrer">alan_nuary</a>
                    </div>
                    <div className='contact-item'>
                        <LinkedinOutlined style={{ marginRight: '8px' }} />
                        LinkedIn: <a href='https://www.linkedin.com/in/alan-nuari/' target="_blank" rel="noreferrer">alan-nuari</a>
                    </div>
                    <div className='contact-item'>
                        <GithubOutlined style={{ marginRight: '8px' }} />
                        GitHub: <a href='https://github.com/alannuari/' target="_blank" rel="noreferrer">alannuari</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;