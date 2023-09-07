import React from 'react';
import "./skills.css";




function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const icons = importAll(require.context("../../../assets/skillicons", false, /\.(png)$/));


const Skills = () => {

    return (
        <>
            <div className="skill__header skill__header--font">
                My Skills
            </div>
            <div className="skill__header__text skill__header__text--font">
                Click on each icon to see my experience with each tool / programming language.
            </div>
            <div className="skills__container">
                <div className="skills skills--font">
                    <div className="skill__frontend">
                        <div className="frontend__header"> Frontend </div>
                        <div className="frontend__icons">
                            <div className="icons">
                                <div><img src={icons["htmlicon.png"]} /></div>
                                <div> HTML </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["cssicon.png"]} /></div>
                                <div> CSS </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["javascripticon.png"]} /></div>
                                <div> Javascript </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["reacticon.png"]} /></div>
                                <div> React </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["tailwindicon.png"]} /></div>
                                <div> Tailwind </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["nextjsicon.png"]} /></div>
                                <div> NextJS </div>
                            </div>
                        </div>
                    </div>


                    <div className="skill__backend">
                        <div className="backend__header"> Backend </div>
                        <div className="backend__icons">
                            <div className="icons">
                                <div><img src={icons["mysqlicon.png"]} /></div>
                                <div> MySQL </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["nodeicon.png"]} /></div>
                                <div> NodeJS</div>
                            </div>
                        </div>
                    </div>


                    <div className="skill__tools">
                        <div className="tools__header"> Tools </div>
                        <div className="tools__icons">
                            <div className="icons">
                                <div><img src={icons["webpackicon.png"]} /></div>
                                <div> Webpack </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["giticon.png"]} /></div>
                                <div> Git </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill__other">
                        <div className="other__header"> Other </div>
                        <div className="other__icons">
                            <div className="icons">
                                <div><img src={icons["pythonicon.png"]} /></div>
                                <div> Python </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["cicon.png"]} /></div>
                                <div> C </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["c++icon.png"]} /></div>
                                <div> C++ </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["verilogicon.png"]} /></div>
                                <div> Verilog </div>
                            </div>
                            <div className="icons">
                                <div><img src={icons["matlabicon.png"]} /></div>
                                <div> Matlab </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills