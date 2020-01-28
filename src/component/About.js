import React from 'react';
import about_hong from '../../image/about_hong.jpg';

function About() {
    return (
        <section id="about">
            <div className="inner_container">
                <div className="title_wrap">
                    <h2 className="title">About</h2>
                </div>
                <div className="profile_wrap clearfix">
                    <div className="profile_info">
                        <div className="profile clearfix">
                            <h3 className="sub_title">Profile</h3>
                            <img className="profile_img" src={about_hong} alt={"증명사진"}></img>
                            <ul className="personal_info">
                                <li className="name">홍 승 아</li>
                                <li className="part">Front-end Developer</li>
                                <li>1984.10.30</li>
                                <li>서울시 송파구</li>
                                <li>010-7118-2519</li>
                                <li><a href="gmm117@naver.com" alt="Hong's Email">gmm117@naver.com</a></li>
                            </ul>
                            <ul className="character">
                                <li>
                                    <p>저의 포트폴리오 사이트에 와주신걸 환영합니다.</p>

                                    <p>대학교에서 졸업해서 프로그래머의 세계에 뛰어들은지 9년이라는 시간이 흘렀습니다.</p>

                                    <p>윈도우 프로그래밍(C,C++,C#등)의 6년정도 진행하면서 프로그래밍에 대한 설계, 기본구조에 대한 내용을 6년이란 경험을 통해서 터득할 수 있었고,</p>

                                    <p>재직중인 회사에서 Web Front-End 경험을 3년동안 하면서 HTML,CSS,Javascript에 경험을 쌓으면서 다양한 분야에서 개발에 대한 경험을 할 수 있었습니다.</p>

                                    <p>현재는 Web Front-End Develop 분야에 대한 기술을 회사, 개인적으로 스터디를 경험을 토대로 차근차근 Web Front-End 기술에 대해서 알기 위해 노력중에 있습니다.</p>

                                    <p>저의 포트폴리오의 프로젝트, 스터디한 내용을 보시고 관심이 있으시면 연락주시기 바랍니다.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill">
                        <h3 className="sub_title">Web Skill</h3>
                        <ul className="skill_dsc">
                            <li>. HTML5, CSS3 웹 표준 마크업</li>
                            <li>. Javascript 알고리즘 이해</li>
                            <li>. GitHub 오픈소스 활용</li>
                        </ul>
                        <ul className="skill_bar">
                            <li>
                                <h4>
                                    <span style={{display: "inline-block", width: "90%"}}>HTML,CSS</span>
                                    <span style={{display: "inline-block", width: "10%", textAlign: "right"}}>60%</span>
                                </h4>
                                <div className="skill_progress"> 
                                    <div className="skill_progress_value" style={{width: "60%"}}></div>
                                </div>
                            </li>
                            <li>
                                <h4>
                                    <span style={{display: "inline-block", width: "90%"}}>JavaScript</span>
                                    <span style={{display: "inline-block", width: "10%", textAlign: "right"}}>80%</span>
                                </h4>
                                <div className="skill_progress"> 
                                    <div className="skill_progress_value" style={{width: "80%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skill">
                        <br/>
                        <h3 className="sub_title"> Skill</h3>
                        <ul className="skill_dsc">
                            <li>. 윈도우 프로그래밍 관련 이해</li>
                            <li>. C,C++ 알고리즘 이해</li>                                   
                        </ul>
                        <ul className="skill_bar">
                            <li>
                                <h4>
                                    <span style={{display: "inline-block", width: "90%"}}>C,C++</span>
                                    <span style={{display: "inline-block", width: "10%", textAlign: "right"}}>90%</span>
                                </h4>
                                <div className="skill_progress"> 
                                    <div className="skill_progress_value" style={{width: "92%"}}></div>
                                </div>
                            </li>
                            <li>
                                <h4>
                                    <span style={{display: "inline-block", width: "90%"}}>C#,WPF</span>
                                    <span style={{display: "inline-block", width: "10%", textAlign: "right"}}>80%</span>
                                </h4>
                                <div className="skill_progress"> 
                                    <div className="skill_progress_value" style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>
                                <h4>
                                    <span style={{display: "inline-block", width: "90%"}}>MFC,ATL,WTL</span>
                                    <span style={{display: "inline-block", width: "10%", textAlign: "right"}}>70%</span>
                                </h4>
                                <div className="skill_progress"> 
                                    <div className="skill_progress_value" style={{width: "70%"}}></div>
                                </div>
                            </li>
                            <li>
                                <h4>
                                    <span style={{display: "inline-block", width: "90%"}}>WCF,Spring,NHibernate</span>
                                    <span style={{display: "inline-block", width: "10%", textAlign: "right"}}>60%</span>
                                </h4>
                                <div className="skill_progress"> 
                                    <div className="skill_progress_value" style={{width: "60%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;