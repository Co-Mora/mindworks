import React from 'react';
import { styled } from 'baseui';
import { Grid, Cell, ALIGNMENT, BEHAVIOR } from 'baseui/layout-grid';
import { Navigation } from "baseui/side-navigation";
import { AiFillHome } from 'react-icons/ai';

const Container = styled('div', {
    height: '100%',
    flexDirection: 'column',
    // display: 'flex',
});

const Signup: React.FC = () => {
    const [activeItemId, setActiveItemId] = React.useState(
        "#primary"
    );
    return (
        <Container>
            <Grid gridGaps={0} gridMargins={0} gridGutters={0} gridUnit={'%'}>
                <Cell span={2.5}>
                    <div style={{ height: '100vh', backgroundColor: '#F9F8F9', borderRightColor: "#DDD", borderRightWidth: 2 }}>
                        <Navigation
                            overrides={{
                                Root: {
                                    style: {
                                        padding: '5%'
                                    },
                                    
                                },
                                NavItemContainer: {
                                  style: {
                                    padding: '1.5%'
                                }  
                                },
                                NavLink: {
                                    style: {
                                    }
                                },
                                SubNavContainer: {
                                    style: {
                                    },
                                },
                                NavItem: {
                                    style: ({ $active, $theme }) => {
                                        if (!$active)
                                            return {
                                                ':hover': {
                                                    color: $theme.colors.positive400,
                                                    borderTopLeftRadius: 50,
                                                    borderBottomLeftRadius: 50,
                                                },
                                            };
                                        return {
                                            backgroundColor: $theme.colors.positive400,
                                            borderTopLeftRadius: 50,
                                            borderBottomLeftRadius: 50,
                                            color: $theme.colors.mono900,
                                            ':hover': {
                                                color: $theme.colors.positive400,
                                            },
                                        };
                                    },
                                    
                                },
                            }}
                            items={[
                                {
                                    title: <div style={{ }}><AiFillHome size={25} style={{ paddingTop: 5}}  color={"#AEADAE"} /> <span style={{  }}>Analytics</span></div>,
                                    itemId: "#analytics",

                                },
                                {
                                    title: <div style={{ }}><AiFillHome size={25} color={"#AEADAE"} /> <span style={{ paddingLeft: 10 }}>Stores</span></div>,
                                    itemId: "#stores",
                                },
                                {
                                    title: <div style={{ }}><AiFillHome size={25} color={"#AEADAE"} /> <span style={{ paddingLeft: 10 }}>Payments</span></div>,
                                    itemId: "#payments",

                                },
                                {
                                    title: <div style={{ }}><AiFillHome size={25} color={"#AEADAE"} /> <span style={{ paddingLeft: 10 }}>Menu</span></div>,
                                    itemId: "#menu",

                                },
                                {
                                    title: <div style={{ }}><AiFillHome size={25} color={"#AEADAE"} /> <span style={{ paddingLeft: 10 }}>Documents</span></div>,
                                    itemId: "#documents",

                                },
                                {
                                    title: <div style={{ }}><AiFillHome size={25} color={"#AEADAE"} /> <span style={{ paddingLeft: 10 }}>Settings</span></div>,
                                    itemId: "#settings",

                                },
                                {
                                    title: <div style={{ }}><AiFillHome size={25} color={"#AEADAE"} /> <span style={{ paddingLeft: 10 }}>Help</span></div>,
                                    itemId: "#help",

                                }
                            ]}
                            activeItemId={activeItemId}
                            onChange={({ item }) =>
                                setActiveItemId(item.itemId)
                            }
                        />
                        <div style={{ flex: 1, justifyContent: 'flex-end'}}>
                            <p>3</p>
                        </div>
                    </div>
                </Cell>
                <Cell span={9.5}>
                    <div style={{ marginLeft: 35, height: "100vh", backgroundColor: "#FFFFFF" }}>

                    </div>
                </Cell>
            </Grid>
        </Container>
    )
}

export default Signup;