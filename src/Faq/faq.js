import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { ExpandMore } from '@material-ui/icons';
import _ from 'lodash';

const  Faq = () => {
    const faqs = [
        {
            question: '1. Will Consultancy provide career advice by looking into our CV.?',
            answer: 'A. We do provide career advice based on your CV and interest in educational courses.'
        },
        {
            question: '2. Does your consultancy charge any fees for the processing of admission.?',
            answer: 'A. No, For UK the entire admission process is free. For other countries depends on the country you choose.'
        },
        {
            question: '3. Are there any scholarships for international students.?',
            answer: 'A. Yes, depends on your profile and academic background there are scholarships opportunities for international students.'
        },
        {
            question: '4. What would be the common fee structure in UK.?',
            answer: 'A. It depends on the university and the course selection.'
        },
        {
            question: '5. Will your consultancy help in providing the accommodation.?',
            answer: 'A. Yes, this comes under post visa services, we provide both university and private accommodation.'
        },
        {
            question: '6. What are post-visa services.?',
            answer: 'A. If Visa is approved, we provide sim cards, travel cards, flight ticket booking assistance, airport pickup.'
        },
        {
            question: '7. Does your company provide internship in UK and Germany.?',
            answer: 'A. Yes, we do provide internship services, as we do have tie-ups with some companies at UK.'
        },
        {
            question: '8. Is IELTS or any other English language test required.?',
            answer: 'A. It depends on the university selection some universities need IELTS score.'
        },
        
    ]
    return (
        <div className="faq">
            {/* <Nav /> */}
            <div className="main">
            <p className="page-header font-44">Few common <span className="semi-bold">questions ?</span></p>
            <div className="margin-top-40">
            {
                _.map(faqs,faq =>
                  <div style = {{ maxWidth:'80%'}}>
                      <section id="faq">
                        <Accordion style={{ boxShadow:'none'}}>
                            <AccordionSummary style={{ padding: 0 }} expandIcon={<ExpandMore />}>
                                    <p className="font-20 margin-t-b-20" style={{ fontWeight: 300 }}>{faq.question}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="font-16 gray-text">{faq.answer}</p>
                            </AccordionDetails>
                        </Accordion>
                      </section>
                  </div>     
                )
            }
            </div>
            </div>
        </div>
    )
}

export default Faq;


