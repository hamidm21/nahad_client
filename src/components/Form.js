import React, { Component } from 'react';
import { StyledContainer, StyledForm, StyledMain, StyledInput, StyledLabel, StyledFieldSet, StyledAfter, StyledText, StyledDiscription, StyledLink, StyledLinkRight } from '../styles/Form';
import { StyledSubmitForm, StyledFormButton } from '../styles/Button';

export class LoginForm extends Component {
    render() {
        return(
            <StyledMain>
                <StyledContainer height={'600px'}>
                    <StyledLink href={'/register'}>
                        <StyledFormButton>
                        ثبت نام
                        </StyledFormButton>
                    </StyledLink>
                    <StyledLinkRight href={'/'}>
                        <StyledFormButton>
                        برگشت
                        </StyledFormButton>
                    </StyledLinkRight>
                    <StyledText>
                         ورود
                    </StyledText>
                    <StyledDiscription>
                       .در صورت نداشتن حساب ثبت نام کنید
                    </StyledDiscription>
                    <StyledForm autoComplete={'off'} >
                        <StyledFieldSet>
                        <StyledInput id={'email'} type={'email'} name={'email'} required/>
                        <StyledLabel for={'email'}>ایمیل</StyledLabel>
                        <StyledAfter />
                        </StyledFieldSet>
                        <StyledFieldSet>
                        <StyledInput id={'password'} type={'password'} name={'password'} required/>
                        <StyledLabel for={'password'}>رمز عبور</StyledLabel>
                        <StyledAfter />
                        </StyledFieldSet>
                        <StyledSubmitForm>
                            ثبت نام
                        </StyledSubmitForm>
                    </StyledForm>
                </StyledContainer>
            </StyledMain>
        )
    }
}


export class RegisterForm extends Component {
    render() {
        return(
            <StyledMain>
                <StyledContainer height={'650px'}>
                    <StyledLink href={'/login'}>
                        <StyledFormButton>
                            ورود
                        </StyledFormButton>
                    </StyledLink>
                    <StyledLinkRight href={'/'}>
                        <StyledFormButton>
                        برگشت
                        </StyledFormButton>
                    </StyledLinkRight>
                    <StyledText>
                        ثبت نام کاربر
                    </StyledText>
                    <StyledDiscription>
                       .در صورت داشتن حساب کاربری از ورود استفاده کنید
                    </StyledDiscription>
                    <StyledForm autoComplete={'off'} >
                        <StyledFieldSet>
                        <StyledInput id={'username'} type={'text'} name={'username'} required/>
                        <StyledLabel for={'username'}>نام کاربری</StyledLabel>
                        <StyledAfter />
                        </StyledFieldSet>
                        <StyledFieldSet>
                        <StyledInput id={'email'} type={'email'} name={'email'} required/>
                        <StyledLabel for={'email'}>ایمیل</StyledLabel>
                        <StyledAfter />
                        </StyledFieldSet>
                        <StyledFieldSet>
                        <StyledInput id={'password'} type={'password'} name={'password'} required/>
                        <StyledLabel for={'password'}>رمز عبور</StyledLabel>
                        <StyledAfter />
                        </StyledFieldSet>
                        <StyledSubmitForm>
                            ثبت نام
                        </StyledSubmitForm>
                    </StyledForm>
                </StyledContainer>
            </StyledMain>
        )
    }
}