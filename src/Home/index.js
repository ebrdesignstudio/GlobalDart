import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import _ from 'lodash';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactForm from './contactForm';
import Location from './location';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import home from './../assets/homeimage/home.jpg';



const  Home = (props) => {


    const steps = [
            {
                header: 'Counselling',
                info : "Students have various career options to choose specially after under graduation. Global Dart provides you with the right direction when it comes to decision making by giving you detailed information on your options…",
                card: false,
                link: false,
                image: require('../assets/GDillus/1.png'),
                numberImage: require('./../assets/Numbers/1.png'),
                styles : { width: '380px', height: '380px', marginTop: '-70px'}
            },
            {
                header: 'University and course selection',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                card: false,
                link: false,
                image: require('./../assets/GDillus/2.png'),
                numberImage: require('./../assets/Numbers/2.png'),
                styles : { width: '250px', height: '250px',marginLeft:'-50px',marginTop:'-15px'}
            },
            {
                header: 'Admissions',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                // card: true,
                right: true,
                link: true,
                image: require('./../assets/GDillus/3.png'),
                numberImage: require('./../assets/Numbers/3.png'),
                styles : { width: '235px', height: '235px'},
                redirect : () => props.history.push('/admission')
            },
            {
                header: 'VISA Processing',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                card: false,
                link: true,
                image: require('./../assets/GDillus/4.png'),
                numberImage: require('./../assets/Numbers/4.png'),
                styles : { width: '170px', height: '170px', marginTop: '13px'},
                redirect : () => props.history.push('/visaprocessing')

            },
            {
                header: 'Travel Briefing',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                // card: true,
                left: true,
                link: false,
                image: require('./../assets/GDillus/5.png'),
                numberImage: require('./../assets/Numbers/5.png'),
                styles : { width: '270px', height: '270px',marginTop:'-17px'}

            },
            {
                header: 'Post VISA Services',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                card: false,
                link: false,
                image: require('./../assets/GDillus/6.png'),
                numberImage: require('./../assets/Numbers/6.png'),
                styles : { width: '170px', height: '170px', marginTop: '13px'}
            },
            {
                header: 'Pre and Post Travel Assistance',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                // card: true,
                right: true,
                link: false,
                image: require('./../assets/GDillus/7.png'),
                numberImage: require('./../assets/Numbers/7.png'),
                styles : { width: '240px', height: '240px',marginTop:'-5px'}

            },
            {
                header: 'Career Assistance',
                info : "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
                card: false,
                link: false,
                image: require('./../assets/GDillus/8.png'),
                numberImage: require('./../assets/Numbers/8.png'),
                styles : { width: '200px', height: '200px', marginTop: '-11px'}

            },
        ]

        const benifits = [
            {
                title:'Free Counselling',
                subtitle: 'We offer free counselling to all our students',
                icon : require('./../assets/benfitsicons/meeting.png')
            },
            {
                title:'Admission letter in a week',
                subtitle: 'We offer free counselling to all our students',
                icon : require('./../assets/benfitsicons/document.png')

            },
            {
                title:'Save VISA Charges',
                subtitle: 'We offer free counselling to all our students',
                icon : require('./../assets/benfitsicons/savings.png')

            },
            {
                title:'Free SIM and Forex cards',
                subtitle: 'We offer free counselling to all our students',
                icon : require('./../assets/benfitsicons/sim-card.png')
            },
            {
                title:'Internship Assured',
                subtitle: 'We offer free counselling to all our students',
                icon : require('./../assets/benfitsicons/job.png')

            },
            {
                title:'24/7 Assistance',
                subtitle: 'We offer free counselling to all our students',
                icon : require('./../assets/benfitsicons/helpline.png')

            }
        ]

        const pastEvents = [
            {
                date: '20 NOV 2018',
                eventName: 'Latest trends in tech in 2021',
                time: '9:30 AM - 3:00 PM',
                location: 'Bangalore'
            },
            {
                eventName: 'London university Course Discussion',
                time:'9:30 AM - 3:00 PM',
                location: 'Bangalore'
            },
            {
                eventName: 'Economics guidance',
                time:'9:30 AM - 3:00 PM',
                location: 'Bangalore'
            },

        ]

        const upcomingEvents = [
            {
                date: '12 Jan 2018',
                webinar: true,
                eventName: 'Universities Introduction meetup',
                time: '9:30 AM - 3:00 PM'
            },
            {
                webinar: true,
                eventName: 'Course Discussion',
                time: '9:30 AM - 3:00 PM'
            },
            {
                date: '15 Jan 2018',
                seminar: true,
                eventName: 'Application and Travel Planning',
                time: '9:30 AM - 3:00 PM',
                location: 'Bangalore',
            },
            {
                seminar: true,
                eventName: 'Course Discussion',
                time: '9:30 AM - 3:00 PM',
                location: 'Bangalore',
            }
        ]

        const stories = [
            {
                quoteImage : require('./../assets/quotes/right-quotes-symbol.png'),
                storyText: 'It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout. The point of using lorem ipsum is that it has a more or less distribution of letters, as opposed to using content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use. ',
                storyAuthor: 'Akshay Shetty',
                storyDepartment: 'London school of economics'
            },
            {
                quoteImage : require('./../assets/quotes/right-quotes-symbol.png'),
                storyText: 'It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout. The point of using lorem ipsum is that it has a more or less distribution of letters, as opposed to using content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use. ',
                storyAuthor: 'Rohit Sharma',
                storyDepartment: 'London school of economics'
            }
        ]

        const footerNavs = [
             { label: 'Blog' }, { label: 'FAQ' },{ label: 'Contact' }]


    function StepDetails(props){
        return(
            <div className="step flex-fluid reverse">
                <div className="steps">
                    <div className="numbers" style={{ backgroundImage: `url(${props.step.numberImage.default})`, padding:'5px 0px' }} alt = "image" />
                    <p className="header black">{props.step.header}</p> 
                    <p className="info font-14">{props.step.info}</p>
                    {props.step.link && <><IconButton onClick={props.step.redirect} style={{ padding:0}}><span className="font-14 red semi-bold">Know More</span><ArrowForwardIcon style={{ color:'#c8102e', fontSize: 30, paddingLeft: 3}}/></IconButton></>}
                </div>
                <div className="illustration" style = {{ height: '310px', width: '100%'}}><div className="illustrations" style={{ backgroundImage: `url(${props.step.image.default})`, ...props.step.styles }} alt = "image" /></div> 
            </div>
        )
    }
    return (
        <div>
            <div className="page_1">
                <div className="home-align main flex-fluid">
                    <div style= {{ backgroundColor: 'fafafa'}}>
                        <div className="background-image" style={{ backgroundImage:`url(${home})`}} alt="home"></div>
                        <div className="image-height">
                            <p><span style={{ fontFamily: 'Helvetica'}} className="font-34 text-white">Aiming</span><p><span style={{ fontFamily: 'helvetica-light' }} className="description font-88 text-white">Global <span style = {{ fontFamily: 'Helvetica-Bold' }} className="font-88 text-white">Education</span></span></p></p> 
                            <p style={{ margin:'30px 0px', maxWidth:'80%'}} className="font-16 text-white">Higher education has never been this easier. In this ever challenging world, education at the Global level is the key for a successful career. GlobalDart guides the aspiring students around the globe to access the latest courses from top institutions in the world. GlobalDart handles ways and means for you to aim for a better career and life.</p>
                                    <Button style={{ color: '#ffff', fontSize:'18px',width:'250px',height:'44px',fontFamily:'fontSemiBold',backgroundColor:'#c8102e',textTransform:'capitalize',boxShadow:'unset' }} variant="contained">Know how</Button>
                        </div>
                    </div>
                </div>
            </div>
            <section id="admissions">
            <div className="blue-light-bg">
            <div className="page_2 main" style={{ padding:'70px 0px'}}>
                <div style = {{ maxWidth:'800px' }}>
                    <p className="padding-b-50 page-header">Forget about the tedious process for joining top institutions in the world, we've got your back!  <p style = {{ padding:'10px 0px'}} className="semi-bold padding">GlobalDart takes you through a quick 8-step framework to join your desired institution. <br/>Let's see How</p></p>
                </div>
                {
                    _.map(steps,step => <div className="card-row">
                            {
                            step.card ? 
                                <Card 
                                    className= "card-align" 
                                    style = {{ maxWidth: '1000px', padding: '25px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', bottom: '20px',marginTop: '30px',marginBottom: '30px'}}
                                >
                                    <StepDetails step={step}/>
                                </Card> :
                                <StepDetails 
                                className="card-align-right" 
                                step={step}
                            />
                            }
                        </div>
                    )
                }
            </div>
                </div>
            </section>
            <div className="blue-gradient">
                <div className="main flex-column">
                        <p className="page-title padding-b-30 left text-white bold font-44">Benefits</p>
                    <div className="grid-container">
                            {
                                _.map(benifits,benifit =><div className="benefit">
                                        <img className="icon" src={benifit.icon.default}/> 
                                        <p className="title">{benifit.title}</p>
                                        <p className="infos font-14" style = {{ color: '#cccccc'}}>{benifit.subtitle}</p>
                                    </div>    
                                )
                            }
                    </div>
                </div>
            </div>
            {/* <div style= {{ backgroundColor: '#fafafa' }} className="universities flex center">
                <p className="font-40">Our Universities</p>
            </div> */}
            <section id="events">
            <div className="events">
            <div className="main flex-column">
            <div style={{ alignItems:'center',justifyContent:'space-around'}} className="flex-fluid">
                <p className="page-header"> <span className = "bold"> Events </span> for Students</p>
                <p style={{maxWidth:'500px'}} className="font-12 space-btwn gray-text">Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries</p>
            </div>
            <div className="flex-fluid space-even margin-top-40">
                <div>
                <p className="main-blue margin-b-20 flex font-14">UPCOMING EVENTS</p>
                {
                    _.map(upcomingEvents, event =>
                        <div className="margin-t-r-b-l ">
                            <p className="main-blue font-12">{event.date}</p>
                            <p className="main-blue left line-height font-20 semi-bold">{event.eventName}</p>
                            <p className="gray-text left  font-12">{event.location}</p>
                            
                            <p className="gray-text left line-height font-12">{event.time}</p>
                            {
                                event.webinar && <Button className="font-12" style = {{ display: 'flex', justifyContent: 'left', padding: '5px 0px', fontSize: '12px', color:'#c8102e'}}className="red left"><ExitToAppIcon className="red icon-padding"/>Join Meeting</Button>
                            }
                            {
                                event.seminar && <Button style={{ color:'#c8102e', padding:'10px 0px'}} className="left font-12">REGISTER</Button>
                            }
                        </div>     
                    )
                }
                </div>
                <div style = {{ lineHeight: '30.6px' }}>
                <p className="main-blue margin-b-20 font-14 line-height flex semi-bold">PAST EVENTS</p>

                {
                    _.map(pastEvents, event =>
                        <div>
                            <p className="main-blue left font-12">{event.date}</p>
                            <p className="main-blue left line-height font-20 semi-bold">{event.eventName}</p>
                            <p className="gray-text left line-height font-12">{event.time}</p>
                            <p className="gray-text left line-height font-12">{event.location}</p>
                        </div>
                    )
                }
                </div>
                </div>
            </div>
            </div>
            </section>
            <div className="stories light-red">
                <div className="main-success flex-column">
                    <p className="page-header red"><span className="bold">Success</span> Stories</p>
                    <div className="carousel-container">
                        <CarouselProvider infinite isPlaying naturalSlideWidth={1} naturalSlideHeight={0.5}  totalSlides={stories.length}>
                            <Slider>
                                {
                                    _.map(stories,(story, index) =>   
                                        <Slide index={index}>
                                            <div className="flex" style = {{ justifyContent: 'center', flexDirection: 'column',margin: '0px auto'}}>
                                                <img className="quote-icon-left" src={story.quoteImage.default} />
                                                <p className="flex black-text" style = {{ lineHeight: '27.6px', fontFamily: 'fontCabinItalic', flexDirection: 'column', alignItems: 'flex-start',textAlign: 'left' }}>{story.storyText}</p>
                                                <img className="quote-icon-right" src={story.quoteImage.default} />
                                                <div style = {{ maxWidth: '200px', display: 'flex', flexDirection: 'column',alignItems: 'flex-start',margin:'60px 0px 10px auto' }}>
                                                    <p style = {{ lineHeight: '27.0px' }} className="red font-20">{story.storyAuthor}</p>
                                                    <p className="black-text" style = {{ lineHeight: '17.0px' }} className="font-12">{story.storyDepartment}</p>
                                                </div>
                                            </div>
                                        </Slide>                         
                                    )
                                }
                            </Slider>
                            <DotGroup />

                        </CarouselProvider>
                    </div>   
                </div>
            </div>
            <section id="contact">
                <div className="flex-fluid contact_container" style={{ minHeight: '720px' }}>
                    <Location />
                    <ContactForm />
                </div>
            </section>
            <div className="blue-background">
                <div className="main flex-fluid space-btwn">
                    <div className="mobile-footer">
                       <p className="semi-bold text-white footer-font-28">Global Dart Overseas</p>
                       <p style={{ display:'flex',flexDirection:'column'}} className="padding-t-b-5 text-white font-12">1st Floor, SPD Plaza, Jyothi Nivas college road,<span>Koramangala 5th block, Bangalore - 560034</span></p>
                       <p className="padding-t-b-5 text-white bold flex-vc"><PhoneIcon /><span className="font-16 padding-l-r-10">+91 9597468489</span></p>
                       <p className="padding-t-b-5 text-white bold flex-vc"><MailIcon /><span className="font-16 padding-l-r-10 ">globaldartoverseas@gmail.com</span></p> 
                    </div> 
                    <div className="flex-column footer-navs">
                        <div className="quick-links flex-fluid space-btwn">
                            {
                                _.map(footerNavs,footerNavItems =>
                                    <Button style={{ fontWeight:'400',color:'#E7E7FE',fontSize:'20px',lineHeight:'26px',letterSpacing:0.8,textTransform:'capitalize',marginLeft:'-13px' }}>{footerNavItems.label}</Button>
                                )
                            }
                        </div>
                        <div className="icons-center social-links">
                            <p className="white font-16 padding-t-b-10 semi-bold">Follow us</p>
                                <div>
                                    <FacebookIcon className="white" style={{ marginRight:'20px'}} />
                                    <LinkedInIcon className="white" style={{ marginRight:'20px'}} />
                                    <InstagramIcon className="white" style={{ marginRight:'20px'}} />
                                </div>
                        </div>
                    </div>         
                </div>
            </div>                  
        </div>   
    )
}

export default withRouter(Home);



