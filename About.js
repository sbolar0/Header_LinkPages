import React, { useState, useContext } from "react";

import styles from "../Styles/Pages/About.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Collapsible from "../Components/Collapsible";

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <p>About Us: </p>
        <div className={styles.collapsibleContainer}>
          <div>
            <Collapsible label="Cameron">
              <p>Cameron Zuziak is finishing his final semester in the Master of Applied Computer Science program at Frostburg State University. 
                He holds a bachelor’s degree in Speculative Design and Design Computing from University of California San Diego. Cameron is currently
                a computational designer at JZMK Partners – an international Architecture and Urban Planning firm. At JZMK, Cameron draws on his 
                technical knowledge to automate design workflows through the development of software that interfaces with various CAD applications.
                 He has successfully saved his employer countless hours of work through the novel solutions he has implemented. Outside of his occupation,
                 he has an interest in decentralized finance and algorithmic trading of cryptocurrencies. Cameron brings various skills to the table, 
                 including Python, Java, JavaScript, SQL, and PHP. </p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Mark">
              <p>Mark Ross is entering his second semester in the Master of Applied Computer Science program.  
                He has an undergraduate degree in Information Networking and Telecommunications with a concentration
                 in Web Development from Fort Hays State University.  Mark is employed as a Senior Cloud Engineer with Ampsight, Inc.
                  where he develops and maintains cloud native infrastructure solutions supporting machine learning, data analytics, cybersecurity,
                   and cloud migration projects for various government agencies.  Prior to his current role he was employed as a Cloud Engineer 
                   for General Dynamics Information Technology (GDIT) in addition to 20 years of active-duty Navy experience as an Information Systems
                    Technician. Mark brings a strong work ethic, 25 years of Information technology and telecommunications experience in diverse technical
                     roles, and extensive experience leading technical teams ranging in size from three to 200 members. Mark is proficient with various 
                     DevOps tools including Kubernetes, Linux, and shell scripting.Mark has programming experience with Python, PHP, JavaScript, and Java.</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Rita">
              <p>Rita Hegeman is completing her final semester in the Master of Applied Computer Science, Database Concentration program.  She has 
                undergraduate degrees in Physics and Mathematics, and __ credits towards an MBA with a Business Analytics concentration.  She is 
                currently employed as a software engineer with vCalc, LLC where she is responsible for maintaining a mortgage banking reporting system
                 for Fannie Mae, Ginnie Mae, and Freddie Mac.  This web-based system is written in Perl and Java, and uses a PostgreSQL database in the 
                 backend. She also has 25 years of experience as the director of an educational program.  In this capacity she successfully wrote and 
                 administered a $350,000 annual US Department of Education grant, and developed several extensive, menu drive MS ACCESS databases. 
                  The strengths she brings to this team included self-motivation, organization, database experience, and programming experience in Perl, 
                  Java, Python, VBA, and PHP.</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Ryan">
              <p>Ryan Beebe is entering his second semester in the program. He has an undergraduate degree in Marketing from Saint Joseph’s university 
                in Philadelphia, PA. Ryan currently works as an Application Developer at GEICO in Chevy Chase, MD, a position he has held since the end
                 of 2021. Ryan’s position entails developing and maintaining a suite of applications that assist pricing actuaries in determining 
                 insurance rate changes. Prior to that, Ryan had worked with the marketing department at GEICO to identify potential areas of process 
                 improvement and implement automated solutions. Ryan has professional experience working with Python, React, JavaScript, SQL, and R 
                 as well as personal development experience in Java. Specific subdomains that Ryan is interested in are web scraping, Python scripting,
                  and machine learning. Ryan brings a strong work ethic, capable problem-solving skills and experience in several modern programming 
                  languages/toolsets to the team.</p>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="Supreetha">
              <p>Supreetha Bolar is starting her first semester in the Master of Applied Computer Science program at Frostburg State University. She holds
                 an undergraduate degree in Information Science and Engineering from Visvesvaraya Technological University, India. She has around 6 years
                  of experience working in the IT industry and 1.5 years of working experience as a Software testing Tutor. She worked for the client 
                  Philips, Mphasis, SnapOne India, and Miracle Prop. She has experience in testing software applications, Web development, and Android
                  Development. She has domain experience in Health Care, Insurance, and Real estate and Property and Good Experience with bug tracking tools
                  like JIRA, Bugzilla, HP ALM, CQ. Supreetha has good exposure to Software Engineering Processes and is familiar with various Life Cycle
                  Models like ‘Verification and Validation’ Model and Agile. She is interested in learning about modern technologies</p>
            </Collapsible>
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
}
