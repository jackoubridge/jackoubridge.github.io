import cv from '../assets/JackOubridge.pdf'

const Resume = () => {
    return (
        <>
            <div className='App vh-100'>
                <iframe title="JackOubridge" src={cv} width="100%" height="100%" />
            </div>
        </>
    );
};

export default Resume;