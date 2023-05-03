import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-100 text-black'>
            <h2 className='text-3xl font-semibold text-center py-4'>Question and Answer</h2>
            <div className='px-4 py-2'>
                <p className='text-xl font-bold'>i. Tell us the differences between uncontrolled and controlled components.</p>
                <p>i. Answer : <span><span className='text-xl font-semibold'><br />Controlled Component <br /></span> A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.
                    Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.</span> </p>
                <p>
                    <span className='text-xl font-semibold'><br />Uncontrolled Component <br /></span> It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.
                </p>


            </div>
            <div className='bg-slate-100 text-black py-4 px-4'>
                <h2 className='text-xl font-bold'>ii. How to validate React props using PropTypes</h2>
                <p className=' pb-2'>ii. Answer : <span className='text-xl font-semibold py-4'><br />Validating Props <br /></span><span>
                    App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</span></p>
                    <div  className='flex items-center justify-center'>
                    <img src="https://i.ibb.co/vxQgcmj/val.jpg" alt="" />
                    </div>
            </div>
            
        </div>
    );
};

export default Blog;