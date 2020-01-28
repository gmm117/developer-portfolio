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

function Portfolio_list( { seq, name, desc, sublist, image }) {
    const { date, type, role, skills, url, contents } = sublist;
    const { href, value } = url;
    const { content1, content2 } = contents;
    const { image1, image2 } = image;
    const { src1, alt1 } = image1;
    const { src2, alt2} = image2; 

    return (
        <div className="pf_list clearfix">
            <div className="pf_info">
                <span className="pf_num">{seq}</span>
                <h3 className="pf_name">{name}</h3>
                <p className="pf_dsc">{desc}</p>
                <ul className="pf_sub_list">
                    <li>
                        <span>{date}</span>
                    </li>
                    <li>
                        <span>{type}</span>
                    </li>
                    <li>
                        <span>{role}</span>
                    </li>
                    <li>
                        <span>{skills}</span>
                    </li>
                    <li>
                        <span>URL : </span><a href={href} target="_blank">{value}</a> 
                    </li>
                    <li>
                        <span>Contents</span>
                    </li>
                    <li className="pf_content_item">
                        <span>{content1}</span>
                    </li>
                    <li className="pf_content_item">
                        <span>{content2}</span>
                    </li>
                </ul>
            </div>
            <div className="pf_pimg clearfix">
                <img className="pf_img" src={src1} alt={alt1}></img>
                <img className="pf_img" src={src2} alt={alt2}></img>
            </div>
        </div>
    );
}

function Portfolio_title( { title } ) {
    return (
        <div className="title_wrap">
            <h2 className="title">{title}</h2>
        </div>
    );
}

