import React, { Component } from 'react';
import { StyledHeader, StyledImg, StyledFooter, StyledSide, StyledNav, StyledFooterImage, StyledSearchContainer, StyledSearchInput } from '../styles/Basic';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };


  class TemporaryDrawer extends React.Component {
    state = {
      right: false,
    };
  
    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };
  
    render() {
      const { classes } = this.props;
  
      const sideList = (
        <div className={classes.list}>
          <List style={{width: '100%'}}>
            {['معرفی نهاد', 'هیئت دانشجویی', 'کانونها', 'اساس نامه نهاد', 'تماس با نهاد'].map((text, index) => (
              <ListItem style={{width: '100%'}} button key={text}>
                <p style={{display: 'flex', justifyContent: 'flex-start', width: '100%', direction: 'rtl'}}>
                {text}
                </p>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[{name: 'ارتباط با نهاد', icon: "fas fa-phone fa-1x"}, {name: 'ضیافت اندیشه استاید', icon: 'fas fa-handshake fa-1x'}, {name: 'اپلیکیشن نهاد', icon: 'fas fa-mobile-alt fa-1x'}].map((text, index) => (
              <ListItem style={{display: 'flex', justifyContent: 'flex-start', width: '100%', direction: 'rtl'}} button key={text}>
                <i style={{paddingLeft: '10px'}} class={text.icon}></i>
                <p>
                {text.name}
                </p>
              </ListItem>
            ))}
          </List>
        </div>
      );

      return (
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'flex-start'}} > 
          <Button  onClick={this.toggleDrawer('right', true)}>
            <img src="https://img.icons8.com/material/24/000000/menu.png"></img>
          </Button>
          <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('right', false)}
              onKeyDown={this.toggleDrawer('right', false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      );
    }
  }
  
  TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export const NavDrawer = withStyles(styles)(TemporaryDrawer);
  
export class Header extends Component {
    render() {
        return (
            <StyledHeader>
              <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
              <div style={{width: '30%', display: 'flex', justifyContent: 'space-around'}}>
                <StyledImg height='160px' alt={'نماد دانشگاه لرستان'} src={'http://limoographic.com/wp-content/uploads/2017/05/46.png'} />
              </div>
              <div style={{width: '30%', display: 'flex', justifyContent: 'space-around'}}>
                <StyledImg height='160px' alt={'نماد نهاد'} src={'http://www.nahad.ir/uploads/546_4962_1494319312340_hed_vasat.png'} />
              </div>
              <div style={{width: '30%', display: 'flex', justifyContent: 'space-around'}}>
                <StyledImg height='160px' alt={'عکس أقا و امام'} src={'http://www.nahad.ir/uploads/546_4962_1494318708765_hed_rast.png'} />
              </div>
              </div>
            </StyledHeader>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                    {/* <a href={'http://tvu.ac.ir/'}>
                        <StyledFooterImage src={'http://www.nahad.ir/uploads/fani-herfei_757397.png'}></StyledFooterImage>
                    </a>
                    <a href={'http://www.iau.ac.ir/'}>
                        <StyledFooterImage src={'http://www.nahad.ir/uploads/azad_university%20_logo_757398.png'}></StyledFooterImage>
                    </a> */}
                    {/* <StyledFooterImage src={'http://www.nahad.ir/uploads/200_734375_757399.png'}></StyledFooterImage> */}
                    {/* <StyledFooterImage src={'http://www.nahad.ir/uploads/payame%20noor_757400.png'}></StyledFooterImage> */}
                    {/* <StyledFooterImage src={'http://www.nahad.ir/uploads/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87_%D9%81%D8%B1%D9%87%D9%86%DA%AF%DB%8C%D8%A7%D9%86_733257.png'}></StyledFooterImage> */}
                    {/* <StyledFooterImage src={'http://www.nahad.ir/uploads/r_5_130616014958_757404.png'}></StyledFooterImage> */}
                    {/* <StyledFooterImage src={'http://www.nahad.ir/uploads/77_733253.png'}></StyledFooterImage> */}
                    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    <a href={'http://leader.ir'}>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/logo_b_757406.png'}></StyledFooterImage>   
                    </a>
                    <a href={'http://khamenei.ir'}>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/logo1_757408.png'}></StyledFooterImage>
                    </a>
                    <a href={'http://nahad.ir'}>
                    <StyledFooterImage src={'http://www.nahad.ir/uploads/546_4610_1484122168102_logo_site.png'}></StyledFooterImage>
                    </a>
                    </div>
                    <div style={{display: 'flex', marginTop: '20px', marginBottom: '20px'}}>
                      <p style={{padding: '10px'}}>

                      شماره تماس نهاد :‌ ۰۹۱۶۶۵۹۹۵۱۶
                      </p>
                      {/* <p style={{padding: '10px'}}>
                        ایمیل نهاد : hodimad21@gmail.com
                      </p> */}
                    </div>
          
            </StyledFooter>
        )
    }
}


export class SideBar extends Component {
    render() {
        return (
            <StyledSide>
                {/* <StyledSideCard>
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
                </StyledSideCard> */}
            </StyledSide>
        )
    }
}


export class SearchBar extends Component {
  render() {
    return (
      <StyledSearchContainer>
        {
          this.props.search_value.length !== 0 ? 
          <Link  style={{textDecoration: 'none', color: 'black'}} to={`/searchResult/${this.props.search_value}`}>
          <i class="fas fa-search"></i>
          </Link> :
          <i class="fas fa-search"></i>
        }
        <StyledSearchInput onChange={this.props.onChangeHandler} onKeyPress={(e) =>{ if (e.key === 'Enter'){ return <Link to={`/searchResult/${this.props.search_value}`} /> }}} type={'text'} placeholder="جستجوی خبر" maxLength='30' value={this.props.search_value}/>
      </StyledSearchContainer>
    );
  }
}

export class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                {/* <StyledList>
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
                </StyledList> */}
            </StyledNav>
        )
    }
}