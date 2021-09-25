import styled from "styled-components";

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

const Background = () => {
    return (
        <>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'>
                <path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,133.3C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                </path>
            </Svg>
        </>
    );
}

export default Background;