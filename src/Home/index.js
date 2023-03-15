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



const steps = [
    {
        header: 'Counselling',
        info: "Students have various career options to choose specially after under graduation. Global Dart provides you with the right direction when it comes to decision making by giving you detailed information on your options…",
        card: false,
        link: false,
        image: require('../assets/GDillus/1.png'),
        numberImage: require('./../assets/Numbers/1.png'),
        styles: { width: '100%', marginTop: '35px' }
    },
    {
        header: 'University and course selection',
        info: "Although the ranking mechanism varies and differs as per the ranking institution, it does provide an insight into the quality of the Institution.We at Global Dart make sure that we apply to only recognized and well accredited institutions.We ask the students if they have a specific location choice in the chosen country and try to select universities in the vicinity of the given location.",
        card: false,
        link: false,
        image: require('./../assets/GDillus/2.png'),
        numberImage: require('./../assets/Numbers/2.png'),
        styles: { width: '100%', marginTop: '-15px' }    
    },
    {
        header: 'Admissions',
        info: "These are critical. We provide exact deadlines for Spring/Summer/Fall intakes. Some Universities have multiple deadlines i.e. Scholarship/Priority deadline and documents deadline. It’s important to follow the deadlines strictly as students tend to miss out on an entire year because of it.",
        // card: true,
        right: true,
        link: true,
        image: require('./../assets/GDillus/3.png'),
        numberImage: require('./../assets/Numbers/3.png'),
        styles: { width: '100%' },
        redirect: '/admission'
    },
    {
        header: 'VISA Processing',
        info: "Post confirmation of an admission, the student has to apply for Study Visa/ Permit to the respective embassies.We assist students in filing the Visa applications as per the country’s procedure. Some of them may have online forms while others have paper based forms",
        card: false,
        link: true,
        image: require('./../assets/GDillus/4.png'),
        numberImage: require('./../assets/Numbers/4.png'),
        styles: { width: '100%', marginTop: '13px' },
        redirect: '/visaprocessing'

    },
    {
        header: 'Travel Briefing',
        info: "We assist all students with their travel and relocation for the course to the new country thereby ensuring a worry free transition. Moving to a new country, be it for study or settling, is no trivial task. We understand the stress and pressure that comes along with this. Excitement at times eventually gives way to anxieties as one gets to hear various experiences had in the country.",
        // card: true,
        left: true,
        link: false,
        image: require('./../assets/GDillus/5.png'),
        numberImage: require('./../assets/Numbers/5.png'),
        styles: { width: '100%', marginTop: '-17px' }
    },
    {
        header: 'Post VISA Services',
        info: "We view this as a transitional phase and hence offer a complete and thorough travel and relocation service, leaving no stone unturned to ensure a smooth transition. Our travel and relocation expertise enable you to literally relax while we handle it all.",
        card: false,
        link: false,
        image: require('./../assets/GDillus/6.png'),
        numberImage: require('./../assets/Numbers/6.png'),
        styles: { width: '100%', marginTop: '13px' }
    },
    {
        header: 'Pre and Post Travel Assistance',
        info: "Knowing the right things to carry is essential. Many students carry things which are irrelevant which increases the baggage load. There are certain things which are useful in India that would be completely useless there. The dress code at institutions is very informal so we need to prepare accordingly.",
        // card: true,
        right: true,
        link: false,
        image: require('./../assets/GDillus/7.png'),
        numberImage: require('./../assets/Numbers/7.png'),
        styles: { width: '100%', marginTop: '-5px' }
    },
    {
        header: 'Career Assistance',
        info: "This is something that is mostly overlooked as a practice in other service providers. We at Global Dart however recognize the importance of mentally preparing a candidate with the right expectations so that the transition is as easy as possible.",
        card: false,
        link: false,
        image: require('./../assets/GDillus/8.png'),
        numberImage: require('./../assets/Numbers/8.png'),
        styles: { width: '100%',  marginTop: '-11px' }
    },
]

const benifits = [
    {
        title: 'Free Counselling',
        subtitle: 'Counselling on Value of Degree, Quality of education and Costs',
        icon: require('./../assets/benfitsicons/meeting.png')
    },
    {
        title: 'Admission letter in a week',
        subtitle: 'Receive Admission letter in just 7 working days',
        icon: require('./../assets/benfitsicons/document.png')

    },
    {
        title: 'Save VISA Charges',
        subtitle: "Specific breakdown of students VISA charges and their sponsors",
        icon: require('./../assets/benfitsicons/savings.png')
    },
    {
        title: 'Free SIM and Forex cards',
        subtitle: 'We also help students with the FOREX cards and travel Insurance',
        icon: require('./../assets/benfitsicons/sim-card.png')
    },
    {
        title: 'Internship Assured',
        subtitle: 'Internships give the students real time work experience in a foreign country',
        icon: require('./../assets/benfitsicons/job.png')
    },
    {
        title: '24/7 Assistance',
        subtitle: 'We are available round the clock to support students',
        icon: require('./../assets/benfitsicons/helpline.png')
    }
]

