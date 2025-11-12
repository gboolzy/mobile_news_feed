import React, { useState } from 'react'

import Home from '../../assets/icons/home.svg'
import Heart from '../../assets/icons/heart.svg'
import Explore from '../../assets/icons/explore.svg'
import Profile from '../../assets/icons/profile.svg'
import { Pressable, StyleSheet, View } from 'react-native'
import { COLORS } from '../utils/AppConstants'




export const BottomNavigation = () => {

    const [home, setHome] = useState(true);
    const [explore, setExplore] = useState(false);
    const [heart, setHeart] = useState(false);
    const [profile, setProfile] = useState(false);
    
    const selectTab = (value: string) => {
        setHome(false)
        setExplore(false)
        setHeart(false)
        setProfile(false)

        switch (value) {
            case 'home':
                setHome(true)
                break;
            case 'explore':
                setExplore(true)
                break;
            case 'heart':
                setHeart(true)
                break;
            case 'profile':
                setProfile(true)
                break;
            default:
                break;
        }

    }


    const styles = StyleSheet.create({
        bottomNav: {
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            height: 68,
            backgroundColor: COLORS.mainBackgroundColor,
            width: '90%',
            borderRadius: 24,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        navBackground: {
            backgroundColor: '#071A27',
            width: 48,
            height: 38,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40
        }
    })
    return (
        <View style={styles.bottomNav}>
            <Pressable onPress={() => selectTab('home')}>
                <View style={home ? styles.navBackground : {}}>
                    <Home />
                </View>
            </Pressable>
            <Pressable onPress={() => selectTab('explore')}>
                <View style={explore ? styles.navBackground : {}}>
                    <Explore />
                </View>
            </Pressable>
            <Pressable onPress={() => selectTab('heart')}>
                <View style={heart ? styles.navBackground : {}}>
                    <Heart />
                </View>
            </Pressable>
            <Pressable onPress={() => selectTab('profile')}>
                <View style={profile ? styles.navBackground : {}}>
                    <Profile />
                </View>
            </Pressable>
        </View>
    )
}
