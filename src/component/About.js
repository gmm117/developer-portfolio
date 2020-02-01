import React from 'react';
import { Title } from './Common';

import about_hong from '../../image/about_hong.jpg';

function Skill({ title, descs, skills }) {
    return (
        <div className="skill">
            <h3 className="sub_title">{title}</h3>
            <ul className="skill_dsc">
                {
                    descs.map((data, index) => 
                        <li key={index}>. {data}</li>)
                }
            </ul>
            <ul className="skill_bar">
                {
                    skills.map((data, index) => {
                        const { name, value } = data; 
                        
                        return (
                            <li key={index}>
                                <h4>
                                    <span>{name}</span>
                                    <span>{value}</span>
                                </h4>
                                <div className="skill_progress">
                                    <div className="skill_progress_value" style={{width: `${value}`}}></div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
} 

function Contents({ content }) {
    return (
        <ul className="contents">
            {
                content.map((data, index) => {
                    return (
                        <li key={index}>
                            <p>{data}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
}

function Profile({title, image, personal, content}) {
    const { src, alt } = image;
    const { name, part, birth, address, phone, emails} = personal;
    const { email, emalalt } = emails;

    return (
        <div className="profile_info">
            <div className="profile clearfix">
                <h3 className="sub_title">{title}</h3>
                <img className="profile_img" src={src} alt={alt}></img>
                <ul className="personal_info">
                    <li className="name">{name}</li>
                    <li className="part">{part}</li>
                    <li>{birth}</li>
                    <li>{address}</li>
                    <li>{phone}</li>
                    <li><a href={email} alt={emalalt}>{email}</a></li>
                </ul>
                <Contents content={content} />
            </div>
        </div>
    )
}

function About() {
    return (
        <section id="about">
            <div className="inner_container profile_wrap clearfix">
                <Title title="About" />
                <Profile
                    title="Profile"
                    image={{
                        src: about_hong,
                        alt: "증명사진"
                    }}
                    personal={{
                        name: "홍 승 아",
                        part: "Front-end Developer",
                        birth: "1984.10.30",
                        address: "서울시 송파구",    
                        phone: "010-7118-2519",
                        emails: {
                            email : "gmm117@naver.com",
                            emalalt : "Hong's Email"
                        }
                    }}
                    content={[
                        "저의 포트폴리오 사이트에 와주신걸 환영합니다.",
                        "대학교에서 졸업해서 프로그래머의 세계에 뛰어들은지 9년이라는 시간이 흘렀습니다.",
                        "윈도우 프로그래밍(C,C++,C#등)의 6년정도 진행하면서 프로그래밍에 대한 설계, 기본구조에 대한 내용을 6년이란 경험을 통해서 터득할 수 있었고,",
                        "재직중인 회사에서 Web Front-End 경험을 3년동안 하면서 HTML,CSS,Javascript에 경험을 쌓으면서 다양한 분야에서 개발에 대한 경험을 할 수 있었습니다.",
                        "현재는 Web Front-End Develop 분야에 대한 기술을 회사, 개인적으로 스터디를 경험을 토대로 차근차근 Web Front-End 기술에 대해서 알기 위해 노력중에 있습니다.",
                        "저의 포트폴리오의 프로젝트, 스터디한 내용을 보시고 관심이 있으시면 연락주시기 바랍니다."
                    ]}
                />
                <Skill 
                    title="Web Skill"
                    descs={
                        [
                            "HTML5, CSS3 웹 표준 마크업",
                            "Javascript 알고리즘 이해",
                            "GitHub 오픈소스 활용"
                        ]
                    }
                    skills={
                        [
                            {
                                name : "HTML,CSS",
                                value : "60%"
                            }, 
                            {
                                name : "JavaScript",
                                value : "80%"
                            }
                        ]
                    }
                />
                <Skill
                    title="Other Skill" 
                    descs={
                        [
                            "윈도우 프로그래밍 관련 이해",
                            "C,C++ 알고리즘 이해"
                        ]
                    }
                    skills={
                        [
                            {
                                name : "C,C++",
                                value : "90%"
                            }, 
                            {
                                name : "C#,WPF",
                                value : "80%"
                            }, 
                            {
                                name : "MFC,ATL,WTL",
                                value : "70%"
                            }, 
                            {
                                name : "WCF,Spring,NHibernate",
                                value : "60%"
                            }
                        ]
                    }
                />
            </div>
        </section>
    );
}

export default About;