import React from 'react';
import { Title, List } from './Common';

import lightmarkdown_electron from  '../../image/lightmarkdown_electron.png';
import lightmarkdown_web from  '../../image/lightmarkdown_web.png';
import portfolio_portfolio from  '../../image/portfolio_portfolio.png';
import portfolio_project from  '../../image/portfolio_project.png';

function Project() {
    return (
        <section id="project">
            <div className="inner_container">
                <Title title="Project" />
                <List 
                    seq="01"
                    name="Hong's PortFolio"
                    desc="Front-End 개발을 하면서 알게된 기술을 바탕으로 PortFolio 개발"
                    sublist={{
                        date : "Date: 2019.12 - 2020.02", 
                        type : "Type: PortFolio WebApp",
                        role : "Role: Front-End Developer", 
                        skills : "Skills : HTML, css, javascript, React, babel, webpack, scss, vscode(git)", 
                        url : {
                            href : "https://gmm117.github.io/developer-portfolio/",
                            value : "developer-portfolio"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : portfolio_portfolio, 
                            alt1 : "Hong's PortFolio 화면"
                        },
                        image2 : {
                            src2 : portfolio_project, 
                            alt2 : "Hong's Project 화면"
                        }
                    }}
                />
                <List 
                    seq="02"
                    name="Light-MarkDown"
                    desc="Electron과 웹브라우저에서 동작하는 Markdown 개발"
                    sublist={{
                        date : "Date: 2019.12 - 2020.01", 
                        type : "Type: Markdowon WebApp",
                        role : "Role: Front-End Developer", 
                        skills : "Skills : HTML, css, javascript, electron, babel, webpack, vscode(git)", 
                        url : {
                            href : "https://gmm117.github.io/light-mkeditor/",
                            value : "light-mkeditor"
                        }
                    }}
                    image = {{
                        image1 : {
                            src1 : lightmarkdown_electron, 
                            alt1 : "Electron Markdown Editor"
                        },
                        image2 : {
                            src2 : lightmarkdown_web, 
                            alt2 : "Webbrowser Markdown Editor"
                        }
                    }}
                />
            </div>
        </section>
    );
}

export default Project;