function Portfolio() {
    return (
        <section id="portfolio">
            <div className="inner_container">
                <Portfolio_title title="Portfolio" />
                <Portfolio_list 
                    seq="01"
                    name="웹한글/웹한글기안기 UI개발"
                    desc="웹한글/웹한글기안기 본문/프레임 구성/기능개발에 참여하였습니다."
                    sublist={{
                        date : "Date: 2017.03 - 2020.02", 
                        type : "Type: Hangul Ctrl WebApp",
                        role : "Role: Front-End Developer", 
                        skills : "Skills : HTML, CSS, Javascript, Markdown, intellij(git)", 
                        url : {
                            href : "http://m.etnews.com/20190228000187",
                            value : "http://m.etnews.com/20190228000187"
                        }, 
                        contents : {
                            content1 : "웹한글/웹한글기안기 관련 본문/프레임기능 중 UI/액션 기능 개발", 
                            content2 : "웹한글기안기 컨트롤 API 기능제공"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : webhwp_main, 
                            alt1 : "웹한글 메인화면"
                        },
                        image2 : {
                            src2 : webhwp_main, 
                            alt2 : "웹한글 메인화면"
                        }
                    }}
                />
                <Portfolio_list 
                    seq="02" 
                    name="글로벌 치과용 프로그램 개발"
                    desc="글로벌 치과용 프로그램(OnePMS) 중 보험진료/청구/EDI 업무 개발"
                    sublist={{
                        date : "Date: 2015.09 - 2016.12", 
                        type : "Type: Medical Windows App",
                        role : "Role: Medical Insurance & Charge App Developer", 
                        skills : "Skills : C#, WPF, NHibernate, WCF, Spring, VS2013(git)", 
                        url : {
                            href : "http://www.dentalarirang.com/news/articleView.html?idxno=25815",
                            value : "http://www.dentalarirang.com/news/articleView.html?idxno=25815"
                        }, 
                        contents : {
                            content1 : "치과에서 진료를 한 후 프로그램 중 전자차트/보험차트에 진료입력, 입력된 내역 수정,삭제 기능을 제공하는 모듈개발", 
                            content2 : "치과진료 입력내용을 바탕으로 심사평가원에 보험청구하는 모듈개발(보험청구,EDI)"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : elecchart_1, 
                            alt1 : "글로벌 치과용 프로그램 OnePMS 전자차트 메인화면"
                        },
                        image2 : {
                            src2 : insurechart_1, 
                            alt2 : "글로벌 치과용 프로그램 OnePMS 보험차트 메인화면"
                        }
                    }}
                />
                <Portfolio_list 
                    seq="03" 
                    name="국내 치과용 프로그램 개발"
                    desc="국내 치과용 프로그램(하나로,두번에) 의료용 보험진료/청구/전자문서 기능개발"
                    sublist={{
                        date : "Date: 2013.04 - 2016.12", 
                        type : "Type: Medical Windows App",
                        role : "Role: Medical Insurance & Charge App Developer", 
                        skills : "Skills : COM, WTL7.0/9.0, ATL, C/C++, VS2013/6.0(sourcesafe, git)", 
                        url : {
                            href : "http://www.dentalnews.or.kr/news/article.html?no=23828",
                            value : "http://www.dentalnews.or.kr/news/article.html?no=23828"
                        }, 
                        contents : {
                            content1 : "심사평가원 국가기관에서 보험제도 변경될 때마다 자사에서 제공하는 프로그램에 진료/청구 기능적용", 
                            content2 : "심사평가원 국가기관에서 수신 받을 수 있는 전자문서(EDI)를 수신받아서 사용자에 보여주는 기능추가"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : oldinsurechart_1, 
                            alt1 : "국내 치과용 프로그램 OnePMS 보험차트 메인화면"
                        },
                        image2 : {
                            src2 : oldinsurepay_1, 
                            alt2 : "국내 치과용 프로그램 OnePMS 보험청구 메인화면"
                        }
                    }}
                />
                <Portfolio_list 
                    seq="04" 
                    name="단말기 모뎀 디바이스 개발/이동통신사 품질보증"
                    desc="Telit CC864(2G)/UC864(3G)/MC55I(GSM) 모뎀 디바이스 개발, SKT/KT 품질보증 업무"
                    sublist={{
                        date : "Date: 2010.08 - 2012.04", 
                        type : "Type: Wince/WindowsMobile System App",
                        role : "Role: Embedded System Developer", 
                        skills : "Skills : C, C++, API, MFC, VS2015, PlatformBuilder", 
                        url : {
                            href : "http://m.etnews.com/20190228000187",
                            value : "http://m.etnews.com/20190228000187"
                        }, 
                        contents : {
                            content1 : "WindowsCE 5.0 단말기(BPL-10)에 내장된 모뎀디바이스 개발 및 품질보증 업무 담당(SKT,KT)", 
                            content2 : "WindowsCE 5.0, Windows Mobile 6.5 단말기(BIP-7000lite, BM-170) 모뎀디바이스 개발"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : modemdevelop_1, 
                            alt1 : "BPL-10 모뎀디바이스 개발 및 품질보증 단말기 메인화면"
                        },
                        image2 : {
                            src2 : modemdevelop_2, 
                            alt2 : "WinCE, WindowsMobile 모뎀디바이스 개발 단말기 메인화면"
                        }
                    }}
                />
                <Portfolio_list 
                    seq="05" 
                    name="Wince, WindowsMobile 단말기 개발"
                    desc="Wince 5.0, Windows Mobile 5.0/6.1/6.5/65060/6530 단말기 개발 & 유지보수"
                    sublist={{
                        date : "Date: 2010.06 - 2012.04", 
                        type : "Type: Wince/WindowsMobile System App",
                        role : "Role: Embedded System Developer", 
                        skills : "Skills : C, C++, API, MFC, VS2015, PlatformBuilder", 
                        url : {
                            href : "http://m.etnews.com/20190228000187",
                            value : "http://m.etnews.com/20190228000187"
                        }, 
                        contents : {
                            content1 : "WindowsCE 5.0 단말기(BPL-10)를 이용한 현장 결제 기능 개발 및 단말기 유지보수", 
                            content2 : "Windows Mobile 5.1/6.1/65060/6530 버전의 단말기 개발"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : windowsce_device_1, 
                            alt1 : "WinCE 5.0 단말기 메인화면"
                        },
                        image2 : {
                            src2 : windowsmobile_device_1, 
                            alt2 : "Windows Mobile 5.1/6.1/65060/6530 단말기 메인화면"
                        }
                    }}
                />
            </div>
        </section>
    );
}

export default Portfolio;