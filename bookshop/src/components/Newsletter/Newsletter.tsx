import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const templateParams = {
            to_email: email,
            from_name: 'BOOKSTORE',
            message: 'Вы подписались на нашу новостную рассылку. Мы будем держать вас в курсе о новых IT книгах, предстоящих релизах, эксклюзивных предложениях и многом другом.',
        };

        emailjs.send('service_qzux08h', 'template_2whur7d', templateParams, '2rlgTcQx3apiQIY8F')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Email sent successfully!');
            }, (error) => {
                console.log('FAILED...', error);
                setMessage('Failed to send email.');
            });
    };

    return (
        <div className="newsblock">
            <div className="newsblock_title">Subscribe to Newsletter</div>
            <div className="newsblock_txt">
                Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </div>
            <form className="newsblock_form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="newsblock_input" 
                    placeholder="Your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit" className="newsblock_button">SUBSCRIBE</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export { Newsletter };
