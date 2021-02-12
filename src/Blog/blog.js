import React, { useState } from 'react';
import Navs from '../Home/navs';
import _ from 'lodash';
import Button from '@material-ui/core/Button';


const Blog = () => {
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);
    const blogs = [
        {
            label: 'Emerging tech',
            date: '23 JAN 2018',
            icon: require('./../assets/educationimage/education.jpg'),
            text: 'Here is our trending technologies based on every year from the past 10 years from basic to high end profession Here is our trending technologies based on every year from the past 10 years from basic to high end profession Here is our trending technologies based on every year from the past 10 years from basic to high end profession ',
            
        },
        {
            label: 'First ever automated flight',
            date: '23 JAN 2018',
            icon: require('./../assets/educationimage/education.jpg'),
            text: 'Here is our trending technologies based on every year from the past 10 years from basic to high end profession Here is our trending technologies based on every year from the past 10 years from basic to high end profession',
        },
        {
            label: 'Stock market in 2020',
            date: '23 JAN 2018',
            icon: require('./../assets/educationimage/education.jpg'),
            text: 'Here is our trending technologies based on every year from the past 10 years from basic to high end profession Here is our trending technologies based on every year from the past 10 years from basic to high end profession Here is our trending technologies based on every year from the past 10 years from basic to high end profession '
        },
    ]
    function increment() {
        setActiveArticleIndex((activeArticleIndex + 1 )% blogs.length)
    }

    const activeArticle = blogs[activeArticleIndex];
   
    return (
        <div className="blogs">
           <Navs /> 
           <div className="blog main flex-fluid">
               <div className="left">
                   <div className="mobile-blog">
                   <p className="font-44 bold" style={{ fontFamily:'Helvetica'}}>Reads</p>
                   <div className="flex space-btwn">
                    <p className="font-20 gray-text margin-t-r-b-l">Recent</p>
                    <Button style={{ color:'#c8102e',textTransform:'capitalize'}} onClick={increment} className="font-20 margin-t-r-b-l">Read Next</Button>
                    </div>
                   </div>
                    
                <div className="trends margin-t-b-20">
                    <img style={{ width:'100%'}} src={activeArticle.icon.default}/>
                    <p className="font-34 semi-bold">{activeArticle.label} <span style={{ display:'block' }} className="font-12 gray-text margin-t-r-b-l">{activeArticle.date}</span></p>
                    <p className="font-12 semi-bold margin-t-r-b-l">{activeArticle.text}</p>
                </div>
                </div>
             
                <div className="right" style = {{ backgroundColor:'#E7E7FE', margin: '0px 30px',padding: '50px',maxWidth:'380px'}}>
                    <p style={{ fontWeight: 'lighter'}} className="font-14">SIMILAR</p>
                    {
                        _.map(blogs,(blog,index) =>
                            activeArticleIndex === index ? null : 
                            <div className="margin-top-20">
                                <p className="font-20 semi-bold no-wrap">{blog.label}</p>
                                <p className="font-12 gray-text">{blog.date}</p>
                                <p className="font-12 gray-text">{blog.text}</p>
                            </div>    
                        )
                    }
    
                </div>
           </div>
        </div>
    )
}

export default Blog;
