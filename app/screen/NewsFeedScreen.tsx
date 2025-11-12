import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_FAMILY } from '../utils/AppConstants'
import UserTextInput from '../components/UserTextInput'
import api from "../client/Api";
import { NewsArticle } from '../api/news/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

import Notification from '../../assets/icons/notification.svg'
import { BottomNavigation } from '../components/BottomNavigation';



type Nav = NativeStackNavigationProp<RootStackParamList>;

export const NewsFeedScreen = () => {
  const navigation = useNavigation<Nav>();
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [allStatus, setAllStatus] = useState(true);
  const [trendingStatus, setTrendingStatus] = useState(false);
  const [sportStatus, setSportStatus] = useState(false);
  const [politicsStatus, setPoliticsStatus] = useState(false);
  const [internationalStatus, setinternationalStatus] = useState(false);

  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getNewsFeeds = async () => {
    const res = await api.get("/top-headlines", {
      params:
        { country: 'us', apiKey: '424dbefc65b94fc5969b05ab2197fb20' }
    }
    );
    return res.data;
  };

  useEffect(() => {
    setIsLoading(true);
    const loadNews = async () => {
      try {
        const data = await getNewsFeeds();
        setNews(data.articles);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
      }

      // store result
    };
    loadNews();
  }, []);


  const selectTab = (value: string) => {
    setAllStatus(false);
    setNotificationStatus(false);
    setPoliticsStatus(false);
    setTrendingStatus(false);
    setSportStatus(false);
    setinternationalStatus(false);
    switch (value) {
      case "all":
        setAllStatus(true);
        break;
      case "trending":
        setTrendingStatus(true);
        break;
      case "sport":
        setSportStatus(true);
        break;
      case "politics":
        setPoliticsStatus(true);
        break;
      case "international":
        setinternationalStatus(true);
        break;
      default:
        break;
    }

  }
  const styles = StyleSheet.create({
    newsFeedContainer: {
      paddingHorizontal: 15,
    },
    topNameText: {
      fontFamily: FONT_FAMILY.bold,
      fontSize: 24,
      fontWeight: 700,
    },

    topNavContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'

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
    sliderContainer: {
      marginTop: 15,

    },
    sliderImage: {
      width: '100%',
      height: 171,
      borderRadius: 18,
      overflow: 'hidden'
    },
    sliderIndicatorContainer: {
      width: Dimensions.get('screen').width,
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center'

    },
    sliderIndicator: {
      width: 8,
      height: 8,
      backgroundColor: 'rgba(60,37,176,0.15)',
      borderRadius: 10,
    },
    activeIndicator: {
      width: 10,
      height: 10,
      backgroundColor: COLORS.mainBackgroundColor,
      borderRadius: 10,
    },
    tabContainer: {
      flexDirection: 'row',
      gap: 10,
      marginBottom: 10,

    },
    tab: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#F3F6F8',
      color: '#475569',
      borderRadius: 24,
    },
    newsHeadline: {
      fontSize: 16,
      marginTop: 5,
    },
    tabActive: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: COLORS.mainBackgroundColor,
      color: COLORS.white,
      borderRadius: 24,
    },
   


  })
  return (
    <View>
      <ScrollView>
        <View style={styles.newsFeedContainer}>
          <View style={styles.topNavContainer} >
            <View style={[styles.topNavContainer, { marginTop: 0, gap: 10 }]}>
              <Image source={require('../../assets/images/user_img.png')} style={{ height: 32, width: 32, borderRadius: 32 }} />
              <Text style={styles.topNameText} >Hi, Jay</Text>
            </View>
            <View>
              <Pressable onPress={() => {
                setNotificationStatus(!notificationStatus);
              }}>
                <Notification></Notification>
              </Pressable>
              {notificationStatus && <View style={styles.activeStatus}></View>}
            </View>
          </View>
          <View style={styles.sliderContainer} >
            {/* <View style={{height: 300}}> */}
            {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal> */}
            <View>
              <ImageBackground source={require('../../assets/images/news_img.png')} resizeMode='cover' style={styles.sliderImage}>
              </ImageBackground>
              <Text style={styles.topNameText}>Fuel subsidy discussion in T-pain reign </Text>
            </View>
            {/* </ScrollView> */}
            {/* </View> */}

            <View style={styles.sliderIndicatorContainer} >
              <View style={styles.activeIndicator}></View>
              <View style={styles.sliderIndicator}></View>
              <View style={styles.sliderIndicator}></View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <UserTextInput borderRadius={40} placeholder='Trending, Sport, etc' />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal >
              <View style={styles.tabContainer}>
                <Text onPress={() => selectTab("all")} style={allStatus ? styles.tabActive : styles.tab}>All</Text>
                <Text onPress={() => selectTab("trending")} style={trendingStatus ? styles.tabActive : styles.tab}>Trending</Text>
                <Text onPress={() => selectTab("sport")} style={sportStatus ? styles.tabActive : styles.tab}>Sport</Text>
                <Text onPress={() => selectTab("politics")} style={politicsStatus ? styles.tabActive : styles.tab} >Politics</Text>
                <Text onPress={() => selectTab("international")} style={internationalStatus ? styles.tabActive : styles.tab}>International</Text>
              </View>
            </ScrollView>
            <ScrollView style={{ height: 400 }} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
              <View style={{ gap: 15, marginBottom: 100, marginTop: 20 }}>
                {isLoading ? (
                  <ActivityIndicator size="large" />
                ) : (
                  news.map((value, index) => (
                    <Pressable key={index} onPress={() => navigation.navigate("News", { article: value })}>
                      <View>
                        <ImageBackground source={{ uri: value.urlToImage ?? "../../assets/images/news_img.png" }} resizeMode='cover' style={styles.sliderImage}>
                        </ImageBackground>
                        <Text style={[styles.topNameText, styles.newsHeadline]}>{value.title} </Text>
                      </View>
                    </Pressable>
                  ))
                )}

              </View>
            </ScrollView>
          </View>

        </View>
      </ScrollView>
      <BottomNavigation/>
    </View>

  )
}
export default NewsFeedScreen;