const pastEvents = [
    {
        date: '20 Jan 2021',
        eventName: 'Latest trends in tech in 2021',
        time: '9:30 AM - 3:00 PM',
        location: 'Bangalore'
    },
]

const upcomingEvents = [
    {
        date: '25 Feb 2021',
        webinar: true,
        eventName: 'Universities Introduction meetup',
        time: '9:30 AM - 3:00 PM'
    },
    {
        date: '1 Mar 2021',
        seminar: true,
        eventName: 'Application and Travel Planning',
        time: '9:30 AM - 3:00 PM',
        location: 'Bangalore',
    },
    {
        date: '15 Mar 2021',
        seminar: true,
        eventName: 'Course Discussion',
        time: '9:30 AM - 3:00 PM',
        location: 'Bangalore',
    }
]

const stories = [
    {
        quoteImage: require('./../assets/quotes/right-quotes-symbol.png'),
        storyText: 'It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout. The point of using lorem ipsum is that it has a more or less distribution of letters, as opposed to using content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use. ',
        storyAuthor: 'Akshay Shetty',
        storyDepartment: 'London school of economics'
    },
    {
        quoteImage: require('./../assets/quotes/right-quotes-symbol.png'),
        storyText: 'It is a long established fact that a reader will be distracted by the readable content of the page when looking at its layout. The point of using lorem ipsum is that it has a more or less distribution of letters, as opposed to using content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use. ',
        storyAuthor: 'Dinesh Prasad',
        storyDepartment: 'London school of economics'
    }
]

const universities = [
    {
       universityImage: require('./../assets/universitieslogos/1.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/2.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/3.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/4.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/5.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/6.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/7.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/8.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/9.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/10.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/11.png'),
    },
    {
        universityImage: require('./../assets/universitieslogos/12.png'),
    }
]

const director = [
    {
        name: 'Avinash Nakka',
        description: 'Director / Co-Founder',
        alumini: 'University of East London Alumini',
    },
    {
        name: 'Surya Kiran Kurapati',
        description: 'Director / Co-Founder',
        alumini: 'Kingston University (UK) Alumini',
    }
]

const footerNavs = [
    { label: 'Admissions', link: '/admission' }, { label: 'VISA', link: '/visaprocessing' }, { label: 'Blog', link: '/blog' }, { label: 'FAQ', link: '/faq' }, { label: 'Contact', link: '#contact' }]


