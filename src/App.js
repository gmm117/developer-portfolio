import React from 'react';
import './reset.scss';
import './style.scss';
import elecchart_1 from '../image/elecchart_1.png';
import insurechart_1 from '../image/insurechart_1.png';
import oldinsurechart_1 from '../image/oldinsurechart_1.png';
import oldinsurepay_1 from '../image/oldinsurepay_1.png';
import modemdevelop_1 from '../image/modemdevelop_1.png';
import modemdevelop_2 from '../image/modemdevelop_2.png';
import windowsce_device_1 from '../image/windowsce_device_1.png';
import windowsmobile_device_1 from '../image/windowsmobile_device_1.png';
import about_hong from '../image/about_hong.jpg';

function App() {
  return (
    <div id="wrap">
      <header id="header">
            <div className="full_container">
                <div className="inner_container clearfix">
                    <div>
                        <h1 className="logo">
                            <a href="#home" style={{color: "#000000", textDecoration:'none'}}>Hong's</a>
                        </h1>
                        <div className="phone">Tel: 010-7118-2519</div>                              
                    </div>
                    <nav className="gnb_wrap">
                        <ul className="gnb clearfix">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <div id="container">
            <section id="home" style={{height: "800px", overflow: "hidden"}}>
                <h2 className="ir">메인화면</h2>
                <div className="visual_title">
                    <p>Hong SeungAh</p>
                    <span className="wrap">Front-end Developer</span>
                    <div className="github">
                        <a target="_blank" href="https://github.com/gmm117"></a>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="inner_container">
                    <div className="title_wrap">
                        <h2 className="title">Portfolio</h2>
                    </div>
                    <div className="pf_list clearfix">
                        <div className="pf_info">
                            <span className="pf_num">01</span>
                            <h3 className="pf_name">웹한글/웹한글기안기 UI개발</h3>
                            <p className="pf_dsc">웹한글/웹한글기안기 본문/프레임 구성/기능개발에 참여하였습니다.</p>
                            <ul className="pf_sub_list">
                                <li>
                                    <span>Date: 2017.03&nbsp;-&nbsp;2019.12</span>
                                </li>
                                <li>
                                    <span>Type: Hangul Ctrl WebApp</span>
                                </li>
                                <li>
                                    <span>Role: UI Developer</span>
                                </li>
                                <li>
                                    <span>Skills : HTML, CSS, Javascript, Markdown, intellij(git)</span>
                                </li>
                                <li>
                                    <span>URL : </span><a href="http://m.etnews.com/20190228000187" target="_blank">http://m.etnews.com/20190228000187</a> 
                                </li>
                                <li>
                                    <span>Contents</span>
                                </li>
                                <li className="pf_content_item">
                                    <span></span>
                                </li>
                                <li className="pf_content_item">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pf_list clearfix">
                        <div className="pf_info">
                            <span className="pf_num">02</span>
                            <h3 className="pf_name">글로벌 치과용 프로그램 개발</h3>
                            <p className="pf_dsc">글로벌 치과용 프로그램(OnePMS) 중 보험진료/청구/EDI 업무 개발</p>
                            <ul className="pf_sub_list">
                                <li>
                                    <span>Date: 2015.09&nbsp;-&nbsp;2016.12</span>
                                </li>
                                <li>
                                    <span>Type: Medical Windows App</span>
                                </li>
                                <li>
                                    <span>Role: Medical Insurance & Charge App Developer</span>
                                </li>
                                <li>
                                    <span>Skills : C#, WPF, NHibernate, WCF, Spring, VS2013(git)</span>
                                </li>
                                <li>
                                    <span>URL : </span><a href="http://www.dentalarirang.com/news/articleView.html?idxno=25815" target="_blank">http://www.dentalarirang.com/news/articleView.html?idxno=25815</a> 
                                </li>
                                <li>
                                    <span>Contents</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>치과에서 진료를 한 후 프로그램 중 전자차트/보험차트에 진료입력, 입력된 내역 수정,삭제 기능을 제공하는 모듈개발</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>치과진료 입력내용을 바탕으로 심사평가원에 보험청구하는 모듈개발(보험청구,EDI)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf_pimg clearfix">
                            <img className="pf_img" src={elecchart_1} alt={"글로벌 치과용 프로그램 OnePMS 전자차트 메인화면"}></img>
                            <img className="pf_img" src={insurechart_1} alt={"글로벌 치과용 프로그램 OnePMS 보험차트 메인화면"}></img>
                        </div>
                    </div>
                    <div className="pf_list clearfix">
                        <div className="pf_info">
                            <span className="pf_num">03</span>
                            <h3 className="pf_name">국내 치과용 프로그램 개발</h3>
                            <p className="pf_dsc">국내 치과용 프로그램(하나로,두번에) 의료용 보험진료/청구/전자문서 기능개발</p>
                            <ul className="pf_sub_list">
                                <li>
                                    <span>Date: 2013.04&nbsp;-&nbsp;2016.12</span>
                                </li>
                                <li>
                                    <span>Type: Medical Windows App</span>
                                </li>
                                <li>
                                    <span>Role: Medical Insurance & Charge App Developer</span>
                                </li>
                                <li>
                                    <span>Skills : COM, WTL7.0/9.0, ATL, C/C++, VS2013/6.0(sourcesafe, git)</span>
                                </li>
                                <li>
                                    <span>URL : </span><a href="http://www.dentalnews.or.kr/news/article.html?no=23828" target="_blank">http://www.dentalnews.or.kr/news/article.html?no=23828</a> 
                                </li>
                                <li>
                                    <span>Contents</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>심사평가원 국가기관에서 보험제도 변경될 때마다 자사에서 제공하는 프로그램에 진료/청구 기능적용</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>심사평가원 국가기관에서 수신 받을 수 있는 전자문서(EDI)를 수신받아서 사용자에 보여주는 기능추가</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf_pimg clearfix">
                            <img className="pf_img" src={oldinsurechart_1} alt="국내 치과용 프로그램 OnePMS 보험차트 메인화면"></img>
                            <img className="pf_img" src={oldinsurepay_1} alt="국내 치과용 프로그램 OnePMS 보험청구 메인화면"></img>
                        </div>
                    </div>
                    <div className="pf_list clearfix">
                        <div className="pf_info">
                            <span className="pf_num">04</span>
                            <h3 className="pf_name">단말기 모뎀 디바이스 개발/이동통신사 품질보증</h3>
                            <p className="pf_dsc">Telit CC864(2G)/UC864(3G)/MC55I(GSM) 모뎀 디바이스 개발, SKT/KT 품질보증 업무</p>
                            <ul className="pf_sub_list">
                                <li>
                                    <span>Date: 2010.08&nbsp;-&nbsp;2012.04</span>
                                </li>
                                <li>
                                    <span>Type: Wince/WindowsMobile System App</span>
                                </li>
                                <li>
                                    <span>Role: Embedded System Developer</span>
                                </li>
                                <li>
                                    <span>Skills : C, C++, API, MFC, VS2015, PlatformBuilder</span>
                                </li>
                                <li>
                                    <span>URL : </span><a href="http://m.etnews.com/20190228000187" target="_blank">http://m.etnews.com/20190228000187</a> 
                                </li>
                                <li>
                                    <span>Contents</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>WindowsCE 5.0 단말기(BPL-10)에 내장된 모뎀디바이스 개발 및 품질보증 업무 담당(SKT,KT)</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>WindowsCE 5.0, Windows Mobile 6.5 단말기(BIP-7000lite, BM-170) 모뎀디바이스 개발</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf_pimg clearfix">
                            <img className="pf_img" src={modemdevelop_1} alt="BPL-10 모뎀디바이스 개발 및 품질보증 단말기 메인화면"></img>
                            <img className="pf_img" src={modemdevelop_2} alt="WinCE, WindowsMobile 모뎀디바이스 개발 단말기 메인화면"></img>
                        </div>
                    </div>
                    <div className="pf_list clearfix">
                        <div className="pf_info">
                            <span className="pf_num">05</span>
                            <h3 className="pf_name">Wince, WindowsMobile 단말기 개발</h3>
                            <p className="pf_dsc">Wince 5.0, Windows Mobile 5.0/6.1/6.5/65060/6530</p>
                            <ul className="pf_sub_list">
                                <li>
                                    <span>Date: 2010.06&nbsp;-&nbsp;2012.04</span>
                                </li>
                                <li>
                                    <span>Type: Wince/WindowsMobile System App</span>
                                </li>
                                <li>
                                    <span>Role: Embedded System Developer</span>
                                </li>
                                <li>
                                    <span>Skills : C, C++, API, MFC, VS2015, PlatformBuilder</span>
                                </li>
                                <li>
                                    <span>URL : </span><a href="http://m.etnews.com/20190228000187" target="_blank">http://m.etnews.com/20190228000187</a> 
                                </li>
                                <li>
                                    <span>Contents</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>WindowsCE 5.0 단말기(BPL-10)를 이용한 현장 결제 기능 개발 및 단말기 유지보수</span>
                                </li>
                                <li className="pf_content_item">
                                    <span>Windows Mobile 5.1/6.1/65060/6530 버전의 단말기 개발</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf_pimg clearfix">
                            <img className="pf_img" src={windowsce_device_1} alt="WinCE 5.0 단말기 메인화면"></img>
                            <img className="pf_img" src={windowsmobile_device_1} alt="Windows Mobile 5.1/6.1/65060/6530 단말기 메인화면"></img>
                        </div>
                    </div>
                </div>
            </section>
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
                                        <span>HTML,CSS</span>
                                        <span>60%</span>
                                    </h4>
                                    <div className="skill_progress"> 
                                        <div className="skill_progress_value" style={{width: "60%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <h4>
                                        <span>JavaScript</span>
                                        <span>80%</span>
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
                                        <span>C,C++</span>
                                        <span>90%</span>
                                    </h4>
                                    <div className="skill_progress"> 
                                        <div className="skill_progress_value" style={{width: "90%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <h4>
                                        <span>C#,WPF</span>
                                        <span>80%</span>
                                    </h4>
                                    <div className="skill_progress"> 
                                        <div className="skill_progress_value" style={{width: "80%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <h4>
                                        <span>MFC,ATL,WTL</span>
                                        <span>70%</span>
                                    </h4>
                                    <div className="skill_progress"> 
                                        <div className="skill_progress_value" style={{width: "70%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <h4>
                                        <span>WCF,Spring,NHibernate</span>
                                        <span>60%</span>
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
        </div>
    </div>
  );
}

export default App;
