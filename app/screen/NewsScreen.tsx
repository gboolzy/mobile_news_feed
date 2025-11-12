import React, { useState } from 'react'
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { FONT_FAMILY } from '../utils/AppConstants'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NewsArticle } from '../api/news/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Notification from '../../assets/icons/notification.svg'
import ArrowBack from '../../assets/icons/arrow-left.svg'

import { RootStackParamList } from '../../App'
import { timeAgo } from '../utils/TimeConverter'
import { BottomNavigation } from '../components/BottomNavigation'
type Nav = NativeStackNavigationProp<RootStackParamList>;

const NewsScreen = () => {
    const navigation = useNavigation<Nav>();
    const [notificationStatus, setNotificationStatus] = useState(false);
    const route = useRoute();
    const { article } = route.params as { article: NewsArticle };

    const styles = StyleSheet.create({
        containerView: {
            paddingHorizontal: 15,
            paddingVertical: 15,
           
        },
        detailsText: {
            color: '#475569',
            fontSize: 12,
            fontWeight: 500,
            fontFamily: FONT_FAMILY.medium,
            flex:1

        },
        sliderImage: {
            width: '100%',
            height: 171,
            borderRadius: 18,
            overflow: 'hidden'
        },
        topNameText: {
            fontFamily: FONT_FAMILY.bold,
            fontSize: 20,
            fontWeight: 700,
        },
        topNavContainer: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,

        },
        activeStatus: {
            height: 8,
            width: 8,
            borderRadius: 8,
            backgroundColor: '#EA4335',
            position: 'absolute',
            right: 0,
            top: 0,
        },

    })
    return (
        <View style={{ height: '100%'}}>
            <View style={styles.containerView}>
                <View style={styles.topNavContainer} >
                    <Pressable onPress={() => navigation.pop()}>
                        <View style={{ height: 28, width: 28, borderRadius: 8, backgroundColor: '#F3F6F8' }}>
                            <ArrowBack />
                        </View>
                    </Pressable>

                    <View>
                        <Pressable onPress={() => {
                            setNotificationStatus(!notificationStatus);
                        }}>
                            <Notification></Notification>
                        </Pressable>
                        {notificationStatus && <View style={styles.activeStatus}></View>}
                    </View>
                </View>
                <ImageBackground source={{ uri: article.urlToImage ?? "../../assets/images/news_img.png" }} resizeMode='cover' style={styles.sliderImage}>
                </ImageBackground>
                <Text style={[styles.topNameText]}>{article.title} </Text>
                <View style={[styles.topNavContainer]}>
                    <Text style={styles.detailsText}>{timeAgo(article.publishedAt)} </Text>
                    <Text style={[styles.detailsText,{}]} >Reporter: {article.author}</Text>
                </View>
                <Text style={[styles.detailsText, { fontSize: 14, lineHeight: 21 }]} >{article.description}</Text>
                
            </View>
            <BottomNavigation />
        </View>
    )
}

export default NewsScreen