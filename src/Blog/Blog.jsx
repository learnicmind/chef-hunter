import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Blog = () => {

    const [loading, setLoading] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.actual-pdf')
        setLoading(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWitdth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWitdth, componentHeight);
            setLoading(false);
            doc.save('receipt.pdf')
        })
    }

    return (
        <div className='bg-slate-100'>
            <div className=' py-8 text-black w-9/12 mx-auto actual-pdf'>
                <h2 className='text-3xl font-semibold text-center py-4'>Question and Answer</h2>
                <div className='px-8'>
                    <p className='text-xl font-bold'>i. Tell us the differences between uncontrolled and controlled components.</p>
                    <p><span className='text-xl font-semibold'> Answer </span> : <span><span className='text-xl font-semibold'><br />Controlled Component :: <br /></span> A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.
                        Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.</span> </p>
                    <p>
                        <span className='text-xl font-semibold'><br />Uncontrolled Component :: <br /></span> It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.
                    </p>


                </div>
                <div className='bg-slate-100 text-black py-4 px-8'>
                    <h2 className='text-xl font-bold'>ii. How to validate React props using PropTypes</h2>
                    <p className=' pb-2'><span className='text-xl font-semibold'> Answer </span>: <span className='text-xl font-semibold py-4'><br />Validating Props :: <br /></span><span>
                        App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</span></p>
                    <div className='flex items-center justify-center'>
                        <img src="https://i.ibb.co/vxQgcmj/val.jpg" alt="" />
                    </div>
                </div>

                <div className='bg-slate-100 text-black py-4 px-8'>
                    <h2 className='text-xl font-bold'>iii. the difference between nodejs and express js.</h2>
                    <p><span className='text-xl font-semibold'> Answer </span>: Node.js and Express.js are two different but related technologies commonly used in web development. Here are the key differences between them: <br />
                        1. Node.js is a runtime environment for executing JavaScript code outside of a browser, while Express.js is a framework for building web applications using Node.js.
                        2. Node.js can be used to build a variety of applications, including web servers, desktop applications, and command-line tools. Express.js is specifically designed for building web applications and provides a set of features that are optimized for this use case.
                    </p>
                </div>

                <div className='bg-slate-100 text-black pb-8 px-8'>
                    <h2 className='text-xl font-bold'>iv. What is a custom hook, and why will you create a custom hook?</h2>
                    <p><span className='text-xl font-semibold'> Answer </span>: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.<br />
                        That’s it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. If that function calls other hooks, like useEffect, useState, or maybe another custom hook, then your function is itself a hook, and, by convention, should be given a name that starts with “use” to make it clear that it is a hook.

                        If hooks are so similar to regular functions, you might wonder why we even have the “hook” concept. The reason we need this concept is because hooks are special. They are functions that also have state that is persisted under the hood by React across calls. Because of this, there are rules of hooks that must always be followed so React doesn’t get confused. The use... naming convention helps us identify which functions are hooks so we can be sure to follow the rules.

                        Following are some examples of when it might make sense to create a custom hook.</p>
                </div>

            </div>

            <div className=' ml-48 pb-4'>

                <button className="btn flex items-center justify-center gap-2"
                    onClick={downloadPDF}
                    disabled={!(loading === false)}
                >
                    {loading ? (<span>Downloading</span>) :
                        (<span>Download PDF <FaDownload></FaDownload></span>)
                    }
                </button>
            </div>
        </div>
    );
};

export default Blog;