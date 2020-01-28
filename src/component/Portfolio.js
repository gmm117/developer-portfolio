import React from 'react';
import elecchart_1 from '../../image/elecchart_1.png';
import insurechart_1 from '../../image/insurechart_1.png';
import oldinsurechart_1 from '../../image/oldinsurechart_1.png';
import oldinsurepay_1 from '../../image/oldinsurepay_1.png';
import modemdevelop_1 from '../../image/modemdevelop_1.png';
import modemdevelop_2 from '../../image/modemdevelop_2.png';
import windowsce_device_1 from '../../image/windowsce_device_1.png';
import windowsmobile_device_1 from '../../image/windowsmobile_device_1.png';
import webhwp_main from  '../../image/webhwp_main.png';

function Portfolio() {

    return (
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
                                <span>Date: 2017.03&nbsp;-&nbsp;2020.02</span>
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
                                <span>웹한글/웹한글기안기 관련 본문/프레임기능 중 UI/액션 기능 개발</span>
                            </li>
                            {/* <li className="pf_content_item">
                                <span></span>
                            </li> */}
                        </ul>
                    </div>
                    <div className="pf_pimg clearfix">
                        <img className="pf_img" src={webhwp_main} alt={"웹한글 메인화면"}></img>
                        <img className="pf_img" src={webhwp_main} alt={"웹한글 메인화면"}></img>
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
    );
}

export default Portfolio;