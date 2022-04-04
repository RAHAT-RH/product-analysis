import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="container  my-5">
            <h1 className='my-5 text-center display-5'>Blogs</h1>
            <div className="row">
                <div className="col-lg-6 mx-auto my-4 ">
                    <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded ">
                        <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                        <p className="mb-0 mt-2 font-italic">"The React Context API is a way to effectively create global variables for a React app that can be passed around.  This is an alternative to "prop drilling" or moving props from grandparents to children to parents.  The topic is also referred to as a simple, light method for managing the state using Redox."</p>
                        <footer className="blockquote-footer pt-4 mt-4 border-top">What is Context Api?
                            <cite title="Source Title"></cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="col-lg-6 mx-auto my-2">
                    <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                        <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                        <p className="mb-0 mt-2 font-italic">"HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed. Elements such as <code>header , footer and article</code>  are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. "</p>
                        <footer className="blockquote-footer pt-4 mt-4 border-top">What Is Semantic Tag?
                            <cite title="Source Title"></cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="col-lg-6 mx-auto my-2">
                    <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                        <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                        <p className="mb-0 mt-2 font-italic">"Inline: Displays an element as an inline element. Any height and width properties will have no effect. <br /> Inline-block: Displays an element as an inline-level block container. You CAN set height and width values."</p>
                        <footer className="blockquote-footer pt-4 mt-4 border-top">inline vs inline block Elements
                            <cite title="Source Title"></cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Blog;