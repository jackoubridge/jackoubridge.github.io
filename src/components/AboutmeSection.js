import Fade from 'react-reveal/Fade';

const AboutmeSection = (props) => {
    return (
        <>
            <Fade duration={400}>
                <div className="aboutme-section w-100 m-0 p-0 row mt-2 mb-2 rounded">
                    <RenderOrder imgLink={props.imgLink} header={props.header} content={props.content} posX={props.posX} posY={props.posY} order={props.order} />
                </div>
            </Fade>
        </>
    )
};

function AboutMeSectionLeft(props) {
    return (
        <>
            <div className="d-md-flex d-none d-sm-none aboutme-section-left col-6 m-0 p-3 h-100">
                <div className="aboutme-img w-100 h-100 rounded shadow"
                    style={{ backgroundImage: 'url(' + props.imgLink + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPositionX: props.posX ? props.posX : 'center', backgroundPositionY: props.posY ? props.posY : 'center', filter: 'brightness(0.9)' }}>
                </div>
            </div>
        </>
    );
};

function AboutMeSectionRight(props) {

    return (
        <>
            <div className="aboutme-section-right rounded col-md-6 col-sm-12 m-0 p-0 h-100">
                <div className="aboutme-content w-100 h-100 p-3 d-flex">
                    <span className="w-100 my-auto p-0" dangerouslySetInnerHTML={{ __html: props.content }}></span>
                </div>
            </div>
        </>
    );
};

function RenderOrder(props) {
    if (props.order === '1') {
        return (
            <>
                <AboutMeSectionLeft imgLink={props.imgLink} posX={props.posX} posY={props.posY} />
                <AboutMeSectionRight header={props.header} content={props.content} />
            </>
        )
    } else {
        return (
            <>
                <AboutMeSectionRight header={props.header} content={props.content} />
                <AboutMeSectionLeft imgLink={props.imgLink} posX={props.posX} posY={props.posY} />
            </>
        )
    }

}

export default AboutmeSection;