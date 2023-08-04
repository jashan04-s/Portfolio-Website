import React from 'react' ;
import "./skills.css" ;



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const icons = importAll(require.context("../../../assets/skillicons", false, /\.(png)$/));


const Skills = () => {

    return (
        <>
            <div className = "skill__header skill__header--font"> My Skills</div>
            <div className = "skills__container">
                <div className = "skills skills--font">
                    <div className = "skill__frontend"> 
                        <div className = "frontend__header">Frontend </div>
                        <div className = "frontend__icons">
                            <img src = {icons["htmlicon.png"]}/> 
                            <img src = {icons["cssicon.png"]}/> 
                            <img src = {icons["javascripticon.png"]}/> 
                            <img src = {icons["reacticon.png"]}/> 
                            <img src = {icons["tailwindicon.png"]}/>
                            <img src = {icons["nextjsicon.png"]}/>
                        </div>
                    </div>
                    <div className = "skill__backend"> 
                        <div className = "backend__header"> Backend </div>
                            <div className = "backend__icons">
                                <img src = {icons["mysqlicon.png"]}/> 
                                <img src = {icons["nodeicon.png"]}/> 
                            </div>
                        </div>
                    
                    
                    <div className = "skill__tools">
                        <div className = "other__header"> Tools </div> 
                            <div className = "tools__icons">
                                <img src = {icons["webpackicon.png"]}/> 
                                <img src = {icons["giticon.png"]}/>
                            </div>    
                    </div>
                    
                    <div className = "skill__other"> 
                    <div className = "other__header"> Other </div>
                            <div className = "other__icons">
                                <img src = {icons["c++icon.png"]}/> 
                                <img src = {icons["cicon.png"]}/>
                                <img src = {icons["pythonicon.png"]}/> 
                                <img src = {icons["matlabicon.png"]}/> 
                                <img src = {icons["verilogicon.png"]}/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default Skills