import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";
import {updateNewPostText} from "../../Redux/state";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../Redux/profile-reducer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const MyPosts = (props) => {
 /*   let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewTextPost(text)
    } */
    let newPostElement = React.createRef()
    let PostsElement = props.PostData.map((posts)=>{return( <Post message={posts.message} likesCount={posts.likesCount}/>)})
    return (
        <div>
                    <div className={classes.MyPost}><h3>MY POST</h3></div>
            <div className={classes.border}>
                 <AddPostForm addPost={props.addPost} />
            </div>
            {PostsElement}
        </div>


    )
}
const loginFormSchema = Yup.object({
    newTextPost : Yup.string().min(2, 'Create any for add').max(10, 'only 10 symbols').required('')
});

const  AddPostForm = (props) => {

    let AddNewPost = (values) => {
        props.addPost(values)
    }


    return (

            <Formik initialValues={
                {newTextPost : ''}
            } validationSchema={loginFormSchema}  onSubmit={(values, {resetForm}) => {
                AddNewPost( values.newTextPost );
                resetForm( {values: ''} );

            }
            }
            >
       <Form>

        <div>
            <Field name={'newTextPost'}
                   type = {'newTextPost'}
                   as={'textarea'}
                   placeholder={'Что нового?'}
                  ></Field>
            <ErrorMessage name='newTextPost' component='p' />
        </div>
    <div>
        <button  type={'submit'}>ADD POST</button>
    </div>
            </Form>

        </Formik>
    )
}

export default MyPosts;