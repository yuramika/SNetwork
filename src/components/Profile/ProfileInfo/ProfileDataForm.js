import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";






const ProfileDataForm = (props) => {

    let onSubmitForm = (values) => {
        props.saveProfile(values)
    }

    return (
       <Formik initialValues= {props.profile}
               onSubmit={
           (values) => onSubmitForm(values)
               }
       >
        <Form>
            <div> <button  type={'submit'}>SAVE</button></div>
            <div><b>Full name:</b> <Field name={'fullName'}
                                         type = {'fullName'}
                                         as={'input'}
                                         placeholder={'введите ФИО'}
            ></Field></div>
            <div><b>Looking for a job:</b>   <Field type="checkbox" name="lookingForAJob" />
                </div>
           <div><b>My prof skill:</b><Field name={'lookingForAJobDescription'}
                                            type = {'lookingForAJobDescription'}
                                            as={'textarea'}
                                            placeholder={'Professional skills'} />
            </div>
            <div><b>About me:</b><Field name={'aboutMe'}
                                        type = {'aboutMe'}
                                        as={'textarea'}
                                        placeholder={'About me'} />
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div>
                     <b>{key} : <Field name={'contacts.' + key}
                                       type = {'aboutMe'}
                                       as={'textarea'}
                                       placeholder={key} /></b>
                </div>
            })}
            </div>


        </Form>
       </Formik>
    )
}
export default ProfileDataForm