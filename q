[1mdiff --git a/src/app/App.css b/src/app/App.css[m
[1mindex cdf3af7..a31d39e 100644[m
[1m--- a/src/app/App.css[m
[1m+++ b/src/app/App.css[m
[36m@@ -28,5 +28,7 @@[m [ma {[m
   text-decoration: none;[m
 }[m
 [m
[31m-[m
[32m+[m[32m::selection {[m
[32m+[m[32m  background: none;[m
[32m+[m[32m}[m
 [m
[1mdiff --git a/src/app/components/aboutskill/Aboutskill.jsx b/src/app/components/aboutskill/Aboutskill.jsx[m
[1mindex 544563f..686d513 100644[m
[1m--- a/src/app/components/aboutskill/Aboutskill.jsx[m
[1m+++ b/src/app/components/aboutskill/Aboutskill.jsx[m
[36m@@ -33,7 +33,7 @@[m [mconst displayNextPage = (currentSkill, forward = true) => {[m
   if(currentIndex == SkillsList.length){[m
     currentIndex = 0[m
   }[m
[31m-  else if(currentIndex == 0){[m
[32m+[m[32m  else if(currentIndex == -1){[m
     currentIndex =  SkillsList.length - 1[m
   }[m
   [m
[36m@@ -50,24 +50,29 @@[m [mconst Aboutskill = () => {[m
 [m
   console.log(SkillName)[m
   return ([m
[31m-    <div className = "about--positioner">[m
[31m-      <div className= "about__right" onClick = {() => navigate(displayNextPage(SkillName, false))}> <BsFillArrowLeftSquareFill size = {56}/> </div>[m
[31m-      <div className = "about__card">[m
[31m-        <div className = "about__icon">[m
[31m-          <img className = "about__icon--size" src = {icons[SkillName + "icon.png"]}></img>[m
[31m-        </div>[m
[31m-        <div className = "about__information">[m
[31m-        <div className = "about__header"> {SkillName} </div>[m
[31m-        <div className = "about__content">[m
[31m-        She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.[m
[32m+[m[32m    <>[m
[32m+[m[32m      <div className = "return" onClick = {() => navigate('../..')}> Return </div>[m
[32m+[m[32m      <div className = "about--positioner">[m
[32m+[m[32m        <div className= "about__right" onClick = {() => navigate(displayNextPage(SkillName, false))}> <BsFillArrowLeftSquareFill size = {56}/> </div>[m
[32m+[m[41m        [m
[32m+[m[41m        [m
[32m+[m[32m        <div className = "about__card">[m
[32m+[m[32m          <div className = "about__icon">[m
[32m+[m[32m            <img className = "about__icon--size" src = {icons[SkillName + "icon.png"]}></img>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className = "about__information">[m
[32m+[m[32m          <div className = "about__header"> {SkillName} </div>[m
[32m+[m[32m          <div className = "about__content">[m
[32m+[m[32m          She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.[m
 [m
[31m-Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.[m
[32m+[m[32m  Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.[m
[32m+[m[32m            </div>[m
           </div>[m
         </div>[m
[31m-      </div>[m
 [m
[31m-      <div className= "about__left" onClick = {() => navigate(displayNextPage(SkillName))}> <BsFillArrowRightSquareFill size = {56}/>  </div>[m
[31m-    </div>[m
[32m+[m[32m        <div className= "about__left" onClick = {() => navigate(displayNextPage(SkillName))}> <BsFillArrowRightSquareFill size = {56}/>  </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m  </>[m
   )[m
 }[m
 [m
[1mdiff --git a/src/app/components/aboutskill/aboutskill.css b/src/app/components/aboutskill/aboutskill.css[m
[1mindex 45f31f2..a9e20a0 100644[m
[1m--- a/src/app/components/aboutskill/aboutskill.css[m
[1m+++ b/src/app/components/aboutskill/aboutskill.css[m
[36m@@ -1,7 +1,7 @@[m
 .about--positioner{[m
     display: flex;[m
     align-items: center;[m
[31m-    height: 100vh;[m
[32m+[m[32m    height: 80vh;[m
 }[m
 [m
 .about__card{[m
[36m@@ -54,6 +54,19 @@[m
 }[m
 [m
 [m
[32m+[m[32m.return{[m
[32m+[m[32m    color: var(--background-color);[m
[32m+[m[32m    background-color: var(--accent-color);[m
[32m+[m[32m    font-family: var(--header-font);[m
[32m+[m[32m    font-size: 2rem;[m
[32m+[m[32m    display: block;[m
[32m+[m[32m    padding: 0.5%;[m
[32m+[m[32m    border-radius: 10px;[m
[32m+[m[32m    margin: 1%;[m
[32m+[m[32m    width: 20%;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m}[m
[32m+[m
 [m
 [m
 [m
[1mdiff --git a/src/app/components/contact/Contact.jsx b/src/app/components/contact/Contact.jsx[m
[1mindex 50df71d..bdffd85 100644[m
[1m--- a/src/app/components/contact/Contact.jsx[m
[1m+++ b/src/app/components/contact/Contact.jsx[m
[36m@@ -7,7 +7,7 @@[m [mconst Contact = () => {[m
 [m
     return ([m
       <div className = "contact">[m
[31m-    [m
[32m+[m[41m        [m
       </div>[m
     )[m
   }[m
[1mdiff --git a/src/app/components/navbar/Navbar.jsx b/src/app/components/navbar/Navbar.jsx[m
[1mindex e35dc40..ae92c7c 100644[m
[1m--- a/src/app/components/navbar/Navbar.jsx[m
[1m+++ b/src/app/components/navbar/Navbar.jsx[m
[36m@@ -61,7 +61,7 @@[m [mconst Navbar = () => {[m
               <RxHamburgerMenu size = {56}/>[m
             </div>[m
             }[m
[31m-[m
[32m+[m[41m          [m
 [m
           </div>[m
         </div>[m
