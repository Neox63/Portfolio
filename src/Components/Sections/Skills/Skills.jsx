import { Fragment } from 'react';
import SkillCard from '../../Card/SkillCard/SkillCard';
import Container from '../../Container/Container';

const Skills = () => {
    return (
        <Fragment>  
            <h2 className="text-center"><span style={{ color: '#569CD6' }}>&lt;Section&gt;</span> Tech Stack <span style={{ color: '#569CD6' }}>&lt;/Section&gt;</span></h2>

            <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Front-End /&gt;</h3>
            <Container>
                <SkillCard title="HTML5"  logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z" fill="#e44d26"/><path d="M25.337 26.964l2.197-24.608H16v27.197z" fill="#f16529"/><path d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z" fill="#ebebeb"/><path d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z" fill="#fff"/></svg> }/>
                <SkillCard title="CSS3" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 538.584 538.583"><path d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z" fill="#2062af"/><path d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z" fill="#3c9cd7"/><path d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z" fill="#fff"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-825.508" y1="1338.301" x2="-825.508" y2="1419.102" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset=".387" stopColor="#d1d3d4" stopOpacity="0"/><stop offset="1" stopColor="#d1d3d4"/></linearGradient><path d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-724.552" y1="1378.602" x2="-724.552" y2="1462.591" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset=".387" stopColor="#d1d3d4" stopOpacity="0"/><stop offset="1" stopColor="#d1d3d4"/></linearGradient><path d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-874.103" y1="1302.263" x2="-680.039" y2="1302.263" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset="0" stopColor="#e8e7e5"/><stop offset="1" stopColor="#fff"/></linearGradient><path d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z" fill="url(#c)"/><path d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z" opacity=".05"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-883.032" y1="1442.031" x2="-672.341" y2="1442.031" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset="0" stopColor="#e8e7e5"/><stop offset="1" stopColor="#fff"/></linearGradient><path d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z" fill="url(#d)"/><path d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z" opacity=".05"/></svg> }/>
                <SkillCard title="React.JS" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><g transform="matrix(.05696 0 0 .05696 .647744 2.43826)" fill="none" fillRule="evenodd"><circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff"/><g stroke="#00d8ff" strokeWidth="24"><path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"/><path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"/><path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"/></g></g></svg> }/>
                <SkillCard title="JavaScript" logo = { <svg width="64" height="64" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg> }/>
            </Container>

            <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Back-End /&gt;</h3>
            <Container>
                <SkillCard title="PHP" logo = { <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><defs><clipPath id="A"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162"/></clipPath><radialGradient cx="0" cy="0" fx="0" fy="0" gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)" gradientUnits="userSpaceOnUse" id="B" r="1" spreadMethod="pad"><stop offset="0" stopColor="#aeb2d5"/><stop offset=".3" stopColor="#aeb2d5"/><stop offset=".75" stopColor="#484c89"/><stop offset="1" stopColor="#484c89"/></radialGradient><clipPath id="C"><path d="M0 324h576V0H0v324z"/></clipPath><clipPath id="D"><path d="M0 324h576V0H0v324z"/></clipPath></defs><g transform="matrix(.05787 0 0 -.057079 -.666665 24.945283)"><g clipPath="url(#A)"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162" fill="url(#B)"/></g><g clipPath="url(#C)"><path d="M288 27.36c146.73 0 265.68 60.28 265.68 134.64S434.73 296.64 288 296.64 22.32 236.36 22.32 162 141.27 27.36 288 27.36" fill="#777bb3"/></g><g clipPath="url(#D)"><path d="M161.734 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zM98.67 77.557c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.63 2.48l28.328 145.75a3 3 0 0 0 2.945 2.427h61.054c19.188 0 33.47-5.2 42.447-15.487 9.025-10.33 11.812-24.772 8.283-42.92-1.436-7.394-3.906-14.26-7.34-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428H98.67z"/><path d="M159.224 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545-5.162-3.974-13.554-5.988-24.94-5.988H149.7l9.523 49zm28.83 35H127a6 6 0 0 1-5.889-4.855L92.783 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.588 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.354 13.984 5.752 5.292 10.5 11.232 14.08 17.657s6.17 13.594 7.668 21.302c3.715 19.104.697 34.402-8.97 45.466-9.572 10.958-24.614 16.514-44.706 16.514m-45.633-90h19.313c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.1 10.832 1.144 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.856-61m45.633 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75L127 226.307h61.055" fill="#fff"/><path d="M311.583 116.307c-.896 0-1.745.4-2.314 1.092s-.802 1.6-.63 2.48l12.53 64.49c1.192 6.133.898 10.535-.827 12.395-1.056 1.137-4.228 3.044-13.607 3.044h-22.702l-15.755-81.072a3 3 0 0 0-2.945-2.428h-31.5a3 3 0 0 0-2.945 3.572l28.328 145.75a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572l-6.836-35.178h24.422c18.605 0 31.22-3.28 38.57-10.028 7.5-6.884 9.827-17.89 6.947-32.72l-13.18-67.825a3 3 0 0 0-2.945-2.428h-32z"/><path d="M293.66 271.057h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.75a6 6 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855l15.283 78.645h20.23c9.363 0 11.328-2 11.407-2.086.568-.61 1.315-3.44.082-9.78l-12.53-64.49a6 6 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855l13.18 67.825c3.093 15.92.447 27.864-7.86 35.5-7.928 7.28-21.208 10.82-40.6 10.82h-20.784l6.143 31.605a6 6 0 0 1-5.89 7.145m0-6l-7.53-38.75h28.062c17.657 0 29.836-3.082 36.54-9.238s8.71-16.14 6.032-29.938l-13.18-67.824h-32l12.53 64.488c1.426 7.336.902 12.34-1.574 15.008s-7.746 4.004-15.805 4.004H281.56l-16.226-83.5h-31.5l28.328 145.75h31.5" fill="#fff"/><path d="M409.55 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.86 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zm-63.062-67.75c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48l28.328 145.75a3 3 0 0 0 2.946 2.427h61.053c19.19 0 33.47-5.2 42.448-15.487 9.025-10.33 11.81-24.77 8.283-42.92-1.438-7.394-3.907-14.26-7.342-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93H388.24l-7.057-36.322a3 3 0 0 0-2.946-2.428h-31.75z"/><path d="M407.04 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.63-2.914 3.125-9.058 1.435-17.766-1.898-9.75-5.417-16.664-10.458-20.546-5.162-3.974-13.554-5.988-24.94-5.988h-12.033l9.522 49zm28.83 35h-61.054a6 6 0 0 1-5.889-4.855L340.6 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.587 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.356 13.986 5.752 5.29 10.488 11.23 14.078 17.655s6.17 13.594 7.668 21.302c3.715 19.105.697 34.403-8.97 45.467-9.572 10.957-24.613 16.513-44.706 16.513m-45.632-90h19.312c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.102 10.832 1.145 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.855-61m45.632 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75l28.328 145.75h61.054" fill="#fff"/></g></g></svg> }/>
                <SkillCard title="Express.JS" logo = { <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path fill="currentColor" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg> }/>
                <SkillCard title="Node.JS" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#8cc84b"><path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"/></svg> }/>            
            </Container>

            <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Database /&gt;</h3>
            <Container>
                <SkillCard title="MySQL" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 9.252 4.626"><g transform="matrix(.037376 0 0 .037376 1.069994 -1.319339)" fillRule="evenodd"><path d="M8.504 128.215h5.8v-22.977l9.058 20.033c1.026 2.408 2.5 3.3 5.354 3.3s4.24-.893 5.3-3.3l9.013-20.033v22.977h5.845v-22.977c0-2.23-.893-3.303-2.767-3.883-4.417-1.338-7.362-.178-8.7 2.81l-8.878 19.81-8.567-19.81c-1.294-2.988-4.284-4.148-8.745-2.81-1.83.58-2.722 1.652-2.722 3.883l-.001 22.977zm45.198-18.694h5.845v12.627c-.044.713.223 2.32 3.4 2.363 1.65.045 12.582 0 12.67 0v-15.08h5.845v20.658c0 5.086-6.3 6.2-9.236 6.246h-18.38v-3.88h18.427c3.748-.402 3.302-2.275 3.302-2.9v-1.518h-12.36c-5.756-.045-9.46-2.588-9.503-5.488v-13.03zm125.374-14.635c-3.568-.09-6.336.268-8.656 1.25-.668.27-1.74.27-1.828 1.116.357.355.4.936.713 1.428.535.893 1.473 2.096 2.32 2.72.938.715 1.875 1.428 2.855 2.053 1.74 1.07 3.703 1.695 5.398 2.766.982.625 1.963 1.428 2.945 2.098.5.357.803.938 1.428 1.16v-.135c-.312-.4-.402-.98-.713-1.428-.447-.445-.893-.848-1.34-1.293-1.293-1.74-2.9-3.258-4.64-4.506-1.428-.982-4.55-2.32-5.13-3.97l-.088-.09c.98-.09 2.14-.447 3.078-.715 1.518-.4 2.9-.312 4.46-.713.715-.18 1.428-.402 2.143-.625v-.4c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.64-2.23-.537-.268-1.428-.402-1.74-.848-.805-.98-1.25-2.275-1.83-3.436-1.293-2.454-2.543-5.175-3.658-7.763-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.18-17.268-16.687-1.65-.937-3.613-1.34-5.7-1.83l-3.346-.18c-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.49-1.205 2.9 1.785 5.755 2.8 7.228.76 1.026 1.74 2.186 2.277 3.346.3.758.4 1.562.713 2.365.713 1.963 1.383 4.15 2.32 5.98.5.937 1.025 1.92 1.65 2.767.357.49.982.714 1.115 1.517-.625.893-.668 2.23-1.025 3.347-1.607 5.042-.982 11.288 1.293 14.99.715 1.115 2.4 3.57 4.686 2.632 2.008-.803 1.56-3.346 2.14-5.577.135-.535.045-.892.312-1.25v.09l1.83 3.703c1.383 2.186 3.793 4.462 5.8 5.98 1.07.803 1.918 2.187 3.256 2.677v-.135h-.088c-.268-.4-.67-.58-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.34-.715-1.606-.67.98-1.65 1.83-2.143 3.034-.848 1.918-.936 4.283-1.248 6.737-.18.045-.1 0-.18.09-1.426-.356-1.918-1.83-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937 1.652-3.882 1.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.5-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.49-.535-1.294-.178-1.83.088-.357.268-.49.623-.58.58-.49 2.232.134 2.812.4 1.65.67 3.033 1.294 4.416 2.23.625.446 1.295 1.294 2.098 1.518h.938c1.428.312 3.033.09 4.37.49 2.365.76 4.506 1.874 6.426 3.08 5.844 3.703 10.664 8.968 13.92 15.26.535 1.026.758 1.963 1.25 3.034.938 2.187 2.098 4.417 3.033 6.56.938 2.097 1.83 4.24 3.168 5.98.67.937 3.346 1.427 4.55 1.918.893.4 2.275.76 3.08 1.25 1.516.937 3.033 2.008 4.46 3.034.713.534 2.945 1.65 3.078 2.54zm-45.5-38.772a7.09 7.09 0 0 0-1.828.223v.09h.088c.357.714.982 1.205 1.428 1.83l1.027 2.142.088-.09c.625-.446.938-1.16.938-2.23-.268-.312-.312-.625-.535-.937-.268-.446-.848-.67-1.206-1.026z" fill="#00678c"/><path d="M85.916 128.215h16.776c1.963 0 3.838-.4 5.354-1.115 2.543-1.16 3.748-2.72 3.748-4.773v-4.283c0-1.65-1.383-3.213-4.148-4.283-1.428-.535-3.213-.848-4.953-.848h-7.05c-2.365 0-3.48-.715-3.793-2.275-.044-.178-.044-.357-.044-.535v-2.633c0-.135 0-.312.044-.49.312-1.205.937-1.518 3-1.74h17.177v-3.883h-16.33c-2.365 0-3.614.135-4.73.492-3.436 1.07-4.953 2.766-4.953 5.754v3.393c0 2.63 2.945 4.863 7.942 5.398.535.045 1.115.045 1.695.045h6.024c.223 0 .445 0 .623.045 1.83.178 2.633.49 3.168 1.158.357.357.447.67.447 1.072v3.39c0 .4-.268.938-.803 1.383s-1.385.758-2.5.803c-.223 0-.355.045-.58.045H85.916zm62.195-6.736c0 3.97 3 6.2 8.97 6.648.58.045 1.115.088 1.695.088h15.17v-3.88h-15.303c-3.393 0-4.686-.848-4.686-2.9v-20.078H148.1v20.123zm-32.615.177v-13.83c0-3.525 2.498-5.668 7.363-6.336.535-.045 1.07-.09 1.56-.09h11.064c.58 0 1.072.045 1.652.09 4.863.668 7.316 2.81 7.316 6.336v13.83c0 2.855-1.025 4.373-3.436 5.4l5.71 5.174h-6.736l-4.64-4.193-4.686.268h-6.246a13.66 13.66 0 0 1-3.391-.445c-3.7-1.028-5.53-2.99-5.53-6.204zm6.29-.31c0 .178.1.355.135.58.312 1.605 1.828 2.498 4.148 2.498h5.266l-4.818-4.373h6.736l4.238 3.838c.805-.447 1.295-1.072 1.473-1.875.045-.178.045-.4.045-.58v-13.252c0-.178 0-.355-.045-.535-.312-1.516-1.828-2.363-4.104-2.363h-8.79c-2.588 0-4.283 1.115-4.283 2.898z" fill="#ce8b2c"/></g></svg> }/>
            </Container>

            <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Others /&gt;</h3>
            <Container>
                <SkillCard title="Java" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z" fill="#4e7896"/><path d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z" fill="#f58219"/></svg> }/>
                <SkillCard title="Python" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><defs><linearGradient id="py2" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#366a96"/><stop offset="1" stopColor="#3679b0"/></linearGradient><linearGradient id="py" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffc836"/><stop offset="1" stopColor="#ffe873"/></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#py2)"/><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#py)"/><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/></g></svg> }/>
                <SkillCard title="Git" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915" fill="#f03c2e"/></svg> }/>
                <SkillCard title="Bootstrap" logo = { <svg width="64" height="64" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C"/><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="currentColor"/></svg> }/>
                <SkillCard title="TailwindCSS" logo = { <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><defs><linearGradient x1="0" y1="-21.333" y2="85.333" id="color" x2="64" gradientUnits="userSpaceOnUse"><stop stopColor="#2383ae" offset="0%"/><stop stopColor="#6dd7b9" offset="100%"/></linearGradient></defs><path d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" fill="url(#color)" fillRule="evenodd"/></svg> }/>
            </Container>
        </Fragment>
    )
}

export default Skills;