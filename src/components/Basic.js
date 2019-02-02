import React, { Component } from 'react';
import { StyledHeader, StyledImg, StyledFooter, StyledSide, StyledNav } from '../styles/Basic';

export class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <StyledImg height='100px' left='100px' alt={'نماد دانشگاه لرستان'} src={'http://limoographic.com/wp-content/uploads/2017/05/46.png'} />
                <StyledImg height='100px' left='45%' top='0px' alt={'نماد نهاد'} src={'http://www.nahad.ir/uploads/546_4962_1494319312340_hed_vasat.png'} />
                <StyledImg height='100px' right='100px' alt={'عکس أقا و امام'} src={'http://www.nahad.ir/uploads/546_4962_1494318708765_hed_rast.png'} />
            </StyledHeader>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                    shit
            </StyledFooter>
        )
    }
}


export class SideBar extends Component {
    render() {
        return (
            <StyledSide>
                side bar is here
            </StyledSide>
        )
    }
}

export class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                <ul>
                    <li>
                        1
                    </li>
                    <li>
                        2
                    </li>
                    <li>
                        3
                    </li>
                    <li>
                        4
                    </li>
                </ul>
            </StyledNav>
        )
    }
}