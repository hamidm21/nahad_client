import React, { Component } from 'react';
import { StyledHeader, StyledImg, StyledFooter, StyledSide, StyledNav, StyledList, StyledItem, StyledAnchor, StyledArrow, StyledFooterImage, StyledLoginItem, StyledCollapsed } from '../styles/Basic';
import { StyledSideCard } from '../styles/Card';
import img from '../assets/img/bab301162171b7a78d6027083417ed1d (1).png'; 
 
export class Header extends Component {
    render() {
        return (
            <StyledHeader>
                {/* <StyledImg width='450px' height='150px' left='38%' alt={'نماد دانشگاه لرستان'} src={img}/> */}
                <StyledImg height='130px' left='5%' alt={'نماد دانشگاه لرستان'} src={'http://limoographic.com/wp-content/uploads/2017/05/46.png'} />
                <StyledImg height='130px' left='43%' alt={'نماد نهاد'} src={'http://www.nahad.ir/uploads/546_4962_1494319312340_hed_vasat.png'} />
                <StyledImg height='130px' left='80%' alt={'عکس أقا و امام'} src={'http://www.nahad.ir/uploads/546_4962_1494318708765_hed_rast.png'} />
            </StyledHeader>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                    <a href={'http://tvu.ac.ir/'}>
                        <StyledFooterImage src={'http://www.nahad.ir/uploads/fani-herfei_757397.png'}></StyledFooterImage>
                    </a>
                    <a href={'http://www.iau.ac.ir/'}>
                        <StyledFooterImage src={'http://www.nahad.ir/uploads/azad_university%20_logo_757398.png'}></StyledFooterImage>
                    </a>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/200_734375_757399.png'}></StyledFooterImage>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/payame%20noor_757400.png'}></StyledFooterImage>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87_%D9%81%D8%B1%D9%87%D9%86%DA%AF%DB%8C%D8%A7%D9%86_733257.png'}></StyledFooterImage>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/r_5_130616014958_757404.png'}></StyledFooterImage>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/77_733253.png'}></StyledFooterImage>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/logo_b_757406.png'}></StyledFooterImage>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/logo1_757408.png'}></StyledFooterImage>

            </StyledFooter>
        )
    }
}


export class SideBar extends Component {
    render() {
        return (
            <StyledSide>
                <StyledSideCard>
                    <a style={{marginRight: '10px'}}>06633206474</a>
                    <i style={{position: 'absolute', right: '10px'}} class="fas fa-phone fa-2x"></i>
                </StyledSideCard>
                <StyledSideCard>
                    <p style={{marginRight: '40px'}}>ضیافت اندیشه اساتید</p>
                    <i style={{position: 'absolute', right: '10px'}} class="fas fa-handshake fa-2x"></i>
                </StyledSideCard>
                <StyledSideCard>
                    <p style={{marginRight: '10px'}} >اپلیکیشن نهاد</p>
                    <i style={{position: 'absolute', right: '10px'}} class="fas fa-mobile-alt fa-2x"></i>
                </StyledSideCard>
                <StyledSideCard>
                    <p style={{marginRight: '10px'}}>کلام رهبری</p>
                    <i style={{position: 'absolute', right: '10px'}} class="fas fa-quote-right fa-2x"></i>
                </StyledSideCard>
            </StyledSide>
        )
    }
}

export class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                <StyledList>
                <StyledLoginItem>
                        <StyledAnchor toggle='0' href={'/login'} color={'rgb(53, 131, 224)'}>
                            ورود/ثبت نام
                        </StyledAnchor>
                    </StyledLoginItem>
                    <StyledItem onClick={e => this.props.onToggle(e, '1')}>
                        <StyledAnchor>
                            معرفی نهاد
                        </StyledAnchor>
                        <StyledArrow open={this.props.toggle_id === '1' ? true : false}/>
                    </StyledItem>
                    <StyledCollapsed open={this.props.toggle_id === '1' ? true : false} >
                        <StyledAnchor>
                            مسئول نهاد
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledCollapsed open={this.props.toggle_id === '1' ? true : false} >
                        <StyledAnchor>
                            معاون نهاد
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledCollapsed open={this.props.toggle_id === '1' ? true : false} >
                        <StyledAnchor>
                            مدیر اجرائی
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledCollapsed open={this.props.toggle_id === '1' ? true : false} >
                        <StyledAnchor>
                            واحد خواهران
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledCollapsed open={this.props.toggle_id === '1' ? true : false} >
                        <StyledAnchor>
                            مسئول ارتباطات و هماهنگی
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledItem onClick={e => this.props.onToggle(e, '2')}>
                        <StyledAnchor>
                            هییت دانشجویی
                        </StyledAnchor>
                        <StyledArrow open={this.props.toggle_id === '2' ? true : false} />
                    </StyledItem>
                    <StyledCollapsed open={this.props.toggle_id === '2' ? true : false} >
                        <StyledAnchor>
                            برادران
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledCollapsed open={this.props.toggle_id === '2' ? true : false} >
                        <StyledAnchor>
                            خواهران
                        </StyledAnchor>
                    </StyledCollapsed>
                    <StyledItem onClick={e => this.props.onToggle(e, '3')}>
                        <StyledAnchor>
                            کانونها
                        </StyledAnchor>
                    </StyledItem>
                    <StyledItem onClick={e => this.props.onToggle(e, '4')}>
                        <StyledAnchor>
                            اساسنامه نهاد
                        </StyledAnchor>
                    </StyledItem>
                    <StyledItem onClick={e => this.props.onToggle(e, '5')}>
                        <StyledAnchor>
                            تماس با نهاد
                        </StyledAnchor>
                    </StyledItem>
                </StyledList>
            </StyledNav>
        )
    }
}