function StepDetails(props) {
    return (
        <div className="step flex-fluid reverse">
            <div className="steps">
                <div className="numbers" style={{ backgroundImage: `url(${props.step.numberImage.default})`, padding: '5px 0px' }} alt="image" />
                <p className="header black">{props.step.header}</p>
                <p className="info font-16">{props.step.info}</p>
                {props.step.link && <><IconButton onClick={() => props.history.push(props.step.redirect)} style={{ padding: 0 }}><span className="font-16 red semi-bold">Know More</span><ArrowForwardIcon style={{ color: '#c8102e', fontSize: 30, paddingLeft: 3 }} /></IconButton></>}
            </div>
            <div className="illustration" style={{ ...props.step.styles, flex: '1 1', marginRight: 50 }}><div className="illustrations" style={{ backgroundImage: `url(${props.step.image.default})`, height: '100%', width: '100%' }} alt="image" /></div>
        </div>
    )
}

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.debouncedScrollHandler = _.debounce(this.handleScroll, 10)

        document.addEventListener('scroll', this.debouncedScrollHandler)
    }

    componentDidMount = () => {
        const navElement = document.getElementById('gd-nav');
        navElement && navElement.classList.add('white-text');
    }


    handleScroll = (e) => {
        const navElement = document.getElementById('gd-nav');
        const landing = document.getElementById('landing')

        if (landing)
            if (window.scrollY > landing.offsetHeight) {
                navElement.classList.remove('white-text');
            } else {
                navElement.classList.add('white-text');
            }
    }

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.debouncedScrollHandler)
    }

    render() {

        return (
            <div>
                <div className="page_1" id="landing">
                    <div className="home-align main flex-fluid">
                        <div style={{ backgroundColor: 'fafafa' }}>
                            <div className="background-image" style={{ backgroundImage: `url(${home})` }} alt="home"></div>
                            <div className="image-height">
                                <p><span style={{ fontFamily: 'Helvetica' }} className="font-34 text-white">Aiming</span><p><span className="description font-88 text-white">Global</span> <span style={{ fontFamily: 'Helvetica-Bold' }} className="font-88 text-white">Education</span></p></p>
                                <p className="font-16 text-white header-info">Higher education has never been this easier. In this ever challenging world, education at the Global level is the key for a successful career. GlobalDart guides the aspiring students around the globe to access the latest courses from top institutions in the world. GlobalDart handles ways and means for you to aim for a better career and life.</p>
                                <a className="link" href="#admissions">
                                    <Button style={{ opacity: 0.8, color: '#ffff', fontSize: '16px', width: '250px', height: '44px', backgroundColor: '#c8102e', textTransform: 'initial', boxShadow: 'unset', fontWeight: 600 }} variant="contained">Know how</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="admissions">
                    <div className="blue-light-bg">
                        <div className="page_2 main" style={{ padding: '70px 0px' }}>
                            <div className="padding-b-50 sub-page-header-container">
                                <p className=" sub-page-header" >Forget about the tedious process for joining top institutions in the world, we've got your back!  <p className="semi-bold padding padding-t-b-10">GlobalDart takes you through a quick 8-step framework to join your desired institution </p> <span className="main-blue bold padding-t-b-10">Let's see how</span></p>
                            </div>
                            {
                                _.map(steps, step => <div className="card-row margin-t-b-20">
                                    {
                                        step.card ?
                                            <Card
                                                className="card-align"
                                                style={{ maxWidth: '1000px', padding: '25px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', bottom: '20px', marginTop: '30px', marginBottom: '30px' }}
                                            >
                                                <StepDetails step={step} />
                                            </Card> :
                                            <StepDetails
                                                className="card-align-right"
                                                step={step}
                                                {...this.props}
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
                                _.map(benifits, benifit => <div className="benefit">
                                        <img className="icon" src={benifit.icon.default} />
                                        <p className="title">{benifit.title}</p>
                                        <p className="infos font-14" style={{ color: '#cccccc' }}>{benifit.subtitle}</p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
               <div style={{ backgroundColor: '#ffffff'}} className="universities">
                   <div className="main">
                        <p className="page-header"><span className="bold">Our Universities</span></p>
                        <div className="grid-logos">
                            {
                                _.map(universities,university =>
                                <div className="align-university">
                                    <img className="university-size" src = {university.universityImage.default} alt="universities-logo"/>
                                </div> 
                                )
                            }
                        </div>
                   </div>           
               </div>
                {/* <section id="events">
                    <div className="events">
                        <div className="main flex-column">
                            <div className="align-center-justify-space-around flex-fluid">
                                <p className="page-header"> <span className="bold"> Events </span> for Students</p>
                                <p style={{ maxWidth: '500px' }} className="font-14 space-btwn gray-text">Our university partners visit our offices in India regularly. They do so to speak and meet with students like you in person.Three times a year we plan events in colleges and campuses near our offices.We give presentations and we have an information booth for you to ask us questions in an informal setting</p>
                            </div>
                            <div className="flex-fluid space-even margin-top-40">
                                <div>
                                    <p className="light-black margin-b-20 flex font-14">UPCOMING EVENTS</p>
                                    {
                                        _.map(upcomingEvents, event =>
                                            <div className="margin-t-r-b-l ">
                                                <p className="main-blue font-12">{event.date}</p>
                                                <p className="main-blue left line-height font-20 semi-bold">{event.eventName}</p>
                                                <p className="gray-text left  font-12">{event.location}</p>

                                                <p className="gray-text left line-height font-12">{event.time}</p>
                                                {
                                                    event.webinar && <Button className="font-12" style={{ display: 'flex', justifyContent: 'left', padding: '5px 0px', fontSize: '12px', color: '#c8102e' }} className="red left"><ExitToAppIcon className="red icon-padding" />Join Meeting</Button>
                                                }
                                                {
                                                    event.seminar && <Button style={{ color: '#c8102e', padding: '10px 0px' }} className="left font-12">REGISTER</Button>
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                                <div style={{ lineHeight: '30.6px' }}>
                                    <p className="light-black margin-b-20 font-14 line-height flex semi-bold">PAST EVENTS</p>

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
                </section> */}
                <div style={{ backgroundColor: '#ffffff'}} className="ceo">
                    <div className="main">
                            <p className="page-header bold">Our <span className="main-blue bold">Leadership</span></p>
                            <p className="ceo-words">As a UK alumni, we always wanted to fulfil the student's dream for global education. At Global Dart, we assist the students for a quality research of their Programme and have a comprehensive guide in choosing the foundation Programme and university setting. Our post-orientation services are proving to have a great help for students even after graduation. We are here to extend our hands for student's support and make their dream to reality.</p>
                            <div className="flex-fluid">
                                {
                                    _.map(director,direct => 
                                        <div className="flex-column director-align">
                                            <p className="left line-height font-20 bold">{direct.name}</p>
                                            <p className="semi-bold main-blue left line-height font-14">{direct.description}</p>
                                            <p className="gray-text left line-height font-12">{direct.alumini}</p>
                                            <p className="gray-text left line-height font-12">{direct.content}</p>
                                        </div>
                                    )
                                } 
                            </div>
                    </div>              
                </div>
                <div className="stories light-red">
                    <div className="main-success flex-column">
                        <p className="page-header red"><span className="bold">Success</span> Stories</p>
                        <div className="carousel-container">
                            <CarouselProvider infinite isPlaying naturalSlideWidth={1} naturalSlideHeight={0.5} totalSlides={stories.length}>
                                <Slider>
                                    {
                                        _.map(stories, (story, index) =>
                                            <Slide index={index}>
                                                <div className="flex" style={{ justifyContent: 'center', flexDirection: 'column', margin: '0px auto' }}>
                                                    <img className="quote-icon-left" src={story.quoteImage.default} />
                                                    <p className="flex black-text" style={{ lineHeight: '27.6px', fontFamily: 'fontCabinItalic', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>{story.storyText}</p>
                                                    <img className="quote-icon-right" src={story.quoteImage.default} />
                                                    <div style={{ maxWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '60px 0px 10px auto' }}>
                                                        <p style={{ lineHeight: '27.0px' }} className="red font-20">{story.storyAuthor}</p>
                                                        <p className="black-text" style={{ lineHeight: '17.0px' }} className="font-12">{story.storyDepartment}</p>
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
                            <p className="flex-column padding-t-b-5 text-white font-12">
                                3rd Floor, 112/1, 11th Cross,
                                <span>17th main, Sector 4, HSR layout, Bangalore - 560034</span></p>
                            <p className="padding-t-b-5 text-white bold flex-vc"><PhoneIcon /><span className="font-16 padding-l-r-10">+91 9597468489</span></p>
                            <p className="padding-t-b-5 text-white bold flex-vc"><MailIcon /><span className="font-16 padding-l-r-10 ">globaldartoverseas@gmail.com</span></p>
                            <div className='padding-t-b-10'>
                            <p className="text-white padding-t-b-5 font-12 ls-1 bold">WHITEFIELD BRANCH</p>
                            <p className="flex-column text-white font-12">705, A Block, Mantri Global Heights,<span> Kannamangala Main Road, Bangalore - 560067</span></p>
                            </div>
                            <div className='padding-t-b-10'>
                                <p className="text-white padding-t-b-5 font-12 ls-1 bold">MADANAPALLE BRANCH</p>
                                <p className="flex-column text-white font-12">15-230, Burma St, Rama Gopal Naidu Colony,<span> Madanapalle, Andhra Pradesh - 517325</span></p>
                            </div>
                            
                            
                        </div>
                        <div className="flex-column footer-navs">
                            <div className="quick-links flex-fluid space-btwn">
                                {
                                    _.map(footerNavs, footerNavItems =>
                                        // <Button style={{  }} onClick={() => props.history.push(footerNavItems.link)}>{footerNavItems.label}</Button>
                                        <a
                                            className="quick-link link"
                                            href={footerNavItems.link}
                                        >
                                            {footerNavItems.label}
                                        </a>
                                    )
                                }
                                {

                                }
                            </div>
                            <div className="icons-center social-links">
                                <p className="white font-16 padding-t-b-10 semi-bold">Follow us</p>
                                <div>
                                    <a
                                        target="_blank"
                                        href={'https://www.facebook.com/globaldartoverseas'}
                                    >
                                        <FacebookIcon className="white" style={{ margin: '0px 10px' }} />
                                    </a>
                                    <a
                                        target="_blank"
                                        href={'https://www.instagram.com/globaldartoverseas'}
                                    >
                                        <InstagramIcon className="white" style={{ margin: '0px 10px' }} />
                                    </a>
                                    <a
                                        target="_blank"
                                        href={'https://www.linkedin.com/globaldartoverseas'}
                                    >
                                        <LinkedInIcon className="white" style={{ margin: '0px 10px' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);